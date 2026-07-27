import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="foot-stmt border-t border-[color:var(--color-rule)]">
      <p className="foot-stmt__line">Construyamos tu próximo sistema, no otra propuesta.</p>
      <div className="foot-stmt__meta">
        <Link aria-label="Ir al inicio" href="/">
          <Image alt="THUCAU" className="h-auto w-[104px]" height={320} src="/logo.png" width={779} />
        </Link>
        <div className="foot-stmt__links">
          <Link href="/servicio">Servicio</Link>
          <Link href="/quienes-somos">Quiénes somos</Link>
          <Link href="/contacto">Contacto</Link>
          <a href="mailto:info@thucau.cl">info@thucau.cl</a>
        </div>
        <span className="text-sm text-[color:var(--color-ink-muted)]">© 2026 THUCAU</span>
      </div>
    </footer>
  );
}
