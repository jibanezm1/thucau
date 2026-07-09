import { Mail, MapPin, MessageSquareText } from "lucide-react";
import { PageHero } from "../components/PageHero";

export default function ContactoPage() {
  return (
    <main>
      <PageHero
        copy="Cuéntanos el problema, proyecto o proceso que quieres ordenar. Podemos ayudarte a aterrizar alcance, arquitectura, roadmap y próximos pasos."
        eyebrow="Contacto"
        title="Construyamos proyectos con impacto real."
      />
      <section className="page-shell grid gap-8 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <div className="soft-panel p-6 md:p-8">
          <span className="icon-tile">
            <MessageSquareText size={22} />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-[color:var(--forest)]">Hablemos de tu iniciativa</h2>
          <p className="mt-4 leading-8 text-[color:var(--muted)]">
            THUCAU acompaña proyectos de tecnología aplicada, educación, conservación, rehabilitación, gestión de datos y modernización operacional.
          </p>
          <div className="mt-8 grid gap-4">
            <a className="flex items-center gap-3 rounded-[8px] border border-[color:var(--line)] bg-white p-4 font-extrabold text-[color:var(--forest)]" href="mailto:info@thucau.cl">
              <Mail size={20} /> info@thucau.cl
            </a>
            <a className="flex items-center gap-3 rounded-[8px] border border-[color:var(--line)] bg-white p-4 font-extrabold text-[color:var(--forest)]" href="mailto:contacto@thucau.cl">
              <Mail size={20} /> contacto@thucau.cl
            </a>
            <p className="flex items-center gap-3 rounded-[8px] border border-[color:var(--line)] bg-white p-4 font-extrabold text-[color:var(--forest)]">
              <MapPin size={20} /> Chile
            </p>
          </div>
        </div>
        <form className="soft-panel grid gap-4 p-6 md:p-8">
          <label className="grid gap-2 text-sm font-extrabold text-[color:var(--forest)]">
            Nombre
            <input className="min-h-[48px] rounded-[8px] border border-[color:var(--line)] bg-white px-4 text-base font-normal outline-none focus:border-[color:var(--leaf)]" name="name" placeholder="Tu nombre" type="text" />
          </label>
          <label className="grid gap-2 text-sm font-extrabold text-[color:var(--forest)]">
            Correo
            <input className="min-h-[48px] rounded-[8px] border border-[color:var(--line)] bg-white px-4 text-base font-normal outline-none focus:border-[color:var(--leaf)]" name="email" placeholder="tu@correo.cl" type="email" />
          </label>
          <label className="grid gap-2 text-sm font-extrabold text-[color:var(--forest)]">
            Mensaje
            <textarea className="min-h-[164px] resize-y rounded-[8px] border border-[color:var(--line)] bg-white p-4 text-base font-normal outline-none focus:border-[color:var(--leaf)]" name="message" placeholder="Cuéntanos brevemente qué necesitas" />
          </label>
          <a className="button-primary mt-2" href="mailto:contacto@thucau.cl?subject=Contacto%20desde%20sitio%20THUCAU">
            Enviar correo
          </a>
        </form>
      </section>
    </main>
  );
}
