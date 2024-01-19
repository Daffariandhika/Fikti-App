import type { Metadata } from "next";
import { Lato, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing-page/navbar";
import Footer from "@/components/landing-page/footer";

const bricolage_Grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
export const metadata: Metadata = {
  title: "BEM FIKTI UG 2024",
  description: "Generated by PTI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title></title>
      </head>
      <body className={`${lato.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
