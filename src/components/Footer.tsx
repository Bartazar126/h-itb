import Link from "next/link";

const cols = [
  {
    title: "Termékek",
    items: [
      { href: "/termekek#emelo-gepek",   label: "Emelőgépek" },
      { href: "/termekek#anyagmozgatas", label: "Anyagmozgatás" },
      { href: "/termekek#egyeb",         label: "Rögzítés & Védelem" },
      { href: "/termekek#szakszolgalat", label: "Szakszolgálat" },
    ],
  },
  {
    title: "Eszközök",
    items: [
      { href: "/megoldas",   label: "Termékválasztó" },
      { href: "/ai",         label: "AI Tanácsadó" },
      { href: "/termekek#etar", label: "ETAR rendszer" },
    ],
  },
  {
    title: "Cég",
    items: [
      { href: "/kapcsolat",   label: "Kapcsolat" },
      { href: "/adatkezeles", label: "Adatkezelés" },
      { href: "/aszf",        label: "ÁSZF" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/40 border-t border-white/5">

      {/* Main grid */}
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 py-16 sm:py-20 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-12">

        {/* Brand column */}
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-black text-[18px] tracking-[-1.5px] text-paper leading-none">H·ITB</span>
            <span className="h-4 w-px bg-white/10 mx-1" />
            <span className="text-[10px] text-paper/30 font-medium tracking-[1.5px] uppercase leading-none">Kft.</span>
          </div>
          <address className="not-italic text-[13px] leading-7 text-paper/35">
            1119 Budapest,<br />
            Kelenvölgyi határsor 5.<br />
            <a href="tel:+3612056208" className="hover:text-accent transition-colors font-mono mt-1 block">
              +36 1 205 6208
            </a>
            <a href="mailto:hitb@h-itb.hu" className="hover:text-accent transition-colors">
              hitb@h-itb.hu
            </a>
          </address>

          {/* GUTMAN badge */}
          <a
            href="https://www.gutmanlifting.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-7 border border-white/8 hover:border-[#F5C800]/30 px-3 py-2 rounded-lg transition-colors group">
            <span className="font-black text-[11px] tracking-[1px] uppercase" style={{ color: "#C8A000" }}>GUTMAN</span>
            <span className="text-white/15">·</span>
            <span className="text-[11px] text-paper/30 group-hover:text-paper/50 transition-colors uppercase tracking-wide">Official Distributor ↗</span>
          </a>
        </div>

        {/* Link columns */}
        {cols.map(col => (
          <div key={col.title}>
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-paper/20 mb-5">{col.title}</div>
            <ul className="space-y-3">
              {col.items.map(l => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-[13px] text-paper/40 hover:text-paper/80 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 max-w-[1380px] mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-paper/20">
        <span>© 2025 H-ITB Ipari és Kereskedelmi Kft. — Minden jog fenntartva.</span>
        <span className="font-mono">Est. 1990</span>
      </div>
    </footer>
  );
}
