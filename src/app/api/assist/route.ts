import { NextRequest } from "next/server";
import OpenAI from "openai";
import type { AssistResponse } from "@/lib/types";
export type { AssistResponse };

/* ─── Mock responses (no API key) ─── */
const MOCK_RESPONSES: { keywords: string[]; response: AssistResponse }[] = [
  {
    keywords: ["acéllemez", "lemez", "acéllap", "lap", "acélt"],
    response: {
      summary: "Acéllemez (lapáru) emelési feladatot azonosítottam. Az optimális megoldás ferromágneses anyaghoz mágneses teherfelvevő, síkfelülethez szorítókapocs.",
      reasoning: [
        "Lapáru emeléséhez teherfelvevő eszköz szükséges (MSZ EN 13155)",
        "Beltéri emeléshez elektromos csörlő vagy híddaru javasolt",
        "Tömeg alapján: közepes–nehéz terhelési kategória",
      ],
      products: [
        { name: "Mágnesemelő", category: "Teherfelvevő eszközök", desc: "Ferromágneses lapáru biztonságos emeléséhez, 100–3000 kg", href: "/termekek#teherfelvevok" },
        { name: "Szorítókapocs (lapáru)", category: "Teherfelvevő eszközök", desc: "Függőleges és vízszintes acéllap-emeléshez", href: "/termekek#teherfelvevok" },
        { name: "Elektromos láncos csörlő", category: "Emelőberendezések", desc: "Beltéri csarnokba, 0,25–20 t teherbírásig", href: "/termekek#emelo-berendezesek" },
      ],
      standards: ["MSZ EN 13155 – Teherfelvevő eszközök", "MSZ EN 14492-1 – Motoros csörlők"],
      followUp: "Pontosítsa a tömeghatárt és a csarnok szerkezetét a pontos típusajánláshoz.",
    },
  },
  {
    keywords: ["kültér", "kültéri", "szabadtér", "esőben", "eső", "külső"],
    response: {
      summary: "Kültéri emelési feladathoz legalább IP54, ideálisan IP65 védettségű berendezés szükséges. Korrózióálló kivitel és zárt elektromos szekrény elengedhetetlen.",
      reasoning: [
        "Kültéri környezet → min. IP54, javasolt IP65 védettség",
        "Eső és por ellen zárt szekrényes elektromos egység",
        "Hőmérséklet-tűrés: −20 °C – +40 °C",
      ],
      products: [
        { name: "Kéttartós híddaru (kültéri)", category: "Daruk", desc: "IP65 védelemmel, korrózióálló kivitel, 5–50 t", href: "/termekek#daruk" },
        { name: "Elektromos drótköteles csörlő", category: "Emelőberendezések", desc: "Zárt szekrény, IP54+, kültéri távirányítóval", href: "/termekek#emelo-berendezesek" },
      ],
      standards: ["MSZ EN 14492-2 – Motoros daru-emelők", "IEC 60529 – IP védettségi osztályok"],
      followUp: "Milyen maximális terhet emel, és mekkora a szükséges fesztávolság?",
    },
  },
  {
    keywords: ["raklap", "raktár", "targonca", "tárolás", "logisztika"],
    response: {
      summary: "Raktári raklapkezeléshez elektromos targonca és szükség esetén raklapszállító kombináció ajánlott. A munkaidő és az átmozgatási ciklus dönti el az ideális hajtástípust.",
      reasoning: [
        "Napi 8 óra → elektromos hajtás (akkumulátoros) gazdaságos",
        "EUR-raklap: 800×1200 mm – standard villák elegendők",
        "Magasraktárhoz állványos emelőkocsi jön szóba",
      ],
      products: [
        { name: "Elektromos targonca", category: "Anyagmozgatás", desc: "1–5 t, Li-Ion akkumulátor, alacsony karbantartás", href: "/termekek#targoncak" },
        { name: "Elektromos raklapszállító", category: "Anyagmozgatás", desc: "1,5–2,5 t, toló gomb vagy ülős változatban", href: "/termekek#targoncak" },
        { name: "Kézi raklapszállító", category: "Anyagmozgatás", desc: "2,5 t, egyszerű hidraulikus rendszer", href: "/termekek#targoncak" },
      ],
      standards: ["MSZ EN ISO 3691-1 – Ipari targoncák", "EN 1726-1 – Targonca biztonság"],
      followUp: "Mekkora az átmozgatandó teher naponta és van-e szintkülönbség?",
    },
  },
  {
    keywords: ["robbanásveszélyes", "ex-zóna", "atex", "robbanás", "szikra"],
    response: {
      summary: "Robbanásveszélyes zónában (ATEX) kizárólag megfelelő minősítésű berendezés alkalmazható. Pneumatikus meghajtás az elektromos szikra-mentesség miatt előnyös.",
      reasoning: [
        "ATEX 2014/34/EU irányelv szerinti tanúsítás kötelező",
        "Zone 1/Zone 21 → Cat. II G/D minősítés szükséges",
        "Pneumatikus csörlő: nincs szikraveszély, robbanásbiztos",
      ],
      products: [
        { name: "Pneumatikus csörlő", category: "Emelőberendezések", desc: "Ex-zónás kivitel, ATEX tanúsított, 0,25–10 t", href: "/termekek#emelo-berendezesek" },
      ],
      standards: ["ATEX 2014/34/EU – Robbanásbiztos berendezések", "MSZ EN 13463 – Nem-elektromos berendezések"],
      followUp: "Melyik ATEX zónáról van szó (1, 2, 21, 22) és mi az emelési igény?",
    },
  },
];

const OFF_TOPIC: AssistResponse = {
  summary: "Ez a kérdés nem kapcsolódik szakterületeimhez. Emeléstechnikai, anyagmozgatási vagy teherfelvevő feladatokban tudok segíteni – például: daru, csörlő, targonca, rögzítés vagy leesés elleni védelem témában.",
  reasoning: [],
  products: [],
  standards: [],
  followUp: "Van emeléstechnikai vagy anyagmozgatási kérdése?",
};

const FALLBACK: AssistResponse = {
  summary: "A leírás alapján általános irányvonalat tudok adni. A pontos megoldáshoz kérem pontosítsa a tömegadatokat, a munkakörnyezetet és az emelési ciklust.",
  reasoning: [
    "Feladat típusa: emelés / anyagmozgatás",
    "Pontosabb paraméterek szükségesek az optimális ajánláshoz",
  ],
  products: [
    { name: "Elektromos láncos csörlő", category: "Emelőberendezések", desc: "Beltéri, 0,25–20 t – sokoldalú alaplépés", href: "/termekek#emelo-berendezesek" },
    { name: "Kézi láncos csörlő (GUTMAN)", category: "Emelőberendezések", desc: "0,5–30 t – hálózatfüggetlen megoldás", href: "/termekek#emelo-berendezesek" },
  ],
  standards: ["MSZ EN 14492-1 – Motoros csörlők"],
  followUp: "Pontosítsa: maximális tömeg, beltér/kültér, emelési magasság és napi ciklusszám?",
};

/* ─── System prompt ─── */
const SYSTEM_PROMPT = `Te H-ITB Kft. digitális műszaki asszisztense vagy – Magyarország vezető emeléstechnikai cége.
Feladatod: a felhasználó szöveges feladatleírása alapján emelő- és anyagmozgatási termékeket javasolni.

SZABÁLYOK:
- Mindig magyarul válaszolj.
- Vedd figyelembe az MSZ EN szabványokat (EN 14492, EN 13155, EN 818, ISO 3691 stb.).
- Legyen tömör és konkrét: ne adj általános tanácsokat, adj konkrét termékneveket.
- Ha az ATEX/robbanásveszélyes zóna szerepel, hangsúlyozd a minősítési kötelezettséget.
- Ha a kérdés NEM kapcsolódik emeléstechnikához, anyagmozgatáshoz, darukhoz, csörlőkhöz, targoncákhoz, teherfelvevőkhöz vagy ezzel rokon műszaki területekhez, AKKOR térj el a termékjavaslattól és adj vissza egy barátságos elutasítást. Ilyenkor a products és standards tömbök legyenek üresek, a summary magyarázza el röviden hogy ebben a témában nem tudsz segíteni, a followUp kérdezzen rá az emelési/mozgatási feladatra.

VISSZATÉRÍTÉSI FORMÁTUM (kizárólag JSON, semmi más szöveg):
{
  "summary": "1-2 mondatos összefoglalás",
  "reasoning": ["ok1", "ok2"],
  "products": [
    { "name": "termék neve", "category": "kategória", "desc": "rövid leírás", "href": "/termekek#id" }
  ],
  "standards": ["MSZ EN XXXXX – cím"],
  "followUp": "pontosító kérdés vagy üres string"
}

Érvényes href értékek:
/termekek#daruk · /termekek#emelo-berendezesek · /termekek#teherfelvevok
/termekek#anyagmozgatas · /termekek#targoncak · /termekek#szakszolgalat`;

/* ─── Mock lookup ─── */
const INDUSTRIAL_KEYWORDS = [
  "emel", "csörlő", "daru", "targonca", "raklap", "raktár", "acél", "lánc",
  "heveder", "rögzít", "hoist", "crane", "lift", "ipari", "üzem", "csarnok",
  "kültér", "beltér", "robbanás", "atex", "teherfelvev", "anyagmozgat",
  "szállít", "mozgat", "kötél", "horog", "kapocs", "mágnes", "vákuum",
];

function isIndustrial(msg: string): boolean {
  const lower = msg.toLowerCase();
  return INDUSTRIAL_KEYWORDS.some(k => lower.includes(k));
}

function getMockResponse(message: string): AssistResponse {
  if (!isIndustrial(message)) return OFF_TOPIC;
  const lower = message.toLowerCase();
  for (const mock of MOCK_RESPONSES) {
    if (mock.keywords.some(k => lower.includes(k))) return mock.response;
  }
  return FALLBACK;
}

/* ─── Route ─── */
export async function POST(req: NextRequest) {
  try {
    const { message } = (await req.json()) as { message: string };
    if (!message?.trim()) return Response.json({ error: "Üres üzenet." }, { status: 400 });

    if (process.env.OPENAI_API_KEY) {
      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.25,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user",   content: message },
        ],
      });
      const raw = completion.choices[0]?.message?.content ?? "{}";
      try {
        const parsed = JSON.parse(raw) as AssistResponse;
        // Ensure all fields exist
        return Response.json({
          summary:   parsed.summary   || FALLBACK.summary,
          reasoning: parsed.reasoning || [],
          products:  parsed.products  || [],
          standards: parsed.standards || [],
          followUp:  parsed.followUp  || "",
        } satisfies AssistResponse);
      } catch {
        return Response.json(FALLBACK);
      }
    }

    // Mock mode – simulate latency
    await new Promise(r => setTimeout(r, 800));
    return Response.json(getMockResponse(message));
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Szerver hiba." }, { status: 500 });
  }
}
