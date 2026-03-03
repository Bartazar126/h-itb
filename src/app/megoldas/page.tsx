import type { Metadata } from "next";
import Link from "next/link";
import SolutionFinder from "@/components/SolutionFinder";

export const metadata: Metadata = {
  title: "Parametrikus Megoldáskereső",
  description: "Adja meg a feladat paramétereit – rendszerünk megfelelő termékcsaládot javasol.",
};

export default function MegoladasPage() {
  return (
    <>
      <div className="border-b border-border bg-paper">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
          <nav className="flex items-center gap-2 text-ink-light text-xs mb-6">
            <Link href="/" className="hover:text-accent transition-colors">Főoldal</Link>
            <span>/</span>
            <span>Megoldáskereső</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="font-black text-ink text-3xl sm:text-4xl tracking-tight mb-2">
                Parametrikus megoldáskereső
              </h1>
              <p className="text-ink-mid text-base max-w-lg">
                4 lépésben: feladat, teher, tömeg, környezet – és javaslatot adunk.
              </p>
            </div>
            <Link href="/ai"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-ink hover:bg-ink-mid text-paper font-semibold px-5 py-2.5 rounded text-sm transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              AI Asszisztens kipróbálása
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16">
        <SolutionFinder />
      </div>
    </>
  );
}
