import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#888] hover:text-[#a855f7] transition-colors mb-8"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          На главную
        </Link>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Услуги
        </h1>
        <p className="text-lg text-[#888] mb-12 max-w-[600px]">
          Разрабатываю сайты и боты под ключ. Современный дизайн, чистый код,
          продуманный UX. Работаю с полным циклом — от прототипа до деплоя.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#a855f7]/20 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#888] mb-4">{service.description}</p>

              <div className="text-3xl font-extrabold gradient-text mb-6">
                {service.price}
              </div>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-[#a0a0a0]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="2"
                      className="shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center p-12 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <h2 className="text-2xl font-bold text-white mb-4">
            Готовы начать?
          </h2>
          <p className="text-[#888] mb-6 max-w-[500px] mx-auto">
            Напишите мне в Telegram — обсудим вашу задачу, сроки и стоимость.
            Консультация бесплатно.
          </p>
          <a
            href="https://t.me/aaaaddada"
            target="_blank"
            className="inline-flex items-center gap-2 px-7 py-[14px] rounded-xl text-[15px] font-semibold text-white bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(168,85,247,0.35)] transition-all duration-250"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[18px] h-[18px]"
            >
              <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Написать в Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
