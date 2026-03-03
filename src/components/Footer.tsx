import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/50 mt-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10">
        <div className="col-span-2 sm:col-span-1">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-6 rounded bg-paper flex items-center justify-center">
              <span className="text-ink text-[11px] font-black">H</span>
            </span>
            <span className="text-paper font-bold text-sm">H-ITB Kft.</span>
          </div>
          <address className="not-italic text-xs leading-7">
            1119 Budapest, Kelenvölgyi határsor 5.<br />
            <a href="tel:+3612056208" className="hover:text-accent transition-colors">+36 1 205 6208</a><br />
            <a href="mailto:hitb@h-itb.hu" className="hover:text-accent transition-colors">hitb@h-itb.hu</a>
          </address>
        </div>

        {[
          { title: "Termékek", items: [
            { href: "/termekek#emelo-gepek",   label: "Emelőgépek" },
            { href: "/termekek#anyagmozgatas", label: "Anyagmozgatás" },
            { href: "/termekek#egyeb",         label: "Egyéb termékek" },
          ]},
          { title: "Eszközök", items: [
            { href: "/ai",                     label: "Asszisztens" },
            { href: "/megoldas",               label: "Megoldáskereső" },
            { href: "/termekek#szakszolgalat", label: "Szakszolgálat" },
            { href: "/termekek#etar",          label: "ETAR rendszer" },
          ]},
          { title: "Cég", items: [
            { href: "/kapcsolat",  label: "Kapcsolat" },
            { href: "/adatkezeles",label: "Adatkezelés" },
            { href: "/aszf",       label: "ÁSZF" },
          ]},
        ].map(col => (
          <div key={col.title}>
            <div className="text-paper/30 text-[10px] font-bold tracking-widest uppercase mb-4">{col.title}</div>
            <ul className="space-y-2.5">
              {col.items.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-xs hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-paper/8 max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px]">
        <span>© 2025 H-ITB Ipari és Kereskedelmi Kft.</span>
        <a href="https://www.gutmanlifting.eu/" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 text-paper/25 hover:text-paper/60 transition-colors group">
          <span className="font-black tracking-wide transition-colors" style={{ color: '#C8A000' }}>GUTMAN</span>
          <span className="text-paper/15">·</span>
          <span className="uppercase tracking-[1.5px]">Official Distributor</span>
          <span className="text-paper/15 group-hover:text-paper/40 transition-colors">↗</span>
        </a>
      </div>
    </footer>
  );
}
