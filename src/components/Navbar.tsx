// src/components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pt-[10px] fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 dark:bg-black/50 shadow-sm">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16" style={{ maxWidth: "100rem" }}>
        {/* Logo */}
        <motion.div
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
        >
           <Image
                src="/zenloft-logo.png" // or .png
                alt="Zenloft logo"
                width={200}
                height={32}
                priority
            />            
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 dark:text-gray-100 hover:text-indigo-500 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-4 pb-4 bg-white dark:bg-black h-screen"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-100 hover:text-indigo-500 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
