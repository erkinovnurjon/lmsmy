"use client";

import {
  Rocket,
  HeadsetIcon,
  Wrench,
  Check,
  Clock,
  Users,
  Shield,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";
import CardSpotlight from "./CardSpotlight";

const timeline = [
  {
    week: "1-hafta",
    title: "Texnik audit",
    desc: "HEMIS integratsiya va mavjud tizimlarni tahlil qilish",
  },
  {
    week: "2-hafta",
    title: "Migratsiya",
    desc: "Ma'lumotlar ko'chirish va tizim konfiguratsiyasi",
  },
  {
    week: "3-hafta",
    title: "Treninglar",
    desc: "O'qituvchi va xodimlar uchun amaliy sessiyalar",
  },
  {
    week: "4-hafta",
    title: "Sinov rejimi",
    desc: "Real muhitda test va tuzatishlar",
  },
  {
    week: "5-hafta",
    title: "Ishga tushirish",
    desc: "To'liq ishga tushirish va monitoring",
  },
];

const supportItems = [
  {
    icon: Clock,
    text: "24/7 texnik yordam — telefon, Telegram, email",
  },
  {
    icon: Shield,
    text: "Xatoliklarni bepul tuzatish va tizim yangilanishlari",
  },
  {
    icon: Users,
    text: "Yangi xodimlar uchun qayta-qayta treninglar",
  },
  {
    icon: Zap,
    text: "HEMIS yangilanishiga avtomatik moslashuv",
  },
];

const customItems = [
  "OTM so'ragan qo'shimcha modullar",
  "Maxsus hisobot shakllari va shablonlar",
  "Ichki ishchi oqimlar va jarayonlar",
  "Fakultet/kafedra darajasidagi sozlamalar",
];

const stats = [
  { value: "5", unit: "hafta", label: "O'rtacha joriy qilish muddati" },
  { value: "2", unit: "soat", label: "O'rtacha javob vaqti" },
  { value: "98%", unit: "", label: "Mijozlar qoniqish darajasi" },
  { value: "150+", unit: "", label: "Maxsus modullar yaratilgan" },
];

export default function Implementation() {
  return (
    <section id="implementation" className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Joriy qilish va qo&apos;llab-quvvatlash
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Sotuvdan keyin — hamkor bo&apos;lamiz
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              O&apos;zbekiston OTMlari &ldquo;sotib olib, tashlab
              qo&apos;yiladi&rdquo; degan qo&apos;rquv bilan yashaydi. Biz
              aynan buning aksini qilamiz.
            </p>
          </div>
        </AnimateIn>

        {/* Stats row */}
        <StaggerContainer className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-4 md:gap-6" stagger={0.08}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <CardSpotlight className="rounded-2xl border border-neutral-200/60 bg-white/90 backdrop-blur-sm p-5 text-center shadow-md shadow-neutral-200/30">
                <motion.div
                  className="text-3xl font-extrabold text-gradient-accent sm:text-4xl"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {stat.value}
                  {stat.unit && (
                    <span className="ml-1 text-base font-semibold text-neutral-400">
                      {stat.unit}
                    </span>
                  )}
                </motion.div>
                <p className="mt-1.5 text-xs font-medium text-neutral-500 sm:text-sm">
                  {stat.label}
                </p>
              </CardSpotlight>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Main content grid */}
        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-5">
          {/* Timeline — left side, 2 cols */}
          <AnimateIn direction="left" className="md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-primary-dark to-primary p-6 shadow-2xl sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 shadow-inner">
                  <Rocket size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  5 haftada ishga tushirish
                </h3>
              </div>

              <div className="relative mt-8 space-y-6">
                {/* Vertical line */}
                <div className="absolute top-2 bottom-2 left-[11px] w-px bg-white/15" />

                {timeline.map((step, i) => (
                  <motion.div
                    key={step.week}
                    className="relative flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-30px" }}
                    transition={{ delay: i * 0.1, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    {/* Dot */}
                    <div
                      className={`relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all ${
                        i === timeline.length - 1
                          ? "bg-accent text-white shadow-lg shadow-accent/30"
                          : "border border-white/25 bg-white/10 text-white/80"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider text-accent/80 uppercase">
                        {step.week}
                      </span>
                      <p className="text-sm font-semibold text-white">
                        {step.title}
                      </p>
                      <p className="mt-0.5 text-xs text-white/50">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Support + Customization — right side, 3 cols */}
          <div className="space-y-6 sm:space-y-8 md:col-span-3">
            {/* 1 year support */}
            <AnimateIn direction="right" delay={0.1}>
              <div className="rounded-2xl border border-neutral-200/60 bg-white/90 backdrop-blur-sm p-6 shadow-lg shadow-neutral-200/30 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <HeadsetIcon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">
                      1 yil bepul qo&apos;llab-quvvatlash
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Qo&apos;shimcha to&apos;lovsiz, shartnomaga kiritilgan
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {supportItems.map((item) => (
                    <motion.div
                      key={item.text}
                      className="group flex items-start gap-3 rounded-xl border border-neutral-100 bg-white p-4 transition-colors duration-300 hover:border-accent/15 hover:bg-accent/3"
                      whileHover={{ y: -2, transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] } }}
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/5 transition-colors duration-300 group-hover:bg-accent/10">
                        <item.icon size={16} className="text-primary transition-colors duration-300 group-hover:text-accent" />
                      </span>
                      <span className="text-sm font-medium text-neutral-700">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Customization */}
            <AnimateIn direction="right" delay={0.2}>
              <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-emerald-50/50 p-6 shadow-lg shadow-accent/5 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <Wrench size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">
                      Bepul moslashtirish
                    </h3>
                    <p className="text-sm text-neutral-500">
                      OTM so&apos;ragan funksiyalar 1 yil ichida bepul
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {customItems.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                        <Check
                          size={10}
                          className="text-accent"
                          strokeWidth={3}
                        />
                      </span>
                      <span className="text-sm font-medium text-neutral-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-accent/10 bg-white/80 px-5 py-4 backdrop-blur-sm">
                  <p className="text-sm text-neutral-600">
                    <span className="font-bold text-neutral-900">
                      Eng muhimi:
                    </span>{" "}
                    OTM xohlagan yangi modul, hisobot yoki jarayonni biz 1 yil
                    ichida qo&apos;shimcha to&apos;lovsiz ishlab chiqib beramiz.
                    O&apos;rtacha tayyor bo&apos;lish muddati —{" "}
                    <span className="font-semibold text-accent">2–4 hafta</span>.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
