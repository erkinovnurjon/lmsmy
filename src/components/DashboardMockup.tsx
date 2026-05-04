"use client";

import { Users, TrendingUp, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Jami talabalar", value: "12,450", icon: Users, trend: "+320" },
  { label: "Bugungi davomat", value: "89%", icon: TrendingUp, trend: "+2.4%" },
  { label: "HEMIS sinxron", value: "100%", icon: RefreshCw, accent: true },
];

const faculties = [
  { name: "Axborot texnologiyalari", students: "2,180", score: "78%", bar: 78 },
  { name: "Iqtisodiyot", students: "1,940", score: "82%", bar: 82 },
  { name: "Muhandislik", students: "1,650", score: "74%", bar: 74 },
];

// Davomat trend chizig'i uchun SVG nuqtalari
const chartPoints = [10, 35, 25, 50, 40, 65, 55, 72, 62, 80, 75, 89];
const chartPath = chartPoints
  .map((y, i) => {
    const x = (i / (chartPoints.length - 1)) * 200;
    const flipped = 50 - (y / 100) * 50;
    return `${i === 0 ? "M" : "L"}${x},${flipped}`;
  })
  .join(" ");

export default function DashboardMockup() {
  return (
    <div className="relative hidden lg:block">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c1e35] shadow-2xl shadow-black/40">
        {/* Browser bar */}
        <div className="flex items-center gap-2 border-b border-white/8 bg-[#091828] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/40" />
          <span className="ml-3 rounded-md bg-white/5 px-3 py-0.5 text-[10px] text-white/30">
            lms.uz/dashboard
          </span>
        </div>

        <div className="p-4 space-y-4">
          {/* Sidebar hint + header */}
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-white/60">
              Boshqaruv paneli
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] text-accent/80">HEMIS ulangan</span>
            </div>
          </div>

          {/* Stat cards with stagger animation */}
          <div className="grid grid-cols-3 gap-2.5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className={`rounded-lg border p-3 transition-colors ${
                  stat.accent
                    ? "border-accent/20 bg-accent/10"
                    : "border-white/8 bg-white/5 hover:bg-white/8"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <stat.icon
                    size={12}
                    className={stat.accent ? "text-accent" : "text-white/40"}
                  />
                  <span className="text-[9px] text-white/40">{stat.label}</span>
                </div>
                <div className="mt-1.5 text-lg font-bold leading-none text-white">
                  {stat.value}
                </div>
                {stat.trend && (
                  <div className="mt-1 text-[9px] font-medium text-accent">
                    {stat.trend}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="rounded-lg border border-white/8 bg-white/5 p-3"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-white/50">
                Davomat dinamikasi
              </span>
              <span className="text-[9px] text-white/30">Oxirgi 12 hafta</span>
            </div>
            <svg
              viewBox="0 0 200 55"
              className="h-14 w-full"
              preserveAspectRatio="none"
            >
              {/* Grid lines */}
              <line x1="0" y1="25" x2="200" y2="25" stroke="white" strokeOpacity="0.06" />
              <line x1="0" y1="50" x2="200" y2="50" stroke="white" strokeOpacity="0.06" />
              {/* Area fill */}
              <path
                d={`${chartPath} L200,50 L0,50 Z`}
                fill="url(#chartGradient)"
              />
              {/* Line */}
              <motion.path
                d={chartPath}
                fill="none"
                stroke="#16a34a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              />
              {/* End dot */}
              <motion.circle
                cx="200"
                cy={50 - (89 / 100) * 50}
                r="2.5"
                fill="#16a34a"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 2.3 }}
              />
              <motion.circle
                cx="200"
                cy={50 - (89 / 100) * 50}
                r="5"
                fill="#16a34a"
                fillOpacity="0.2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 2.3 }}
              />
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16a34a" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Faculty table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="rounded-lg border border-white/8 bg-white/5 p-3"
          >
            <div className="mb-2 text-[10px] font-medium text-white/50">
              Fakultetlar bo&apos;yicha o&apos;zlashtirish
            </div>
            <div className="space-y-2">
              {faculties.map((f, i) => (
                <div key={f.name} className="flex items-center gap-3">
                  <span className="w-[120px] truncate text-[10px] text-white/70">
                    {f.name}
                  </span>
                  <div className="flex-1">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${f.bar}%` }}
                        transition={{ duration: 0.8, delay: 1.3 + i * 0.15, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  <span className="w-8 text-right text-[10px] font-medium text-white/60">
                    {f.score}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Shimmer overlay */}
        <div className="animate-shimmer pointer-events-none absolute inset-0 rounded-2xl" />
      </div>

      {/* Glow effect - enhanced */}
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-accent/8 blur-3xl" />
      <div className="pointer-events-none absolute -inset-8 -z-20 rounded-3xl bg-primary-light/10 blur-[60px]" />
    </div>
  );
}
