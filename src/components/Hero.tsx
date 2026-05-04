"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import DashboardMockup from "./DashboardMockup";
import HeroDecor from "./HeroDecor";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32">
      {/* ===== SVG circuit / network pattern ===== */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Grid lines */}
            <path d="M60 0 V60 M0 60 H60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <pattern id="hero-dots" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Intersection dots */}
            <circle cx="0" cy="0" r="1.5" fill="white" />
            <circle cx="60" cy="0" r="1.5" fill="white" />
            <circle cx="0" cy="60" r="1.5" fill="white" />
            <circle cx="60" cy="60" r="1.5" fill="white" />
          </pattern>
          {/* Radial fade — visible in centre, fades at edges */}
          <radialGradient id="hero-fade" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-mask">
            <rect width="100%" height="100%" fill="url(#hero-fade)" />
          </mask>
        </defs>
        <g mask="url(#hero-mask)">
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </g>
      </svg>

      {/* ===== Decorative circuit lines — animated ===== */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#16a34a" stopOpacity="0" />
            <stop offset="50%" stopColor="#16a34a" stopOpacity="1" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#16a34a" stopOpacity="0" />
            <stop offset="50%" stopColor="#16a34a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal flowing lines */}
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#line-grad-1)" strokeWidth="0.5">
          <animateTransform attributeName="transform" type="translate" values="-200,0;200,0;-200,0" dur="12s" repeatCount="indefinite" />
        </line>
        <line x1="0" y1="65%" x2="100%" y2="65%" stroke="url(#line-grad-1)" strokeWidth="0.5">
          <animateTransform attributeName="transform" type="translate" values="300,0;-300,0;300,0" dur="16s" repeatCount="indefinite" />
        </line>

        {/* Vertical flowing lines */}
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="url(#line-grad-2)" strokeWidth="0.5">
          <animateTransform attributeName="transform" type="translate" values="0,-150;0,150;0,-150" dur="14s" repeatCount="indefinite" />
        </line>
        <line x1="75%" y1="0" x2="75%" y2="100%" stroke="url(#line-grad-2)" strokeWidth="0.5">
          <animateTransform attributeName="transform" type="translate" values="0,200;0,-200;0,200" dur="18s" repeatCount="indefinite" />
        </line>

        {/* Node dots at key positions — pulsing */}
        <circle cx="25%" cy="30%" r="3" fill="#16a34a" opacity="0.6">
          <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="75%" cy="65%" r="3" fill="#22d3ee" opacity="0.5">
          <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="50%" cy="48%" r="2.5" fill="white" opacity="0.4">
          <animate attributeName="r" values="2.5;4;2.5" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
        </circle>

        {/* Diagonal accent path */}
        <path
          d="M0,100% Q25%,60% 50%,50% T100%,0%"
          fill="none"
          stroke="url(#line-grad-1)"
          strokeWidth="0.5"
          opacity="0.5"
        >
          <animateTransform attributeName="transform" type="translate" values="0,30;0,-30;0,30" dur="10s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* ===== Decorative SVG illustrations ===== */}
      <HeroDecor />

      {/* ===== Gradient mesh blobs ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary-light/20 blur-[120px]" />
        <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] rounded-full bg-primary-light/15 blur-[100px]" />
      </div>

      {/* ===== Floating blobs ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob-float absolute top-20 left-[10%] h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="animate-blob-float-reverse absolute top-40 right-[15%] h-96 w-96 rounded-full bg-primary-light/10 blur-3xl" />
        <div className="animate-blob-float absolute bottom-10 left-[40%] h-64 w-64 rounded-full bg-accent/4 blur-3xl" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Matn bloki */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              15+ OTM ishonchi
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[2.25rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
            >
              HEMIS bilan to&apos;liq sinxron —{" "}
              <span className="text-gradient-accent">yagona LMS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300"
            >
              Real-time HEMIS sinxronizatsiya, AI-proctoring va{" "}
              <span className="font-semibold text-white">
                1 yil bepul qo&apos;llab-quvvatlash
              </span>{" "}
              — qo&apos;lda kiritish 40% kamayadi.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-accent to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/35 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                Demo bron qilish
              </a>
              <a
                href="#features"
                className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
              >
                Batafsil ma&apos;lumot
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      {/* gradient yo'q — Partners bilan bir xil fon */}
    </section>
  );
}
