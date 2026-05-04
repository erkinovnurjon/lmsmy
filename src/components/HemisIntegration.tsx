"use client";

import {
  RefreshCw,
  ArrowLeftRight,
  Database,
  ShieldCheck,
  Users,
  BookOpen,
  ClipboardList,
  CalendarCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";
import CardSpotlight from "./CardSpotlight";

const syncItems = [
  {
    icon: Users,
    label: "Talabalar",
    desc: "Ro'yxat, guruh, kurs — avtomatik sinxron",
  },
  {
    icon: BookOpen,
    label: "Fanlar va o'quv reja",
    desc: "Fan kodi, kredit, soatlar — real-time",
  },
  {
    icon: ClipboardList,
    label: "Baholar",
    desc: "Oraliq, yakuniy, GPA — ikki tomonlama",
  },
  {
    icon: CalendarCheck,
    label: "Davomat",
    desc: "Dars jadvali va davomat — HEMIS'ga avtomatik",
  },
  {
    icon: Users,
    label: "O'qituvchilar",
    desc: "Shtat, yuklanish, kafedra — sinxronlangan",
  },
  {
    icon: Database,
    label: "Buyruqlar va hujjatlar",
    desc: "Talaba holati, stipendiya — yangilangan",
  },
];

const advantages = [
  {
    icon: ArrowLeftRight,
    title: "Ikki tomonlama sinxron",
    desc: "LMS'dagi o'zgarish HEMIS'ga, HEMIS'dagi o'zgarish LMS'ga — avtomatik, qo'lda kiritish shart emas.",
  },
  {
    icon: RefreshCw,
    title: "Real-time yangilanish",
    desc: "Ma'lumotlar 5 daqiqa ichida sinxronlanadi. Kechikish va dublikat muammosi yo'q.",
  },
  {
    icon: ShieldCheck,
    title: "HEMIS yangilanishiga moslashuv",
    desc: "HEMIS API o'zgarganda biz 1 yil ichida bepul moslashtiramiz. Sizning IT bo'limingiz hech narsa qilmaydi.",
  },
];

export default function HemisIntegration() {
  return (
    <section id="hemis" className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              HEMIS integratsiya
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              HEMIS bilan to&apos;liq sinxron
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              Qo&apos;lda kiritish 40% kamayadi. Barcha ma&apos;lumotlar bir joyda
              — LMS va HEMIS o&apos;rtasida hech qanday farq yo&apos;q.
            </p>
          </div>
        </AnimateIn>

        {/* Sync diagram */}
        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Left: LMS block */}
          <AnimateIn direction="left" delay={0.1} className="lg:col-span-1">
            <motion.div
              className="flex h-full flex-col items-center justify-center rounded-2xl border border-accent/20 bg-gradient-to-b from-accent/5 to-accent/10 p-6 shadow-lg shadow-accent/5"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 shadow-inner">
                <Database size={28} className="text-accent" />
              </div>
              <p className="mt-3 text-lg font-bold text-neutral-900">LMS.uz</p>
              <p className="mt-1 text-center text-xs text-neutral-500">
                O&apos;quv boshqaruv tizimi
              </p>
              {/* Pulse indicator */}
              <div className="mt-3 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-[10px] font-medium text-accent/70">Aktiv</span>
              </div>
            </motion.div>
          </AnimateIn>

          {/* Middle: sync items */}
          <StaggerContainer className="lg:col-span-3" stagger={0.08} delay={0.2}>
            <div className="grid gap-3 sm:grid-cols-2">
              {syncItems.map((item, i) => (
                <StaggerItem key={item.label + item.desc}>
                  <motion.div
                    className="group flex items-start gap-3 rounded-xl border border-neutral-200/60 bg-white/90 backdrop-blur-sm p-4 shadow-sm transition-colors duration-300 hover:border-accent/20 hover:bg-accent/5"
                    whileHover={{ y: -3, transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] } }}
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/8 transition-colors duration-300 group-hover:bg-accent/10">
                      <item.icon size={18} className="text-primary transition-colors duration-300 group-hover:text-accent" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-xs text-neutral-500">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Right: HEMIS block */}
          <AnimateIn direction="right" delay={0.1} className="lg:col-span-1">
            <motion.div
              className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-primary/10 p-6 shadow-lg shadow-primary/5"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 shadow-inner">
                <ShieldCheck size={28} className="text-primary" />
              </div>
              <p className="mt-3 text-lg font-bold text-neutral-900">HEMIS</p>
              <p className="mt-1 text-center text-xs text-neutral-500">
                Davlat axborot tizimi
              </p>
              {/* Pulse indicator */}
              <div className="mt-3 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-[10px] font-medium text-primary/70">Ulangan</span>
              </div>
            </motion.div>
          </AnimateIn>
        </div>

        {/* Arrows indicator for mobile */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-neutral-400 lg:hidden">
          <ArrowLeftRight size={16} />
          Real-time sinxronizatsiya
        </div>

        {/* Advantages */}
        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-3" stagger={0.12} delay={0.1}>
          {advantages.map((adv) => (
            <StaggerItem key={adv.title}>
              <CardSpotlight className="group rounded-2xl border border-neutral-200/60 bg-white/90 backdrop-blur-sm p-6 shadow-md shadow-neutral-200/30">
                <div className="icon-float">
                  <div className="icon-float-target flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 transition-all duration-500 group-hover:from-accent/20 group-hover:to-accent/10 group-hover:shadow-md group-hover:shadow-accent/10">
                    <adv.icon size={22} className="text-accent" />
                  </div>
                </div>
                <h3 className="mt-4 text-base font-bold text-neutral-900">
                  {adv.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {adv.desc}
                </p>
              </CardSpotlight>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
