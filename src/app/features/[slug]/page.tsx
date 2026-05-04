import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ScanEye,
  BrainCircuit,
  Video,
  ArrowLeft,
  Check,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FeatureDetail {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  details: { title: string; text: string }[];
  benefits: string[];
  stats: { label: string; value: string }[];
}

const features: Record<string, FeatureDetail> = {
  "ai-proctoring": {
    icon: ScanEye,
    title: "AI-Proctoring",
    slug: "ai-proctoring",
    description:
      "Imtihon vaqtida talabani real-time kuzatish, qoidabuzarliklarni avtomatik aniqlash",
    longDescription:
      "AI-Proctoring tizimi sun'iy intellekt yordamida imtihon jarayonini to'liq nazorat qiladi. Talabaning yuzini aniqlash, ekran faoliyatini kuzatish va shubhali harakatlarni real vaqtda aniqlash orqali imtihon halolligini ta'minlaydi. Tizim avtomatik ravishda qoidabuzarliklarni qayd etadi va o'qituvchiga xabar beradi.",
    details: [
      {
        title: "Yuz aniqlash va identifikatsiya",
        text: "Imtihon boshlanishidan oldin talabaning shaxsini tasdiqlaydi. Imtihon davomida doimiy ravishda yuzni kuzatib boradi va boshqa shaxs almashtirilganini aniqlaydi.",
      },
      {
        title: "Ekrandan chiqishni aniqlash",
        text: "Talaba imtihon oynasidan chiqib, boshqa dastur yoki brauzer tabiga o'tganini real vaqtda aniqlaydi va qayd etadi.",
      },
      {
        title: "Ikkinchi shaxsni aniqlash",
        text: "Kamera orqali xonada ikkinchi shaxs borligini aniqlaydi. AI algoritmlari bir nechta yuzni farqlash qobiliyatiga ega.",
      },
      {
        title: "Ovozli monitoring",
        text: "Mikrofon orqali atrofdagi ovozlarni tahlil qiladi. Shubhali suhbat yoki yordam olish urinishlarini aniqlaydi.",
      },
      {
        title: "Real-time ogohlantirish tizimi",
        text: "Qoidabuzarlik aniqlanganda o'qituvchiga darhol xabar yuboradi. O'qituvchi real vaqtda imtihon jarayonini kuzatishi mumkin.",
      },
      {
        title: "Hisobot va statistika",
        text: "Har bir imtihon bo'yicha batafsil hisobot tayyorlanadi. Qoidabuzarliklar soni, turi va vaqtlari ko'rsatiladi.",
      },
    ],
    benefits: [
      "Imtihon halolligini 95% ga oshiradi",
      "O'qituvchi vaqtini 70% ga tejaydi",
      "Avtomatik hisobot tizimi",
      "24/7 texnik qo'llab-quvvatlash",
      "HEMIS bilan to'liq integratsiya",
      "Bir vaqtda 1000+ talabani kuzatish",
    ],
    stats: [
      { label: "Aniqlik darajasi", value: "99.2%" },
      { label: "Kuzatuv tezligi", value: "<1s" },
      { label: "Foydalanuvchilar", value: "50,000+" },
      { label: "Imtihonlar o'tkazildi", value: "200,000+" },
    ],
  },
  "content-ai": {
    icon: BrainCircuit,
    title: "Content AI",
    slug: "content-ai",
    description:
      "O'quv materiallarini generatsiya qilish, savollar banki va avtomatik baholash",
    longDescription:
      "Content AI moduli o'qituvchilarga o'quv materiallarini yaratish, test savollarini generatsiya qilish va talabalar javoblarini avtomatik baholashda yordam beradi. Sun'iy intellekt yordamida sifatli kontent yaratish jarayoni bir necha daqiqaga qisqaradi.",
    details: [
      {
        title: "Test savollarini avtomatik generatsiya",
        text: "O'quv materiallaridan avtomatik ravishda test savollari yaratadi. Turli xil savol turlari: ko'p tanlovli, ochiq javobli, moslashtirish va boshqalar.",
      },
      {
        title: "O'quv materiallarini yaratish",
        text: "Mavzu bo'yicha ma'ruza matnlari, prezentatsiyalar va qo'shimcha materiallar yaratadi. O'qituvchi kerakli mavzuni kiritadi, AI esa sifatli kontent tayyorlaydi.",
      },
      {
        title: "Talabalar javoblarini AI baholash",
        text: "Ochiq javobli savollarni sun'iy intellekt yordamida baholaydi. AI javobning to'g'riligini, to'liqligini va sifatini tahlil qiladi.",
      },
      {
        title: "Plagiatni aniqlash",
        text: "Talabalar ishlarini plagiatga tekshiradi. Internet manbalari va boshqa talabalar ishlari bilan solishtiradi.",
      },
      {
        title: "Adaptiv o'quv kontenti",
        text: "Har bir talabaning bilim darajasiga mos keladigan materiallar taqdim etadi. Zaif tomonlarni aniqlaydi va qo'shimcha mashqlar beradi.",
      },
      {
        title: "Ko'p tilli qo'llab-quvvatlash",
        text: "O'zbek, rus va ingliz tillarida kontent yaratish imkoniyati. Materiallarni bir tildan boshqasiga tarjima qilish.",
      },
    ],
    benefits: [
      "Kontent yaratish vaqtini 80% ga qisqartiradi",
      "5,000+ tayyor test savollari bazasi",
      "Avtomatik baholash aniqligi 94%",
      "3 tilda qo'llab-quvvatlash",
      "Plagiat aniqlash 98% aniqlik",
      "Adaptiv o'qitish algoritmlari",
    ],
    stats: [
      { label: "Yaratilgan savollar", value: "1M+" },
      { label: "Baholangan ishlar", value: "500,000+" },
      { label: "Qo'llab-quvvat tillari", value: "3 ta" },
      { label: "Vaqt tejash", value: "80%" },
    ],
  },
  "video-kuzatuv": {
    icon: Video,
    title: "Video kuzatuv",
    slug: "video-kuzatuv",
    description:
      "Onlayn imtihonlarda yuz aniqlash, ekran yozish va harakatlarni monitoring qilish",
    longDescription:
      "Video kuzatuv tizimi onlayn imtihonlar davomida talabalarning video va ekran faoliyatini yozib boradi. Barcha yozuvlar xavfsiz cloud serverlarida saqlanadi va kerak bo'lganda qayta ko'rish imkoniyati mavjud. Tizim shubhali harakatlarni avtomatik belgilaydi.",
    details: [
      {
        title: "HD video yozish va saqlash",
        text: "Talabaning veb-kamerasi orqali HD sifatda video yozib boradi. Barcha yozuvlar shifrlangan holda cloud serverlarida saqlanadi.",
      },
      {
        title: "Ekran faoliyatini yozish",
        text: "Talabaning ekranidagi barcha harakatlar yozib olinadi. Qaysi dasturlar ochilgani, qaysi saytlarga kirganligi qayd etiladi.",
      },
      {
        title: "Harakatlarni tahlil qilish",
        text: "AI algoritmlari talabaning harakatlarini tahlil qiladi. Oddiy harakatlar va shubhali harakatlarni farqlaydi.",
      },
      {
        title: "Shubhali xatti-harakatlarni belgilash",
        text: "Tizim shubhali harakatlarni avtomatik belgilaydi va o'qituvchiga xabar beradi. Har bir hodisa vaqt tamg'asi bilan saqlanadi.",
      },
      {
        title: "Qayta ko'rish imkoniyati",
        text: "O'qituvchi istalgan vaqtda imtihon yozuvlarini qayta ko'rishi mumkin. Shubhali daqiqalarga tezkor o'tish imkoniyati.",
      },
      {
        title: "Cloud saqlash va arxivlash",
        text: "Barcha yozuvlar O'zbekiston hududidagi xavfsiz serverlarda saqlanadi. Ma'lumotlar 1 yil davomida arxivda saqlanadi.",
      },
    ],
    benefits: [
      "HD sifatda video yozish",
      "256-bit shifrlash himoyasi",
      "O'zbekiston serverlarida saqlash",
      "1 yillik arxiv saqlash",
      "Tezkor qayta ko'rish",
      "Avtomatik shubhali harakatlar aniqlash",
    ],
    stats: [
      { label: "Video sifati", value: "1080p" },
      { label: "Saqlash muddati", value: "1 yil" },
      { label: "Shifrlash", value: "AES-256" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(features).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = features[slug];
  if (!feature) return { title: "Topilmadi" };
  return {
    title: `${feature.title} — LMS.uz`,
    description: feature.description,
  };
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = features[slug];
  if (!feature) notFound();

  const Icon = feature.icon;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary pb-16 pt-28 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/#features"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Barcha imkoniyatlar
            </Link>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white">
                <Icon size={28} />
              </div>
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                {feature.title}
              </h1>
            </div>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">
              {feature.longDescription}
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {feature.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
                >
                  <div className="text-2xl font-extrabold text-accent">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Batafsil imkoniyatlar
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {feature.details.map((detail, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-lg font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-neutral-900">
                    {detail.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {detail.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Afzalliklar
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {feature.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check size={16} className="text-accent" />
                  </span>
                  <span className="text-sm font-medium text-neutral-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-primary p-8 text-center sm:p-12">
              <h3 className="text-2xl font-bold text-white">
                {feature.title} ni sinab ko&apos;ring
              </h3>
              <p className="mt-2 text-white/70">
                Bepul demo orqali tizim imkoniyatlarini ko&apos;ring
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Demo bron qilish
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
