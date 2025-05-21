import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consulting Firm | Making Complex Things Simple",
  description: "Advisory services for new launches, go-to-market, and business development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="text-xl font-semibold text-gray-900">
                Consulting Firm
              </Link>
              <div className="hidden md:flex space-x-8">
                <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
                <a href="/network" className="text-gray-600 hover:text-gray-900">Network</a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Consulting Firm. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
