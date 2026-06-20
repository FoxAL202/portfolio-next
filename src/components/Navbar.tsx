"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "#hero", label: "Главная", type: "anchor" as const },
  { href: "#about", label: "Обо мне", type: "anchor" as const },
  { href: "#skills", label: "Навыки", type: "anchor" as const },
  { href: "#projects", label: "Проекты", type: "anchor" as const },
  { href: "/services", label: "Услуги", type: "page" as const },
  { href: "#contacts", label: "Контакты", type: "anchor" as const },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
          aria-expanded={open}
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
              {link.type === "anchor" ? (
                <a
                  href={isHome ? link.href : `/${link.href}`}
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
                  className={`block py-4 md:py-0 text-sm font-medium transition-colors relative ${
                    pathname === link.href
                      ? "text-white"
                      : "text-[#a0a0a0] hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#a855f7] to-[#6366f1] transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
