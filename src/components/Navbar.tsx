"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-dark/80 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-display font-bold text-white tracking-tighter">
            NB<span className="text-primary">.</span>
          </span>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-white/10 focus:outline-none"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop links */}
        <div className="hidden md:block" id="navbar-menu">
          <ul className="font-medium flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link py-2 px-3 text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full md:hidden overflow-hidden"
            >
              <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-700 rounded-lg">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block py-2 px-3 text-white hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
