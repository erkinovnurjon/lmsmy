"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Imkoniyatlar", href: "#features" },
  { label: "HEMIS", href: "#hemis" },
  { label: "Natijalar", href: "#results" },
  { label: "Bog'lanish", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);

    // Scroll spy: qaysi bo'lim hozir ko'rinayotganini aniqlash
    const sections = navLinks.map((link) => link.href.slice(1));
    let current = "";

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          current = `#${id}`;
        }
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="LMS.uz bosh sahifa">
          <Image src="/logo.png" alt="LMS.uz logo" width={32} height={32} className="h-8" style={{ width: 'auto' }} />
          <span
            className={`text-xl font-extrabold tracking-tight font-[family-name:var(--font-heading)] transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            LMS<span className="text-accent">.uz</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`group relative px-4 py-2 text-[0.9rem] font-semibold transition-colors duration-200 ${
                    scrolled
                      ? isActive
                        ? "text-primary"
                        : "text-neutral-500 hover:text-primary"
                      : isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Active + hover underline */}
                  <span
                    className={`absolute -bottom-1 left-4 right-4 h-0.5 origin-center scale-x-0 rounded-full bg-accent transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover md:inline-block"
        >
          Demo bron qilish
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors md:hidden ${
            scrolled
              ? "text-neutral-600 hover:bg-neutral-100"
              : "text-white/80 hover:text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`px-4 pb-4 md:hidden ${
            scrolled
              ? "border-t border-neutral-200 bg-white"
              : "border-t border-white/10 bg-primary-dark/95 backdrop-blur-md"
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                      scrolled
                        ? isActive
                          ? "bg-neutral-50 text-primary"
                          : "text-neutral-600 hover:bg-neutral-50"
                        : isActive
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            className="mt-3 block rounded-xl bg-accent py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            onClick={() => setMobileOpen(false)}
          >
            Demo bron qilish
          </a>
        </div>
      )}
    </header>
  );
}
