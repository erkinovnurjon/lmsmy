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
  Search,
  BarChart3,
  Languages,
  FileText,
  PenTool,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
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

function PlagiatIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="key-plagiat-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="url(#key-plagiat-grad)" strokeWidth="1.5" fill="none" />
      <rect x="4" y="2" width="16" height="20" rx="2" fill="url(#key-plagiat-grad)" opacity="0.08" />
      <path d="M8 7h8M8 10h6M8 13h7" stroke="url(#key-plagiat-grad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <circle cx="16" cy="16" r="4.5" stroke="url(#key-plagiat-grad)" strokeWidth="1.5" fill="white" />
      <circle cx="16" cy="16" r="4.5" fill="url(#key-plagiat-grad)" opacity="0.1" />
      <path d="M14.5 16l1 1 2-2" stroke="url(#key-plagiat-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContentAiIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="key-contentai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="url(#key-contentai-grad)" strokeWidth="1.5" fill="none" />
      <rect x="3" y="3" width="18" height="18" rx="3" fill="url(#key-contentai-grad)" opacity="0.08" />
      <path d="M7 8h4M7 11h3M7 14h5" stroke="url(#key-contentai-grad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M14 9l2 2-2 2" stroke="url(#key-contentai-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="2" fill="url(#key-contentai-grad)" opacity="0.6" />
      <path d="M15 15l2 2" stroke="url(#key-contentai-grad)" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <circle cx="16" cy="16" r="3.5" stroke="url(#key-contentai-grad)" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
    </svg>
  );
}

type IconComponent = (({ size }: { size?: number }) => React.JSX.Element) | LucideIcon;

/* ─── Visual Illustrations (Light theme) ─── */

function CybersecurityVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold text-neutral-900">Xavfsizlik Xulosasi</span>
          </div>
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[9px] font-semibold text-accent">PDF Ready</span>
        </div>

        {/* Threat levels */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-neutral-500">Yuqori xavf</span>
            <span className="text-[10px] font-bold text-red-500">2 ta</span>
          </div>
          <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400"
              initial={{ width: 0 }}
              whileInView={{ width: "15%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[10px] text-neutral-500">O&apos;rta xavf</span>
            <span className="text-[10px] font-bold text-yellow-500">8 ta</span>
          </div>
          <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"
              initial={{ width: 0 }}
              whileInView={{ width: "35%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[10px] text-neutral-500">Past xavf</span>
            <span className="text-[10px] font-bold text-accent">145 ta</span>
          </div>
          <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent/80 to-accent"
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
        </div>

        {/* Shield score */}
        <div className="mt-5 flex items-center gap-3 rounded-xl bg-accent/5 p-3 border border-accent/10">
          <CyberShieldIcon size={32} />
          <div>
            <p className="text-[10px] font-bold text-neutral-700">Umumiy xavfsizlik bali</p>
            <p className="text-lg font-extrabold text-accent">94/100</p>
          </div>
        </div>

        {/* Log entries */}
        <div className="mt-4 space-y-1.5">
          {[
            { time: "14:23", text: "IP anomaliya aniqlandi", color: "text-yellow-500" },
            { time: "14:25", text: "Ekran ulashish bloklandi", color: "text-red-500" },
            { time: "14:30", text: "Imtihon muvaffaqiyatli yakunlandi", color: "text-accent" },
          ].map((log) => (
            <div key={log.time} className="flex items-center gap-2 text-[9px]">
              <span className="text-neutral-400 font-mono">{log.time}</span>
              <span className={log.color}>{log.text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProctoringVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/8 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-neutral-900">AutoProctoring</span>
          </div>
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[9px] font-semibold text-primary">AI Active</span>
          </motion.div>
        </div>

        {/* Face detection mockup */}
        <div className="mt-4 flex items-center gap-4">
          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-neutral-100 border-2 border-dashed border-primary/30">
            <AutoProctoringIcon size={36} />
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-primary/40"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="space-y-2 flex-1">
            {[
              { label: "Yuz aniqlandi", status: true },
              { label: "Identifikatsiya", status: true },
              { label: "Ikkinchi shaxs", status: false },
              { label: "Ovoz anomaliya", status: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[10px] text-neutral-600">{item.label}</span>
                <span className={`text-[9px] font-semibold ${item.status ? "text-accent" : "text-neutral-400"}`}>
                  {item.status ? "Aniqlandi" : "Yo'q"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity timeline */}
        <div className="mt-4 space-y-1.5 border-t border-neutral-100 pt-4">
          {[
            { time: "09:00", text: "Imtihon boshlandi", color: "text-primary" },
            { time: "09:15", text: "Tab almashtirish aniqlandi", color: "text-yellow-500" },
            { time: "09:42", text: "Imtihon yakunlandi — norma", color: "text-accent" },
          ].map((log) => (
            <div key={log.time} className="flex items-center gap-2 text-[9px]">
              <span className="text-neutral-400 font-mono">{log.time}</span>
              <span className={log.color}>{log.text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function HemisVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/8 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl">
        {/* Two systems header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 rounded-lg bg-accent/5 border border-accent/15 px-3 py-2">
            <div className="h-6 w-6 rounded bg-accent/15 flex items-center justify-center">
              <span className="text-[8px] font-extrabold text-accent">L</span>
            </div>
            <span className="text-[10px] font-bold text-neutral-900">LMS.uz</span>
          </div>

          {/* Animated sync line */}
          <div className="flex-1 mx-3 relative h-8">
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-accent via-primary to-primary"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-accent shadow-lg shadow-accent/50"
              animate={{ left: ["10%", "90%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary shadow-lg shadow-primary/50"
              animate={{ left: ["90%", "10%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/15 px-3 py-2">
            <div className="h-6 w-6 rounded bg-primary/15 flex items-center justify-center">
              <span className="text-[8px] font-extrabold text-primary">H</span>
            </div>
            <span className="text-[10px] font-bold text-neutral-900">HEMIS</span>
          </div>
        </div>

        {/* Sync logs */}
        <div className="space-y-2">
          {[
            { entity: "Talabalar", count: "2,847", status: "synced", time: "2s oldin" },
            { entity: "Fanlar", count: "156", status: "synced", time: "5s oldin" },
            { entity: "Baholar", count: "12,430", status: "syncing", time: "hozir" },
            { entity: "Davomat", count: "8,291", status: "synced", time: "1m oldin" },
            { entity: "O'qituvchilar", count: "234", status: "synced", time: "3m oldin" },
          ].map((item, i) => (
            <motion.div
              key={item.entity}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between rounded-lg bg-neutral-50 border border-neutral-100 p-2.5"
            >
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${item.status === "syncing" ? "bg-yellow-400 animate-pulse" : "bg-accent"}`} />
                <span className="text-[10px] font-medium text-neutral-900">{item.entity}</span>
              </div>
              <span className="text-[10px] text-neutral-400">{item.count}</span>
              <span className={`text-[9px] font-medium ${item.status === "syncing" ? "text-yellow-500" : "text-accent"}`}>
                {item.status === "syncing" ? "\u21BB Sinxronlanmoqda" : "\u2713 Sinxron"}
              </span>
              <span className="text-[9px] text-neutral-400">{item.time}</span>
            </motion.div>
          ))}
        </div>

        {/* Footer stats */}
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-neutral-100 pt-4">
          <div className="text-center">
            <p className="text-lg font-extrabold text-accent">99.9%</p>
            <p className="text-[9px] text-neutral-500">Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-extrabold text-accent">&lt;5s</p>
            <p className="text-[9px] text-neutral-500">Sinxron vaqti</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-extrabold text-accent">0</p>
            <p className="text-[9px] text-neutral-500">Dublikatlar</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ImageVisual({ src, alt, glowColor }: { src: string; alt: string; glowColor: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className={`pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br ${glowColor} blur-2xl`} />
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl">
        <Image
          src={src}
          alt={alt}
          width={700}
          height={450}
          className="w-full h-auto"
        />
      </div>
    </motion.div>
  );
}

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
  {
    id: "plagiat",
    icon: PlagiatIcon,
    title: "AI Plagiat Tekshirish",
    subtitle: "Talabalar ishlarini plagiatga tekshirish",
    description:
      "Talabalar tomonidan topshirilgan barcha ishlarni AI yordamida plagiatga tekshirish. Original matn foizini aniqlash, manba ko'rsatish va grammatika tahlili — barchasi avtomatik.",
    color: "accent",
    details: [
      {
        icon: Search,
        title: "Plagiat aniqlash",
        desc: "Internet va ichki baza bo'ylab matnni tekshirish, o'xshashlik foizini ko'rsatish",
      },
      {
        icon: BarChart3,
        title: "Original matn foizi",
        desc: "Har bir ish uchun originallik darajasini aniq hisoblash va vizualizatsiya",
      },
      {
        icon: FileText,
        title: "Manba ko'rsatish",
        desc: "Qaysi manbadan olinganini aniq ko'rsatish — havola va sahifa raqami bilan",
      },
      {
        icon: PenTool,
        title: "Grammatika tahlili",
        desc: "Imlo, grammatika va uslub xatolarini AI bilan avtomatik aniqlash",
      },
    ],
  },
  {
    id: "content-ai",
    icon: ContentAiIcon,
    title: "Kontent AI",
    subtitle: "AI-powered kontent yaratish",
    description:
      "O'qituvchilar uchun AI yordamida o'quv materiallarini avtomatik yaratish — test savollari, dars materiallari, topshiriqlar. Ko'p tilli qo'llab-quvvatlash bilan.",
    color: "primary",
    details: [
      {
        icon: Sparkles,
        title: "Test savollari generatsiya",
        desc: "Mavzu bo'yicha AI yordamida test va ochiq savollarni avtomatik yaratish",
      },
      {
        icon: FileText,
        title: "Dars materiallari",
        desc: "Slaydlar, konspektlar va qo'shimcha materiallarni AI bilan yaratish",
      },
      {
        icon: Languages,
        title: "Ko'p tilli qo'llab-quvvatlash",
        desc: "O'zbek, rus, ingliz — materiallarni bir necha tilda yaratish va tarjima",
      },
      {
        icon: BarChart3,
        title: "Adaptiv kontent",
        desc: "Talabalar darajasiga qarab kontentni avtomatik moslashtirish",
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
              Xavfsizlik, nazorat, integratsiya va AI — barchasi bir platformada
            </p>
          </div>
        </AnimateIn>

        {/* Feature blocks */}
        <div className="mt-10 space-y-16 sm:mt-14 sm:space-y-24">
          {keyFeatures.map((feature, idx) => {
            const colors = colorMap[feature.color as keyof typeof colorMap];
            const isReversed = idx % 2 === 1;

            return (
              <AnimateIn key={feature.id} delay={idx * 0.1}>
                <div
                  className={`flex flex-col gap-8 lg:gap-14 ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  } lg:items-center`}
                >
                  {/* Text content + details */}
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

                    {/* Detail items */}
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {feature.details.map((detail) => (
                        <div
                          key={detail.title}
                          className="flex items-start gap-2.5 rounded-lg border border-neutral-100 bg-neutral-50/50 p-3"
                        >
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${colors.detailIcon}`}
                          >
                            <detail.icon size={16} />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-neutral-900">
                              {detail.title}
                            </p>
                            <p className="mt-0.5 text-[11px] leading-relaxed text-neutral-500">
                              {detail.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual illustration */}
                  <div className="flex-1">
                    {feature.id === "cybersecurity" && <CybersecurityVisual />}
                    {feature.id === "autoproctoring" && <ProctoringVisual />}
                    {feature.id === "hemis-integration" && <HemisVisual />}
                    {feature.id === "plagiat" && (
                      <ImageVisual
                        src="/projects/pr.png"
                        alt="LMS.uz AI Plagiat tekshirish — original matn foizi va grammatika tahlili"
                        glowColor="from-accent/10 to-transparent"
                      />
                    )}
                    {feature.id === "content-ai" && (
                      <ImageVisual
                        src="/projects/contentai.png"
                        alt="LMS.uz Kontent AI — test yaratish va dars materiallari generatsiya"
                        glowColor="from-primary/8 to-transparent"
                      />
                    )}
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
