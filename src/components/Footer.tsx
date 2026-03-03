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
      { href: "/megoldas",      label: "Termékválasztó" },
      { href: "/ai",            label: "AI Tanácsadó" },
      { href: "/termekek#etar", label: "ETAR rendszer" },
    ],
  },
  {
    title: "Cég",
    items: [
      { href: "/kapcsolat",    label: "Kapcsolat" },
      { href: "/adatkezeles",  label: "Adatkezelés" },
      { href: "/aszf",         label: "ÁSZF" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/30 border-t border-white/6">

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-16 sm:py-20 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-12">

        {/* Brand */}
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#F2C200" }}>
              <span className="font-bold text-ink text-[13px] leading-none">H</span>
            </div>
            <div>
              <span className="font-bold text-[15px] text-white leading-none block tracking-tight">H-ITB Kft.</span>
              <span className="text-[9px] text-white/20 font-medium tracking-[2px] uppercase">Emeléstechnika · Est. 1990</span>
            </div>
          </div>

          <address className="not-italic text-[13px] leading-7 text-white/30">
            1119 Budapest,<br />
            Kelenvölgyi határsor 5.<br />
            <a href="tel:+3612056208" className="hover:text-white/70 transition-colors font-mono block mt-1">+36 1 205 6208</a>
            <a href="mailto:hitb@h-itb.hu" className="hover:text-white/70 transition-colors">hitb@h-itb.hu</a>
          </address>

          <a href="https://www.gutmanlifting.eu/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 border border-white/8 hover:border-accent/40 px-3 py-2 rounded-lg transition-colors group">
            <span className="font-bold text-[11px] tracking-[1px] uppercase" style={{ color: "#F2C200" }}>GUTMAN</span>
            <span className="text-white/15">·</span>
            <span className="text-[11px] text-white/25 group-hover:text-white/50 transition-colors uppercase tracking-wide">Official Distributor ↗</span>
          </a>
        </div>

        {/* Link columns */}
        {cols.map(col => (
          <div key={col.title}>
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-white/18 mb-5">{col.title}</div>
            <ul className="space-y-3">
              {col.items.map(l => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-[13px] text-white/30 hover:text-white/70 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 max-w-[1400px] mx-auto px-6 sm:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px]">
        <span>© 2025 H-ITB Ipari és Kereskedelmi Kft.</span>
        <span className="font-mono text-white/15">Est. 1990</span>
      </div>
    </footer>
  );
}
