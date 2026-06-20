"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#hero", label: "Главная" },
  { href: "#about", label: "Обо мне" },
  { href: "#skills", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
  { href: "/services", label: "Услуги" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.getAttribute("id") || "";
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-[16px] border-white/5"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-[26px] font-extrabold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
        >
          AL
        </Link>

        <button
          className="md:hidden flex flex-col gap-[6px] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span
            className={`w-6 h-[2px] bg-[#e0e0e0] transition-all duration-300 ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-[#e0e0e0] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-[#e0e0e0] transition-all duration-300 ${
              open ? "-rotate-45 translate-y-[-6px]" : ""
            }`}
          />
        </button>

        <ul
          className={`md:flex md:items-center md:gap-8 md:static md:bg-transparent md:backdrop-filter-none md:p-0 md:border-none md:translate-y-0 fixed top-16 left-0 w-full bg-[#0a0a0a]/98 backdrop-blur-[16px] p-6 border-b border-white/5 transition-transform duration-300 ${
            open ? "translate-y-0" : "-translate-y-[120%] md:translate-y-0"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  className={`block py-4 md:py-0 text-sm font-medium transition-colors relative ${
                    active === link.href.slice(1)
                      ? "text-white"
                      : "text-[#a0a0a0] hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#a855f7] to-[#6366f1] transition-all duration-300 ${
                      active === link.href.slice(1) ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="block py-4 md:py-0 text-sm font-medium text-[#a0a0a0] hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
