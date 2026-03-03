import Link from "next/link";
import Image from "next/image";

const marqueeItems = [
  "Emelőgépek", "Daruk", "Futómacskák", "Csörlők", "Targoncák",
  "Teherfelvevők", "Szakszolgálat", "ETAR", "Anyagmozgatás",
  "Rakományrögzítők", "Leesés elleni védelem", "GUTMAN",
];

const categories = [
  {
    id: "emelo-gepek",   num: "01", title: "Emelőgépek",
    items: "Híddaruk · Futómacskák · Csörlők · Teherfelvevők",
    count: 22, href: "/termekek#emelo-gepek",  accent: "#E8560C",
  },
  {
    id: "anyagmozgatas", num: "02", title: "Anyagmozgatás",
    items: "Targoncák · Raklapszállítók · Adapterek",
    count: 12, href: "/termekek#anyagmozgatas", accent: "#059669",
  },
  {
    id: "rogzites",      num: "03", title: "Rögzítés & Védelem",
    items: "Rátchetes szíjak · Emelőláncok · Leesés elleni védelem",
    count: 11, href: "/termekek#egyeb",         accent: "#7C3AED",
  },
  {
    id: "szakszolgalat", num: "04", title: "Szakszolgálat",
    items: "Biztonsági vizsgálat · Karbantartás · ETAR nyilvántartó",
    count: 8,  href: "/termekek#szakszolgalat", accent: "#2563EB",
  },
];

const stats = [
  { n: "1990",   l: "Alapítva" },
  { n: "35+",    l: "Év tapasztalat" },
  { n: "5 000+", l: "Elégedett ügyfél" },
  { n: "4",      l: "Ország" },
];

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════
          01 · HERO
      ════════════════════════════════════════ */}
      <section className="relative bg-paper overflow-hidden" style={{ minHeight: "calc(100svh - 61px)" }}>
        {/* Faint giant watermark */}
        <div
          aria-hidden
          className="absolute right-0 top-1/2 -translate-y-1/2 font-black text-ink select-none pointer-events-none leading-none pr-[-2rem] overflow-hidden"
          style={{ fontSize: "clamp(200px, 36vw, 560px)", opacity: 0.025, letterSpacing: "-12px" }}>
          H·ITB
        </div>

        <div className="relative flex flex-col justify-between h-full max-w-[1380px] mx-auto px-6 sm:px-10 py-14 sm:py-20"
          style={{ minHeight: "inherit" }}>

          {/* Top label row */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-[11px] font-mono text-ink-light tracking-[2px] uppercase">
              H·ITB Kft. · Emeléstechnika · Est. 1990
            </span>
            <a href="https://www.gutmanlifting.eu/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[1.5px] border border-[#F5C800]/25 hover:border-[#F5C800]/55 px-3 py-1.5 rounded-full transition-colors"
              style={{ color: "#C8A000" }}>
              Official GUTMAN Distributor ↗
            </a>
          </div>

          {/* Main headline */}
          <div className="py-20 sm:py-0">
            <p className="text-[11px] font-mono text-ink-light tracking-[3px] uppercase mb-8">
              — Ipari emelőgépek & szakszolgálat
            </p>
            <h1
              className="font-black text-ink tracking-tighter leading-[0.82] mb-10"
              style={{ fontSize: "clamp(3.8rem, 13.5vw, 11.5rem)" }}>
              IPARI<br />
              <span className="text-accent">EMELÉS.</span>
            </h1>
            <p className="text-ink-mid text-[16px] sm:text-[18px] leading-relaxed max-w-xl mb-10">
              Daruk, csörlők, targoncák és teljes szakszolgálat.{" "}
              <a href="https://www.gutmanlifting.eu/" target="_blank" rel="noopener noreferrer"
                className="font-semibold hover:opacity-70 transition-opacity" style={{ color: "#C8A000" }}>
                GUTMAN
              </a>{" "}
              prémium termékeivel, 1990 óta.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/termekek"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-h text-paper font-bold px-7 py-4 rounded text-[14px] transition-colors">
                Termékkatalógus →
              </Link>
              <Link href="/megoldas"
                className="inline-flex items-center gap-2 border-2 border-ink text-ink font-bold px-7 py-4 rounded text-[14px] hover:bg-ink hover:text-paper transition-all">
                Termékválasztó
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="border-t border-border pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-16">
            {stats.map(s => (
              <div key={s.l}>
                <div className="font-black text-ink text-2xl sm:text-3xl font-mono tracking-tight leading-none">{s.n}</div>
                <div className="text-ink-light text-[10px] mt-2 font-medium tracking-[2px] uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════ */}
      <div className="border-y border-border py-3 overflow-hidden bg-paper-warm">
        <div className="animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-6 text-ink-light text-[11px] font-medium whitespace-nowrap tracking-[1.5px] uppercase">
              {item}
              <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          02 · TERMÉKKÍNÁLAT – numbered rows
      ════════════════════════════════════════ */}
      <section className="bg-paper">
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10">

          {/* Section header */}
          <div className="border-b border-border py-14 sm:py-16 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <span className="text-[11px] font-mono text-ink-light tracking-[2px] uppercase block mb-3">
                02 — Termékkínálat
              </span>
              <h2 className="font-black text-ink tracking-tight leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}>
                Teljes kínálat,<br />egy megbízható partner.
              </h2>
            </div>
            <Link href="/termekek"
              className="hidden sm:inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold text-ink-mid hover:text-ink border-b border-border hover:border-ink pb-px transition-all">
              Teljes katalógus →
            </Link>
          </div>

          {/* Category rows */}
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={cat.href}
              className="cat-row group flex items-center justify-between gap-6 py-8 sm:py-10 border-b border-border hover:pl-5 transition-all duration-200"
              style={{ ["--row-accent" as string]: cat.accent }}>

              <div className="flex items-center gap-6 sm:gap-10 min-w-0 flex-1">
                <span className="font-mono font-bold text-[12px] text-ink-light shrink-0 tabular-nums">{cat.num}</span>
                <div className="min-w-0">
                  <h3 className="font-black text-ink tracking-tight leading-tight"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.9rem)" }}>
                    {cat.title}
                  </h3>
                  <p className="text-ink-light text-[13px] mt-1.5 leading-snug">{cat.items}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className="hidden sm:block text-[12px] font-mono text-ink-light tabular-nums">{cat.count} termék</span>
                <span
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink-light group-hover:border-current group-hover:text-paper group-hover:translate-x-1 transition-all text-base"
                  style={{ ["--tw-border-opacity" as string]: "1" }}>
                  <span
                    className="w-full h-full rounded-full flex items-center justify-center group-hover:scale-100 transition-all"
                    style={{ backgroundColor: "transparent" }}>
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}

          {/* Mobile catalog link */}
          <div className="py-5 sm:hidden">
            <Link href="/termekek"
              className="block text-center text-[13px] font-semibold border border-border rounded-lg py-3.5 text-ink-mid hover:border-ink hover:text-ink transition-colors">
              Teljes katalógus →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          03 · TERMÉKVÁLASZTÓ – dark dramatic
      ════════════════════════════════════════ */}
      <section className="bg-ink py-20 sm:py-28 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left – text */}
            <div>
              <span className="text-[11px] font-mono tracking-[2px] uppercase text-accent mb-6 block">
                03 — Termékválasztó
              </span>
              <h2 className="font-black text-paper tracking-tight leading-[0.88] mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                Nem tudja<br />melyik termék<br />
                <span className="text-accent">kell?</span>
              </h2>
              <p className="text-paper/45 text-[15px] leading-relaxed mb-10 max-w-md">
                Adja meg a feladatot, a teherbírást és a környezeti feltételeket.
                3 lépésben megmutatjuk a megfelelő terméket.
              </p>
              <Link href="/megoldas"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent-h text-paper font-bold px-8 py-4 rounded text-[15px] transition-colors">
                Indítom a választót →
              </Link>
            </div>

            {/* Right – step visual */}
            <div className="space-y-3">
              {[
                { n: "01", label: "Mi a feladat?",          opts: ["Emelés", "Anyagmozgatás", "Rögzítés", "Szakszolgálat"] },
                { n: "02", label: "Teherbírás & meghajtás", opts: ["< 0,5 t", "0,5–5 t", "5–20 t", "20 t+"] },
                { n: "03", label: "Munkakörnyezet",          opts: ["Beltér", "Kültér", "ATEX"] },
              ].map(step => (
                <div key={step.n}
                  className="flex items-start gap-5 bg-white/4 border border-white/8 rounded-xl px-5 py-4">
                  <span className="font-mono font-bold text-[11px] text-white/25 shrink-0 mt-0.5 tabular-nums">{step.n}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/50 text-[12px] font-medium mb-2.5">{step.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.opts.map(o => (
                        <span key={o} className="text-[11px] font-medium text-white/40 border border-white/10 px-2.5 py-1 rounded-md">{o}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-5 bg-accent/12 border border-accent/25 rounded-xl px-5 py-4">
                <span className="font-mono font-bold text-[11px] text-accent shrink-0">✓</span>
                <p className="text-white/60 text-[13px] font-semibold">Ajánlott termékek — azonnal</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          04 · SZAKSZOLGÁLAT – split
      ════════════════════════════════════════ */}
      <section className="border-t border-border">
        <div className="max-w-[1380px] mx-auto">
          <div className="grid lg:grid-cols-2">

            {/* Image */}
            <div className="relative min-h-[50vw] lg:min-h-[480px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=75"
                alt="H-ITB Szakszolgálat"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-ink/15" />
              {/* Section label over image */}
              <div className="absolute top-6 left-6">
                <span className="text-[10px] font-mono text-paper/60 tracking-[2px] uppercase bg-ink/40 px-2.5 py-1.5 rounded">
                  04 — Szakszolgálat
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="bg-paper px-8 sm:px-14 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
              <h2 className="font-black text-ink tracking-tight leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)" }}>
                Biztonság,<br />nem kompromisszum.
              </h2>
              <p className="text-ink-mid text-[15px] leading-relaxed mb-4 max-w-sm">
                Az Emelőgép Biztonsági Szabályzat szerinti időszaki vizsgálatok és karbantartások helyszíni elvégzése.
              </p>
              <p className="text-ink-mid text-[15px] leading-relaxed mb-10 max-w-sm">
                Az <strong className="text-ink">ETAR</strong> digitális nyilvántartóval minden berendezése lejárata egy helyen követhető — ingyen.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/termekek#szakszolgalat"
                  className="inline-flex items-center gap-2 bg-ink hover:bg-ink-mid text-paper font-semibold px-5 py-3 rounded text-[13px] transition-colors">
                  Szakszolgálat →
                </Link>
                <Link href="/termekek#etar"
                  className="inline-flex items-center gap-2 border border-border hover:border-ink text-ink-mid hover:text-ink font-semibold px-5 py-3 rounded text-[13px] transition-all">
                  ETAR – ingyenes
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          05 · SZÁMOK
      ════════════════════════════════════════ */}
      <section className="bg-paper-warm border-t border-border py-16 sm:py-20">
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {[
              { stat: "35+",      label: "Év tapasztalat",  desc: "1990 óta az iparág megbízható partnere" },
              { stat: "5 000+",   label: "Aktív ügyfél",    desc: "Kis- és nagyvállalatok egyaránt" },
              { stat: "4",        label: "Ország",          desc: "RO · SK · RS · HR regionális hálózat" },
              { stat: "ISO 9001", label: "Minőség",         desc: "Tanúsított minőségirányítási rendszer" },
            ].map(d => (
              <div key={d.stat} className="px-0 sm:px-8 lg:px-10 py-10 sm:py-0 first:pl-0 last:pr-0">
                <div className="font-black text-ink text-4xl sm:text-5xl font-mono tracking-tight leading-none mb-3">{d.stat}</div>
                <div className="text-accent text-[11px] font-bold tracking-[1.5px] uppercase mb-2">{d.label}</div>
                <div className="text-ink-light text-[13px] leading-relaxed">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          06 · AI TANÁCSADÓ – preview
      ════════════════════════════════════════ */}
      <section className="bg-paper border-t border-border py-20 sm:py-28">
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10">
          <div className="border border-border rounded-2xl overflow-hidden grid lg:grid-cols-5">

            {/* Text */}
            <div className="lg:col-span-3 p-8 sm:p-12 flex flex-col justify-center">
              <span className="text-[11px] font-mono text-ink-light tracking-[2px] uppercase mb-5 block">
                06 — AI Műszaki Tanácsadó
              </span>
              <h2 className="font-black text-ink tracking-tight leading-tight mb-5"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}>
                Írja le a feladatát.<br />
                <span className="text-ink-mid">Megtaláljuk a megoldást.</span>
              </h2>
              <p className="text-ink-mid text-[14px] leading-relaxed mb-8 max-w-md">
                Szöveges leírás alapján az érvényes{" "}
                <strong className="text-ink">MSZ EN szabványok</strong>{" "}
                szerint javasoljuk a megfelelő termékcsaládot.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai"
                  className="inline-flex items-center gap-2 bg-ink hover:bg-ink-mid text-paper font-semibold px-5 py-3 rounded text-[13px] transition-colors">
                  Megoldást keresek →
                </Link>
                <Link href="/megoldas"
                  className="inline-flex items-center gap-2 border border-border hover:border-ink text-ink-mid hover:text-ink font-semibold px-5 py-3 rounded text-[13px] transition-all">
                  Termékválasztó
                </Link>
              </div>
            </div>

            {/* Chat preview */}
            <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-border bg-paper-warm p-6 sm:p-8 flex flex-col justify-center gap-4">
              <div className="flex justify-end">
                <div className="bg-ink text-paper text-[12px] px-4 py-3 rounded-xl rounded-tr-sm max-w-[90%] leading-relaxed shadow-sm">
                  Kültéren acélszerkezetet kell emelni, max 8 t, esőben is üzemel.
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <div className="w-6 h-6 rounded-md bg-ink flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-paper text-[8px] font-black">AI</span>
                </div>
                <div className="bg-paper border border-border rounded-xl rounded-tl-sm px-4 py-3 text-[12px] text-ink-mid leading-relaxed">
                  <span className="font-semibold text-ink block mb-1">Kültéri emelés, 8 t:</span>
                  Kéttartós híddaru <strong className="text-ink">IP65</strong> védelemmel.
                  <span className="inline-block mt-1 font-mono text-[10px] bg-paper-warm border border-border px-1.5 py-0.5 rounded text-accent">MSZ EN 14492-2</span>
                </div>
              </div>
              <div className="mt-2 flex gap-2 items-center bg-paper border border-border rounded-lg px-3 py-2.5">
                <span className="flex-1 text-[12px] text-ink-light select-none">Írja le a feladatát…</span>
                <Link href="/ai"
                  className="w-7 h-7 rounded-md bg-ink flex items-center justify-center text-paper text-[12px] hover:bg-ink-mid transition-colors shrink-0">
                  →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          07 · CONTACT CTA
      ════════════════════════════════════════ */}
      <section className="bg-ink py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[2px] uppercase text-accent mb-6 block">
                07 — Kapcsolat
              </span>
              <h2 className="font-black text-paper tracking-tight leading-[0.88]"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}>
                KÉSZ<br />SEGÍTENI.
              </h2>
              <p className="text-paper/35 text-[15px] leading-relaxed mt-6 max-w-lg">
                9 területi képviselőnk az egész országban elérhető.
                Ajánlatkérés, szakszolgálat igénybejelentés, ETAR regisztráció.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end shrink-0">
              <Link href="/kapcsolat"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-h text-paper font-bold px-8 py-4 rounded text-[14px] transition-colors w-full sm:w-auto">
                Területi képviselő →
              </Link>
              <Link href="/kapcsolat"
                className="inline-flex items-center justify-center gap-2 border border-paper/12 hover:border-paper/25 text-paper/55 hover:text-paper font-semibold px-8 py-4 rounded text-[14px] transition-all w-full sm:w-auto">
                Ajánlatot kérek
              </Link>
              <a href="tel:+3612056208"
                className="text-paper/25 hover:text-paper/50 font-mono text-[13px] py-1 transition-colors text-center">
                +36 1 205 6208
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
