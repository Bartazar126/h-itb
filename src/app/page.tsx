import Image from "next/image";
import Link from "next/link";

/* ─── Data ─── */
const marqueeItems = [
  "Emelőgépek", "Daruk", "Futómacskák", "Csörlők", "Targoncák",
  "Teherfelvevők", "Szakszolgálat", "ETAR", "Anyagmozgatás",
  "Rakományrögzítők", "Leesés elleni védelem", "GUTMAN",
];

const categories = [
  {
    id: "emelo-gepek",
    code: "A",
    title: "Emelőgépek",
    items: ["Híddaruk", "Futómacskák", "Csörlők", "Teherfelvevők"],
    href: "/termekek#emelo-gepek",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=75",
    accent: "#F97316",
  },
  {
    id: "szakszolgalat",
    code: "B",
    title: "Szakszolgálat",
    items: ["Biztonsági vizsgálat", "Karbantartás", "ETAR nyilvántartó"],
    href: "/termekek#szakszolgalat",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=75",
    accent: "#3B82F6",
  },
  {
    id: "anyagmozgatas",
    code: "C",
    title: "Anyagmozgatás",
    items: ["Targoncák", "Raklapszállítók", "Adapterek"],
    href: "/termekek#anyagmozgatas",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=75",
    accent: "#10B981",
  },
  {
    id: "egyeb",
    code: "D",
    title: "Rögzítés & Védelem",
    items: ["Rakományrögzítők", "Emelőláncok", "Leesés elleni védelem"],
    href: "/termekek#egyeb",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=75",
    accent: "#8B5CF6",
  },
];

const differentiators = [
  { stat: "35+", label: "Év tapasztalat", desc: "1990 óta az iparág megbízható partnere" },
  { stat: "5 000+", label: "Ügyfél", desc: "Kis- és nagyvállalatok egyaránt" },
  { stat: "4", label: "Ország", desc: "RO · SK · RS · HR leányvállalatok" },
  { stat: "ISO 9001", label: "Minőség", desc: "Tanúsított minőségirányítási rendszer" },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO – full viewport, image background
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[92svh] flex flex-col">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1800&q=75"
          alt="H-ITB – Ipari emelőgépek"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1800px"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACQQAAIBAwMEAwAAAAAAAAAAAAECAwQFERIhMUFRcaH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amr1vpq0WsrV6SqZJGTkxQxqMtn4HFc2yXhtbdTTW1Zd6qWOUJKzBQq5BAAHrjNJLSzvLi0a4p0mlkjYMzHuT3oAz2q3+2K01AAAB/9k="
        />
        {/* Overlay: darker at bottom for stats legibility */}
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-linear-to-b from-ink/20 via-transparent to-ink/80" />

        {/* Content */}
        <div className="relative flex-1 flex flex-col justify-between max-w-7xl mx-auto w-full px-5 sm:px-10 py-14 sm:py-20">

          {/* Top tag */}
          <div className="fade-in flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-2 text-paper/50 text-[11px] font-mono tracking-[2px] uppercase">
              <span className="w-4 h-px bg-accent" />
              H-ITB Kft. · Emeléstechnika · 1990
            </span>
            <a href="https://www.gutmanlifting.eu/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#F5C800]/25 hover:border-[#F5C800]/50 px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-[1.5px] transition-colors"
              style={{ color: "#F5C800" }}>
              GUTMAN Official Distributor ↗
            </a>
          </div>

          {/* Main headline */}
          <div className="py-16 sm:py-0">
            <h1
              className="fade-in-1 text-paper font-black leading-[0.88] tracking-tighter max-w-4xl"
              style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}>
              Ipari emelés.<br />
              <span className="text-accent">Magyar tudás.</span><br />
              <span className="text-paper/35">35 éve.</span>
            </h1>

            <p className="fade-in-2 mt-8 text-paper/55 text-[15px] sm:text-base leading-relaxed max-w-md">
              Daruk, csörlők, targoncák és teljes szakszolgálat – a{" "}
              <a href="https://www.gutmanlifting.eu/" target="_blank" rel="noopener noreferrer"
                className="font-bold hover:opacity-80 transition-opacity" style={{ color: "#F5C800" }}>
                GUTMAN Lifting
              </a>{" "}
              prémium termékeivel.
            </p>

            <div className="fade-in-3 flex flex-col sm:flex-row gap-3 mt-10">
              <Link href="/termekek"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-h text-paper font-bold px-7 py-4 rounded text-[14px] transition-colors tracking-wide">
                Termékkatalógus →
              </Link>
              <Link href="/kapcsolat"
                className="inline-flex items-center justify-center gap-2 border border-paper/25 hover:border-paper/50 text-paper font-semibold px-7 py-4 rounded text-[14px] transition-all hover:bg-paper/8">
                Ajánlatot kérek
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="fade-in border-t border-paper/15 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { n: "1990",   l: "Alapítva" },
              { n: "35+",    l: "Év tapasztalat" },
              { n: "5 000+", l: "Elégedett ügyfél" },
              { n: "4",      l: "Ország" },
            ].map(s => (
              <div key={s.l}>
                <div className="text-paper font-black text-2xl sm:text-3xl font-mono leading-none">{s.n}</div>
                <div className="text-paper/35 text-[11px] mt-1.5 font-medium tracking-wide uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════ */}
      <div className="border-y border-border overflow-hidden py-3 bg-paper-warm">
        <div className="animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-6 text-ink-mid text-[12px] font-medium whitespace-nowrap tracking-wide uppercase">
              {item}
              <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CATEGORY GRID – 4 columns
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="mb-12">
            <p className="text-ink-light text-[11px] font-mono uppercase tracking-[2px] mb-3">Termékkínálat</p>
            <div className="flex items-end justify-between">
              <h2 className="font-black text-ink tracking-tight leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Négy termékkategória.<br />Egy megbízható partner.
              </h2>
              <Link href="/termekek"
                className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-mid hover:text-ink border-b border-border hover:border-ink pb-px transition-all">
                Teljes katalógus →
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map(cat => (
              <Link key={cat.id} href={cat.href}
                className="group relative rounded-2xl overflow-hidden aspect-4/5 sm:aspect-auto sm:min-h-[360px] flex flex-col">
                {/* Background image */}
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Dark gradient overlay – stronger at bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/40 to-ink/10" />
                {/* Coloured top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ backgroundColor: cat.accent }} />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-5 sm:p-6">
                  {/* Top badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-[2px] text-paper/50 uppercase">
                      Kat. {cat.code}
                    </span>
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black text-paper"
                      style={{ backgroundColor: cat.accent }}>
                      {cat.code}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div>
                    <h3 className="font-black text-paper text-[20px] sm:text-[22px] tracking-tight leading-tight mb-4">
                      {cat.title}
                    </h3>
                    <ul className="space-y-1.5 mb-5">
                      {cat.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-[12px] text-paper/60">
                          <span className="w-2.5 h-px shrink-0" style={{ backgroundColor: cat.accent }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div
                      className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-wide group-hover:gap-3 transition-all"
                      style={{ color: cat.accent }}>
                      Részletek
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 sm:hidden">
            <Link href="/termekek"
              className="block text-center text-sm font-semibold border border-border rounded-lg py-3 text-ink-mid hover:border-ink hover:text-ink transition-colors">
              Teljes katalógus →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURE SPLIT – large image + text
      ══════════════════════════════════════════ */}
      <section className="border-t border-border">
        <div className="grid lg:grid-cols-2 min-h-[55vh]">
          {/* Image */}
          <div className="relative min-h-[40vw] lg:min-h-0 order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=75"
              alt="Ipari üzem – H-ITB"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-ink/10" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 bg-ink text-paper flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <p className="text-accent text-[11px] font-mono tracking-[2px] uppercase mb-6">Szakszolgálat</p>
            <h2 className="font-black tracking-tight leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Biztonság,<br />nem kompromisszum.
            </h2>
            <p className="text-paper/50 text-[15px] leading-relaxed mb-8 max-w-sm">
              Az Emelőgép Biztonsági Szabályzat szerint kötelező időszaki vizsgálatokat és karbantartást végzünk. Az <strong className="text-paper/80">ETAR</strong> rendszerrel digitálisan nyilván tarthatja berendezéseit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/termekek#szakszolgalat"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-h text-paper font-semibold px-5 py-3 rounded text-sm transition-colors">
                Szakszolgálat →
              </Link>
              <Link href="/termekek#etar"
                className="inline-flex items-center justify-center gap-2 border border-paper/15 hover:border-paper/30 text-paper/70 hover:text-paper font-semibold px-5 py-3 rounded text-sm transition-all">
                ETAR – ingyenes nyilvántartó
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DIFFERENTIATORS – dark strip
      ══════════════════════════════════════════ */}
      <section className="bg-[#0D0D0D] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/8 border border-paper/8 rounded-2xl overflow-hidden">
            {differentiators.map(d => (
              <div key={d.stat} className="bg-[#0D0D0D] px-8 py-10">
                <div className="font-black text-paper text-3xl font-mono leading-none mb-3 tracking-tight">{d.stat}</div>
                <div className="text-accent text-[11px] font-bold tracking-[1.5px] uppercase mb-2">{d.label}</div>
                <div className="text-paper/35 text-[12px] leading-relaxed">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SOLUTION FINDER – clean, not pushy
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="border border-border rounded-2xl overflow-hidden grid lg:grid-cols-5">

            {/* Left text panel */}
            <div className="lg:col-span-3 p-8 sm:p-12 flex flex-col justify-center">
              <p className="text-ink-light text-[11px] font-mono uppercase tracking-[2px] mb-4">Műszaki tanácsadó</p>
              <h2 className="font-black text-ink tracking-tight leading-tight mb-5"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}>
                Írja le a feladatát.<br />
                <span className="text-ink-mid">Megtaláljuk a megoldást.</span>
              </h2>
              <p className="text-ink-mid text-[14px] leading-relaxed mb-8 max-w-md">
                Szöveges feladatleírás alapján elemezzük a paramétert,
                és az érvényes <strong className="text-ink">MSZ EN szabványok</strong> szerint javasoljuk a megfelelő termékcsaládot.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/megoldas"
                  className="inline-flex items-center gap-2 bg-ink hover:bg-ink-mid text-paper font-semibold px-5 py-3 rounded text-[13px] transition-colors">
                  Termékválasztó →
                </Link>
                <Link href="/ai"
                  className="inline-flex items-center gap-2 border border-border hover:border-ink text-ink-mid hover:text-ink font-semibold px-5 py-3 rounded text-[13px] transition-all">
                  AI Tanácsadó
                </Link>
              </div>
            </div>

            {/* Right – mocked chat card */}
            <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-border bg-paper-warm p-6 sm:p-8 flex flex-col justify-center gap-4">
              {/* User bubble */}
              <div className="flex justify-end">
                <div className="bg-ink text-paper text-[12px] px-4 py-3 rounded-xl rounded-tr-sm max-w-[90%] leading-relaxed shadow-sm">
                  Kültéren acélszerkezetet kell emelni, max 8 tonna, esőben is üzemel.
                </div>
              </div>
              {/* AI bubble */}
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
              {/* Input bar */}
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

      {/* ══════════════════════════════════════════
          CONTACT CTA – full-width dark
      ══════════════════════════════════════════ */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-accent text-[11px] font-mono uppercase tracking-[2px] mb-4">Lépjen kapcsolatba velünk</p>
            <h2 className="font-black text-paper tracking-tight leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Kész segíteni.<br />
              <span className="text-paper/35">Területi képviselőink várják.</span>
            </h2>
            <p className="text-paper/45 text-[14px] leading-relaxed">
              9 területi képviselőnk az egész országban elérhető. Ajánlatkérés, szakszolgálat igénybejelentés vagy ETAR regisztráció – egyetlen e-maillel.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <Link href="/kapcsolat"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-h text-paper font-bold px-8 py-4 rounded text-[14px] transition-colors">
              Területi képviselő →
            </Link>
            <Link href="/kapcsolat"
              className="inline-flex items-center justify-center gap-2 border border-paper/15 hover:border-paper/30 text-paper/60 hover:text-paper font-semibold px-8 py-4 rounded text-[14px] transition-all">
              Ajánlatot kérek
            </Link>
            <a href="tel:+3612056208"
              className="inline-flex items-center justify-center gap-2 text-paper/30 hover:text-paper/60 font-mono text-[13px] py-2 transition-colors">
              +36 1 205 6208
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
