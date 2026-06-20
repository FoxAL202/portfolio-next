export interface Service {
  title: string;
  description: string;
  price: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Лендинг",
    description: "Одностраничный сайт для вашего бизнеса или услуги",
    price: "от 25 000 ₽",
    features: [
      "Современный дизайн",
      "Адаптив под все устройства",
      "SEO-базовая оптимизация",
      "Форма обратной связи",
      "Деплой и домен",
    ],
  },
  {
    title: "Telegram бот",
    description: "Бот для автоматизации продаж и коммуникации с клиентами",
    price: "от 20 000 ₽",
    features: [
      "Автоматические ответы",
      "Сбор заявок",
      "База данных",
      "Админ-панель",
      "Интеграция с CRM",
    ],
  },
  {
    title: "Веб-приложение",
    description: "Многостраничный сайт или сервис с продуманной логикой",
    price: "от 50 000 ₽",
    features: [
      "React / Next.js",
      "TypeScript",
      "База данных",
      "Авторизация",
      "API интеграции",
    ],
  },
];
