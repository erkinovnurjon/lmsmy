"use client";

import {
  TrendingUp,
  Clock,
  ShieldCheck,
  GraduationCap,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";
import CardSpotlight from "./CardSpotlight";

const stats = [
  {
    icon: TrendingUp,
    value: "40%",
    label: "Qo'lda kiritish kamaydi",
    desc: "HEMIS sinxronizatsiya tufayli qo'lda ma'lumot kiritish keskin kamaydi",
  },
  {
    icon: Clock,
    value: "3x",
    label: "Tezroq hisobot tayyorlash",
    desc: "Avtomatik hisobotlar o'qituvchi vaqtini tejaydi",
  },
  {
    icon: ShieldCheck,
    value: "95%",
    label: "Imtihon haqqoniyligi",
    desc: "AI-proctoring yordamida qoidabuzarliklar keskin kamaydi",
  },
  {
    icon: GraduationCap,
    value: "15+",
    label: "OTM ishonchi",
    desc: "O'zbekiston bo'ylab 15 dan ortiq oliy ta'lim muassasasi",
  },
];

const testimonials = [
  {
    quote:
      "HEMIS bilan sinxronizatsiya eng katta muammomiz edi. LMS.uz buni to'liq hal qildi — endi qo'lda kiritish deyarli yo'q.",
    author: "IT bo'lim boshlig'i",
    org: "Osiyo Xalqaro universiteti",
  },
  {
    quote:
      "AI-proctoring tizimi imtihon jarayonini tubdan o'zgartirdi. O'qituvchilar nazoratga emas, sifatga e'tibor beryapti.",
    author: "O'quv ishlari bo'yicha prorektor",
    org: "Iqtisodiyot va Pedagogika universiteti",
  },
  {
    quote:
      "5 haftada to'liq ishga tushirdik. Qo'llab-quvvatlash jamoasi har doim aloqada — muammo 2 soat ichida hal bo'ladi.",
    author: "Rektor yordamchisi",
    org: "Renessans ta'lim universiteti",
  },
];

export default function Results() {
  return (
    <section id="results" className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white py-16 sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Natijalar
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Raqamlarda isbotlangan natijalar
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              OTMlar LMS.uz bilan erishgan haqiqiy ko&apos;rsatkichlar
            </p>
          </div>
        </AnimateIn>

        {/* Stats grid */}
        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1} delay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <CardSpotlight className="group rounded-2xl border border-neutral-200/60 bg-white/90 backdrop-blur-sm p-6 shadow-md shadow-neutral-200/30">
                <div className="icon-float">
                  <div className="icon-float-target flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-500 group-hover:from-accent/15 group-hover:to-accent/5 group-hover:shadow-md group-hover:shadow-accent/10">
                    <stat.icon
                      size={24}
                      className="text-primary transition-colors duration-500 group-hover:text-accent"
                    />
                  </div>
                </div>
                <motion.div
                  className="mt-4 text-4xl font-extrabold text-gradient-accent"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {stat.value}
                </motion.div>
                <p className="mt-1.5 text-sm font-semibold text-neutral-900">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-500">
                  {stat.desc}
                </p>
              </CardSpotlight>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Testimonials */}
        <AnimateIn delay={0.2}>
          <div className="mt-16">
            <h3 className="text-center text-lg font-bold text-neutral-900">
              OTMlar nima deydi
            </h3>
            <StaggerContainer className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
              {testimonials.map((t) => (
                <StaggerItem key={t.org}>
                  <CardSpotlight
                    className="flex h-full flex-col rounded-2xl border border-neutral-200/60 bg-white/90 backdrop-blur-sm p-6 shadow-md shadow-neutral-200/30"
                    spotlightColor="rgba(30, 58, 95, 0.06)"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/8">
                      <Quote size={20} className="text-accent/50" />
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-neutral-600">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-5 border-t border-neutral-100 pt-4">
                      <p className="text-sm font-semibold text-neutral-900">
                        {t.author}
                      </p>
                      <p className="text-xs text-neutral-500">{t.org}</p>
                    </div>
                  </CardSpotlight>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
