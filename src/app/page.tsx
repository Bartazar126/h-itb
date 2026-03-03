import Link from "next/link";
import Image from "next/image";

const marqueeItems = [
  "Híddaruk", "Futómacskák", "Csörlők", "Targoncák", "Teherfelvevők",
  "Raklapszállítók", "Szakszolgálat", "ETAR", "Emelőláncok",
  "Rakományrögzítők", "Biztonsági vizsgálat", "GUTMAN",
];

const cats = [
  {
    id: "emelo-gepek",   code: "A", title: "Emelőgépek",
    capacity: "0,5 – 100 t",
    desc: "Híddaruk, futómacskák, csörlők, teherfelvevők",
    details: "Elektromos, kézi és pneumatikus meghajtással. Beltéri és IP65 kültéri kivitelben.",
    items: ["Egytartós és kéttartós híddaruk", "Elektromos futómacskák", "Kézi láncos csörlők (GUTMAN)", "Teherfelvevők, horgok, kapcsok"],
    count: 22, href: "/termekek#emelo-gepek",
  },
  {
    id: "anyagmozgatas", code: "B", title: "Anyagmozgatás",
    capacity: "1 – 5 t",
    desc: "Targoncák, raklapszállítók, speciális adapterek",
    details: "Logisztikai és gyártói környezetbe tervezett elektromos és kézi eszközök.",
    items: ["Elektromos targoncák", "Kézi raklapszállítók", "Állványos emelőkocsik", "Speciális adapterek"],
    count: 12, href: "/termekek#anyagmozgatas",
  },
  {
    id: "rogzites",      code: "C", title: "Rögzítés & Védelem",
    capacity: "0,75 – 30 t",
    desc: "Szíjak, emelőláncok, személyi védőeszközök",
    details: "Teherfuvar-rögzítők és leesés elleni védelem MSZ EN szabványok szerint.",
    items: ["Rátchetes szíjak (GUTMAN)", "Emelőláncok 8. / 10. oszt.", "Biztonsági hevederek", "Zuhanásgátlók"],
    count: 11, href: "/termekek#egyeb",
  },
  {
    id: "szakszolgalat", code: "D", title: "Szakszolgálat",
    capacity: "EBSz / ISO",
    desc: "Biztonsági vizsgálat, karbantartás, ETAR",
    details: "Kötelező időszaki felülvizsgálatok és ingyenes digitális nyilvántartó.",
    items: ["Időszaki biztonsági felülvizsgálat", "Üzembe helyezési vizsgálat", "Megelőző karbantartás", "ETAR digitális nyilvántartó"],
    count: 8, href: "/termekek#szakszolgalat",
  },
];

const certs = ["ISO 9001:2015", "MSZ EN 14492-1/2", "EBSz 2014/33/EU", "EN 15011:2011"];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — Technical specification layout
      ══════════════════════════════════════════ */}
      <section className="bg-ink overflow-hidden" style={{ minHeight: "calc(100svh - 62px)" }}>

        {/* Document top bar */}
        <div className="border-b border-white/6 px-6 sm:px-12 h-11 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="text-[10px] font-mono text-white/20 tracking-[2.5px] uppercase hidden sm:block">
              H-ITB Ipari és Kereskedelmi Kft.
            </span>
            <a href="https://www.gutmanlifting.eu/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-bold tracking-[1.5px] uppercase transition-opacity hover:opacity-70"
              style={{ color: "#F2C200" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              Official GUTMAN Distributor
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+3612056208"
              className="text-[11px] font-mono text-white/20 hover:text-white/50 transition-colors hidden sm:block">
              +36 1 205 6208
            </a>
            <span className="text-[10px] font-mono text-white/12 hidden md:block">Budapest · 1119</span>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row" style={{ minHeight: "calc(100svh - 62px - 44px)" }}>

          {/* Left — headline + credentials */}
          <div className="lg:w-[400px] xl:w-[460px] shrink-0 border-b lg:border-b-0 lg:border-r border-white/6 flex flex-col justify-between px-6 sm:px-12 py-12 sm:py-16">
            <div>
              <h1 className="font-bold text-white tracking-tight leading-[0.83] mb-8"
                style={{ fontSize: "clamp(3.25rem, 6vw, 5.5rem)" }}>
                Ipari<br />
                <span style={{ color: "#F2C200" }}>emelő-</span><br />
                gépek.
              </h1>
              <p className="text-white/30 text-[14px] leading-relaxed max-w-[280px]">
                Prémium ipari emelőgépek és anyagmozgató eszközök forgalmazása és szakszolgálata.
              </p>
            </div>

            {/* Certifications */}
            <div className="py-8 border-t border-b border-white/6">
              <div className="text-[9px] font-mono text-white/15 tracking-[2.5px] uppercase mb-4">
                Tanúsítványok & szabványok
              </div>
              <div className="space-y-2.5">
                {certs.map(c => (
                  <div key={c} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#F2C200", opacity: 0.5 }} />
                    <span className="text-[12px] font-mono text-white/30">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2.5">
              <Link href="/termekek"
                className="flex items-center justify-center gap-2 font-semibold px-5 py-3.5 rounded-md text-[13px] text-ink transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#F2C200" }}>
                Termékkatalógus →
              </Link>
              <Link href="/megoldas"
                className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/22 text-white/45 hover:text-white font-semibold px-5 py-3.5 rounded-md text-[13px] transition-all">
                Termékválasztó
              </Link>
            </div>
          </div>

          {/* Right — product table */}
          <div className="flex-1 min-w-0 flex flex-col justify-center px-6 sm:px-12 py-12 sm:py-16">

            {/* Table header */}
            <div className="hidden sm:grid items-center pb-3 mb-0 border-b border-white/6"
              style={{ gridTemplateColumns: "2.5rem 1fr 9rem 5.5rem 1.5rem", gap: "1.5rem" }}>
              {["KAT.", "TERMÉKCSOPORT", "TEHERBÍRÁS", "DB", ""].map((h, i) => (
                <span key={i}
                  className={`text-[9px] font-mono text-white/15 tracking-[2px] uppercase ${i >= 2 ? "text-right" : ""}`}>
                  {h}
                </span>
              ))}
            </div>

            {/* Category rows */}
            <div className="divide-y divide-white/6">
              {cats.map(cat => (
                <Link key={cat.id} href={cat.href}
                  className="group flex sm:grid items-center gap-4 sm:gap-6 py-6 sm:py-7 hover:bg-white/2 transition-colors -mx-6 sm:-mx-12 px-6 sm:px-12"
                  style={{ gridTemplateColumns: "2.5rem 1fr 9rem 5.5rem 1.5rem" }}>

                  {/* Code badge */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md flex items-center justify-center font-bold text-ink text-[14px] shrink-0"
                    style={{ backgroundColor: "#F2C200" }}>
                    {cat.code}
                  </div>

                  {/* Name + desc */}
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-white leading-tight"
                      style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}>
                      {cat.title}
                    </div>
                    <div className="text-white/20 text-[11px] mt-1 truncate hidden sm:block">{cat.desc}</div>
                  </div>

                  {/* Capacity */}
                  <div className="hidden sm:block text-right">
                    <span className="font-mono text-white/35 text-[12px]">{cat.capacity}</span>
                  </div>

                  {/* Count */}
                  <div className="hidden sm:block text-right">
                    <span className="font-mono text-white/18 text-[12px]">{cat.count} db</span>
                  </div>

                  {/* Arrow */}
                  <span className="text-white/18 group-hover:text-accent group-hover:translate-x-1 transition-all inline-block shrink-0">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6 sm:gap-10 mt-10 pt-8 border-t border-white/6">
              {[
                { n: "1990",   l: "Alapítva" },
                { n: "35+",    l: "Év tapasztalat" },
                { n: "5 000+", l: "Elégedett ügyfél" },
                { n: "4",      l: "Ország" },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-bold font-mono leading-none" style={{ fontSize: "1.4rem", color: "#F2C200" }}>{s.n}</div>
                  <div className="text-white/18 text-[10px] mt-1.5 font-medium tracking-[1.5px] uppercase">{s.l}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════ */}
      <div className="border-b border-white/6 py-3 overflow-hidden" style={{ backgroundColor: "#161614" }}>
        <div className="animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}
              className="inline-flex items-center gap-5 px-6 text-white/15 text-[11px] font-medium whitespace-nowrap tracking-[2.5px] uppercase">
              {item}
              <span className="w-1 h-1 rounded-full shrink-0 opacity-40" style={{ backgroundColor: "#F2C200" }} />
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          TERMÉKKATALÓGUS — light, technical
      ══════════════════════════════════════════ */}
      <section className="bg-paper text-ink py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">

          <div className="flex items-end justify-between gap-4 flex-wrap mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5" style={{ backgroundColor: "#F2C200" }} />
                <span className="text-[10px] font-mono text-ink-light tracking-[2.5px] uppercase">Termékkínálat</span>
              </div>
              <h2 className="font-bold text-ink tracking-tight leading-[0.9]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
                Minden, amit egy üzem igényelhet.
              </h2>
            </div>
            <Link href="/termekek"
              className="shrink-0 hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-ink-mid hover:text-ink border-b border-border hover:border-ink pb-px transition-all">
              Teljes katalógus →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {cats.map(cat => (
              <Link key={cat.id} href={cat.href}
                className="group bg-paper hover:bg-paper-warm p-7 sm:p-9 flex flex-col gap-5 transition-colors relative overflow-hidden">

                {/* Yellow left bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"
                  style={{ backgroundColor: "#F2C200" }} />

                <div className="flex items-start justify-between gap-4">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center font-bold text-ink text-[15px] shrink-0"
                    style={{ backgroundColor: "#F2C200" }}>
                    {cat.code}
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-ink-light text-[11px]">{cat.capacity}</div>
                    <div className="font-mono text-ink-light text-[10px] mt-0.5">{cat.count} termék</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-ink text-xl sm:text-2xl tracking-tight mb-2">{cat.title}</h3>
                  <p className="text-ink-mid text-[13px] leading-relaxed">{cat.details}</p>
                </div>

                <ul className="space-y-2 flex-1">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-[12px] text-ink-light">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#F2C200", opacity: 0.7 }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-[13px] font-semibold text-ink-light group-hover:text-ink group-hover:gap-3 transition-all pt-2 border-t border-border">
                  Részletek <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 sm:hidden">
            <Link href="/termekek"
              className="block text-center text-[13px] font-semibold border border-border rounded-xl py-4 text-ink-mid hover:border-ink hover:text-ink transition-colors">
              Teljes katalógus →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TERMÉKVÁLASZTÓ — dark, fixed
      ══════════════════════════════════════════ */}
      <section className="bg-ink py-20 sm:py-28 border-t border-white/6">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-0.5" style={{ backgroundColor: "#F2C200" }} />
              <span className="text-[10px] font-mono text-white/25 tracking-[2.5px] uppercase">Termékválasztó</span>
            </div>
            <h2 className="font-bold text-white tracking-tight leading-[0.88] mb-6"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 4.25rem)" }}>
              Nem tudja, melyik<br />termék illik a<br />
              <span style={{ color: "#F2C200" }}>feladathoz?</span>
            </h2>
            <p className="text-white/35 text-[15px] leading-relaxed mb-10 max-w-md">
              3 egyszerű kérdés: feladat típusa, teherbírás, munkakörnyezet. Az eredmény azonnali termékjavaslat az érvényes szabványok alapján.
            </p>
            <Link href="/megoldas"
              className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-md text-[15px] text-ink transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#F2C200" }}>
              Indítom a választót →
            </Link>
          </div>

          <div className="space-y-2">
            {[
              { n: "01", label: "Mi a feladat?",          opts: ["Emelés", "Anyagmozgatás", "Rögzítés", "Szakszolgálat"] },
              { n: "02", label: "Teherbírás & meghajtás", opts: ["< 0,5 t", "0,5–5 t", "5–20 t", "20 t+"] },
              { n: "03", label: "Munkakörnyezet",          opts: ["Beltér", "Kültér", "ATEX"] },
            ].map(step => (
              <div key={step.n}
                className="flex items-start gap-5 rounded-xl px-5 py-4 border border-white/6"
                style={{ backgroundColor: "rgba(255,255,255,0.025)" }}>
                <span className="font-mono font-bold text-[11px] text-white/18 shrink-0 mt-0.5">{step.n}</span>
                <div className="flex-1">
                  <p className="text-white/40 text-[12px] font-medium mb-2.5">{step.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.opts.map(o => (
                      <span key={o} className="text-[11px] font-medium text-white/25 border border-white/8 px-2.5 py-0.5 rounded-md">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-5 rounded-xl px-5 py-4 border"
              style={{ borderColor: "rgba(242,194,0,0.25)", backgroundColor: "rgba(242,194,0,0.05)" }}>
              <span className="font-bold text-[13px]" style={{ color: "#F2C200" }}>✓</span>
              <p className="font-semibold text-[14px] text-white/60">Ajánlott termékek — azonnal</p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SZAKSZOLGÁLAT — dark + photo
      ══════════════════════════════════════════ */}
      <section className="bg-ink text-white border-t border-white/6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[480px]">

            <div className="relative min-h-[260px] lg:min-h-0 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=70"
                alt="H-ITB Szakszolgálat"
                fill loading="lazy"
                className="object-cover opacity-45"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to right, transparent 30%, rgba(15,15,14,0.9))" }} />
            </div>

            <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-0.5" style={{ backgroundColor: "#F2C200" }} />
                <span className="text-[10px] font-mono text-white/25 tracking-[2.5px] uppercase">Szakszolgálat</span>
              </div>
              <h2 className="font-bold text-white tracking-tight leading-tight mb-5"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
                Biztonság,<br />nem kompromisszum.
              </h2>
              <p className="text-white/35 text-[14px] leading-relaxed mb-4 max-w-sm">
                Kötelező időszaki biztonsági felülvizsgálatok az EBSz szerint — helyszínen, az egész országban.
              </p>
              <p className="text-white/35 text-[14px] leading-relaxed mb-8 max-w-sm">
                Az <strong className="text-white/70">ETAR</strong> ingyenes digitális nyilvántartóval minden berendezés lejárata egy helyen követhető.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/termekek#szakszolgalat"
                  className="inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-md text-[13px] text-ink hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#F2C200" }}>
                  Szakszolgálat →
                </Link>
                <Link href="/termekek#etar"
                  className="inline-flex items-center gap-2 border border-white/10 hover:border-white/22 text-white/40 hover:text-white font-semibold px-5 py-3 rounded-md text-[13px] transition-all">
                  ETAR – ingyenes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AI TANÁCSADÓ — light warm
      ══════════════════════════════════════════ */}
      <section className="bg-paper-warm border-t border-border py-20 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="rounded-2xl border border-border bg-paper overflow-hidden grid lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-5 h-0.5" style={{ backgroundColor: "#F2C200" }} />
                <span className="text-[10px] font-mono text-ink-light tracking-[2.5px] uppercase">AI Műszaki Tanácsadó</span>
              </div>
              <h2 className="font-bold text-ink tracking-tight leading-tight mb-5"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}>
                Írja le a feladatát.<br />
                <span className="text-ink-mid">Megtaláljuk a megoldást.</span>
              </h2>
              <p className="text-ink-mid text-[14px] leading-relaxed mb-8 max-w-md">
                Szöveges leírás alapján az érvényes <strong className="text-ink">MSZ EN szabványok</strong> szerint javasoljuk a termékcsaládot.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai"
                  className="inline-flex items-center gap-2 bg-ink hover:opacity-80 text-white font-semibold px-5 py-3 rounded-md text-[13px] transition-all">
                  Megoldást keresek →
                </Link>
                <Link href="/megoldas"
                  className="inline-flex items-center gap-2 border border-border hover:border-ink text-ink-mid hover:text-ink font-semibold px-5 py-3 rounded-md text-[13px] transition-all">
                  Termékválasztó
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-border bg-paper-warm p-6 sm:p-8 flex flex-col justify-center gap-4">
              <div className="flex justify-end">
                <div className="bg-ink text-white text-[12px] px-4 py-3 rounded-xl rounded-tr-sm max-w-[90%] leading-relaxed">
                  Kültéren acélszerkezetet kell emelni, max 8 t, esőben is üzemel.
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <div className="w-6 h-6 rounded-md bg-ink flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[8px] font-bold">AI</span>
                </div>
                <div className="bg-paper border border-border rounded-xl rounded-tl-sm px-4 py-3 text-[12px] text-ink-mid leading-relaxed">
                  <span className="font-semibold text-ink block mb-1">Kültéri emelés, 8 t:</span>
                  Kéttartós híddaru <strong className="text-ink">IP65</strong> védelemmel.{" "}
                  <span className="inline-block mt-1 font-mono text-[10px] bg-paper-warm border border-border px-1.5 py-0.5 rounded"
                    style={{ color: "#B89900" }}>MSZ EN 14492-2</span>
                </div>
              </div>
              <div className="flex gap-2 items-center bg-paper border border-border rounded-lg px-3 py-2.5">
                <span className="flex-1 text-[12px] text-ink-light select-none">Írja le a feladatát…</span>
                <Link href="/ai"
                  className="w-7 h-7 rounded-md bg-ink flex items-center justify-center text-white text-[12px] hover:opacity-80 transition-all shrink-0">
                  →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT CTA — dark
      ══════════════════════════════════════════ */}
      <section className="bg-ink text-white py-20 sm:py-28 border-t border-white/6">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-0.5" style={{ backgroundColor: "#F2C200" }} />
                <span className="text-[10px] font-mono text-white/20 tracking-[2.5px] uppercase">Kapcsolat</span>
              </div>
              <h2 className="font-bold text-white tracking-tight leading-[0.85]"
                style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)" }}>
                KÉSZ<br />SEGÍTENI.
              </h2>
              <p className="text-white/22 text-[15px] leading-relaxed mt-6 max-w-md">
                9 területi képviselő az egész országban. Ajánlatkérés, szakszolgálat-igénybejelentés, ETAR regisztráció.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0 w-full lg:w-[260px]">
              <Link href="/kapcsolat"
                className="flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-md text-[14px] text-ink hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#F2C200" }}>
                Területi képviselő →
              </Link>
              <Link href="/kapcsolat"
                className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-white/35 hover:text-white font-semibold px-8 py-4 rounded-md text-[14px] transition-all">
                Ajánlatot kérek
              </Link>
              <a href="tel:+3612056208"
                className="text-white/15 hover:text-white/35 font-mono text-[13px] py-1 transition-colors text-center">
                +36 1 205 6208
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
