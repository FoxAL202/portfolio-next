"use client";

import { useEffect, useState, useRef } from "react";

const texts = [
  "Веб-разработчик",
  "Создаю сайты",
  "Пишу на Python",
  "Делаю Telegram ботов",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => { mountedRef.current = false; };
  }, []);

  useEffect(() => {
    if (pause) return;

    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          if (!mountedRef.current) return;
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 40);
      } else {
        setPause(true);
        timeout = setTimeout(() => {
          if (!mountedRef.current) return;
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
          setPause(false);
        }, 800);
      }
    } else {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          if (!mountedRef.current) return;
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 80);
      } else {
        setPause(true);
        timeout = setTimeout(() => {
          if (!mountedRef.current) return;
          setIsDeleting(true);
          setPause(false);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, pause]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div
        className="absolute pointer-events-none w-[800px] h-[800px] -top-[300px] -right-[200px]"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none w-[500px] h-[500px] -bottom-[150px] -left-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] bg-[#a855f7]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-[2] w-full">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-[6px] px-4 py-[6px] border border-[#a855f7]/30 rounded-full text-sm font-medium text-[#a855f7] mb-5 animate-[pulse-glow_2s_ease-in-out_infinite]">
            <span className="w-[6px] h-[6px] rounded-full bg-green-400 animate-pulse" />
            Доступен для проектов
          </div>

          <h1 className="text-[40px] sm:text-[64px] font-extrabold text-white leading-[1.1] mb-3">
            <span className="gradient-text animate-[gradient-shift_4s_ease-in-out_infinite]">
              Александр
            </span>
          </h1>

          <div className="font-mono text-[#a855f7] text-lg sm:text-xl min-h-[32px] mb-4">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg text-[#888] mb-8 max-w-[520px]">
            Разрабатываю сайты и Telegram ботов под ключ — от идеи до готового
            продукта
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-[14px] rounded-xl text-[15px] font-semibold text-white bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(168,85,247,0.35)] transition-all duration-250"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              Мои работы
            </a>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 px-7 py-[14px] rounded-xl text-[15px] font-semibold text-white border border-white/20 hover:border-[#a855f7] hover:text-[#a855f7] hover:translate-y-[-2px] transition-all duration-250"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Связаться
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/FoxAL202"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-[#888] hover:border-[#a855f7] hover:text-[#a855f7] hover:-translate-y-[3px] transition-all"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://t.me/aaaaddada"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-[#888] hover:border-[#a855f7] hover:text-[#a855f7] hover:-translate-y-[3px] transition-all"
              aria-label="Telegram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fade-in-up_1.2s_cubic-bezier(0.22,1,0.36,1)_1s_both]">
        <span className="text-[11px] uppercase tracking-[2px] text-[#555] animate-pulse">
          Листай
        </span>
        <div className="w-6 h-[38px] border-2 border-[#a855f7]/25 rounded-full flex justify-center pt-2 animate-[pulse-glow_2.5s_ease-in-out_infinite]">
          <div className="w-[3px] h-2 bg-gradient-to-b from-[#a855f7] to-[#6366f1] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
