"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/termekek",  label: "Termékek",       pill: false },
  { href: "/megoldas",  label: "Termékválasztó", pill: true  },
  { href: "/ai",        label: "AI Tanácsadó",   pill: false },
  { href: "/kapcsolat", label: "Kapcsolat",       pill: false },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-white/6">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 h-[62px] flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
            style={{ backgroundColor: "#F2C200" }}>
            <span className="font-bold text-ink text-[13px] leading-none tracking-tight">H</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-[15px] text-white leading-none tracking-tight">H-ITB</span>
            <span className="hidden lg:block text-[9px] text-white/25 font-medium tracking-[2px] uppercase mt-0.5">
              Emeléstechnika
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {NAV_LINKS.map(l => {
            const active = pathname.startsWith(l.href);
            if (l.pill) return (
              <Link key={l.href} href={l.href}
                className={`text-[13px] font-semibold px-4 py-1.5 rounded-full border transition-all ${
                  active
                    ? "text-ink border-accent"
                    : "text-accent/80 border-accent/30 hover:border-accent/60 hover:text-accent"
                }`}
                style={active ? { backgroundColor: "#F2C200" } : {}}>
                {l.label}
              </Link>
            );
            return (
              <Link key={l.href} href={l.href}
                className={`relative text-[13px] font-medium px-4 py-[21px] transition-colors ${
                  active ? "text-white" : "text-white/35 hover:text-white/75"
                }`}>
                {l.label}
                {active && (
                  <span className="absolute bottom-0 inset-x-4 h-[2px] rounded-full"
                    style={{ backgroundColor: "#F2C200" }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="https://www.gutmanlifting.eu/" target="_blank" rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-1.5 text-[9px] font-bold tracking-[1.5px] uppercase border border-accent/25 hover:border-accent/50 px-2.5 py-1.5 rounded transition-colors"
            style={{ color: "#F2C200" }}>
            GUTMAN ↗
          </a>
          <a href="tel:+3612056208"
            className="hidden lg:block text-[12px] font-mono text-white/25 hover:text-white/60 transition-colors">
            +36 1 205 6208
          </a>
          <Link href="/kapcsolat"
            className="hidden sm:inline-flex text-[13px] font-semibold border border-white/12 hover:border-white/25 text-white/70 hover:text-white px-4 py-2 rounded-md transition-all">
            Ajánlatkérés
          </Link>
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-md text-white/40 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setOpen(v => !v)}
            aria-label="Menü megnyitása"
            aria-expanded={open}
            aria-controls="mobile-nav">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-nav" className="md:hidden absolute inset-x-0 top-full bg-ink border-b border-white/6 z-50">
          <nav className="px-4 py-3 space-y-0.5">
            {NAV_LINKS.map(l => {
              const active = pathname.startsWith(l.href);
              return (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-3.5 min-h-[44px] rounded-md text-[14px] font-medium transition-colors ${
                    l.pill
                      ? "text-accent hover:bg-accent/8"
                      : active ? "bg-white/6 text-white" : "text-white/35 hover:text-white hover:bg-white/5"
                  }`}>
                  {l.pill && <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />}
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-white/6 px-4 py-3 flex gap-2">
            <Link href="/kapcsolat" onClick={() => setOpen(false)}
              className="flex-1 text-center font-semibold py-3 rounded-md text-[13px] text-ink"
              style={{ backgroundColor: "#F2C200" }}>
              Ajánlatkérés
            </Link>
            <a href="tel:+3612056208"
              className="flex-1 text-center border border-white/12 text-white/50 text-[13px] font-medium py-3 rounded-md hover:border-white/25 hover:text-white transition-colors">
              Hívás
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
