"use client";

import { useState } from "react";
import Link from "next/link";

interface Product { name: string; desc: string; capacity?: string; standard?: string; catalog?: boolean; }
interface Sub     { id: string; name: string; products: Product[]; }
interface Cat     { id: string; code: string; title: string; desc: string; color: string; subs: Sub[]; }

const CATS: Cat[] = [
  {
    id: "emelo-gepek", code: "A", title: "Emelőgépek", color: "#F97316",
    desc: "Gépi vagy emberi erővel meghajtott emelő- és teherfelvevő eszközök. Egytartóstól a nehézipari kéttartósig.",
    subs: [
      { id: "daruk", name: "Daruk és futómacskák", products: [
        { name: "Egytartós híddaru",            capacity: "0,5–20 t",   desc: "Könnyű és közepes ipari alkalmazáshoz",       catalog: true },
        { name: "Kéttartós híddaru",            capacity: "5–100 t",    desc: "Nehézipari csarnokba, kettős tartószerkezet",  catalog: true },
        { name: "Konzoldaru",                   capacity: "0,1–5 t",    desc: "Munkaállomáshoz rögzített, forgókaros" },
        { name: "Oszlopdaru",                   capacity: "0,25–10 t",  desc: "Padlóba rögzített, 360° forgási szög" },
        { name: "El. futómacska – láncos",      capacity: "0,5–20 t",   desc: "Csörlővel kombinálható, kompakt kialakítás",  catalog: true },
        { name: "El. futómacska – drótköteles", capacity: "1–80 t",     desc: "Nehézipari alkalmazáshoz, nagy ciklus",       catalog: true },
      ]},
      { id: "emelo-berendezesek", name: "Emelőberendezések", products: [
        { name: "Elektromos láncos csörlő",    capacity: "0,25–20 t", desc: "Falra vagy mennyezetre szerelhető",             catalog: true },
        { name: "Kézi láncos csörlő (GUTMAN)", capacity: "0,5–30 t",  desc: "Hálózatfüggetlen, hordozható megoldás",        catalog: true },
        { name: "Pneumatikus csörlő",          capacity: "0,25–10 t", desc: "Ex-zónás ATEX kivitel, szikramentes" },
        { name: "Villamos emelő – láncos",     capacity: "0,125–5 t", desc: "Kompakt, beépítésbarát kialakítás" },
      ]},
      { id: "emelo-szerkezetek", name: "Emelőszerkezetek", products: [
        { name: "Hidraulikus emelő (palack)", capacity: "2–150 t",  desc: "Hordozható, terepre is alkalmas" },
        { name: "Csavaros emelő (GUTMAN)",   capacity: "1–25 t",   desc: "Precíziós pozícionáláshoz",                       catalog: true },
        { name: "Ollós emelő",               capacity: "2–50 t",   desc: "Alacsony beépítési magasság, stabilis" },
      ]},
      { id: "teherfelvevok", name: "Teherfelvevő eszközök", products: [
        { name: "Acélöntvény horog (GUTMAN)", capacity: "1–100 t",  desc: "Biztosítókapoccsal, DIN szabvány",  standard: "DIN",      catalog: true },
        { name: "Szemcsavar & szemanya",      capacity: "0,5–50 t", desc: "Forgó kialakítás, MSZ EN 1677",    standard: "EN 1677" },
        { name: "Szorítókapocs (lapáru)",     capacity: "0,5–30 t", desc: "Függőleges és vízszintes terhelés",                      catalog: true },
        { name: "Mágnesemelő",               capacity: "0,1–3 t",  desc: "Ferromágneses lapáru és rúdanyag" },
        { name: "Vákuumos emelő",            capacity: "0,1–2 t",  desc: "Sík és enyhén ívelt felületre" },
      ]},
    ],
  },
  {
    id: "szakszolgalat", code: "B", title: "Szakszolgálat", color: "#3B82F6",
    desc: "Vizsgálat, karbantartás és ETAR digitális nyilvántartó – az Emelőgép Biztonsági Szabályzat előírásai szerint.",
    subs: [
      { id: "vizsgalat", name: "Vizsgálat és felülvizsgálat", products: [
        { name: "Időszaki biztonsági felülvizsgálat", desc: "Kötelező, 6 vagy 12 havonta",           standard: "EBSz" },
        { name: "Üzembe helyezési vizsgálat",         desc: "Új vagy áthelyezett berendezésnél" },
        { name: "Rendkívüli vizsgálat",               desc: "Baleset, meghibásodás vagy javítás után" },
      ]},
      { id: "karbantartas", name: "Karbantartás", products: [
        { name: "Megelőző karbantartás",      desc: "Tervezett, rendszeres időközönként" },
        { name: "Javítás és alkatrész-csere", desc: "Eredeti gyári alkatrészekkel, helyszínen" },
      ]},
      { id: "etar", name: "ETAR – Digitális nyilvántartó", products: [
        { name: "ETAR (Magyar)",   desc: "Ingyenes, web-alapú nyilvántartó. Lejáratfigyelő, dokumentumtároló.", standard: "Ingyenes" },
        { name: "ETAR EN (Angol)", desc: "Exportorientált, angol nyelvű változat",                               standard: "Ingyenes" },
      ]},
    ],
  },
  {
    id: "anyagmozgatas", code: "C", title: "Anyagmozgatás", color: "#10B981",
    desc: "Targoncák, raklapszállítók és adapterek gyártási és logisztikai környezetbe.",
    subs: [
      { id: "targoncak", name: "Targoncák", products: [
        { name: "Elektromos targonca",       capacity: "1–5 t",     desc: "Beltéri, Li-Ion akkumulátoros",   catalog: true },
        { name: "Kézi raklapszállító",       capacity: "2,5 t",     desc: "Hidraulikus, egyszerű kezelés" },
        { name: "Elektromos raklapszállító", capacity: "1,5–2,5 t", desc: "Akkumulátoros, önfutó kivitel",  catalog: true },
        { name: "Állványos emelőkocsi",      capacity: "1–3 t",     desc: "Szűk helyen is manőverezhető" },
      ]},
      { id: "adapterek", name: "Targonca-adapterek", products: [
        { name: "Villaforgató adapter",  capacity: "2–5 t",   desc: "Hengeres és tekercses áruhoz" },
        { name: "Oldal-eltolós adapter", desc: "Raktári precíziós pozícionáláshoz" },
        { name: "Hengerszorító adapter", capacity: "1–10 t",  desc: "Tekercsek és hengerek kezeléséhez" },
        { name: "Kasza/söprű adapter",   desc: "Ipari kefés söprűgép funkcióhoz" },
      ]},
    ],
  },
  {
    id: "egyeb", code: "D", title: "Rögzítés & Védelem", color: "#8B5CF6",
    desc: "Rakományrögzítők, emelőláncok és egyéni leesés elleni védelmi eszközök.",
    subs: [
      { id: "rakomanyrogzitok", name: "Rakományrögzítők", products: [
        { name: "Rátchetes szíj (GUTMAN)", capacity: "0,75–10 t", desc: "Teherfuvar-rögzítés szállítás közben", standard: "EN 12195-2", catalog: true },
        { name: "Láncos rögzítő szett",   capacity: "1–10 t",    desc: "Acélszállítmányhoz és nehézteherhez",  standard: "EN 12195-3" },
        { name: "Raklaphálók & ponyva",   desc: "Raklapra helyezett áru biztosításához" },
      ]},
      { id: "kiegeszitok", name: "Kiegészítők", products: [
        { name: "Emelőlánc (GUTMAN)",  desc: "Osztály 8 és 10, hegesztett láncszem", standard: "EN 818", catalog: true },
        { name: "Szíjtalpas kötőelem", desc: "Sarokvédővel kombinálható kötőpont" },
      ]},
      { id: "leeses-vedelem", name: "Leesés elleni védelem", products: [
        { name: "Biztonsági heveder",           desc: "Teljes testpánt, mellkastartó",   standard: "EN 361" },
        { name: "Önvisszatekerős zuhanásgátló", capacity: "2–30 m",  desc: "Automatikus kábel-visszahúzás" },
        { name: "Horgonyzati rendszer",         desc: "Épületbe integrált rögzítési pont" },
      ]},
    ],
  },
];

function ProductCard({ p, color }: { p: Product; color: string }) {
  return (
    <div className="group bg-paper border border-border hover:border-ink/20 hover:shadow-lg rounded-xl p-4 transition-all flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <span className="font-semibold text-ink text-[13px] leading-snug flex-1">{p.name}</span>
        {p.catalog && (
          <span className="shrink-0 text-[9px] font-black text-white px-1.5 py-0.5 rounded leading-none mt-0.5"
            style={{ backgroundColor: color }}>PDF</span>
        )}
      </div>
      <p className="text-ink-light text-[12px] leading-relaxed flex-1">{p.desc}</p>
      {(p.capacity || p.standard) && (
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border">
          {p.capacity && (
            <span className="text-[10px] font-mono font-bold bg-paper-warm border border-border text-ink-mid px-2 py-0.5 rounded">
              {p.capacity}
            </span>
          )}
          {p.standard && (
            <span className="text-[10px] font-mono bg-paper-warm border border-border text-ink-light px-2 py-0.5 rounded">
              {p.standard}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default function TermekekClient() {
  const [active, setActive] = useState<string>("all");
  const visibleCats = active === "all" ? CATS : CATS.filter(c => c.id === active);

  return (
    <>
      {/* ── Header ── */}
      <div className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-12 sm:py-14">
          <nav className="flex items-center gap-1.5 text-paper/30 text-xs mb-6">
            <Link href="/" className="hover:text-paper/60 transition-colors">Főoldal</Link>
            <span>/</span>
            <span>Termékkatalógus</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <div>
              <h1 className="font-black text-3xl sm:text-5xl tracking-tight mb-2">Termékkatalógus</h1>
              <p className="text-paper/40 text-[14px]">Négy kategória, teljes kínálat. PDF katalógus egyes termékekhez.</p>
            </div>
            <Link href="/kapcsolat"
              className="shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-accent-h text-paper font-bold px-5 py-2.5 rounded text-sm transition-colors">
              Ajánlatot kérek →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Filter bar – sticky ── */}
      <div className="sticky top-[60px] z-40 bg-paper border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="flex items-center gap-0 overflow-x-auto no-scrollbar py-1">

            {/* All */}
            <button
              onClick={() => setActive("all")}
              className={`shrink-0 flex items-center gap-2 px-4 py-3 text-[13px] font-medium transition-colors border-b-2 whitespace-nowrap ${
                active === "all"
                  ? "text-ink border-ink"
                  : "text-ink-light border-transparent hover:text-ink"
              }`}>
              Összes
              <span className="text-[10px] font-mono bg-paper-warm border border-border px-1.5 py-0.5 rounded text-ink-light">
                {CATS.reduce((n, c) => n + c.subs.reduce((m, s) => m + s.products.length, 0), 0)}
              </span>
            </button>

            <span className="w-px h-5 bg-border shrink-0 mx-1" />

            {/* Per category */}
            {CATS.map(c => {
              const count = c.subs.reduce((n, s) => n + s.products.length, 0);
              const isActive = active === c.id;
              return (
                <button key={c.id}
                  onClick={() => setActive(isActive ? "all" : c.id)}
                  className={`shrink-0 flex items-center gap-2 px-4 py-3 text-[13px] font-medium transition-all border-b-2 whitespace-nowrap ${
                    isActive ? "border-b-2" : "border-transparent hover:text-ink text-ink-light"
                  }`}
                  style={isActive ? { color: c.color, borderBottomColor: c.color } : {}}>
                  <span className={`w-5 h-5 rounded flex items-center justify-center text-[9px] font-black text-white shrink-0 transition-all ${
                    isActive ? "scale-110" : "opacity-60"
                  }`}
                    style={{ backgroundColor: c.color }}>
                    {c.code}
                  </span>
                  {c.title}
                  <span className="text-[10px] font-mono text-ink-light">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Categories ── */}
      <div>
        {visibleCats.map(cat => (
          <section key={cat.id} id={cat.id} className="scroll-mt-28 border-b border-border">

            {/* Creative category header */}
            <div className="relative overflow-hidden bg-paper border-b border-border"
              style={{ backgroundColor: `color-mix(in srgb, ${cat.color} 6%, white)` }}>
              {/* Large background code letter */}
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 font-black select-none pointer-events-none leading-none"
                style={{
                  fontSize: "clamp(8rem, 20vw, 18rem)",
                  color: cat.color,
                  opacity: 0.08,
                  right: "-1rem",
                }}>
                {cat.code}
              </div>

              {/* Coloured left border */}
              <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: cat.color }} />

              <div className="relative max-w-7xl mx-auto px-8 sm:px-14 py-10 sm:py-12">
                <div className="flex items-start gap-5">
                  {/* Code badge */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl text-white shrink-0 shadow-md"
                    style={{ backgroundColor: cat.color }}>
                    {cat.code}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-[3px] mb-1.5"
                      style={{ color: cat.color }}>
                      {cat.code} Kategória
                    </p>
                    <h2 className="font-black text-ink text-2xl sm:text-4xl tracking-tight leading-tight mb-3">
                      {cat.title}
                    </h2>
                    <p className="text-ink-mid text-[13px] leading-relaxed max-w-lg">{cat.desc}</p>
                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-[11px] font-mono text-ink-light">
                        {cat.subs.length} alkategória · {cat.subs.reduce((n, s) => n + s.products.length, 0)} termék
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subcategories + product cards */}
            <div className="max-w-7xl mx-auto px-5 sm:px-10 py-10 space-y-10 bg-paper-warm/30">
              {cat.subs.map(sub => (
                <div key={sub.id} id={sub.id}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-4 w-0.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                    <h3 className="font-bold text-ink text-[14px]">{sub.name}</h3>
                    <span className="text-[10px] font-mono text-ink-light bg-paper border border-border px-2 py-0.5 rounded-full">
                      {sub.products.length}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {sub.products.map(p => (
                      <ProductCard key={p.name} p={p} color={cat.color} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="border-t border-border bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-black text-ink text-xl mb-1">Nem találja, amit keres?</h3>
            <p className="text-ink-mid text-[14px]">Írja le a feladatát – segítünk kiválasztani a megfelelő terméket.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <Link href="/ai"
              className="inline-flex items-center gap-2 bg-ink hover:bg-ink-mid text-paper font-semibold px-5 py-2.5 rounded text-sm transition-colors">
              Megoldást keresek →
            </Link>
            <Link href="/kapcsolat"
              className="inline-flex items-center gap-2 border border-border hover:border-ink text-ink-mid hover:text-ink font-semibold px-5 py-2.5 rounded text-sm transition-all">
              Kapcsolat
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
