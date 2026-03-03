import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ConditionalFooter from "@/components/ConditionalFooter";

const sans = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});

const mono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0C0C0C",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://h-itb.hu"),
  title: {
    default: "H-ITB Kft. – Emeléstechnika",
    template: "%s – H-ITB",
  },
  description:
    "Daruk, csörlők, targoncák és teljes szakszolgálat 1990 óta. GUTMAN Official Distributor.",
  keywords: ["emelőgép", "daru", "csörlő", "targonca", "emeléstechnika", "GUTMAN"],
  authors: [{ name: "H-ITB Kft.", url: "https://h-itb.hu" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://h-itb.hu",
    siteName: "H-ITB Kft.",
    title: "H-ITB Kft. – Emeléstechnika",
    description: "Daruk, csörlők, targoncák 1990 óta. GUTMAN Official Distributor.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
