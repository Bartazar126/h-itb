import type { Metadata } from "next";
import TermekekClient from "./TermekekClient";

export const metadata: Metadata = {
  title: "Termékkatalógus – H-ITB",
  description: "Emelőgépek, anyagmozgatás, szakszolgálat – teljes termékkínálat.",
};

export default function TermekekPage() {
  return <TermekekClient />;
}
