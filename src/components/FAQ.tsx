"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const faqs = [
  {
    question:
      "1 yillik bepul qo'llab-quvvatlash tugagandan keyin narx qanday?",
    answer:
      "1 yildan keyin qo'llab-quvvatlash va yangilanishlar uchun yillik obuna taklif qilinadi. Narx OTM hajmi va modullar soniga qarab belgilanadi. Ammo tizimning o'zi sizniki bo'lib qoladi — obuna faqat texnik yordam va yangilanishlar uchun.",
  },
  {
    question: "Qo'shimcha modul so'rasak, qancha vaqtda tayyor bo'ladi?",
    answer:
      "Oddiy hisobot shakllari va sozlamalar 1–2 hafta ichida. Yangi modul yoki murakkab ishchi oqim 3–6 hafta ichida tayyor bo'ladi. Har bir so'rov uchun aniq muddat va bosqichlar kelishiladi.",
  },
  {
    question: "O'qituvchilarni o'qitish qanday tashkil etiladi?",
    answer:
      "Dastlabki trening joriy qilish jarayonida o'tkaziladi. 1 yil davomida yangi o'qituvchilar yoki yangi modullar uchun qayta-qayta treninglar bepul. Onlayn va oflayn formatda — OTMga qulay vaqtda.",
  },
  {
    question: "HEMIS yangilansa, tizim avtomatik moslanadi mi?",
    answer:
      "Ha. HEMIS API'dagi har qanday o'zgarishga biz 1 yil ichida bepul moslashamiz. Sizning IT bo'limingiz hech narsa qilishi shart emas — biz monitoring qilamiz va yangilaymiz.",
  },
  {
    question: "Ma'lumotlarimiz qayerda saqlanadi?",
    answer:
      "Barcha ma'lumotlar O'zbekiston hududidagi serverlarda saqlanadi. Xalqaro serverga hech qanday ma'lumot chiqmaydi. Ma'lumot egaligi to'liq OTMga tegishli.",
  },
  {
    question: "HEMIS integratsiyasi qanchalik chuqur?",
    answer:
      "Real-time ikki tomonlama sinxronizatsiya: talaba, o'qituvchi, fan, baho, davomat — barchasi HEMIS bilan avtomatik almashadi. Qo'lda kiritish deyarli yo'qoladi.",
  },
  {
    question: "Narxlash modeli qanday?",
    answer:
      "Bir martalik litsenziya + 1 yil bepul qo'llab-quvvatlash. Narx talabalar soni va tanlangan modullarga qarab belgilanadi. Aniq narx uchun demo bron qiling — sizning OTMga mos taklif tayyorlaymiz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-100/50 py-12 sm:py-16 md:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-5">
          {/* Left — header + CTA */}
          <AnimateIn direction="left" className="md:col-span-2 md:sticky md:top-24 md:self-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Ko&apos;p beriladigan savollar
            </h2>
            <p className="mt-4 text-base text-neutral-500">
              Javob topmadingizmi? Biz bilan bog&apos;laning — 2 soat ichida
              javob beramiz.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-accent to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                Demo bron qilish
              </a>
              <a
                href="tel:+998901234567"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 hover:shadow-md"
              >
                <MessageCircleQuestion size={16} />
                Savol berish
              </a>
            </div>

            {/* Quick stat */}
            <div className="mt-8 rounded-xl border border-neutral-200/60 bg-white/90 backdrop-blur-sm p-5 shadow-md shadow-neutral-200/30">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-extrabold text-gradient-accent">
                    2 soat
                  </div>
                  <p className="text-xs text-neutral-500">
                    O&apos;rtacha javob vaqti
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-gradient-accent">
                    98%
                  </div>
                  <p className="text-xs text-neutral-500">Qoniqish darajasi</p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right — questions */}
          <AnimateIn direction="right" delay={0.15} className="space-y-3 md:col-span-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  className={`overflow-hidden rounded-xl border bg-white/90 backdrop-blur-sm transition-colors duration-400 ${
                    isOpen
                      ? "border-accent/40 shadow-xl shadow-accent/8 ring-1 ring-accent/10"
                      : "border-neutral-200/60 shadow-md shadow-neutral-200/20 hover:border-neutral-300 hover:shadow-lg"
                  }`}
                  layout
                  transition={{ layout: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-4 text-left sm:px-6 sm:py-5"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-start gap-3 pr-4">
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 ${
                          isOpen
                            ? "bg-gradient-to-br from-accent to-emerald-400 text-white shadow-sm"
                            : "bg-neutral-100 text-neutral-400"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="text-[0.95rem] font-semibold text-neutral-900">
                        {faq.question}
                      </span>
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                      <ChevronDown
                        size={18}
                        className={`shrink-0 transition-colors duration-300 ${
                          isOpen ? "text-accent" : "text-neutral-400"
                        }`}
                      />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-neutral-100 px-6 py-4 pl-15">
                          <p className="text-sm leading-relaxed text-neutral-600">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
