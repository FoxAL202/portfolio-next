export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tag: string;
  tech: string[];
  repoUrl: string;
  demoUrl: string;
  preview: {
    type: "image" | "gradient" | "custom";
    src?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "zelenyy-uchastok",
    title: "Зелёный Участок",
    description: "Лендинг ландшафтной компании. Две темы, адаптив, parallax, lightbox.",
    longDescription: "Полноценный лендинг для ландшафтной компании с переключением светлой/тёмной темы, parallax-эффектами, lightbox-галереей, валидацией форм и маской телефона. Чистый HTML/CSS/JS без фреймворков, 4 брейкпоинта.",
    tag: "Сайт",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/FoxAL202/zelenyy-uchastok",
    demoUrl: "https://foxal202.github.io/zelenyy-uchastok/",
    preview: { type: "image", src: "https://foxal202.github.io/zelenyy-uchastok/images/portf1.png" },
  },
  {
    slug: "alice-lash",
    title: "Алиса — мастер ресниц",
    description: "Сайт-визитка мастера наращивания ресниц. Космическая тема, canvas-звёзды.",
    longDescription: "Одностраничный сайт для мастера наращивания ресниц с космической темой, canvas-звёздным фоном с параллаксом, glassmorphism-карточками, scroll-snap каруселью отзывов, лайтбоксом для портфолио.",
    tag: "Сайт",
    tech: ["HTML", "CSS", "JavaScript", "Canvas"],
    repoUrl: "https://github.com/FoxAL202/alice-lash",
    demoUrl: "https://foxal202.github.io/alice-lash/",
    preview: { type: "gradient" },
  },
  {
    slug: "sport-psychologist",
    title: "Спортивный психолог",
    description: "Многостраничный лендинг на Next.js. 17 страниц, SSG, SEO-ready.",
    longDescription: "Профессиональный сайт спортивного психолога на Next.js с TypeScript и Tailwind. 17 статических страниц с SSG, кастомная цветовая схема, форма заявки, интеграция Calendly и WhatsApp, SEO-оптимизация, деплой на Vercel.",
    tag: "Next.js",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/FoxAL202/sport-psychologist",
    demoUrl: "https://sport-psychologist.vercel.app",
    preview: { type: "custom" },
  },
  {
    slug: "b2b-landing",
    title: "Контрактное производство",
    description: "B2B-лендинг контрактного производства бытовой химии. Бирюзовая тема.",
    longDescription: "B2B-лендинг для компании по контрактному производству бытовой химии. Бирюзовая цветовая схема, 13 информационных секций, плавный скролл, FormSubmit для заявок. Чистый HTML/CSS/JS.",
    tag: "Сайт",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/FoxAL202/b2b-landing",
    demoUrl: "https://foxal202.github.io/b2b-landing/",
    preview: { type: "gradient" },
  },
];
