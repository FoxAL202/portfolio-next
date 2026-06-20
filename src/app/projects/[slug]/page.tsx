import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-[6px] text-xs font-medium bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20"
                >
                  {t}
                </span>
              ))}
              <span className="px-3 py-1 rounded-[6px] text-xs font-medium bg-white/[0.05] text-[#a0a0a0] border border-white/[0.06]">
                {project.tag}
              </span>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-[#a0a0a0] leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                className="block w-full text-center px-7 py-[14px] rounded-xl text-[15px] font-semibold text-white bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(168,85,247,0.35)] transition-all duration-250"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Открыть демо
                </span>
              </a>
            )}

            <a
              href={project.repoUrl}
              target="_blank"
              className="block w-full text-center px-7 py-[14px] rounded-xl text-[15px] font-semibold text-white border border-white/20 hover:border-[#a855f7] hover:text-[#a855f7] hover:translate-y-[-2px] transition-all duration-250"
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px]"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Репозиторий на GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
