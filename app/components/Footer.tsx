import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[color:var(--line)] bg-white">
      <div className="page-shell grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image alt="THUCAU" className="h-auto w-[142px]" height={320} src="/logo.png" width={779} />
          <p className="mt-4 max-w-md text-sm leading-7 text-[color:var(--muted)]">
            THUCAU · Proyectos con impacto real en conservación, educación y tecnología aplicada.
          </p>
        </div>
        <div>
          <p className="font-extrabold text-[color:var(--forest)]">Navegación</p>
          <div className="mt-4 grid gap-2 text-sm text-[color:var(--muted)]">
            <Link href="/servicio">Servicio</Link>
            <Link href="/quienes-somos">Quiénes somos</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </div>
        <div>
          <p className="font-extrabold text-[color:var(--forest)]">Contacto</p>
          <div className="mt-4 grid gap-3 text-sm text-[color:var(--muted)]">
            <a className="flex items-center gap-2" href="mailto:info@thucau.cl">
              <Mail size={16} /> info@thucau.cl
            </a>
            <a className="flex items-center gap-2" href="mailto:contacto@thucau.cl">
              <Mail size={16} /> contacto@thucau.cl
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
