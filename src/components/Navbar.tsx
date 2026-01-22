"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#090914]/80 backdrop-blur-[8px] transition-all duration-200">
      <div className="w-full mx-auto px-8 sm:px-16 lg:px-32 py-6">
        <div className="flex items-center justify-end">
          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center gap-8 uppercase"
            style={{ fontFamily: "'Expose', sans-serif" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent text-white text-sm border border-white/10 rounded cursor-pointer flex items-center justify-center transition-all duration-300 hover:border-white/30"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-[#7f7cff] text-white rounded-lg hover:bg-[#6e6cd6] transition-all duration-200 text-center"
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
