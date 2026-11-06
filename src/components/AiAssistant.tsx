"use client";

import { MessageSquare, BookPlus, CalendarClock } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const features = [
  {
    icon: MessageSquare,
    title: "Savol-javob",
    desc: "Istalgan savolga bir zumda javob olish",
  },
  {
    icon: BookPlus,
    title: "Kurs yaratish",
    desc: "AI yordamida yangi kurslarni tezkor yaratish",
  },
  {
    icon: CalendarClock,
    title: "Jadval tuzish",
    desc: "Dars jadvali va imtihon rejasini optimallashtirish",
  },
];

export default function AiAssistant() {
  return (
    <section className="relative overflow-hidden border-t border-neutral-200/50 bg-neutral-50 py-10 sm:py-14 md:py-20">
      <div className="pointer-events-none absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/3 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Text — 2 cols */}
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                AI yordamchi
              </span>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
                NEXTA — shaxsiy AI yordamchingiz
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                O&apos;qituvchilar va administratorlar uchun AI-powered yordamchi.
                Savollaringizga javob beradi, kurs yaratishda yordam beradi va jadval tuzadi.
              </p>

              <div className="mt-5 space-y-3">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 rounded-lg border border-neutral-100 bg-white/80 p-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <f.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-900">{f.title}</p>
                      <p className="mt-0.5 text-[11px] text-neutral-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image — 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:col-span-3"
            >
              <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/8 to-transparent blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl">
                <Image
                  src="/projects/pr2.png"
                  alt="NEXTA AI yordamchi — chatbot, kurs yaratish, jadval tuzish"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
