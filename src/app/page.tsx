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
    desc: "Híddaruktól a kézi csörlőig – minden emelési feladathoz a pontos eszköz.",
    items: ["Egytartós és kéttartós híddaruk", "Elektromos futómacskák", "Kézi és pneumatikus csörlők", "Teherfelvevők, horgok"],
    count: 22, href: "/termekek#emelo-gepek",
  },
  {
    id: "anyagmozgatas", code: "B", title: "Anyagmozgatás",
    desc: "Logisztikai és gyártói környezetbe tervezett elektromos és kézi eszközök.",
    items: ["Elektromos targoncák", "Kézi raklapszállítók", "Állványos emelőkocsik", "Speciális adapterek"],
    count: 12, href: "/termekek#anyagmozgatas",
  },
  {
    id: "rogzites",      code: "C", title: "Rögzítés & Védelem",
    desc: "Teherfuvar-rögzítők és személyi védőeszközök MSZ EN szabványok szerint.",
    items: ["Rátchetes szíjak (GUTMAN)", "Emelőláncok 8-as / 10-es oszt.", "Biztonsági hevederek", "Zuhanásgátlók"],
    count: 11, href: "/termekek#egyeb",
  },
  {
    id: "szakszolgalat", code: "D", title: "Szakszolgálat",
    desc: "Kötelező EBSz vizsgálatok, megelőző karbantartás és ingyenes ETAR nyilvántartó.",
    items: ["Időszaki biztonsági felülvizsgálat", "Üzembe helyezési vizsgálat", "Megelőző karbantartás", "ETAR digitális nyilvántartó"],
    count: 8,  href: "/termekek#szakszolgalat",
  },
];

const industries = [
  { icon: "🏗", label: "Építőipar" },
  { icon: "🏭", label: "Gyártás" },
  { icon: "📦", label: "Logisztika" },
  { icon: "⚡", label: "Energiaipar" },
  { icon: "🚢", label: "Kikötők" },
  { icon: "🔩", label: "Nehézipar" },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative bg-ink overflow-hidden" style={{ minHeight: "calc(100svh - 62px)" }}>

        {/* Subtle grid texture */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />

        {/* Yellow vertical bar — left side decoration */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#F2C200" }} />

        <div className="max-w-[1400px] mx-auto px-8 sm:px-12 py-16 sm:py-20 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center"
          style={{ minHeight: "inherit" }}>

          {/* Left */}
          <div className="flex flex-col justify-center">

            {/* GUTMAN badge */}
            <a href="https://www.gutmanlifting.eu/" target="_blank" rel="noopener noreferrer"
              className="fade-up inline-flex items-center gap-2 self-start border border-accent/30 hover:border-accent/60 px-3 py-1.5 rounded-md mb-8 transition-colors"
              style={{ color: "#F2C200" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-bold tracking-[2px] uppercase">Official GUTMAN Distributor</span>
              <span className="text-accent/40 text-[10px]">↗</span>
            </a>

            <h1 className="fade-up-1 font-bold text-white tracking-tight leading-[0.88] mb-8"
              style={{ fontSize: "clamp(3.25rem, 8.5vw, 7.5rem)" }}>
              Emelő-<br />gépek.{" "}
              <span style={{ color: "#F2C200" }}>Precízen.</span>
            </h1>

            <p className="fade-up-2 text-white/40 text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-md">
              Daruk, csörlők, targoncák és teljes szakszolgálat 1990 óta —
              Magyarország és négy szomszédos ország iparvállalataira.
            </p>

            <div className="fade-up-3 flex flex-wrap gap-3 mb-14">
              <Link href="/termekek"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-md text-[14px] text-ink transition-all hover:opacity-90"
                style={{ backgroundColor: "#F2C200" }}>
                Termékkatalógus →
              </Link>
              <Link href="/megoldas"
                className="inline-flex items-center gap-2 border border-white/12 hover:border-white/25 text-white/60 hover:text-white font-semibold px-6 py-3.5 rounded-md text-[14px] transition-all">
                Termékválasztó
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-white/6">
              {[
                { n: "1990",   l: "Alapítva" },
                { n: "35+",    l: "Év" },
                { n: "5 000+", l: "Ügyfél" },
                { n: "4",      l: "Ország" },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-bold text-white text-xl sm:text-2xl font-mono leading-none" style={{ color: "#F2C200" }}>{s.n}</div>
                  <div className="text-white/20 text-[10px] mt-1.5 font-medium tracking-[1.5px] uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – category cards */}
          <div className="grid grid-cols-2 gap-3">
            {cats.map(cat => (
              <Link key={cat.id} href={cat.href}
                className="group relative rounded-xl border border-white/8 hover:border-accent/40 p-5 flex flex-col gap-3 transition-all hover:bg-white/2 overflow-hidden">
                {/* Code badge */}
                <div className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-ink text-[13px] shrink-0"
                  style={{ backgroundColor: "#F2C200" }}>
                  {cat.code}
                </div>
                <div>
                  <h3 className="font-bold text-white text-[14px] sm:text-[16px] leading-tight mb-1.5">{cat.title}</h3>
                  <p className="text-white/25 text-[11px] leading-snug hidden sm:block">{cat.desc}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/20">{cat.count} termék</span>
                  <span className="text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all inline-block text-sm">→</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          ÉRTÉKAJÁNLAT — dark strip
      ══════════════════════════════════════════ */}
      <div className="border-y border-white/6" style={{ backgroundColor: "#1A1A17" }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/6">
          {[
            { icon: "◈", title: "Official GUTMAN Partner",  desc: "Prémium európai emelőgép-gyártó kizárólagos forgalmazója" },
            { icon: "◉", title: "35 év tapasztalat",        desc: "1990 óta iparvállalatok megbízható partnere" },
            { icon: "◎", title: "9 területi képviselő",     desc: "Helyszíni ajánlat és szerviz az egész országban" },
            { icon: "◐", title: "EBSz szakszolgálat",       desc: "Kötelező biztonsági felülvizsgálat és karbantartás" },
          ].map(v => (
            <div key={v.title} className="px-6 sm:px-8 py-5 sm:py-0 first:pl-0 last:pr-0 flex items-start gap-4">
              <span className="text-[20px] shrink-0 mt-0.5" style={{ color: "#F2C200" }}>{v.icon}</span>
              <div>
                <div className="text-white font-semibold text-[13px] mb-1 leading-tight">{v.title}</div>
                <div className="text-white/30 text-[12px] leading-snug">{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════ */}
      <div className="border-b border-white/6 bg-ink py-3 overflow-hidden">
        <div className="animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-6 text-white/15 text-[11px] font-medium whitespace-nowrap tracking-[2.5px] uppercase">
              {item}
              <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#F2C200", opacity: 0.5 }} />
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          TERMÉKKATALÓGUS — light section
      ══════════════════════════════════════════ */}
      <section className="bg-paper text-ink py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">

          <div className="flex items-end justify-between gap-4 flex-wrap mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8" style={{ backgroundColor: "#F2C200" }} />
                <span className="text-[11px] font-mono text-ink-light tracking-[2.5px] uppercase">Termékkínálat</span>
              </div>
              <h2 className="font-bold text-ink tracking-tight leading-[0.9]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.75rem)" }}>
                Minden, amit egy üzem<br />igényelhet.
              </h2>
            </div>
            <Link href="/termekek"
              className="shrink-0 hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-ink-mid hover:text-ink border-b border-border hover:border-ink pb-px transition-all">
              Teljes katalógus →
            </Link>
          </div>

          {/* 2×2 grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {cats.map(cat => (
              <Link key={cat.id} href={cat.href}
                className="group relative rounded-2xl border border-border hover:border-ink/20 bg-paper overflow-hidden hover:shadow-lg transition-all p-8">

                {/* Yellow left bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"
                  style={{ backgroundColor: "#F2C200" }} />

                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-ink text-[15px] shrink-0"
                    style={{ backgroundColor: "#F2C200" }}>
                    {cat.code}
                  </div>
                  <span className="font-mono text-[11px] text-ink-light tabular-nums">{cat.count} termék</span>
                </div>

                <h3 className="font-bold text-ink text-xl sm:text-2xl tracking-tight mb-3">{cat.title}</h3>
                <p className="text-ink-mid text-[13px] leading-relaxed mb-6">{cat.desc}</p>

                <ul className="space-y-2">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-[12px] text-ink-light">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#F2C200" }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 mt-6 text-[13px] font-semibold text-ink-light group-hover:text-ink group-hover:gap-3 transition-all">
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
          TERMÉKVÁLASZTÓ — dark + yellow CTA
      ══════════════════════════════════════════ */}
      <section className="bg-ink py-20 sm:py-28 border-t border-white/6 overflow-hidden relative">
        {/* Decorative big number */}
        <div aria-hidden className="absolute right-8 top-1/2 -translate-y-1/2 font-bold text-white/3 leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(200px, 28vw, 380px)" }}>03</div>

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-12 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-0.5 w-8" style={{ backgroundColor: "#F2C200" }} />
              <span className="text-[11px] font-mono text-white/30 tracking-[2.5px] uppercase">Termékválasztó</span>
            </div>
            <h2 className="font-bold text-white tracking-tight leading-[0.88] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              Nem tudja,<br />melyik termék<br />
              <span style={{ color: "#F2C200" }}>illik a feladathoz?</span>
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed mb-10 max-w-md">
              3 egyszerű kérdés: feladat típusa, teherbírás, munkakörnyezet.
              Az eredmény azonnali termékjavaslat az érvényes szabványok alapján.
            </p>
            <Link href="/megoldas"
              className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-md text-[15px] text-ink transition-all hover:opacity-90"
              style={{ backgroundColor: "#F2C200" }}>
              Indítom a választót →
            </Link>
          </div>

          {/* Steps preview */}
          <div className="space-y-2.5">
            {[
              { n: "01", label: "Mi a feladat?",          opts: ["Emelés", "Anyagmozgatás", "Rögzítés", "Szakszolgálat"] },
              { n: "02", label: "Teherbírás & meghajtás", opts: ["< 0,5 t", "0,5–5 t", "5–20 t", "20 t+"] },
              { n: "03", label: "Munkakörnyezet",          opts: ["Beltér", "Kültér", "ATEX"] },
            ].map(step => (
              <div key={step.n}
                className="flex items-start gap-5 rounded-xl px-5 py-4 border border-white/6"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                <span className="font-mono font-bold text-[11px] text-white/20 shrink-0 mt-0.5">{step.n}</span>
                <div className="flex-1">
                  <p className="text-white/45 text-[12px] font-medium mb-2.5">{step.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.opts.map(o => (
                      <span key={o}
                        className="text-[11px] font-medium text-white/30 border border-white/8 px-2.5 py-0.5 rounded-md">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-5 rounded-xl px-5 py-4 border"
              style={{ borderColor: "rgba(242,194,0,0.3)", backgroundColor: "rgba(242,194,0,0.06)" }}>
              <span className="font-bold text-[13px]" style={{ color: "#F2C200" }}>✓</span>
              <p className="font-semibold text-[14px] text-white/70">Ajánlott termékek — azonnal</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          IPARÁGAK — light section
      ══════════════════════════════════════════ */}
      <section className="bg-paper-warm text-ink border-t border-border py-14 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-0.5 w-8" style={{ backgroundColor: "#F2C200" }} />
            <span className="text-[11px] font-mono text-ink-light tracking-[2.5px] uppercase">Kiknek dolgozunk?</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
            {industries.map(ind => (
              <div key={ind.label}
                className="flex flex-col items-center gap-2.5 py-5 px-2 rounded-xl border border-border bg-paper text-center hover:border-ink/20 hover:shadow-sm transition-all">
                <span className="text-2xl">{ind.icon}</span>
                <span className="text-[12px] font-semibold text-ink-mid">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SZAKSZOLGÁLAT — dark + photo
      ══════════════════════════════════════════ */}
      <section className="bg-ink text-white border-t border-white/6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[500px]">

            <div className="relative min-h-[260px] lg:min-h-0 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=70"
                alt="H-ITB Szakszolgálat"
                fill loading="lazy"
                className="object-cover opacity-50"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to right, transparent, rgba(15,15,14,0.85))" }} />
            </div>

            <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-0.5 w-8" style={{ backgroundColor: "#F2C200" }} />
                <span className="text-[11px] font-mono text-white/30 tracking-[2.5px] uppercase">Szakszolgálat</span>
              </div>
              <h2 className="font-bold text-white tracking-tight leading-tight mb-5"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
                Biztonság,<br />nem kompromisszum.
              </h2>
              <p className="text-white/40 text-[14px] leading-relaxed mb-4 max-w-sm">
                Kötelező időszaki biztonsági felülvizsgálatok az Emelőgép Biztonsági Szabályzat szerint — helyszínen, az egész országban.
              </p>
              <p className="text-white/40 text-[14px] leading-relaxed mb-8 max-w-sm">
                Az <strong className="text-white/75">ETAR</strong> ingyenes digitális nyilvántartóval minden berendezése lejárata egy helyen követhető.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/termekek#szakszolgalat"
                  className="inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-md text-[13px] text-ink transition-all hover:opacity-90"
                  style={{ backgroundColor: "#F2C200" }}>
                  Szakszolgálat →
                </Link>
                <Link href="/termekek#etar"
                  className="inline-flex items-center gap-2 border border-white/12 hover:border-white/25 text-white/45 hover:text-white font-semibold px-5 py-3 rounded-md text-[13px] transition-all">
                  ETAR – ingyenes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SZÁMOK — light
      ══════════════════════════════════════════ */}
      <section className="bg-paper text-ink border-t border-border py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {[
              { stat: "35+",      label: "Év tapasztalat", desc: "1990 óta az iparág partnere" },
              { stat: "5 000+",   label: "Aktív ügyfél",   desc: "Kis- és nagyvállalatoktól" },
              { stat: "4",        label: "Ország",         desc: "RO · SK · RS · HR régió" },
              { stat: "ISO 9001", label: "Minőség",        desc: "Tanúsított minőségirányítás" },
            ].map(d => (
              <div key={d.stat} className="px-0 py-10 sm:py-0 sm:px-8 lg:px-10 first:pl-0 last:pr-0">
                <div className="font-bold text-ink text-4xl sm:text-5xl font-mono tracking-tight leading-none mb-2">{d.stat}</div>
                <div className="text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: "#F2C200", filter: "brightness(0.75)" }}>{d.label}</div>
                <div className="text-ink-light text-[13px]">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AI TANÁCSADÓ — light warm
      ══════════════════════════════════════════ */}
      <section className="bg-paper-warm border-t border-border py-20 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="rounded-2xl border border-border bg-paper overflow-hidden grid lg:grid-cols-5 shadow-sm">
            <div className="lg:col-span-3 p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-0.5 w-6" style={{ backgroundColor: "#F2C200" }} />
                <span className="text-[11px] font-mono text-ink-light tracking-[2.5px] uppercase">AI Műszaki Tanácsadó</span>
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
                    style={{ color: "#C8A000" }}>MSZ EN 14492-2</span>
                </div>
              </div>
              <div className="mt-1 flex gap-2 items-center bg-paper border border-border rounded-lg px-3 py-2.5">
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
                <div className="h-0.5 w-8" style={{ backgroundColor: "#F2C200" }} />
                <span className="text-[11px] font-mono text-white/25 tracking-[2.5px] uppercase">Kapcsolat</span>
              </div>
              <h2 className="font-bold text-white tracking-tight leading-[0.88]"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
                KÉSZ<br />SEGÍTENI.
              </h2>
              <p className="text-white/25 text-[15px] leading-relaxed mt-6 max-w-md">
                9 területi képviselő az egész országban. Ajánlatkérés, szakszolgálat-igénybejelentés, ETAR regisztráció — egy üzenettel.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0 w-full lg:w-auto">
              <Link href="/kapcsolat"
                className="flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-md text-[14px] text-ink transition-all hover:opacity-90"
                style={{ backgroundColor: "#F2C200" }}>
                Területi képviselő →
              </Link>
              <Link href="/kapcsolat"
                className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-white/40 hover:text-white font-semibold px-8 py-4 rounded-md text-[14px] transition-all">
                Ajánlatot kérek
              </Link>
              <a href="tel:+3612056208"
                className="text-white/18 hover:text-white/40 font-mono text-[13px] py-1 transition-colors text-center">
                +36 1 205 6208
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
