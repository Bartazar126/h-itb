"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Data model ─── */
interface Option {
  id: string;
  icon: string;
  label: string;
  sublabel?: string;
}

interface Step {
  id: string;
  question: string;
  hint?: string;
  options: Option[];
}

interface Result {
  title: string;
  desc: string;
  products: string[];
  href: string;
  icon: string;
  primary?: boolean;
}

/* ─── Steps ─── */
const steps: Step[] = [
  {
    id: "feladat",
    question: "Mi az alapvető feladata?",
    hint: "Válassza ki a leginkább illő tevékenységet.",
    options: [
      { id: "emeles",    icon: "⬆️",  label: "Emelés és leengedés",    sublabel: "Vertikális mozgatás" },
      { id: "mozgatas",  icon: "↔️",  label: "Vízszintes mozgatás",    sublabel: "Tolás, húzás, szállítás" },
      { id: "rakogas",   icon: "📦",  label: "Rakodás / anyagkezelés", sublabel: "Raklap, doboz, ömlesztett" },
      { id: "rogzites",  icon: "🔒",  label: "Rögzítés és biztosítás", sublabel: "Szállítás közben" },
      { id: "vedelem",   icon: "🦺",  label: "Személyi védelem",       sublabel: "Leesés elleni védelem" },
    ],
  },
  {
    id: "teher",
    question: "Milyen típusú a kezelt teher?",
    hint: "A teher formája meghatározza a megfelelő teherfelvevő eszközt.",
    options: [
      { id: "raklap",    icon: "🟫",  label: "Raklap / doboz",     sublabel: "Szabvány EUR raklap" },
      { id: "lap",       icon: "🔲",  label: "Acéllap / lemez",    sublabel: "Sík ferromágneses felület" },
      { id: "henger",    icon: "⭕",  label: "Hengeres áru",       sublabel: "Cső, rúd, tekercs" },
      { id: "omleszt",   icon: "🟤",  label: "Ömlesztett anyag",   sublabel: "Por, granulátum, kavics" },
      { id: "egyedi",    icon: "🔧",  label: "Egyedi gép / alkatr.", sublabel: "Formailag nem tipikus" },
    ],
  },
  {
    id: "tomeg",
    question: "Mekkora a maximális tömeg?",
    hint: "A tervezett legnagyobb darab súlya, 20%-os biztonsági ráhagyással számolva.",
    options: [
      { id: "s",   icon: "🪶", label: "< 250 kg",      sublabel: "Könnyű" },
      { id: "m",   icon: "⚖️", label: "250 kg – 1 t",  sublabel: "Közepes" },
      { id: "l",   icon: "🏋️", label: "1 – 10 t",      sublabel: "Nehéz" },
      { id: "xl",  icon: "🏗️", label: "10 – 50 t",     sublabel: "Nagyon nehéz" },
      { id: "xxl", icon: "🚢", label: "> 50 t",         sublabel: "Nehézipar" },
    ],
  },
  {
    id: "kornyezet",
    question: "Milyen a munkakörnyezet?",
    hint: "A környezeti feltételek befolyásolják a védettségi osztályt és az anyagválasztást.",
    options: [
      { id: "csarnok",   icon: "🏭", label: "Zárt csarnok / raktár", sublabel: "IP54, normál hőmérséklet" },
      { id: "felnyitott",icon: "🏚️", label: "Félnyitott tér",        sublabel: "Időjárásnak kitett" },
      { id: "kulter",    icon: "🌧️", label: "Szabadtér",             sublabel: "Esőálló, IP65+" },
      { id: "specialis", icon: "⚠️", label: "Speciális környezet",   sublabel: "Ex-zóna, tisztatér, korrozív" },
    ],
  },
];

/* ─── Result logic ─── */
function getResults(answers: Record<string, string>): Result[] {
  const { feladat, teher, tomeg, kornyezet } = answers;
  const results: Result[] = [];

  // Lifting products
  if (feladat === "emeles" || feladat === "mozgatas") {
    if (tomeg === "s" || tomeg === "m") {
      results.push({
        icon: "⛓️",
        title: "Kézi / elektromos csörlők",
        desc: "Kis és közepes terhelésre ideális, falra vagy tartószerkezetre szerelhető emelőberendezések.",
        products: ["Kézi láncos csörlő (GUTMAN)", "Elektromos láncos csörlő", "Villamos emelő"],
        href: "/termekek#emelo-berendezesek",
        primary: true,
      });
    }
    if (tomeg === "l" || tomeg === "xl") {
      results.push({
        icon: "🏗️",
        title: "Híddaru rendszer",
        desc: "Egy- vagy kéttartós híddaru futómacskával, az Ön csarnokméretéhez igazítva.",
        products: ["Egytartós híddaru", "Kéttartós híddaru", "Elektromos futómacska"],
        href: "/termekek#daruk",
        primary: true,
      });
    }
    if (tomeg === "xxl") {
      results.push({
        icon: "🏗️",
        title: "Nehézipari daru megoldás",
        desc: "Kéttartós híddaru vagy speciális daru rendszer, egyedi tervezéssel.",
        products: ["Kéttartós híddaru (nehézipar)", "Drótköteles futómacska"],
        href: "/termekek#daruk",
        primary: true,
      });
    }
  }

  // Load handling by type
  if (teher === "lap") {
    results.push({
      icon: "🔲",
      title: "Mágnesemelő / lapáru szorítókapocs",
      desc: "Acéllap, lemez és profil emeléséhez optimális teherfelvevő eszközök.",
      products: ["Mágnesemelő", "Szorítókapocs (lapáru)"],
      href: "/termekek#teherfelvevok",
    });
  }
  if (teher === "henger") {
    results.push({
      icon: "⭕",
      title: "Hengerszorító adapter / C-horog heveder",
      desc: "Acélcsövek, rudak és tekercsek biztonságos kezeléséhez.",
      products: ["Hengerszorító adapter", "Csövemelő heveder (C-horog)"],
      href: "/termekek#adapterek",
    });
  }
  if (teher === "raklap") {
    results.push({
      icon: "🚜",
      title: "Targonca és raklapszállító",
      desc: "Raklap mozgatásához és raktározáshoz megfelelő targoncák és adapterek.",
      products: ["Elektromos targonca", "Kézi raklapszállító", "Elektromos raklapszállító"],
      href: "/termekek#targoncak",
    });
  }

  // Rakodás/anyagkezelés
  if (feladat === "rakogas") {
    results.push({
      icon: "🚜",
      title: "Anyagmozgatási megoldás",
      desc: "Rakodáshoz és anyagkezeléshez passzoló targoncák, adapterek és teherfelvevők.",
      products: ["Elektromos targonca", "Kézi raklapszállító", "Villaforgató adapter"],
      href: "/termekek#anyagmozgatas",
      primary: true,
    });
  }

  // Securing
  if (feladat === "rogzites") {
    results.push({
      icon: "🔒",
      title: "Rakományrögzítő szíjak és láncos szettek",
      desc: "MSZ EN 12195 szerinti rátchetes szíjak és láncos rögzítők közúti szállításhoz.",
      products: ["Rátchetes rögzítő szíj (GUTMAN)", "Láncos rögzítő szett"],
      href: "/termekek#rakomanyrogzitok",
      primary: true,
    });
  }

  // Fall protection
  if (feladat === "vedelem") {
    results.push({
      icon: "🦺",
      title: "Leesés elleni védelmi rendszer",
      desc: "Egyéni védőeszközök és horgonyzati pontok magasban végzett munkához.",
      products: ["Biztonsági heveder (egyéni)", "Önvisszatekerős zuhanásgátló", "Rögzítőpont rendszer"],
      href: "/termekek#leeses-vedelem",
      primary: true,
    });
  }

  // Special environment
  if (kornyezet === "specialis") {
    results.push({
      icon: "⚠️",
      title: "Speciális kivitel szükséges",
      desc: "Robbanásveszélyes, tisztatéri vagy korrozív környezetben egyedi konzultáció szükséges.",
      products: ["Pneumatikus csörlő (Ex-zóna)", "Rozsdamentes teherfelvevők"],
      href: "/kapcsolat",
    });
  }

  // Fallback
  if (results.length === 0) {
    results.push({
      icon: "🔧",
      title: "Emelőgép szakszolgálat",
      desc: "Vizsgálat, karbantartás és az ingyenes ETAR üzemeltetési nyilvántartó.",
      products: ["Időszaki biztonsági felülvizsgálat", "Karbantartás", "ETAR rendszer"],
      href: "/termekek#szakszolgalat",
      primary: true,
    });
  }

  return results;
}

/* ─── Component ─── */
export default function SolutionFinder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers]         = useState<Record<string, string>>({});
  const [done, setDone]               = useState(false);

  const step = steps[currentStep];
  const progress = ((currentStep) / steps.length) * 100;

  function handleSelect(optionId: string) {
    const newAnswers = { ...answers, [step.id]: optionId };
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setDone(true);
    }
  }

  function handleBack() {
    if (done) {
      setDone(false);
      return;
    }
    setCurrentStep((s) => Math.max(0, s - 1));
  }

  function handleReset() {
    setCurrentStep(0);
    setAnswers({});
    setDone(false);
  }

  const results = done ? getResults(answers) : [];

  /* ── Results view ── */
  if (done) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mx-auto mb-4">✅</div>
          <h2 className="text-navy text-2xl font-extrabold mb-2">Javasolt megoldások</h2>
          <p className="text-slate-500 text-sm">
            A megadott paraméterek alapján az alábbi termékcsoportok felelnek meg legjobban az igényeinek.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {results.map((r) => (
            <div
              key={r.title}
              className={`bg-white rounded-2xl border p-6 ${r.primary ? "border-accent shadow-md shadow-accent/10" : "border-slate-200"}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${r.primary ? "bg-accent/10" : "bg-slate-100"}`}>
                  {r.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-navy font-bold text-base">{r.title}</h3>
                    {r.primary && (
                      <span className="text-[10px] font-bold tracking-wide uppercase bg-accent text-white px-2 py-0.5 rounded">
                        Elsődleges
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm mb-3">{r.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {r.products.map((p) => (
                      <span key={p} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">{p}</span>
                    ))}
                  </div>
                  <Link
                    href={r.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    Részletek megtekintése →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-navy-light border border-navy/15 rounded-2xl p-6 mb-6">
          <h4 className="text-navy font-bold text-sm mb-3">Megadott paraméterek:</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(answers).map(([stepId, optId]) => {
              const s = steps.find((s) => s.id === stepId);
              const o = s?.options.find((o) => o.id === optId);
              return (
                <span key={stepId} className="text-xs bg-white border border-navy/15 text-navy px-3 py-1 rounded-full">
                  {s?.question.replace("?", "")}: <strong>{o?.label}</strong>
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/kapcsolat"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-h text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Ajánlatot kérek ezekre a termékekre
          </Link>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-navy text-slate-600 hover:text-navy font-semibold px-6 py-3 rounded-xl transition-colors bg-white"
          >
            Újraindítás
          </button>
        </div>
      </div>
    );
  }

  /* ── Questionnaire view ── */
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
          <span>{currentStep + 1}. lépés / {steps.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        {/* Step dots */}
        <div className="flex justify-between mt-3">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-all ${
                i < currentStep
                  ? "bg-accent border-accent text-white"
                  : i === currentStep
                  ? "border-accent text-accent bg-white"
                  : "border-slate-200 text-slate-300 bg-white"
              }`}
            >
              {i < currentStep ? "✓" : i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="text-center mb-8">
        <h2 className="text-navy text-2xl sm:text-3xl font-extrabold mb-2">{step.question}</h2>
        {step.hint && <p className="text-slate-500 text-sm">{step.hint}</p>}
      </div>

      {/* Options grid */}
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {step.options.map((opt) => {
          const isSelected = answers[step.id] === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`group flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md ${
                isSelected
                  ? "border-accent bg-accent/5 shadow-md"
                  : "border-slate-200 bg-white hover:border-accent/60"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-colors ${
                isSelected ? "bg-accent/15" : "bg-slate-100 group-hover:bg-accent/10"
              }`}>
                {opt.icon}
              </div>
              <div>
                <div className={`font-semibold text-sm ${isSelected ? "text-accent" : "text-navy"}`}>
                  {opt.label}
                </div>
                {opt.sublabel && (
                  <div className="text-slate-400 text-xs mt-0.5">{opt.sublabel}</div>
                )}
              </div>
              {isSelected && (
                <div className="ml-auto w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs flex-shrink-0">
                  ✓
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-navy disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Vissza
        </button>
        <button
          onClick={handleReset}
          className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
        >
          Elölről
        </button>
      </div>
    </div>
  );
}
