"use client";

import { useState } from "react";
import Link from "next/link";
import { ScanEye, BrainCircuit, Video, ChevronRight, X, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";
import CardSpotlight from "./CardSpotlight";

interface Feature {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  details: string[];
}

const features: Feature[] = [
  {
    icon: ScanEye,
    title: "AI-Proctoring",
    slug: "ai-proctoring",
    description:
      "Imtihon vaqtida talabani real-time kuzatish, qoidabuzarliklarni avtomatik aniqlash",
    details: [
      "Yuz aniqlash va identifikatsiya",
      "Ekrandan chiqishni aniqlash",
      "Ikkinchi shaxsni aniqlash",
      "Ovozli monitoring",
      "Real-time ogohlantirish tizimi",
      "Hisobot va statistika",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Content AI",
    slug: "content-ai",
    description:
      "O'quv materiallarini generatsiya qilish, savollar banki va avtomatik baholash",
    details: [
      "Test savollarini avtomatik generatsiya",
      "O'quv materiallarini yaratish",
      "Talabalar javoblarini AI baholash",
      "Plagiatni aniqlash",
      "Adaptiv o'quv kontenti",
      "Ko'p tilli qo'llab-quvvatlash",
    ],
  },
  {
    icon: Video,
    title: "Video kuzatuv",
    slug: "video-kuzatuv",
    description:
      "Onlayn imtihonlarda yuz aniqlash, ekran yozish va harakatlarni monitoring qilish",
    details: [
      "HD video yozish va saqlash",
      "Ekran faoliyatini yozish",
      "Harakatlarni tahlil qilish",
      "Shubhali xatti-harakatlarni belgilash",
      "Qayta ko'rish imkoniyati",
      "Cloud saqlash va arxivlash",
    ],
  },
];

export default function FeaturesStrip() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="features" className="relative overflow-hidden border-t border-neutral-200/50 bg-neutral-50 py-10 sm:py-14 md:py-20">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-primary/3 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <AnimateIn>
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              AI bilan kuchaytirilgan imkoniyatlar
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="mx-auto mt-8 text-center text-3xl font-bold tracking-normal text-neutral-900 sm:text-4xl">
            Zamonaviy AI texnologiyalari
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-neutral-500">
            Har bir modul universitetingiz samaradorligini oshirish uchun
            ishlab chiqilgan
          </p>
        </AnimateIn>

        {/* Cards */}
        <StaggerContainer className="mt-8 grid items-start gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.15} delay={0.2}>
          {features.map((feature, i) => {
            const isOpen = activeIndex === i;

            return (
              <StaggerItem key={feature.title}>
                <CardSpotlight
                  className={`cursor-pointer rounded-2xl border bg-white/90 backdrop-blur-sm p-4 sm:p-6 transition-all duration-500 ${
                    isOpen
                      ? "border-accent/40 shadow-2xl shadow-accent/10 ring-1 ring-accent/20"
                      : "border-neutral-200/60 shadow-md shadow-neutral-200/30 hover:shadow-xl hover:border-accent/20"
                  }`}
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      className={`flex h-13 w-13 items-center justify-center rounded-xl transition-colors duration-500 ${
                        isOpen
                          ? "bg-gradient-to-br from-accent to-emerald-400 text-white shadow-lg shadow-accent/25"
                          : "bg-primary/8 text-primary"
                      }`}
                      animate={isOpen ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <feature.icon size={26} />
                    </motion.div>
                    <motion.div
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-accent/10 text-accent"
                          : "bg-neutral-100 text-neutral-400"
                      }`}
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                      {isOpen ? <X size={16} /> : <ChevronRight size={16} />}
                    </motion.div>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-neutral-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {feature.description}
                  </p>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 border-t border-neutral-100 pt-4">
                          <ul className="space-y-2.5">
                            {feature.details.map((detail, di) => (
                              <motion.li
                                key={detail}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: di * 0.05, duration: 0.3 }}
                                className="flex items-center gap-2.5 text-sm text-neutral-600"
                              >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                </span>
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.3 }}
                          className="mt-4"
                        >
                          <Link
                            href={`/features/${feature.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="group/link inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all hover:shadow-lg hover:shadow-accent/30"
                          >
                            Batafsil ko&apos;rish
                            <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-0.5" />
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardSpotlight>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
