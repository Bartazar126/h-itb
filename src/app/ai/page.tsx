import type { Metadata } from "next";
import Link from "next/link";
import AIAssistant from "@/components/AIAssistant";

export const metadata: Metadata = {
  title: "Műszaki Tanácsadó – H-ITB",
  description: "Írja le emeléstechnikai feladatát – MSZ EN szabványok alapján termékcsaládot javaslunk.",
};

const pills = ["Teherbírás-elemzés", "Beltér / Kültér / ATEX", "MSZ EN szabványok", "Termékjavaslat"];

export default function AIPage() {
  return (
    <div className="flex flex-col bg-paper" style={{ height: "calc(100svh - 60px)" }}>

      {/* ── Page header ── */}
      <div className="shrink-0 border-b border-border bg-paper-warm px-5 sm:px-10 py-5">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Link href="/"
                  className="text-[11px] font-mono text-ink-light hover:text-ink transition-colors tracking-wide">
                  ← Főoldal
                </Link>
                <span className="text-border text-[11px]">/</span>
                <span className="text-[11px] font-mono text-ink-light">Műszaki Tanácsadó</span>
              </div>
              <h1 className="font-black text-ink text-xl sm:text-2xl tracking-tight leading-tight">
                Műszaki Tanácsadó
              </h1>
              <p className="text-ink-light text-[13px] mt-1 leading-snug max-w-sm">
                Írja le a feladatát – MSZ EN szabványok alapján termékjavaslatot adunk.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="relative flex h-2 w-2 mt-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[11px] text-ink-light font-medium hidden sm:block">Elérhető</span>
              <Link href="/kapcsolat"
                className="hidden sm:inline-flex ml-3 text-[12px] font-semibold bg-ink hover:bg-ink-mid text-paper px-3.5 py-1.5 rounded-md transition-colors">
                Ajánlatkérés
              </Link>
            </div>
          </div>

          {/* Capability pills */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {pills.map(p => (
              <span key={p} className="text-[11px] font-medium text-ink-mid bg-paper border border-border px-2.5 py-1 rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Chat area – centered, full height ── */}
      <div className="flex-1 min-h-0 flex flex-col">
        <div className="flex-1 min-h-0 overflow-hidden flex flex-col max-w-3xl w-full mx-auto">
          <AIAssistant />
        </div>
      </div>
    </div>
  );
}
