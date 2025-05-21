"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/network", label: "Network" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="text-xl font-semibold text-gray-900">
                Consulting Firm
              </Link>
              {/* Desktop Nav */}
              <div className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* Hamburger Icon */}
              <button
                className="md:hidden flex items-center justify-center p-2 rounded hover:bg-gray-200 focus:outline-none"
                aria-label="Open menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg className="h-7 w-7 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {menuOpen ? (
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </header>
        {/* Mobile Menu Overlay - moved outside header/nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center z-[9999]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-3xl text-white focus:outline-none"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
                aria-label="Close menu"
              >
                &times;
              </motion.button>
              {/* Navigation Links */}
              <nav className="flex flex-col space-y-8 text-3xl">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.07, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="hover:text-blue-400 transition-all duration-300 font-semibold"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
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
