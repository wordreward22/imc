import type { Metadata } from "next";
import { Roboto, Poppins, Cairo, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { QuoteProvider } from "@/context/QuoteContext";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/quote/QuoteModal";
import { FloatingWidget } from "@/components/layout/FloatingWidget";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const cairo = Cairo({
  weight: ["400", "600", "700", "800"],
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMC Iraq - Award Winning Cummins Authorized Seller",
  description:
    "International Machine Co. (IMC Iraq) is the exclusive authorized Cummins distributor in Iraq for diesel generators, genuine spare parts, and certified maintenance.",
  icons: {
    icon: "/uploads/2023/02/imc-logo-3d.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable} ${cairo.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-cummins-red selection:text-white">
        <LanguageProvider>
          <QuoteProvider>
            <TopBar />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <QuoteModal />
            <FloatingWidget />
          </QuoteProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
