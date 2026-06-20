import { skillGroups } from "@/data/skills";
import type { ReactElement } from "react";

const iconMap: Record<string, ReactElement> = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-9 h-9">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-9 h-9">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  other: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-9 h-9">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-[120px] bg-white/[0.015] border-t border-white/5 border-b border-white/5"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 relative inline-block">
          Навыки
          <span className="absolute -bottom-2 left-0 w-[50px] h-[3px] rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1]" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-7 rounded-xl border border-white/[0.06] bg-white/[0.03] hover:border-[#a855f7]/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#a855f7] shrink-0">
                  {iconMap[group.icon]}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-[6px] rounded-[6px] text-xs font-medium bg-white/[0.05] text-[#a0a0a0] border border-white/[0.06] hover:border-[#a855f7]/20 hover:text-[#c0b0ff] hover:bg-[#a855f7]/06 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
