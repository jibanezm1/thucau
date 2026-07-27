import { Mail, MapPin } from "lucide-react";
import { PageHero } from "../components/PageHero";

export default function ContactoPage() {
  return (
    <main>
      <PageHero
        copy="Cuéntanos el problema, proyecto o proceso que quieres ordenar. Podemos ayudarte a aterrizar alcance, arquitectura, roadmap y próximos pasos."
        title="Construyamos proyectos con impacto real."
      />
      <section className="page-shell split py-[var(--space-2xl)]">
        <form className="grid gap-[var(--space-md)]">
          <label className="field">
            Nombre
            <input name="name" placeholder="Tu nombre" type="text" />
          </label>
          <label className="field">
            Correo
            <input name="email" placeholder="tu@correo.cl" type="email" />
          </label>
          <label className="field">
            Mensaje
            <textarea name="message" placeholder="Cuéntanos brevemente qué necesitas" />
          </label>
          <a
            className="cta-outline cta-outline--accent mt-[var(--space-xs)] justify-self-start"
            href="mailto:contacto@thucau.cl?subject=Contacto%20desde%20sitio%20THUCAU"
          >
            Enviar correo <span aria-hidden className="arrow">→</span>
          </a>
        </form>

        <div className="proof-panel">
          <p className="proof-panel__label">Contacto directo</p>
          <ul className="proof-panel__list">
            <li>
              <a className="inline-flex items-center gap-2" href="mailto:info@thucau.cl">
                <Mail size={16} /> info@thucau.cl
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2" href="mailto:contacto@thucau.cl">
                <Mail size={16} /> contacto@thucau.cl
              </a>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} /> Chile
              </span>
            </li>
          </ul>
          <p className="mt-[var(--space-md)] text-sm leading-6 text-[color:var(--color-ink-muted)]">
            THUCAU acompaña proyectos de tecnología aplicada, educación, gestión de datos y modernización operacional.
          </p>
        </div>
      </section>
    </main>
  );
}
