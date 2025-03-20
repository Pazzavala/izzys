import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Caladea,
  Bodoni_Moda,
  Montserrat,
  Domine,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/home/layout/Footer";
import HeaderSection from "@/components/home/HeaderSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caladea = Caladea({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-caladea",
});

const bodoni_moda = Bodoni_Moda({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bodoni_moda",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const domine = Domine({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-domine",
});

export const metadata: Metadata = {
  title: "Izzy's Landscaping and Construction",
  description: "Izzy's Landscaping and Construction Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      // className={`${caladea.variable}`}
    >
      <body
        className={`flex flex-col min-h-screen bg-white ${geistSans.variable} ${geistMono.variable} ${caladea.variable} ${bodoni_moda.variable} ${montserrat.variable} ${domine.variable} antialiased`}
      >
        <HeaderSection />
        <main className='flex-grow bg-white'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
