import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ConditionalFooter from "@/components/ConditionalFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://h-itb.hu"),
  title: {
    default: "H-ITB Kft. – Emeléstechnika",
    template: "%s – H-ITB",
  },
  description:
    "Daruk, csörlők, targoncák és teljes szakszolgálat 1990 óta. GUTMAN Official Distributor – Magyarország, Románia, Szlovákia, Szerbia, Horvátország.",
  keywords: [
    "emelőgép", "daru", "híddaru", "csörlő", "targonca", "futómacska",
    "emeléstechnika", "anyagmozgatás", "GUTMAN", "szakszolgálat", "ETAR",
  ],
  authors: [{ name: "H-ITB Kft.", url: "https://h-itb.hu" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://h-itb.hu",
    siteName: "H-ITB Kft.",
    title: "H-ITB Kft. – Emeléstechnika",
    description:
      "Daruk, csörlők, targoncák és teljes szakszolgálat 1990 óta. GUTMAN Official Distributor.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "H-ITB Kft. – Ipari emelőgépek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "H-ITB Kft. – Emeléstechnika",
    description: "Daruk, csörlők, targoncák 1990 óta. GUTMAN Official Distributor.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
