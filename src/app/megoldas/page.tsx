import type { Metadata } from "next";
import MegodasClient from "./MegodasClient";

export const metadata: Metadata = {
  title: "Termékválasztó – H-ITB",
  description: "Lépéses parametrizált termékválasztó – adja meg a teherbírást, meghajtást és környezetet, mi megtaláljuk a megfelelő terméket.",
};

export default function MegodasPage() {
  return <MegodasClient />;
}
