"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/servicio", label: "Servicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoCentered, setLogoCentered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!scrolled) {
      setLogoCentered(false);
      return;
    }
    const timeout = setTimeout(() => setLogoCentered(true), 1000);
    return () => clearTimeout(timeout);
  }, [scrolled]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-transparent bg-[color:var(--forest)] shadow-[0_12px_30px_-16px_rgba(47,103,47,0.6)]"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="page-shell relative flex min-h-[78px] items-center justify-between gap-6">
        <Link
          aria-label="Ir al inicio"
          className="absolute top-1/2 z-10 flex items-center gap-3 transition-[left,transform] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          href="/"
          style={
            logoCentered
              ? { left: "50%", transform: "translate(-50%, -50%)" }
              : { left: "0px", transform: "translate(0, -50%)" }
          }
        >
          <Image
            alt="THUCAU"
            className={`h-auto w-[150px] transition-[filter] duration-300 ${scrolled ? "brightness-0 invert" : ""}`}
            height={320}
            priority
            src="/logo.png"
            width={779}
          />
        </Link>
        <div aria-hidden className="w-[150px] shrink-0" />
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              className={`rounded-[8px] px-4 py-2 text-sm font-bold transition ${
                scrolled
                  ? "text-white hover:bg-white/15"
                  : "text-[color:var(--institutional)] hover:bg-white hover:text-[color:var(--forest)]"
              }`}
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

        <button
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
          className={`grid h-11 w-11 place-items-center rounded-[8px] border transition md:hidden ${
            scrolled ? "border-white/30 text-white" : "border-[color:var(--line)] text-[color:var(--forest)]"
          }`}
          onClick={() => setMenuOpen(true)}
          type="button"
        >
          <Menu size={22} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-[color:var(--text)]/40 transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-[70] flex w-[78vw] max-w-[320px] flex-col gap-2 bg-[color:var(--forest)] p-6 shadow-[-20px_0_60px_rgba(23,63,45,0.3)] transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <Image alt="THUCAU" className="h-auto w-[120px] brightness-0 invert" height={320} src="/logo.png" width={779} />
          <button
            aria-label="Cerrar menú"
            className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/25 text-white"
            onClick={() => setMenuOpen(false)}
            type="button"
          >
            <X size={20} />
          </button>
        </div>
        {navItems.map((item) => (
          <Link
            className="rounded-[8px] px-4 py-3 text-base font-bold text-white transition hover:bg-white/10"
            href={item.href}
            key={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link className="button-primary mt-4" href="/contacto" onClick={() => setMenuOpen(false)}>
          Conversar
        </Link>
      </aside>
    </header>
  );
}
