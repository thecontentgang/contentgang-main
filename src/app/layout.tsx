import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LenisProvider from "../components/layout/LenisProvider";

export const metadata: Metadata = {
  title: "ContentGang | Digital Marketing & Creative Agency",
  description:
    "ContentGang is a full-service digital agency specializing in content creation, digital marketing, SEO, web development, social media, and growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-black text-white antialiased">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
