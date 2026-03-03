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
    <header className="sticky top-0 z-50 bg-paper">
      {/* 3px accent top line */}
      <div className="h-[3px] bg-accent" />

      <div className="border-b border-border">
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10 h-[58px] flex items-center justify-between gap-8">

          {/* ─ Logo ─ */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="font-black text-[20px] tracking-[-1.5px] text-ink leading-none">H·ITB</span>
            <span className="hidden lg:block h-4 w-px bg-border" />
            <span className="hidden lg:block text-[10px] text-ink-light font-medium tracking-[1.5px] uppercase leading-none">
              Emeléstechnika
            </span>
          </Link>

          {/* ─ Desktop nav ─ */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map(l => {
              const active = pathname.startsWith(l.href);
              if (l.pill) return (
                <Link key={l.href} href={l.href}
                  className={`text-[13px] font-semibold px-4 py-1.5 rounded-full border transition-all ${
                    active
                      ? "bg-accent text-paper border-accent"
                      : "text-accent border-accent/40 hover:border-accent hover:bg-accent/8"
                  }`}>
                  {l.label}
                </Link>
              );
              return (
                <Link key={l.href} href={l.href}
                  className={`relative text-[13px] font-medium px-4 py-[19px] transition-colors ${
                    active ? "text-ink" : "text-ink-light hover:text-ink"
                  }`}>
                  {l.label}
                  {active && <span className="absolute bottom-0 inset-x-4 h-[2px] bg-ink rounded-full" />}
                </Link>
              );
            })}
          </nav>

          {/* ─ Right ─ */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="https://www.gutmanlifting.eu/" target="_blank" rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1 text-[9px] font-black tracking-[1.5px] uppercase border border-border hover:border-[#F5C800]/40 px-2.5 py-1.5 rounded transition-colors"
              style={{ color: "#C8A000" }}>
              GUTMAN ↗
            </a>
            <a href="tel:+3612056208"
              className="hidden lg:block text-[12px] font-mono text-ink-light hover:text-ink transition-colors">
              +36 1 205 6208
            </a>
            <Link href="/kapcsolat"
              className="hidden sm:inline-flex text-[13px] font-semibold bg-ink text-paper px-4 py-2 rounded hover:bg-ink-mid transition-colors">
              Ajánlatkérés
            </Link>
            <button
              className="md:hidden w-11 h-11 flex items-center justify-center rounded text-ink-mid hover:bg-paper-warm transition-colors"
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
      </div>

      {/* ─ Mobile menu ─ */}
      {open && (
        <div id="mobile-nav" className="md:hidden absolute inset-x-0 top-full bg-paper border-b border-border shadow-lg z-50">
          <nav className="px-4 py-3 space-y-0.5">
            {NAV_LINKS.map(l => {
              const active = pathname.startsWith(l.href);
              return (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-3.5 min-h-[44px] rounded-md text-[14px] font-medium transition-colors ${
                    l.pill
                      ? active ? "bg-accent/10 text-accent font-semibold" : "text-accent hover:bg-accent/8"
                      : active ? "bg-paper-warm text-ink" : "text-ink-light hover:text-ink hover:bg-paper-warm/60"
                  }`}>
                  {l.pill && <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />}
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-border px-4 py-3 flex gap-2">
            <Link href="/kapcsolat" onClick={() => setOpen(false)}
              className="flex-1 text-center bg-ink text-paper text-[13px] font-semibold py-3 rounded-md hover:bg-ink-mid transition-colors">
              Ajánlatkérés
            </Link>
            <a href="tel:+3612056208"
              className="flex-1 text-center border border-border text-ink-mid text-[13px] font-medium py-3 rounded-md hover:border-ink hover:text-ink transition-colors">
              Hívás
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
