export interface Skill {
  name: string;
  description: string;
}

export const skillGroups = [
  {
    category: "Фронтенд",
    icon: "code",
    skills: ["HTML / CSS", "JavaScript / TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Инструменты",
    icon: "tools",
    skills: ["Git / GitHub", "CI/CD", "Figma", "VS Code", "Postman"],
  },
  {
    category: "Другое",
    icon: "other",
    skills: ["Python", "SQL", "Telegram API", "REST API", "Linux"],
  },
];
