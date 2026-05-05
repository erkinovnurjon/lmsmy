"use client";

import {
  FileCheck,
  AlertTriangle,
  Lock,
  Eye,
  UserX,
  MonitorSmartphone,
  Mic,
  ArrowLeftRight,
  RefreshCw,
  Users,
  BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";
import CardSpotlight from "./CardSpotlight";

/* Custom section icons */
function CyberShieldIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="key-cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path d="M12 2L3 7v5c0 5.25 3.83 10.17 9 11.38C17.17 22.17 21 17.25 21 12V7l-9-5z" stroke="url(#key-cyber-grad)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M12 2L3 7v5c0 5.25 3.83 10.17 9 11.38C17.17 22.17 21 17.25 21 12V7l-9-5z" fill="url(#key-cyber-grad)" opacity="0.15" />
      <path d="M9 12l2 2 4-4" stroke="url(#key-cyber-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" stroke="url(#key-cyber-grad)" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 3" />
    </svg>
  );
}

function AutoProctoringIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="key-proctor-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="url(#key-proctor-grad)" strokeWidth="1.5" fill="none" />
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" fill="url(#key-proctor-grad)" opacity="0.1" />
      <circle cx="12" cy="12" r="3.5" stroke="url(#key-proctor-grad)" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill="url(#key-proctor-grad)" />
      <path d="M4 4l3 3M20 4l-3 3M4 20l3-3M20 20l-3-3" stroke="url(#key-proctor-grad)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <circle cx="12" cy="12" r="8" stroke="url(#key-proctor-grad)" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 2" />
    </svg>
  );
}

function HemisIntegrationIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="key-hemis-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      <circle cx="6" cy="6" r="2" fill="url(#key-hemis-grad)" opacity="0.9" />
      <circle cx="18" cy="6" r="2" fill="url(#key-hemis-grad)" opacity="0.9" />
      <circle cx="6" cy="18" r="2" fill="url(#key-hemis-grad)" opacity="0.9" />
      <circle cx="18" cy="18" r="2" fill="url(#key-hemis-grad)" opacity="0.9" />
      <circle cx="12" cy="12" r="2.5" stroke="url(#key-hemis-grad)" strokeWidth="1.5" fill="url(#key-hemis-grad)" opacity="0.8" />
      <path d="M6 6l6 6m6-6l-6 6m-6 6l6-6m6 6l-6-6" stroke="url(#key-hemis-grad)" strokeWidth="1" opacity="0.5" />
      <path d="M9 3h6M9 21h6" stroke="url(#key-hemis-grad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M3 9v6M21 9v6" stroke="url(#key-hemis-grad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <rect x="1.5" y="1.5" width="21" height="21" rx="5" stroke="url(#key-hemis-grad)" strokeWidth="0.7" opacity="0.3" />
    </svg>
  );
}

type IconComponent = (({ size }: { size?: number }) => React.JSX.Element) | LucideIcon;

const keyFeatures = [
  {
    id: "cybersecurity",
    icon: CyberShieldIcon,
    title: "Kiberxavfsizlik xulosasi",
    subtitle: "Har bir imtihon uchun xavfsizlik hisoboti",
    description:
      "Imtihon yakunlangandan so'ng tizim avtomatik ravishda kiberxavfsizlik xulosasini shakllantiradi. Bu xulosa imtihon davomida aniqlangan barcha xavflar, shubhali harakatlar va xavfsizlik buzilishlari haqida to'liq ma'lumot beradi.",
    color: "accent",
    details: [
      {
        icon: FileCheck,
        title: "Batafsil hisobot",
        desc: "Har bir talaba uchun individual kiberxavfsizlik xulosasi — qoidabuzarliklar, shubhali harakatlar va ularning vaqti",
      },
      {
        icon: AlertTriangle,
        title: "Xavf darajasi tahlili",
        desc: "Yuqori, o'rta va past xavf darajalarini avtomatik aniqlash va tasniflash",
      },
      {
        icon: Lock,
        title: "Raqamli imzo va tasdiqlash",
        desc: "Har bir xulosa raqamli imzo bilan tasdiqlanadi — o'zgartirib bo'lmaydi",
      },
    ],
  },
  {
    id: "autoproctoring",
    icon: AutoProctoringIcon,
    title: "AutoProctoring",
    subtitle: "AI asosida to'liq avtomatik nazorat",
    description:
      "Inson aralashuvisiz imtihon jarayonini to'liq nazorat qiluvchi AI tizim. Yuz aniqlash, ekran monitoring, ovoz tahlili va harakatlarni real-time kuzatish — barchasi avtomatik.",
    color: "primary",
    details: [
      {
        icon: Eye,
        title: "Yuz aniqlash va tasdiqlash",
        desc: "Talabani imtihon boshida identifikatsiya qiladi va butun jarayon davomida kuzatadi",
      },
      {
        icon: UserX,
        title: "Ikkinchi shaxsni aniqlash",
        desc: "Kadrda begona shaxs paydo bo'lsa — darhol ogohlantirish va fiksatsiya",
      },
      {
        icon: MonitorSmartphone,
        title: "Ekran va tab monitoring",
        desc: "Boshqa dastur yoki tab'ga o'tishni aniqlash, ekran yozib olish",
      },
      {
        icon: Mic,
        title: "Ovoz va tovush tahlili",
        desc: "Xonadagi begona ovozlar, shivir-shivir va ko'rsatmalarni aniqlash",
      },
    ],
  },
  {
    id: "hemis-integration",
    icon: HemisIntegrationIcon,
    title: "HEMIS integratsiya",
    subtitle: "Davlat tizimi bilan to'liq sinxronizatsiya",
    description:
      "O'zbekiston OTMlari uchun majburiy HEMIS tizimi bilan ikki tomonlama real-time sinxronizatsiya. Talabalar, fanlar, baholar, davomat — barchasi avtomatik yangilanadi.",
    color: "accent",
    details: [
      {
        icon: ArrowLeftRight,
        title: "Ikki tomonlama sinxron",
        desc: "LMS'dagi o'zgarish HEMIS'ga, HEMIS'dagi o'zgarish LMS'ga — qo'lda kiritish shart emas",
      },
      {
        icon: RefreshCw,
        title: "Real-time yangilanish",
        desc: "Ma'lumotlar 5 daqiqa ichida sinxronlanadi, kechikish va dublikat muammosi yo'q",
      },
      {
        icon: Users,
        title: "Talabalar va o'qituvchilar",
        desc: "Ro'yxat, guruh, kurs, shtat, yuklanish — hammasi avtomatik sinxronlangan",
      },
      {
        icon: BookOpen,
        title: "Fanlar va baholar",
        desc: "Fan kodi, kredit, soatlar, oraliq va yakuniy baholar — ikki tomonlama",
      },
    ],
  },
];

const colorMap = {
  accent: {
    badge: "border-accent/30 bg-accent/10 text-accent",
    dot: "bg-accent",
    iconBg: "from-accent to-emerald-400",
    detailIcon: "bg-accent/10 text-accent",
    border: "border-accent/20",
    glow: "shadow-accent/10",
  },
  primary: {
    badge: "border-primary/30 bg-primary/10 text-primary",
    dot: "bg-primary",
    iconBg: "from-primary to-blue-500",
    detailIcon: "bg-primary/10 text-primary",
    border: "border-primary/20",
    glow: "shadow-primary/10",
  },
};

export default function KeyFeatures() {
  return (
    <section id="key-features" className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/3 left-0 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Asosiy xususiyatlar
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Nima uchun bizni tanlashadi?
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              Clientlar uchun 3 ta eng muhim omil — xavfsizlik, nazorat va integratsiya
            </p>
          </div>
        </AnimateIn>

        {/* Feature blocks */}
        <div className="mt-10 space-y-10 sm:mt-14 sm:space-y-16">
          {keyFeatures.map((feature, idx) => {
            const colors = colorMap[feature.color as keyof typeof colorMap];
            const isReversed = idx % 2 === 1;

            return (
              <AnimateIn key={feature.id} delay={idx * 0.1}>
                <div
                  className={`flex flex-col gap-6 lg:gap-10 ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  } lg:items-center`}
                >
                  {/* Text content */}
                  <div className="flex-1">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 ring-1 ring-neutral-200/60 shadow-sm">
                      <feature.icon size={32} />
                    </div>

                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase ${colors.badge}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${colors.dot}`} />
                      {feature.subtitle}
                    </span>

                    <h3 className="mt-4 text-2xl font-extrabold text-neutral-900 sm:text-3xl">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-base leading-relaxed text-neutral-600">
                      {feature.description}
                    </p>
                  </div>

                  {/* Details cards */}
                  <div className="flex-1">
                    <StaggerContainer
                      className="grid gap-3 sm:grid-cols-2"
                      stagger={0.08}
                      delay={0.2 + idx * 0.1}
                    >
                      {feature.details.map((detail) => (
                        <StaggerItem key={detail.title}>
                          <motion.div
                            className={`group flex flex-col gap-2 rounded-xl border border-neutral-200/60 bg-neutral-50/80 p-4 transition-all duration-300 hover:${colors.border} hover:shadow-md hover:${colors.glow}`}
                            whileHover={{
                              y: -3,
                              transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] },
                            }}
                          >
                            <div
                              className={`flex h-9 w-9 items-center justify-center rounded-lg ${colors.detailIcon}`}
                            >
                              <detail.icon size={18} />
                            </div>
                            <p className="text-sm font-semibold text-neutral-900">
                              {detail.title}
                            </p>
                            <p className="text-xs leading-relaxed text-neutral-500">
                              {detail.desc}
                            </p>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
