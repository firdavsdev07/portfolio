export const personalInfo = {
  name: "Firdavs Normurodov",
  role: "Fullstack Developer",
  location: "Tashkent, Uzbekistan",
  email: "firdavsnormurodov435@gmail.com",
  phone: "+998 88 800 0724",
  website: "firdavs-developer.uz",
  bio: "Fullstack developer building production-grade web applications. Specialized in the TypeScript ecosystem — Next.js on the frontend, NestJS on the backend. Currently teaching at Najot Ta'lim.",
  photo: "/me.jpg",
  resume: "/resume.pdf",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/firdavsdev07", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/firdavs-normurodov-667a85271", icon: "Linkedin" },
  { name: "Telegram", url: "https://t.me/firdavs2407", icon: "Send" },
  { name: "Email", url: "mailto:firdavsnormurodov435@gmail.com", icon: "Mail" },
];

export const experience = [
  {
    role: "Teacher",
    company: "Najot Ta'lim",
    period: "2025 – Present",
    points: [
      "Teach fullstack web development: Next.js, NestJS, Docker, CI/CD, databases",
      "Guide students through real-world projects from planning to production deployment",
      "Conduct code reviews, mentor on clean architecture and best practices",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "WebGrade",
    period: "2025",
    points: [
      "Contributed to 3 fullstack web projects serving real business clients",
      "Worked primarily on backend: NestJS, PostgreSQL, Prisma — API design and database architecture",
      "Projects span fueling management, course discovery and horse marketplace",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Freelance",
    period: "2025",
    points: [
      "Designed, developed and deployed 4 production web applications for real clients",
      "Handled full cycle independently: requirements, architecture, coding, server setup on DigitalOcean",
    ],
  },
];

export const education = [
  { degree: "Fullstack Bootcamp", school: "Najot Ta'lim", period: "2024 – 2025" },
  { degree: "Frontend Development", school: "IT Park", period: "2022" },
];

export const skills = [
  { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "SASS"] },
  { category: "Backend", items: ["NestJS", "Express.js", "Fastify"] },
  { category: "Language", items: ["TypeScript", "JavaScript"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { category: "ORM / ODM", items: ["Prisma", "TypeORM", "Mongoose"] },
  { category: "DevOps", items: ["Docker", "GitHub Actions", "PM2", "DigitalOcean", "Git"] },
  { category: "Other", items: ["REST API", "WebSocket", "Redis", "Click/Payme", "Telegram Bot API"] },
];

export const languages = [
  { lang: "Uzbek", level: "Native" },
  { lang: "Russian", level: "B1" },
  { lang: "English", level: "B1" },
];

export const projects = [
  {
    id: 1,
    title: "Biyron.uz",
    url: "https://biyron.uz",
    github: null,
    description:
      "AI-powered multilingual education platform. Teachers enter a topic; AI generates complete lessons with audio narration, vocabulary, reading, writing exercises and tests. Integrated payment via Click and Payme.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "AI", "Click", "Payme"],
    image: "/projects/biyron.png",
    featured: true,
  },
  {
    id: 2,
    title: "Mrblackmaster CRM",
    url: "https://www.mrblackmaster.com",
    github: null,
    description:
      "Full-scale CRM with web dashboard, REST API backend, and web-bot. Bulk Excel import, contract management, automated overdue detection, and role-based access control.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "React"],
    image: "/projects/mrblackmaster.png",
    featured: true,
  },
  {
    id: 3,
    title: "NBS Gaz Oil",
    url: "https://nbsgazoil.uz",
    github: null,
    description:
      "CNG station management system for WebGrade. Drivers receive a receipt with QR code after fueling; scanning the QR records the exact liters consumed to the driver's account.",
    tech: ["React", "NestJS", "Prisma", "PostgreSQL"],
    image: "/projects/nbsgazoil.jpg",
    featured: false,
    company: "WebGrade",
  },
  {
    id: 4,
    title: "Tezku.uz",
    url: "https://tezku.uz",
    github: null,
    description:
      "Phone marketplace where sellers list products and buyers browse, save listings and contact sellers directly.",
    tech: ["Next.js", "Supabase", "Payment"],
    image: "/projects/tezku.png",
    featured: false,
  },
  {
    id: 5,
    title: "Otbozor.uz",
    url: "https://otbozor.uz",
    github: null,
    description:
      "Dedicated marketplace for buying and selling horses in Uzbekistan. Sellers list horses with full details; buyers browse, filter and contact sellers directly.",
    tech: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/projects/otbozor.png",
    featured: false,
    company: "WebGrade",
  },
  {
    id: 6,
    title: "Dokonect.uz",
    url: "https://www.dokonect.uz",
    github: null,
    description:
      "Business automation platform: agent-free sales, automatic order processing and full operational control. Built the backend API and server architecture.",
    tech: ["NestJS", "React", "Flutter", "PostgreSQL"],
    image: "/projects/dokonect.png",
    featured: false,
  },
  {
    id: 7,
    title: "PrismSync",
    url: "https://prismsync-web.vercel.app/",
    github: null,
    description:
      "Open-source database migration tool that transfers data bidirectionally between PostgreSQL and MongoDB — built as a small side project and released publicly.",
    tech: ["TypeScript", "PostgreSQL", "MongoDB"],
    image: "/projects/prismsync.png",
    featured: false,
  },
  {
    id: 8,
    title: "DarsLinker",
    url: "https://darslinker.uz",
    github: null,
    description:
      "Uzbekistan's course discovery platform: find, compare and choose from online and offline courses across all subjects and regions. Built the backend API.",
    tech: ["NestJS", "Next.js", "PostgreSQL"],
    image: "/projects/darslinker.png",
    featured: false,
    company: "WebGrade",
  },
];

export const seo = {
  title: "Firdavs Normurodov — Fullstack Developer",
  description:
    "Fullstack developer from Tashkent building production-grade web applications with TypeScript, Next.js, and NestJS.",
  keywords:
    "fullstack developer, next.js, nestjs, typescript, react, nodejs, tashkent, uzbekistan",
  url: "https://firdavs-developer.uz",
};
