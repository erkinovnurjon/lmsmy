import Image from "next/image";

const footerLinks = [
  { label: "Imkoniyatlar", href: "#features" },
  { label: "HEMIS", href: "#hemis" },
  { label: "Natijalar", href: "#results" },
  { label: "Bog'lanish", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo va tavsif */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <a href="#" className="flex items-center gap-2">
              <Image src="/logo.png" alt="LMS.uz logo" width={36} height={36} className="h-9" style={{ width: 'auto' }} />
              <span className="text-xl font-extrabold tracking-tight font-[family-name:var(--font-heading)]">
                LMS<span className="text-accent">.uz</span>
              </span>
            </a>
            <p className="max-w-xs text-center text-sm text-white/60 md:text-left">
              O&apos;zbekiston OTMlari uchun yagona HEMIS-native o&apos;quv boshqaruv tizimi.
            </p>
          </div>

          {/* Havolalar */}
          <nav aria-label="Footer navigatsiya">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Ajratuvchi chiziq va copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} LMS.uz — Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
