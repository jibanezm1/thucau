"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/servicio", label: "Servicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav aria-label="Primary" className="nav-pill">
        <Link aria-label="Ir al inicio" href="/">
          <Image alt="THUCAU" height={320} priority src="/logo.png" width={779} className="h-auto w-[112px]" />
        </Link>
        <ul className="nav-pill__links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                className="nav-pill__link"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="cta-outline cta-outline--accent" href="/contacto">
          Conversar <span aria-hidden className="arrow">→</span>
        </Link>
        <button
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
          className="nav-toggle"
          onClick={() => setMenuOpen(true)}
          type="button"
        >
          <Menu size={20} />
        </button>
      </nav>

      <div className={`nav-sheet ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(false)}>
        <div className="nav-sheet__panel" onClick={(event) => event.stopPropagation()}>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-bold text-[color:var(--color-ink-muted)]">Menú</span>
            <button aria-label="Cerrar menú" className="nav-toggle" onClick={() => setMenuOpen(false)} type="button">
              <X size={20} />
            </button>
          </div>
          {navItems.map((item) => (
            <Link className="nav-sheet__link" href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="cta-outline cta-outline--accent mt-2" href="/contacto" onClick={() => setMenuOpen(false)}>
            Conversar <span aria-hidden className="arrow">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
