import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Main } from "@/components/layout/Main";
import { dealership } from "@/data/dealership";

import "./globals.css";

// Fixed: Set weight to "variable" when custom axes are specified
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "variable",
  axes: ["SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: dealership.name,
  description: dealership.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />

        <div id="google_translate_element" className="hidden" />

        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en', autoDisplay: false },
                'google_translate_element'
              );
            }
          `}
        </Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}