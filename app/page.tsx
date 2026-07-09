import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Leaf,
  Map,
  MonitorCog,
  Route,
} from "lucide-react";

const pillars = [
  {
    icon: MonitorCog,
    title: "Tecnología aplicada",
    text: "Plataformas web, aplicaciones móviles, dashboards, automatizaciones e integraciones a medida.",
  },
  {
    icon: Route,
    title: "Estrategia y producto",
    text: "Definición de problemas, priorización, roadmap, validación, implementación y escalamiento.",
  },
  {
    icon: Leaf,
    title: "Educación y conservación",
    text: "Herramientas formativas, gestión de conocimiento y soluciones para iniciativas ambientales y territoriales.",
  },
];

const proofPoints = [
  { icon: BarChart3, title: "Aplicaciones móviles y plataformas web" },
  { icon: Map, title: "Sistemas agroclimáticos y mapas interactivos" },
  { icon: BookOpen, title: "Cursos, QR y seguimiento de aprendizaje" },
  { icon: MonitorCog, title: "Modernización de sistemas legados" },
];

export default function Home() {
  return (
    <main>
      <section className="border-b border-[color:var(--line)] bg-[color:var(--natural)]">
        <div className="page-shell grid min-h-[calc(100vh-78px)] items-center gap-12 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <div>
            <p className="eyebrow">Rehabilitación | Conservación | Educación | Tecnología aplicada</p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,7vw,5.7rem)] font-extrabold leading-[0.98] text-[color:var(--forest)]">
              THUCAU
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[color:var(--text)]">
              Estrategia, tecnología y conservación conectadas al territorio para transformar ideas en soluciones
              concretas, medibles y sostenibles.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-primary" href="/servicio">
                Ver servicio <ArrowRight size={18} />
              </Link>
              <Link className="button-secondary" href="/contacto">
                Contactar
              </Link>
            </div>
          </div>

          <div className="leaf-pattern soft-panel p-5 md:p-8">
            <div className="grid gap-4">
              {pillars.map((item) => (
                <article className="grid grid-cols-[44px_1fr] gap-4 rounded-[8px] border border-[color:var(--line)] bg-white p-4" key={item.title}>
                  <span className="icon-tile">
                    <item.icon size={22} />
                  </span>
                  <div>
                    <h2 className="text-lg font-extrabold text-[color:var(--forest)]">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-18 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Qué resolvemos</p>
            <h2 className="section-title mt-3">Soluciones para operar, enseñar y decidir mejor.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <article className="soft-panel p-5" key={point.title}>
                <div className="flex items-center gap-3">
                  <span className="icon-tile">
                    <point.icon size={21} />
                  </span>
                  <h3 className="font-extrabold text-[color:var(--forest)]">{point.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
