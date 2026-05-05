"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

const trustPoints = [
  "1 yil bepul qo'llab-quvvatlash",
  "HEMIS bilan avtomatik sinxron",
  "O'zbekiston serverlarida",
];

const partners = [
  { name: "Osiyo Xalqaro universiteti", logo: "/partners/1.png" },
  { name: "Iqtisodiyot va Pedagogika universiteti", logo: "/partners/2.png" },
  { name: "\"Ipak yo'li\" xalqaro universiteti", logo: "/partners/3.png" },
  { name: "Toshkent Amaliy Fanlar universiteti", logo: "/partners/4.png" },
  { name: "Aniq va ijtimoiy fanlar universiteti", logo: "/partners/5.png" },
  { name: "Qo'qon davlat universiteti", logo: "/partners/6.png" },
  { name: "Farg'ona davlat universiteti", logo: "/partners/7.png" },
  { name: "Termiz iqtisodiyot va servis universiteti", logo: "/partners/8.png" },
  { name: "Renessans ta'lim universiteti", logo: "/partners/9.png" },
  { name: "O'zbekiston milliy universiteti Jizzax", logo: "/partners/10.png" },
  { name: "Toshkent Menejment va Iqtisodiyot Instituti", logo: "/partners/11.png" },
  { name: "Yangi Asr universiteti", logo: "/partners/12.png" },
  { name: "Termiz davlat universiteti", logo: "/partners/13.png" },
];

function MarqueeRow({
  items,
  direction = "left",
  speed = 40,
}: {
  items: { name: string; logo: string }[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="group relative flex overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-primary to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-primary to-transparent sm:w-32" />

      {[0, 1].map((copy) => (
        <div
          key={copy}
          className={`flex shrink-0 items-center gap-4 pr-4 sm:gap-8 sm:pr-8 ${animationClass} group-hover:[animation-play-state:paused]`}
          style={{ animationDuration: `${speed}s` }}
          aria-hidden={copy === 1}
        >
          {items.map((partner) => (
            <div
              key={partner.name}
              className="flex h-20 w-48 shrink-0 items-center gap-2.5 rounded-xl bg-white/95 px-3 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/10 sm:h-24 sm:w-56 sm:gap-3 sm:px-4 md:w-64"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={56}
                height={56}
                className="h-10 w-10 shrink-0 object-contain sm:h-14 sm:w-14"
              />
              <span className="text-xs font-semibold leading-tight text-gray-800">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <section className="relative bg-primary pb-12 sm:pb-16">
      {/* Trust row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-sm font-medium text-white/80"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                  <Check size={12} className="text-accent" strokeWidth={3} />
                </span>
                {point}
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Section title */}
        <AnimateIn delay={0.15}>
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-white/90 backdrop-blur-sm uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Hamkorlar
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ular ishonib tanladi
            </h2>
          </div>
        </AnimateIn>
      </div>

      {/* Marquee */}
      <AnimateIn delay={0.3} direction="none">
        <div className="mt-8">
          <MarqueeRow items={partners} direction="left" speed={40} />
        </div>
      </AnimateIn>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent" />
    </section>
  );
}
