import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 relative inline-block">
          Проекты
          <span className="absolute -bottom-2 left-0 w-[50px] h-[3px] rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1]" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.03] hover:border-transparent hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(168,85,247,0.15)] transition-all duration-400"
            >
              <div className="absolute inset-[-1px] rounded-[17px] bg-gradient-to-br from-[#a855f7]/15 to-[#6366f1]/05 opacity-0 group-hover:opacity-100 transition-opacity z-[-1]" />

              <div className="h-[180px] relative flex items-center justify-center overflow-hidden border-b border-white/[0.05] group-hover:border-b-[#a855f7]/15 transition-colors">
                {project.preview.type === "image" && project.preview.src ? (
                  <img
                    src={project.preview.src}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    loading="lazy"
                  />
                ) : project.preview.type === "gradient" ? (
                  <div className="flex flex-col items-center justify-center h-full gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-[60px] h-[60px] text-[#a855f7]/20 group-hover:text-[#a855f7]/50 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="4" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full gap-2">
                    <div className="w-14 h-14 rounded-[14px] flex items-center justify-center text-xl font-extrabold shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                      style={{
                        background: "linear-gradient(135deg, #1e3a5f, #1a365d)",
                        color: "#f59e0b",
                      }}
                    >
                      СП
                    </div>
                    <div className="flex gap-3 mt-2">
                      <span className="text-[13px] text-amber-400">Хоккей</span>
                      <span className="text-[13px] text-slate-400">·</span>
                      <span className="text-[13px] text-amber-400">Футбол</span>
                      <span className="text-[13px] text-slate-400">·</span>
                      <span className="text-[13px] text-amber-400">Теннис</span>
                    </div>
                  </div>
                )}

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.5px] bg-[#a855f7]/10 text-[#a855f7] backdrop-blur-[8px] group-hover:bg-[#a855f7]/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all">
                  {project.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#888] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-[6px] text-xs font-medium bg-white/[0.05] text-[#a0a0a0] border border-white/[0.06] group-hover:border-[#a855f7]/20 group-hover:text-[#c0b0ff] group-hover:bg-[#a855f7]/06 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <span className="text-sm text-[#a855f7] font-medium">
                    Подробнее →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
