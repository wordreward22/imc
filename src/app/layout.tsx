import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { QuoteProvider } from "@/context/QuoteContext";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/quote/QuoteModal";
import { FloatingWidget } from "@/components/layout/FloatingWidget";

export const metadata: Metadata = {
  title: "IMC Iraq - Award Winning Cummins Authorized Seller",
  description:
    "International Machine Co. (IMC Iraq) is the exclusive authorized Cummins distributor in Iraq for diesel generators, genuine spare parts, and certified maintenance.",
  icons: {
    icon: [
      { url: "/uploads/2025/04/cropped-cropped-favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/uploads/2025/04/cropped-cropped-favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/uploads/2025/04/cropped-cropped-favicon-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
