"use client";

import { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: backend integratsiya
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-5">
          {/* Left — info */}
          <AnimateIn direction="left" className="md:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Bog&apos;lanish
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Demo bron qiling
            </h2>
            <p className="mt-4 text-base text-neutral-500">
              OTMingiz uchun bepul demo ko&apos;rsatamiz. Formani to&apos;ldiring
              — 2 soat ichida javob beramiz.
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "Telefon", value: "+998 90 123 45 67", href: "tel:+998901234567" },
                { icon: Mail, label: "Email", value: "info@lms.uz", href: "mailto:info@lms.uz" },
                { icon: MessageCircle, label: "Telegram", value: "@lmsuz", href: "https://t.me/lmsuz" },
              ].map((contact) => (
                <motion.div
                  key={contact.label}
                  className="flex items-center gap-3"
                  whileHover={{ x: 4, transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] } }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 transition-colors duration-300 hover:bg-accent/10">
                    <contact.icon size={18} className="text-primary" />
                  </span>
                  <div>
                    <p className="text-xs text-neutral-500">{contact.label}</p>
                    <a
                      href={contact.href}
                      className="animated-underline text-sm font-semibold text-neutral-900 transition-colors hover:text-accent"
                    >
                      {contact.value}
                    </a>
                  </div>
                </motion.div>
              ))}
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 4, transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] } }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/8">
                  <MapPin size={18} className="text-primary" />
                </span>
                <div>
                  <p className="text-xs text-neutral-500">Manzil</p>
                  <p className="text-sm font-semibold text-neutral-900">
                    Toshkent, O&apos;zbekiston
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimateIn>

          {/* Right — form */}
          <AnimateIn direction="right" delay={0.15} className="md:col-span-3">
            <div className="rounded-2xl border border-neutral-200/60 bg-white/90 backdrop-blur-sm p-6 shadow-xl shadow-neutral-200/40 sm:p-8">
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 animate-pulse-glow">
                    <CheckCircle2 size={32} className="text-accent" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-neutral-900">
                    So&apos;rovingiz qabul qilindi!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-neutral-500">
                    Jamoamiz 2 soat ichida siz bilan bog&apos;lanadi. Tez orada
                    ko&apos;rishamiz!
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    Yana so&apos;rov yuborish
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-neutral-700"
                      >
                        Ism-familiya
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ism Familiya"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm placeholder:text-neutral-400 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-md focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-neutral-700"
                      >
                        Telefon raqam
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+998 __ ___ __ __"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm placeholder:text-neutral-400 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-md focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="org"
                      className="mb-1.5 block text-sm font-medium text-neutral-700"
                    >
                      OTM nomi
                    </label>
                    <input
                      id="org"
                      name="org"
                      type="text"
                      required
                      placeholder="Universitet yoki institut nomi"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm placeholder:text-neutral-400 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-md focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="position"
                      className="mb-1.5 block text-sm font-medium text-neutral-700"
                    >
                      Lavozim
                    </label>
                    <input
                      id="position"
                      name="position"
                      type="text"
                      placeholder="Rektor, IT bo'lim boshlig'i, ..."
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm placeholder:text-neutral-400 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-md focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-neutral-700"
                    >
                      Qo&apos;shimcha xabar
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Qanday modullar qiziqtiradi, qancha talaba bor, va h.k."
                      className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm placeholder:text-neutral-400 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-md focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent to-emerald-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/35 sm:w-auto"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    <Send size={16} />
                    Demo so&apos;rovi yuborish
                  </button>
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
