"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { AssistResponse } from "@/lib/types";

interface Message {
  role: "user" | "assistant";
  text?: string;
  response?: AssistResponse;
  loading?: boolean;
  isGreeting?: boolean;
}

const GREETING: Message = {
  role: "assistant",
  isGreeting: true,
  text: "Üdvözlöm! Az H-ITB műszaki tanácsadója vagyok.\n\nEmeléstechnikai, anyagmozgatási és teherfelvevési feladatokban segíthetek – hatályos MSZ EN szabványok alapján konkrét termékcsaládot javaslok.\n\nKérjen mintapéldát, vagy írja le saját feladatát:",
};

const SAMPLES = [
  { label: "Beltéri acéllemez-emelés",  text: "Beltéri csarnokban acéllemezeket kell emelni, kb. 5-8 tonna, napi 50-80 ciklus" },
  { label: "Kültéri szerkezet, esőálló", text: "Kültéren acélszerkezetet emelünk, esőben és fagyban is üzemel, max 12 tonna" },
  { label: "Raktári raklapkezelés",       text: "Raktárban EUR raklapokat kell mozgatni, napi 6-8 óra, beltér, max 1500 kg" },
  { label: "ATEX zóna",                   text: "Robbanásveszélyes Zone 1 területen kell 3 tonnás terhet emelni, szikra tilos" },
  { label: "Acélcsövek kezelése",         text: "Gyárban acélcsöveket és tekercseket kell kezelni, 0,5-4 tonna, beltéri" },
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput]       = useState("");
  const [loading, setLoading]   = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: q }, { role: "assistant", loading: true }]);
    setLoading(true);
    try {
      const res  = await fetch("/api/assist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      });
      const data = (await res.json()) as AssistResponse;
      setMessages(prev => prev.map((m, i) =>
        i === prev.length - 1 ? { role: "assistant", response: data } : m
      ));
    } catch {
      setMessages(prev => prev.map((m, i) =>
        i === prev.length - 1 ? { role: "assistant", text: "Hiba történt. Kérem próbálja újra." } : m
      ));
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); }
  }

  return (
    <div className="flex flex-col h-full min-h-0">

      {/* ── Messages ── */}
      <div className="flex-1 overflow-y-auto py-6 space-y-4 px-4 sm:px-6">
        {messages.map((msg, i) => (
          <div key={i}>

            {/* ─ Greeting ─ */}
            {msg.isGreeting && (
              <div className="flex gap-3 items-start">
                <AvatarDot />
                <div className="flex-1 min-w-0 space-y-3 max-w-xl">
                  <Bubble>
                    {msg.text?.split("\n\n").map((para, j) => (
                      <p key={j} className={`text-sm text-ink leading-relaxed ${j > 0 ? "mt-2.5" : ""}`}>{para}</p>
                    ))}
                  </Bubble>
                  <div className="flex flex-wrap gap-2">
                    {SAMPLES.map(s => (
                      <button key={s.label} onClick={() => send(s.text)}
                        className="text-[12px] font-medium text-ink-mid border border-border hover:border-ink/30 hover:text-ink bg-paper hover:bg-paper-warm px-3 py-1.5 rounded-lg transition-all">
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ─ User ─ */}
            {msg.role === "user" && (
              <div className="flex justify-end">
                <div className="bg-ink text-paper text-[13px] px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] sm:max-w-[65%] leading-relaxed">
                  {msg.text}
                </div>
              </div>
            )}

            {/* ─ Loading ─ */}
            {msg.role === "assistant" && msg.loading && (
              <div className="flex gap-3 items-start">
                <AvatarDot pulse />
                <Bubble>
                  <div className="flex gap-1.5 items-center py-0.5">
                    {[0, 150, 300].map(d => (
                      <div key={d} className="w-1.5 h-1.5 rounded-full bg-ink-light animate-bounce" style={{ animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </Bubble>
              </div>
            )}

            {/* ─ AI Response ─ */}
            {msg.role === "assistant" && msg.response && (
              <div className="flex gap-3 items-start">
                <AvatarDot />
                <div className="flex-1 min-w-0 space-y-2.5 max-w-2xl">

                  {/* Summary */}
                  <Bubble>
                    <p className="text-[13px] text-ink leading-relaxed">
                      {msg.response.summary || "Kérem pontosítsa a feladatot."}
                    </p>
                  </Bubble>

                  {/* Reasoning */}
                  {msg.response.reasoning.length > 0 && (
                    <div className="bg-paper border border-border rounded-xl px-4 py-3.5 space-y-2">
                      <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-ink-light mb-2.5">Paraméter-elemzés</p>
                      {msg.response.reasoning.map((r, j) => (
                        <div key={j} className="flex items-start gap-2 text-[13px] text-ink-mid">
                          <span className="text-accent mt-0.5 shrink-0 text-[11px]">✓</span>
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Products */}
                  {msg.response.products.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-ink-light px-0.5">Javasolt megoldások</p>
                      <div className="space-y-2">
                        {msg.response.products.map(p => (
                          <Link key={p.name} href={p.href}
                            className="flex items-start justify-between gap-3 bg-paper border border-border hover:border-accent/40 rounded-xl px-4 py-3.5 transition-all group">
                            <div className="min-w-0">
                              <span className="text-[10px] font-mono text-ink-light tracking-wider block mb-0.5">{p.category}</span>
                              <span className="font-semibold text-[13px] text-ink group-hover:text-accent transition-colors leading-snug block">{p.name}</span>
                              <span className="text-[12px] text-ink-mid leading-snug block mt-0.5">{p.desc}</span>
                            </div>
                            <span className="text-ink-light group-hover:text-accent transition-colors shrink-0 mt-1">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Standards */}
                  {msg.response.standards.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {msg.response.standards.map(s => (
                        <span key={s} className="text-[11px] font-mono bg-paper-warm border border-border text-ink-mid px-2 py-1 rounded-lg">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Follow-up */}
                  {msg.response.followUp && (
                    <div className="flex items-start gap-2 border-l-2 border-accent/30 pl-3 py-0.5">
                      <p className="text-[12px] text-ink-mid leading-relaxed">{msg.response.followUp}</p>
                    </div>
                  )}

                  {/* CTA */}
                  {msg.response.products.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-0.5">
                      <Link href="/kapcsolat"
                        className="inline-flex items-center text-[12px] font-semibold bg-ink hover:bg-ink-mid text-paper px-4 py-2 rounded-lg transition-colors">
                        Ajánlatot kérek →
                      </Link>
                      <Link href="/termekek"
                        className="inline-flex items-center text-[12px] font-semibold border border-border hover:border-ink text-ink-mid hover:text-ink px-4 py-2 rounded-lg transition-all">
                        Termékkatalógus
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ─ Plain fallback ─ */}
            {msg.role === "assistant" && msg.text && !msg.response && !msg.isGreeting && (
              <div className="flex gap-3 items-start">
                <AvatarDot />
                <Bubble><p className="text-[13px] text-ink-mid leading-relaxed">{msg.text}</p></Bubble>
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* ── Input ── */}
      <div className="border-t border-border bg-paper px-4 sm:px-6 py-4">
        <div className="flex gap-2.5 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={loading}
            placeholder="Írja le a feladatát… (Enter = küldés)"
            rows={2}
            className="flex-1 resize-none bg-paper border border-border focus:border-ink/30 rounded-xl px-4 py-3 text-[13px] text-ink placeholder:text-ink-light outline-none transition-colors leading-relaxed disabled:opacity-50"
          />
          <button
            onClick={() => send(input)}
            disabled={loading || !input.trim()}
            className="shrink-0 w-10 h-10 rounded-xl bg-ink hover:bg-ink-mid disabled:opacity-20 transition-all flex items-center justify-center text-paper">
            {loading
              ? <div className="w-3.5 h-3.5 border-2 border-paper/25 border-t-paper rounded-full animate-spin" />
              : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            }
          </button>
        </div>
        <p className="text-[10px] text-ink-light mt-2 text-center">
          MSZ EN szabványok alapján · Nem helyettesíti a szakértői konzultációt
        </p>
      </div>
    </div>
  );
}

function AvatarDot({ pulse = false }: { pulse?: boolean }) {
  return (
    <div className={`w-7 h-7 rounded-lg bg-ink flex items-center justify-center shrink-0 mt-0.5 ${pulse ? "opacity-60" : ""}`}>
      <span className="text-paper text-[9px] font-black tracking-tight">AI</span>
    </div>
  );
}

function Bubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-paper-warm border border-border rounded-2xl rounded-tl-sm px-4 py-3.5">
      {children}
    </div>
  );
}
