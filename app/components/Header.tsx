import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/servicio", label: "Servicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[rgba(246,250,247,0.9)] backdrop-blur">
      <nav className="page-shell flex min-h-[78px] items-center justify-between gap-6">
        <Link aria-label="Ir al inicio" className="flex items-center gap-3" href="/">
          <Image
            alt="THUCAU"
            className="h-auto w-[150px]"
            height={320}
            priority
            src="/logo.png"
            width={779}
          />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              className="rounded-[8px] px-4 py-2 text-sm font-bold text-[color:var(--institutional)] transition hover:bg-white hover:text-[color:var(--forest)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link className="button-primary hidden md:inline-flex" href="/contacto">
          Conversar
        </Link>
      </nav>
      <div className="page-shell grid grid-cols-2 gap-2 pb-3 md:hidden">
        {navItems.map((item) => (
          <Link
            className="rounded-[8px] border border-[color:var(--line)] bg-white px-3 py-2 text-center text-sm font-bold text-[color:var(--institutional)]"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
