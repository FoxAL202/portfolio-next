"use client";

import { useState } from "react";

export default function Contact() {
  const [charCount, setCharCount] = useState(0);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/alexfox20502@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(() => {
        setSent(true);
        form.reset();
        setCharCount(0);
        setTimeout(() => setSent(false), 5000);
      })
      .catch(() => {
        setError(true);
        setTimeout(() => setError(false), 5000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contacts" className="py-[120px] bg-white/[0.015] border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative inline-block">
              Контакты
              <span className="absolute -bottom-2 left-0 w-[50px] h-[3px] rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1]" />
            </h2>
            <p className="text-base text-[#888] mb-8">
              Есть идея или проект? Пиши, буду рад обсудить!
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/FoxAL202"
                target="_blank"
                className="inline-flex items-center gap-[10px] px-5 py-[14px] rounded-xl border border-white/[0.08] text-[#e0e0e0] font-medium hover:border-[#a855f7] hover:text-[#a855f7] hover:-translate-y-[2px] transition-all w-fit"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://t.me/aaaaddada"
                target="_blank"
                className="inline-flex items-center gap-[10px] px-5 py-[14px] rounded-xl border border-white/[0.08] text-[#e0e0e0] font-medium hover:border-[#a855f7] hover:text-[#a855f7] hover:-translate-y-[2px] transition-all w-fit"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span>Telegram</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              required
              className="font-sans px-[18px] py-[14px] rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#e0e0e0] text-sm outline-none transition-all focus:border-[#a855f7] focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)] placeholder:text-[#555]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="font-sans px-[18px] py-[14px] rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#e0e0e0] text-sm outline-none transition-all focus:border-[#a855f7] focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)] placeholder:text-[#555]"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Сообщение"
              maxLength={1000}
              required
              onChange={(e) => setCharCount(e.target.value.length)}
              className="font-sans px-[18px] py-[14px] rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#e0e0e0] text-sm outline-none transition-all focus:border-[#a855f7] focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)] placeholder:text-[#555] resize-vertical max-h-[300px]"
            />
            <div className="text-right text-xs text-[#555] -mt-2">
              {charCount}/1000
            </div>

            <button
              type="submit"
              disabled={loading || sent}
              className={`self-start inline-flex items-center gap-2 px-7 py-[14px] rounded-xl text-[15px] font-semibold text-white bg-gradient-to-r from-[#a855f7] to-[#6366f1] transition-all duration-250 ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : sent
                    ? "opacity-80"
                    : "hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(168,85,247,0.35)]"
              }`}
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-75" />
                  </svg>
                  Отправка...
                </span>
              ) : sent ? (
                "✓ Отправлено!"
              ) : (
                "Отправить"
              )}
            </button>

            {sent && (
              <p className="text-sm text-green-400 animate-[fade-in-up_0.3s_ease]">
                Сообщение отправлено! Я отвечу в ближайшее время.
              </p>
            )}
            {error && (
              <p className="text-sm text-red-400 animate-[fade-in-up_0.3s_ease]">
                Ошибка отправки. Попробуйте позже или напишите в Telegram.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
