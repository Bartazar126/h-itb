"use client";

import { useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type Selections = {
  task?: string;
  capacity?: string;
  drive?: string;
  env?: string;
  material?: string;
};

type Result = {
  name: string;
  category: string;
  categoryColor: string;
  desc: string;
  capacity?: string;
  standard?: string;
  catalog?: boolean;
  score: number;
};

/* ─────────────────────────────────────────────
   PRODUCT DATABASE (subset of catalog)
───────────────────────────────────────────── */
const ALL_PRODUCTS = [
  // ── EMELÉS
  { name: "Egytartós híddaru",            category: "Emelőgépek",     categoryColor: "#F97316", desc: "Könnyű és közepes ipari csarnokba, elektromos meghajtás", capacity: "0,5–20 t", standard: "EN 15011", catalog: true,
    tags: { task: "emeles", drive: ["elektromos"], env: ["belter","kulter"], capacity: ["05-5","5-20"], material: ["barmilyen"] } },
  { name: "Kéttartós híddaru",            category: "Emelőgépek",     categoryColor: "#F97316", desc: "Nehézipari csarnokba, kettős tartószerkezet, nagy teherbírás", capacity: "5–100 t", standard: "EN 15011", catalog: true,
    tags: { task: "emeles", drive: ["elektromos"], env: ["belter","kulter"], capacity: ["5-20","20+"], material: ["barmilyen"] } },
  { name: "Konzoldaru",                   category: "Emelőgépek",     categoryColor: "#F97316", desc: "Munkaállomáshoz rögzített forgókaros daru", capacity: "0,1–5 t",
    tags: { task: "emeles", drive: ["elektromos","kezi"], env: ["belter"], capacity: ["0-05","05-5"], material: ["barmilyen"] } },
  { name: "El. futómacska – láncos",      category: "Emelőgépek",     categoryColor: "#F97316", desc: "Meglévő tartószerkezetre szerelhető, kompakt", capacity: "0,5–20 t", catalog: true,
    tags: { task: "emeles", drive: ["elektromos"], env: ["belter","kulter"], capacity: ["05-5","5-20"], material: ["barmilyen"] } },
  { name: "El. futómacska – drótköteles", category: "Emelőgépek",     categoryColor: "#F97316", desc: "Nagy ciklusszámú, nehézipari alkalmazáshoz", capacity: "1–80 t", catalog: true,
    tags: { task: "emeles", drive: ["elektromos"], env: ["belter","kulter"], capacity: ["5-20","20+"], material: ["barmilyen"] } },
  { name: "Kézi láncos csörlő (GUTMAN)", category: "Emelőgépek",     categoryColor: "#F97316", desc: "Hálózatfüggetlen, hordozható, bárhol használható", capacity: "0,5–30 t", catalog: true,
    tags: { task: "emeles", drive: ["kezi"], env: ["belter","kulter","atex"], capacity: ["05-5","5-20"], material: ["barmilyen"] } },
  { name: "Pneumatikus csörlő",           category: "Emelőgépek",     categoryColor: "#F97316", desc: "ATEX tanúsított, szikramentes, robbanásveszélyes zónába", capacity: "0,25–10 t",
    tags: { task: "emeles", drive: ["pneumatikus"], env: ["atex","kulter","belter"], capacity: ["0-05","05-5","5-20"], material: ["barmilyen"] } },
  { name: "Csavaros emelő (GUTMAN)",      category: "Emelőgépek",     categoryColor: "#F97316", desc: "Precíziós pozícionálás, lassú terhelés", capacity: "1–25 t", catalog: true,
    tags: { task: "emeles", drive: ["kezi"], env: ["belter","kulter"], capacity: ["05-5","5-20"], material: ["barmilyen"] } },
  { name: "Mágnesemelő",                  category: "Emelőgépek",     categoryColor: "#F97316", desc: "Ferromágneses lapáru és rúdanyag emeléshez, gyors kezelés",
    tags: { task: "emeles", drive: ["elektromos","kezi"], env: ["belter","kulter"], capacity: ["0-05","05-5"], material: ["fem","laparu"] } },
  { name: "Vákuumos emelő",               category: "Emelőgépek",     categoryColor: "#F97316", desc: "Sík és enyhén ívelt felületre, sérülésmentesen",
    tags: { task: "emeles", drive: ["elektromos","pneumatikus"], env: ["belter"], capacity: ["0-05","05-5"], material: ["laparu","uveg","manyag"] } },
  { name: "Acélöntvény horog (GUTMAN)",   category: "Emelőgépek",     categoryColor: "#F97316", desc: "Biztosítókapoccsal, forgó, DIN szabvány szerinti", capacity: "1–100 t", standard: "DIN / EN 1677", catalog: true,
    tags: { task: "emeles", drive: ["barmilyen"], env: ["belter","kulter"], capacity: ["05-5","5-20","20+"], material: ["barmilyen"] } },
  { name: "Szorítókapocs (lapáru)",       category: "Emelőgépek",     categoryColor: "#F97316", desc: "Acél lapáru, lemezek függőleges és vízszintes emelése", capacity: "0,5–30 t", catalog: true,
    tags: { task: "emeles", drive: ["barmilyen"], env: ["belter","kulter"], capacity: ["05-5","5-20"], material: ["laparu","fem"] } },

  // ── ANYAGMOZGATÁS
  { name: "Elektromos targonca",          category: "Anyagmozgatás",  categoryColor: "#10B981", desc: "Beltéri Li-Ion akkumulátoros targonca, alacsony zajszint", capacity: "1–5 t", catalog: true,
    tags: { task: "anyag", drive: ["elektromos"], env: ["belter"], capacity: ["05-5","5-20"], material: ["barmilyen"] } },
  { name: "Kézi raklapszállító",          category: "Anyagmozgatás",  categoryColor: "#10B981", desc: "Hidraulikus, EUR-raklap szélesség, egyszerű kezelés", capacity: "2,5 t",
    tags: { task: "anyag", drive: ["kezi"], env: ["belter","kulter"], capacity: ["05-5"], material: ["barmilyen"] } },
  { name: "Elektromos raklapszállító",    category: "Anyagmozgatás",  categoryColor: "#10B981", desc: "Önfutó, akkumulátoros, kis szintkülönbségekhez", capacity: "1,5–2,5 t", catalog: true,
    tags: { task: "anyag", drive: ["elektromos"], env: ["belter"], capacity: ["05-5"], material: ["barmilyen"] } },
  { name: "Állványos emelőkocsi",         category: "Anyagmozgatás",  categoryColor: "#10B981", desc: "Szűk helyen is manőverezhető, alacsony beépítési igény", capacity: "1–3 t",
    tags: { task: "anyag", drive: ["kezi","elektromos"], env: ["belter"], capacity: ["05-5"], material: ["barmilyen"] } },
  { name: "Villaforgató adapter",         category: "Anyagmozgatás",  categoryColor: "#10B981", desc: "Targoncára szerelhető, hengeres és tekercses áruhoz", capacity: "2–5 t",
    tags: { task: "anyag", drive: ["elektromos"], env: ["belter","kulter"], capacity: ["05-5","5-20"], material: ["henger","tekercs"] } },
  { name: "Hengerszorító adapter",        category: "Anyagmozgatás",  categoryColor: "#10B981", desc: "Tekercsek és hengerek szorítva emelhetők", capacity: "1–10 t",
    tags: { task: "anyag", drive: ["elektromos"], env: ["belter","kulter"], capacity: ["05-5","5-20"], material: ["henger"] } },

  // ── RÖGZÍTÉS
  { name: "Rátchetes szíj (GUTMAN)",     category: "Rögzítés",       categoryColor: "#8B5CF6", desc: "Teherfuvar-rögzítés szállítás közben, EN 12195-2", standard: "EN 12195-2", catalog: true,
    tags: { task: "rogzites", drive: ["kezi"], env: ["belter","kulter"], capacity: ["0-05","05-5","5-20"], material: ["barmilyen"] } },
  { name: "Láncos rögzítő szett",        category: "Rögzítés",       categoryColor: "#8B5CF6", desc: "Acél- és nehézteher-szállítmányhoz, EN 12195-3", standard: "EN 12195-3",
    tags: { task: "rogzites", drive: ["kezi"], env: ["belter","kulter"], capacity: ["5-20","20+"], material: ["fem","barmilyen"] } },
  { name: "Emelőlánc (GUTMAN)",          category: "Rögzítés",       categoryColor: "#8B5CF6", desc: "8-as és 10-es osztályú hegesztett láncszem, EN 818", standard: "EN 818", catalog: true,
    tags: { task: "rogzites", drive: ["barmilyen"], env: ["belter","kulter"], capacity: ["05-5","5-20","20+"], material: ["barmilyen"] } },
  { name: "Biztonsági heveder",          category: "Rögzítés",       categoryColor: "#8B5CF6", desc: "Teljes testpánt, mellkastartó leesés ellen, EN 361", standard: "EN 361",
    tags: { task: "rogzites", drive: ["barmilyen"], env: ["belter","kulter"], capacity: ["0-05"], material: ["barmilyen"] } },
  { name: "Önvisszatekerős zuhanásgátló",category: "Rögzítés",       categoryColor: "#8B5CF6", desc: "Automatikus kábel-visszahúzás, 2–30 m mélységig", capacity: "2–30 m",
    tags: { task: "rogzites", drive: ["barmilyen"], env: ["belter","kulter"], capacity: ["0-05"], material: ["barmilyen"] } },

  // ── SZAKSZOLGÁLAT
  { name: "Időszaki biztonsági felülvizsgálat", category: "Szakszolgálat", categoryColor: "#3B82F6", desc: "Kötelező 6 vagy 12 havonként az EBSz előírásai szerint", standard: "EBSz",
    tags: { task: "szerviz", drive: ["barmilyen"], env: ["belter","kulter"], capacity: ["barmilyen"], material: ["barmilyen"] } },
  { name: "Üzembe helyezési vizsgálat",  category: "Szakszolgálat",  categoryColor: "#3B82F6", desc: "Új vagy áthelyezett berendezés kötelező vizsgálata",
    tags: { task: "szerviz", drive: ["barmilyen"], env: ["belter","kulter"], capacity: ["barmilyen"], material: ["barmilyen"] } },
  { name: "Megelőző karbantartás",       category: "Szakszolgálat",  categoryColor: "#3B82F6", desc: "Tervezett, rendszeres időközönkénti karbantartás",
    tags: { task: "szerviz", drive: ["barmilyen"], env: ["belter","kulter"], capacity: ["barmilyen"], material: ["barmilyen"] } },
  { name: "ETAR – Digitális nyilvántartó", category: "Szakszolgálat", categoryColor: "#3B82F6", desc: "Ingyenes, web-alapú nyilvántartó, lejáratfigyelővel", standard: "Ingyenes",
    tags: { task: "szerviz", drive: ["barmilyen"], env: ["belter","kulter"], capacity: ["barmilyen"], material: ["barmilyen"] } },
];

/* ─────────────────────────────────────────────
   SCORING ENGINE
───────────────────────────────────────────── */
function scoreProducts(sel: Selections): Result[] {
  return ALL_PRODUCTS
    .map(p => {
      let score = 0;
      const t = p.tags;

      if (sel.task && t.task === sel.task) score += 10;
      else if (sel.task && t.task !== sel.task) score -= 20;

      if (sel.drive && (t.drive.includes(sel.drive) || t.drive.includes("barmilyen"))) score += 4;
      if (sel.env   && (t.env.includes(sel.env)     || t.env.includes("barmilyen")))   score += 4;
      if (sel.capacity && (t.capacity.includes(sel.capacity) || t.capacity.includes("barmilyen"))) score += 5;
      if (sel.material && (t.material.includes(sel.material) || t.material.includes("barmilyen"))) score += 3;

      // ATEX penalty: only pneumatic/manual allowed
      if (sel.env === "atex" && sel.drive === "elektromos") score -= 8;

      return { name: p.name, category: p.category, categoryColor: p.categoryColor,
               desc: p.desc, capacity: p.capacity, standard: p.standard,
               catalog: p.catalog, score };
    })
    .filter(p => p.score > 8)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}

/* ─────────────────────────────────────────────
   STEP DATA
───────────────────────────────────────────── */
const TASK_OPTIONS = [
  { id: "emeles",   label: "Emelés",          sub: "Daruk, csörlők, teherfelvevők",   icon: <CraneIcon />,   color: "#F97316" },
  { id: "anyag",    label: "Anyagmozgatás",   sub: "Targoncák, raklapszállítók",      icon: <ForkIcon />,    color: "#10B981" },
  { id: "rogzites", label: "Rögzítés",        sub: "Szíjak, láncok, leesés elleni",   icon: <ChainIcon />,   color: "#8B5CF6" },
  { id: "szerviz",  label: "Szakszolgálat",   sub: "Vizsgálat, karbantartás, ETAR",   icon: <WrenchIcon />,  color: "#3B82F6" },
];

const CAPACITY_OPTIONS = [
  { id: "0-05",  label: "< 0,5 t",     sub: "Könnyű, kézi munka" },
  { id: "05-5",  label: "0,5 – 5 t",   sub: "Közepes ipari" },
  { id: "5-20",  label: "5 – 20 t",    sub: "Nehézipari" },
  { id: "20+",   label: "20 t felett", sub: "Speciális alkalmazás" },
];

const DRIVE_OPTIONS = [
  { id: "elektromos",   label: "Elektromos",   sub: "230/400V hálózat" },
  { id: "kezi",         label: "Kézi / mech.", sub: "Hálózatfüggetlen" },
  { id: "pneumatikus",  label: "Pneumatikus",  sub: "Levegős, ATEX-kompatibilis" },
];

const ENV_OPTIONS = [
  { id: "belter",  label: "Beltér",    sub: "Fedett csarnok, raktár" },
  { id: "kulter",  label: "Kültér",    sub: "Eső, UV, IP65 igény" },
  { id: "atex",    label: "ATEX zóna", sub: "Robbanásveszélyes környezet" },
];

/* steps: which ones to show per task */
function getSteps(task?: string) {
  if (!task || task === "szerviz") return ["task", "env", "results"];
  if (task === "rogzites") return ["task", "capacity", "env", "results"];
  return ["task", "capacity", "drive", "env", "results"];
}

/* ─────────────────────────────────────────────
   INLINE SVG ICONS
───────────────────────────────────────────── */
function CraneIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 40V16M8 16L36 8M36 8V24M8 16h6" />
      <rect x="32" y="24" width="8" height="12" rx="1" />
      <line x1="36" y1="36" x2="36" y2="44" />
      <circle cx="36" cy="45" r="2" fill="currentColor" stroke="none" />
      <line x1="8" y1="40" x2="44" y2="40" />
    </svg>
  );
}
function ForkIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="28" width="28" height="10" rx="2" />
      <path d="M32 33h8a2 2 0 000-4H32" />
      <line x1="12" y1="28" x2="12" y2="18" />
      <line x1="20" y1="28" x2="20" y2="18" />
      <line x1="10" y1="18" x2="22" y2="18" />
      <circle cx="8" cy="38" r="4" />
      <circle cx="28" cy="38" r="4" />
    </svg>
  );
}
function ChainIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 30l-4 4a6 6 0 008 8l4-4M30 18l4-4a6 6 0 00-8-8l-4 4" />
      <line x1="20" y1="28" x2="28" y2="20" />
      <path d="M14 20h6M28 28h6" />
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M36 8a8 8 0 00-8 10L10 36a4 4 0 005 5l18-18a8 8 0 0010-8 8 8 0 01-5 2l-3-3a8 8 0 012-5z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   OPTION CARD
───────────────────────────────────────────── */
function OptionCard({
  id, label, sub, icon, color, active, onClick,
}: {
  id: string; label: string; sub: string; icon?: React.ReactNode;
  color?: string; active: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative text-left w-full rounded-2xl border-2 p-5 transition-all ${
        active
          ? "border-current shadow-lg scale-[1.02]"
          : "border-border hover:border-ink/20 hover:shadow-md bg-paper"
      }`}
      style={active ? { borderColor: color || "#0A0A0A", backgroundColor: `color-mix(in srgb, ${color || "#0A0A0A"} 6%, white)` } : {}}>
      {active && (
        <span className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px]"
          style={{ backgroundColor: color || "#0A0A0A" }}>✓</span>
      )}
      {icon && (
        <div className={`mb-3 transition-colors ${active ? "" : "text-ink-light group-hover:text-ink-mid"}`}
          style={active ? { color: color } : {}}>
          {icon}
        </div>
      )}
      <div className="font-bold text-ink text-[15px] leading-tight">{label}</div>
      <div className="text-ink-light text-[12px] mt-1 leading-snug">{sub}</div>
    </button>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function MegodasClient() {
  const [sel, setSel] = useState<Selections>({});
  const [stepIdx, setStepIdx] = useState(0);

  const steps = getSteps(sel.task);
  const currentStep = steps[stepIdx];
  const isLastStep = currentStep === "results";

  const results = isLastStep ? scoreProducts(sel) : [];

  function pick(key: keyof Selections, value: string) {
    setSel(prev => ({ ...prev, [key]: value }));
  }

  function next() {
    // Recalculate steps whenever task changes
    const s = getSteps(sel.task);
    if (stepIdx < s.length - 1) setStepIdx(i => i + 1);
  }

  function back() {
    if (stepIdx > 0) setStepIdx(i => i - 1);
  }

  function reset() {
    setSel({});
    setStepIdx(0);
  }

  // Can we proceed?
  const canProceed =
    (currentStep === "task"     && !!sel.task)     ||
    (currentStep === "capacity" && !!sel.capacity) ||
    (currentStep === "drive"    && !!sel.drive)    ||
    (currentStep === "env"      && !!sel.env);

  const taskColor = TASK_OPTIONS.find(t => t.id === sel.task)?.color;

  return (
    <div className="min-h-screen bg-paper-warm/40">

      {/* ── Header ── */}
      <div className="bg-paper border-b border-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 py-8">
          <div className="flex items-center gap-2 text-ink-light text-[11px] font-mono mb-4">
            <Link href="/" className="hover:text-ink transition-colors">Főoldal</Link>
            <span>/</span>
            <span>Termékválasztó</span>
          </div>
          <h1 className="font-black text-ink text-2xl sm:text-4xl tracking-tight mb-2">
            Termékválasztó
          </h1>
          <p className="text-ink-mid text-[14px]">
            Válassza ki a feladat paramétereit – a megfelelő terméket megtaláljuk.
          </p>
        </div>
      </div>

      {/* ── Progress bar ── */}
      {!isLastStep && (
        <div className="bg-paper border-b border-border">
          <div className="max-w-4xl mx-auto px-5 sm:px-10 py-4 flex items-center gap-3">
            {steps.filter(s => s !== "results").map((s, i) => {
              const labels: Record<string, string> = { task: "Feladat", capacity: "Teherbírás", drive: "Meghajtás", env: "Környezet" };
              const done = i < stepIdx;
              const active = i === stepIdx;
              return (
                <div key={s} className="flex items-center gap-2">
                  {i > 0 && <div className={`h-px w-6 sm:w-10 shrink-0 ${done ? "bg-ink" : "bg-border"}`} />}
                  <div className="flex items-center gap-1.5">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${
                      done  ? "bg-ink text-paper" :
                      active ? "text-paper" : "bg-border text-ink-light"
                    }`} style={active ? { backgroundColor: taskColor || "#0A0A0A" } : {}}>
                      {done ? "✓" : i + 1}
                    </div>
                    <span className={`text-[12px] font-medium hidden sm:block ${active ? "text-ink" : done ? "text-ink-mid" : "text-ink-light"}`}>
                      {labels[s]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Step content ── */}
      <div className="max-w-4xl mx-auto px-5 sm:px-10 py-10 sm:py-14">

        {/* STEP: task */}
        {currentStep === "task" && (
          <div>
            <h2 className="font-black text-ink text-xl sm:text-3xl mb-2">Mi a feladat?</h2>
            <p className="text-ink-mid text-[14px] mb-8">Válasszon az alkalmazási területek közül.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {TASK_OPTIONS.map(opt => (
                <OptionCard key={opt.id} {...opt} active={sel.task === opt.id}
                  onClick={() => { pick("task", opt.id); setSel(prev => ({ task: opt.id })); }} />
              ))}
            </div>
          </div>
        )}

        {/* STEP: capacity */}
        {currentStep === "capacity" && (
          <div>
            <h2 className="font-black text-ink text-xl sm:text-3xl mb-2">Mekkora a teherbírás igény?</h2>
            <p className="text-ink-mid text-[14px] mb-8">A mozgatandó vagy rögzítendő teher maximális tömege.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CAPACITY_OPTIONS.map(opt => (
                <OptionCard key={opt.id} {...opt} color={taskColor} active={sel.capacity === opt.id}
                  onClick={() => pick("capacity", opt.id)} />
              ))}
            </div>
          </div>
        )}

        {/* STEP: drive */}
        {currentStep === "drive" && (
          <div>
            <h2 className="font-black text-ink text-xl sm:text-3xl mb-2">Milyen meghajtás?</h2>
            <p className="text-ink-mid text-[14px] mb-8">Hálózat, kézi erő, vagy sűrített levegő alapú meghajtás.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {DRIVE_OPTIONS.map(opt => (
                <OptionCard key={opt.id} {...opt} color={taskColor} active={sel.drive === opt.id}
                  onClick={() => pick("drive", opt.id)} />
              ))}
            </div>
          </div>
        )}

        {/* STEP: env */}
        {currentStep === "env" && (
          <div>
            <h2 className="font-black text-ink text-xl sm:text-3xl mb-2">Milyen a munkakörnyezet?</h2>
            <p className="text-ink-mid text-[14px] mb-8">A berendezés üzemelési helyének jellemzői.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {ENV_OPTIONS.map(opt => (
                <OptionCard key={opt.id} {...opt} color={taskColor} active={sel.env === opt.id}
                  onClick={() => pick("env", opt.id)} />
              ))}
            </div>
          </div>
        )}

        {/* STEP: results */}
        {currentStep === "results" && (
          <div>
            <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
              <div>
                <h2 className="font-black text-ink text-xl sm:text-3xl">
                  {results.length > 0 ? `${results.length} ajánlott termék` : "Nem találtunk egyező terméket"}
                </h2>
                <p className="text-ink-mid text-[14px] mt-1">
                  A kiválasztott paraméterek alapján.
                </p>
              </div>
              <button onClick={reset}
                className="text-[13px] font-medium text-ink-mid hover:text-ink border border-border hover:border-ink px-4 py-2 rounded-lg transition-all">
                ← Új keresés
              </button>
            </div>

            {/* Selection summary */}
            <div className="flex flex-wrap gap-2 mb-8 mt-4">
              {Object.entries(sel).map(([k, v]) => {
                const labelMap: Record<string, Record<string, string>> = {
                  task:     { emeles: "Emelés", anyag: "Anyagmozgatás", rogzites: "Rögzítés", szerviz: "Szakszolgálat" },
                  capacity: { "0-05": "< 0,5 t", "05-5": "0,5–5 t", "5-20": "5–20 t", "20+": "20 t+" },
                  drive:    { elektromos: "Elektromos", kezi: "Kézi", pneumatikus: "Pneumatikus" },
                  env:      { belter: "Beltér", kulter: "Kültér", atex: "ATEX" },
                };
                const label = labelMap[k]?.[v] ?? v;
                return (
                  <span key={k} className="inline-flex items-center gap-1.5 text-[12px] font-medium text-paper px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: taskColor || "#0A0A0A" }}>
                    {label}
                  </span>
                );
              })}
            </div>

            {results.length === 0 ? (
              <div className="text-center py-16 border border-border rounded-2xl bg-paper">
                <p className="text-ink-mid text-[14px] mb-4">
                  A megadott kombináció nem egyezik katalógusunk termékeivel.<br />
                  Lépjen kapcsolatba szakértőnkkel – egyedi megoldást találunk.
                </p>
                <Link href="/kapcsolat"
                  className="inline-flex items-center gap-2 bg-ink text-paper font-semibold px-5 py-3 rounded-lg text-sm hover:bg-ink-mid transition-colors">
                  Kapcsolat →
                </Link>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                  {results.map(r => (
                    <div key={r.name}
                      className="bg-paper border border-border rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-ink text-[14px] leading-snug flex-1">{r.name}</span>
                        {r.catalog && (
                          <span className="shrink-0 text-[9px] font-black text-white px-1.5 py-0.5 rounded leading-none"
                            style={{ backgroundColor: r.categoryColor }}>PDF</span>
                        )}
                      </div>
                      <p className="text-ink-light text-[12px] leading-relaxed flex-1">{r.desc}</p>
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                        <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded"
                          style={{ backgroundColor: r.categoryColor }}>{r.category}</span>
                        {r.capacity && (
                          <span className="text-[10px] font-mono bg-paper-warm border border-border text-ink-mid px-2 py-0.5 rounded">{r.capacity}</span>
                        )}
                        {r.standard && (
                          <span className="text-[10px] font-mono bg-paper-warm border border-border text-ink-light px-2 py-0.5 rounded">{r.standard}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border border-border rounded-2xl p-6 sm:p-8 bg-paper flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div>
                    <h3 className="font-black text-ink text-lg mb-1">Ajánlatot kér?</h3>
                    <p className="text-ink-mid text-[13px]">
                      Küldjük el az eredményt – szakértőnk pontosítja és árajánlatot ad.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2.5 shrink-0">
                    <Link href="/kapcsolat"
                      className="inline-flex items-center gap-2 bg-ink hover:bg-ink-mid text-paper font-semibold px-5 py-3 rounded-lg text-[13px] transition-colors">
                      Ajánlatot kérek →
                    </Link>
                    <Link href="/termekek"
                      className="inline-flex items-center gap-2 border border-border hover:border-ink text-ink-mid hover:text-ink font-semibold px-5 py-3 rounded-lg text-[13px] transition-all">
                      Teljes katalógus
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* ── Navigation buttons ── */}
        {!isLastStep && (
          <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
            <button onClick={back} disabled={stepIdx === 0}
              className="text-[13px] font-medium text-ink-mid hover:text-ink disabled:opacity-30 disabled:pointer-events-none transition-colors px-4 py-2.5">
              ← Vissza
            </button>
            <button onClick={next} disabled={!canProceed}
              className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-xl text-[14px] text-white transition-all disabled:opacity-30 disabled:pointer-events-none hover:opacity-90"
              style={{ backgroundColor: canProceed ? (taskColor || "#0A0A0A") : "#9CA3AF" }}>
              {stepIdx === steps.length - 2 ? "Eredmény →" : "Következő →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
