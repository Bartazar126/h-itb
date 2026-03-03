"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/termekek",  label: "Termékek" },
  { href: "/megoldas",  label: "Termékválasztó" },
  { href: "/ai",        label: "AI Tanácsadó" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 h-[60px] flex items-center justify-between">

        {/* ─ Logo ─ */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-ink group-hover:bg-ink-mid transition-colors flex items-center justify-center shrink-0">
              <span className="text-paper text-[10px] font-black leading-none">H</span>
            </div>
            <span className="font-black text-[15px] text-ink tracking-tight leading-none">H-ITB</span>
            <span className="hidden xl:block text-[11px] text-ink-light font-medium border-l border-border pl-2.5 leading-none">
              Emeléstechnika
            </span>
          </Link>

          {/* GUTMAN distributor badge */}
          <a href="https://www.gutmanlifting.eu/" target="_blank" rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 border border-border hover:border-[#F5C800]/40 bg-paper-warm hover:bg-[#F5C800]/5 px-2.5 py-1.5 rounded transition-all group/g">
            <span className="text-[9px] font-black tracking-[1px] uppercase leading-none text-[#C8A000] group-hover/g:text-[#F5C800] transition-colors" style={{ color: '#C8A000' }}>GUTMAN</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-[9px] font-medium text-ink-light uppercase tracking-wide group-hover/g:text-ink-mid transition-colors leading-none">Authorized Distributor</span>
          </a>
        </div>

        {/* ─ Desktop links ─ */}
        <nav className="hidden md:flex items-center gap-0">
          {links.map(l => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            const isSelector = l.href === "/megoldas";
            return (
              <Link key={l.href} href={l.href}
                className={`relative px-4 py-[18px] text-[13px] font-medium transition-colors flex items-center gap-1.5 ${
                  isSelector
                    ? active ? "text-accent" : "text-accent/70 hover:text-accent"
                    : active ? "text-ink" : "text-ink-light hover:text-ink"
                }`}>
                {isSelector && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                )}
                {l.label}
                {active && (
                  <span className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full ${isSelector ? "bg-accent" : "bg-ink"}`} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ─ Right side ─ */}
        <div className="flex items-center gap-2 shrink-0">
          <Link href="tel:+3612056208"
            className="hidden lg:flex items-center gap-1.5 text-[12px] text-ink-light hover:text-ink transition-colors font-mono mr-2">
            +36 1 205 6208
          </Link>
          <Link href="/kapcsolat"
            className="hidden sm:inline-flex items-center text-[13px] font-semibold bg-ink text-paper px-4 py-2 rounded-md hover:bg-ink-mid transition-colors">
            Ajánlatkérés
          </Link>
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-md text-ink-mid hover:text-ink hover:bg-paper-warm transition-colors"
            onClick={() => setOpen(v => !v)}
            aria-label="Menü megnyitása"
            aria-expanded={open}
            aria-controls="mobile-menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* ─ Mobile dropdown ─ */}
      {open && (
        <div id="mobile-menu" className="md:hidden absolute inset-x-0 top-full bg-paper border-b border-border shadow-lg z-50">
          <nav className="px-4 py-3 space-y-0.5">
            {links.map(l => {
              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              const isSelector = l.href === "/megoldas";
              return (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 px-3 py-3.5 min-h-[44px] rounded-md text-[14px] font-medium transition-colors ${
                    isSelector
                      ? active ? "bg-accent/10 text-accent font-semibold" : "text-accent hover:bg-accent/8"
                      : active ? "bg-paper-warm text-ink" : "text-ink-light hover:text-ink hover:bg-paper-warm/50"
                  }`}>
                  {isSelector && <span className="w-2 h-2 rounded-full bg-accent shrink-0" />}
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-border px-4 py-3 flex gap-2">
            <Link href="/kapcsolat" onClick={() => setOpen(false)}
              className="flex-1 text-center bg-ink text-paper text-[13px] font-semibold py-2.5 rounded-md hover:bg-ink-mid transition-colors">
              Ajánlatkérés
            </Link>
            <a href="tel:+3612056208"
              className="flex-1 text-center border border-border text-ink-mid text-[13px] font-medium py-2.5 rounded-md hover:border-ink hover:text-ink transition-colors">
              Hívás
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
