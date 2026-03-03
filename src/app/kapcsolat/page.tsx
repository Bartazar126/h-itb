import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kapcsolat – H-ITB",
  description: "Területi képviselők, főiroda, ajánlatkérés és ETAR regisztráció.",
};

const REPS = [
  { region: "Budapest és környéke", name: "Négyesy Gábor",  tel: "+36 30 742 1121", email: "negyesy.g@h-itb.hu"  },
  { region: "Budapest és környéke", name: "Nagy Gergely",   tel: "+36 30 467 8689", email: "nagy.g@h-itb.hu"     },
  { region: "Északnyugat-Mo.",      name: "Hegyi Gábor",    tel: "+36 30 742 1127", email: "hegyi.g@h-itb.hu"    },
  { region: "Középnyugat-Mo.",      name: "Molnár Ferenc",  tel: "+36 30 415 0398", email: "molnar.f@h-itb.hu"   },
  { region: "Nyugat-Magyarország",  name: "Simon Jenő",     tel: "+36 30 742 1125", email: "simon.j@h-itb.hu"    },
  { region: "Dél-Dunántúl",        name: "Bálint Miklós",  tel: "+36 30 742 1132", email: "balint.m@h-itb.hu"   },
  { region: "Dél-Alföld",          name: "Halász Miklós",  tel: "+36 30 742 1136", email: "halasz.m@h-itb.hu"   },
  { region: "Közép-Alföld",        name: "Horváth István", tel: "+36 30 742 1128", email: "horvath.i@h-itb.hu"  },
  { region: "Északkelet-Mo.",       name: "Horváth István", tel: "+36 30 742 1128", email: "horvath.i@h-itb.hu"  },
];

export default function KapcsolatPage() {
  return (
    <>
      {/* ── Dark header with immediate CTAs ── */}
      <div className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-12 sm:py-16">
          <nav className="flex items-center gap-1.5 text-paper/30 text-xs mb-8">
            <Link href="/" className="hover:text-paper/60 transition-colors">Főoldal</Link>
            <span>/</span>
            <span>Kapcsolat</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            <div>
              <h1 className="font-black text-3xl sm:text-5xl tracking-tight mb-4 leading-tight">
                Lépjen<br />kapcsolatba velünk.
              </h1>
              <p className="text-paper/45 text-[15px] leading-relaxed max-w-sm">
                9 területi képviselőnk az egész országban elérhető. Ajánlatkérés, szakszolgálat, ETAR regisztráció.
              </p>
            </div>

            {/* Direct contact blocks */}
            <div className="grid sm:grid-cols-2 gap-3">
              <a href="tel:+3612056208"
                className="group flex flex-col gap-2 border border-paper/10 hover:border-paper/30 hover:bg-paper/5 rounded-xl px-5 py-5 transition-all">
                <span className="text-[10px] font-mono text-paper/30 uppercase tracking-[2px]">Telefon</span>
                <span className="font-black text-paper text-[18px] tracking-tight font-mono group-hover:text-accent transition-colors">
                  +36 1 205 6208
                </span>
                <span className="text-paper/30 text-[12px]">Főiroda · Budapest</span>
              </a>
              <a href="mailto:hitb@h-itb.hu"
                className="group flex flex-col gap-2 border border-paper/10 hover:border-paper/30 hover:bg-paper/5 rounded-xl px-5 py-5 transition-all">
                <span className="text-[10px] font-mono text-paper/30 uppercase tracking-[2px]">E-mail</span>
                <span className="font-bold text-paper text-[15px] group-hover:text-accent transition-colors break-all">
                  hitb@h-itb.hu
                </span>
                <span className="text-paper/30 text-[12px]">Általános megkeresés</span>
              </a>
              <a href="mailto:hitb@h-itb.hu?subject=Ajánlatkérés"
                className="group flex items-center justify-between border border-accent/30 hover:border-accent/60 bg-accent/5 hover:bg-accent/10 rounded-xl px-5 py-4 transition-all col-span-full sm:col-span-1">
                <div>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-[2px] block mb-0.5">Gyors</span>
                  <span className="font-bold text-paper text-[14px]">Ajánlatot kérek</span>
                </div>
                <span className="text-accent text-lg group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="mailto:hitb@h-itb.hu?subject=Szakszolgálat"
                className="group flex items-center justify-between border border-paper/10 hover:border-paper/25 hover:bg-paper/5 rounded-xl px-5 py-4 transition-all">
                <div>
                  <span className="text-[10px] font-mono text-paper/30 uppercase tracking-[2px] block mb-0.5">Bejelentés</span>
                  <span className="font-bold text-paper text-[14px]">Szakszolgálat</span>
                </div>
                <span className="text-paper/30 group-hover:text-paper/60 text-lg group-hover:translate-x-1 transition-all">→</span>
              </a>
            </div>
          </div>

          {/* Office details strip */}
          <div className="mt-12 pt-8 border-t border-paper/8 flex flex-wrap gap-x-10 gap-y-3 text-[13px] text-paper/40">
            <span><span className="font-mono text-paper/20 mr-2">Cím</span>1119 Budapest, Kelenvölgyi határsor 5.</span>
            <span><span className="font-mono text-paper/20 mr-2">Adószám</span>megadható</span>
            <span><span className="font-mono text-paper/20 mr-2">Régiók</span>HU · RO · SK · RS · HR</span>
          </div>
        </div>
      </div>

      {/* ── Regional reps – table layout ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-12 sm:py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[10px] font-mono text-ink-light uppercase tracking-[2px] mb-1.5">Területi lefedettség</p>
            <h2 className="font-black text-ink text-2xl sm:text-3xl tracking-tight">Területi képviselők</h2>
          </div>
          <span className="text-[12px] font-mono text-ink-light border border-border px-3 py-1 rounded-full">{REPS.length} képviselő</span>
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block border border-border rounded-2xl overflow-hidden">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="bg-paper-warm border-b border-border">
                <th className="text-left text-[10px] font-bold uppercase tracking-[1.5px] text-ink-light px-5 py-3">Régió</th>
                <th className="text-left text-[10px] font-bold uppercase tracking-[1.5px] text-ink-light px-5 py-3">Képviselő</th>
                <th className="text-left text-[10px] font-bold uppercase tracking-[1.5px] text-ink-light px-5 py-3">Telefon</th>
                <th className="text-left text-[10px] font-bold uppercase tracking-[1.5px] text-ink-light px-5 py-3">E-mail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {REPS.map((r, i) => (
                <tr key={i} className="hover:bg-paper-warm/50 transition-colors group">
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="font-medium text-ink">{r.region}</span>
                    </span>
                  </td>
                  <td className="px-5 py-4 font-semibold text-ink">{r.name}</td>
                  <td className="px-5 py-4">
                    <a href={`tel:${r.tel.replace(/\s/g, "")}`}
                      className="font-mono text-ink-mid hover:text-accent transition-colors">
                      {r.tel}
                    </a>
                  </td>
                  <td className="px-5 py-4">
                    <a href={`mailto:${r.email}`}
                      className="text-ink-mid hover:text-accent transition-colors">
                      {r.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile list */}
        <div className="sm:hidden space-y-2">
          {REPS.map((r, i) => (
            <div key={i} className="border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wide text-accent">{r.region}</span>
              </div>
              <p className="font-bold text-ink text-sm mb-2.5">{r.name}</p>
              <div className="flex flex-col gap-1">
                <a href={`tel:${r.tel.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-[13px] text-ink-mid hover:text-accent transition-colors">
                  <span className="text-[10px] font-mono text-ink-light w-10 shrink-0">Tel.</span>
                  {r.tel}
                </a>
                <a href={`mailto:${r.email}`}
                  className="flex items-center gap-2 text-[13px] text-ink-mid hover:text-accent transition-colors">
                  <span className="text-[10px] font-mono text-ink-light w-10 shrink-0">Email</span>
                  <span className="truncate">{r.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ETAR + quick actions ── */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-12 sm:py-16 grid lg:grid-cols-2 gap-6">

          {/* ETAR card */}
          <div className="bg-ink rounded-2xl p-7 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-accent uppercase tracking-[2px] bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full mb-5">
                Ingyenes
              </span>
              <h3 className="font-black text-paper text-xl tracking-tight mb-2">ETAR – Digitális nyilvántartó</h3>
              <p className="text-paper/45 text-[13px] leading-relaxed">
                Az EBSz szerinti kötelező üzemeltetői nyilvántartó. Lejárat-figyelmeztetés, dokumentumtároló – díjmentesen.
              </p>
            </div>
            <a href="mailto:hitb@h-itb.hu?subject=ETAR regisztráció"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-h text-paper font-semibold px-5 py-3 rounded text-sm transition-colors self-start">
              Regisztráció →
            </a>
          </div>

          {/* Quick info */}
          <div className="border border-border rounded-2xl p-7 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <p className="text-[10px] font-mono text-ink-light uppercase tracking-[2px] mb-5">H-ITB Kft.</p>
              <div className="space-y-4 text-[14px]">
                {[
                  { label: "Cím",        value: "1119 Budapest, Kelenvölgyi határsor 5." },
                  { label: "Telefon",    value: "+36 1 205 6208",   href: "tel:+3612056208" },
                  { label: "E-mail",     value: "hitb@h-itb.hu",    href: "mailto:hitb@h-itb.hu" },
                  { label: "Nyitvatartás", value: "H–P  8:00–17:00" },
                ].map(row => (
                  <div key={row.label} className="flex gap-4">
                    <span className="text-ink-light text-[12px] font-mono w-24 shrink-0 pt-px">{row.label}</span>
                    {row.href
                      ? <a href={row.href} className="text-ink hover:text-accent transition-colors font-medium">{row.value}</a>
                      : <span className="text-ink-mid">{row.value}</span>
                    }
                  </div>
                ))}
              </div>
            </div>
            <Link href="/termekek"
              className="inline-flex items-center gap-2 border border-border hover:border-ink text-ink-mid hover:text-ink font-semibold px-5 py-3 rounded text-sm transition-all self-start">
              Termékkatalógus →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
