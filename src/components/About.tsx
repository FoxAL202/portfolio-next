"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Завершённых проектов", target: 4 },
  { label: "Месяцев в разработке", target: 6 },
  { label: "Чашек кофе", target: 24 },
];

export default function About() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [imgError, setImgError] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const durations = [1500, 1200, 800];
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            let done = true;

            setCounts(() =>
              stats.map((stat, i) => {
                const progress = Math.min(elapsed / durations[i], 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.round(eased * stat.target);
                if (value < stat.target) done = false;
                return value;
              })
            );

            if (!done) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-[120px]" ref={sectionRef}>
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 relative inline-block">
          Обо мне
          <span className="absolute -bottom-2 left-0 w-[50px] h-[3px] rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1]" />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_1fr] gap-12 items-start">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-3 border-[#a855f7]/30 shadow-[0_0_40px_rgba(168,85,247,0.1)] flex-shrink-0">
              {imgError ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#a855f7]/20 to-[#6366f1]/10 text-4xl font-extrabold text-[#a855f7]">
                  А
                </div>
              ) : (
                <img
                  src="/portfolio-next/assets/photo.jpg"
                  alt="Александр"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-lg font-medium text-[#e0e0e0] mb-5">
              Меня зовут Александр, мне 24 года. Занимаюсь разработкой сайтов и
              веб-приложений.
            </p>
            <p className="text-base text-[#a0a0a0] leading-relaxed mb-4">
              Мой подход — чистый код, продуманный UX и внимание к деталям.
              Работаю с современными технологиями, чтобы результат был не только
              красивым, но и удобным для пользователя.
            </p>
            <div className="flex gap-12 mt-10 flex-wrap">
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <span className="text-4xl font-extrabold gradient-text">
                    {counts[i]}+
                  </span>
                  <span className="block text-sm text-[#666] mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            {[
              {
                icon: "monitor",
                title: "Лендинги",
                desc: "Современные одностраничные сайты для бизнеса",
              },
              {
                icon: "code",
                title: "Веб-приложения",
                desc: "Интерактивные сервисы с продуманной логикой",
              },
              {
                icon: "message",
                title: "Telegram Боты",
                desc: "Автоматизация бизнеса в мессенджере",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group flex items-center gap-[18px] p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#a855f7]/20 hover:translate-x-[6px] hover:bg-white/[0.03] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-350"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-[#a855f7]/12 to-[#6366f1]/8 flex items-center justify-center text-[#a855f7] group-hover:from-[#a855f7]/20 group-hover:to-[#6366f1]/15 group-hover:scale-105 transition-all">
                  {service.icon === "monitor" ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  ) : service.icon === "code" ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-semibold text-[#e0e0e0] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#666] group-hover:text-[#888] transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
