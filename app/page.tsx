import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Database,
  Map,
  MonitorCog,
  Route,
} from "lucide-react";
import { Parallax } from "./components/Parallax";
import { Reveal } from "./components/Reveal";
import { ThreeHero } from "./components/ThreeHero";

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
    icon: Database,
    title: "Datos y decisiones",
    text: "Modelos de datos, reportería, dashboards e indicadores para decidir con evidencia, no con intuición.",
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
      <section className="relative overflow-hidden border-b border-[color:var(--line)] bg-[color:var(--natural)]">
        <div
          className="glow-blob float-slow"
          style={{ top: "-10%", left: "-6%", width: 340, height: 340, background: "rgba(157, 206, 58, 0.35)" }}
        />
        <div
          className="glow-blob float-slow"
          style={{ top: "20%", right: "-8%", width: 300, height: 300, background: "rgba(21, 156, 196, 0.28)", animationDelay: "1.5s" }}
        />
        <div
          className="glow-blob float-slow"
          style={{ bottom: "-12%", left: "38%", width: 260, height: 260, background: "rgba(255, 213, 42, 0.28)", animationDelay: "3s" }}
        />

        <div className="page-shell relative z-[1] grid min-h-[calc(100vh-78px)] items-center gap-12 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <Parallax speed={0.06}>
            <p className="eyebrow">Software | Estrategia | Producto digital | Datos</p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-bebas)] text-[clamp(3.2rem,9vw,7.4rem)] font-normal leading-[0.92] tracking-wide text-[color:var(--forest)]">
              THUCAU
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[color:var(--text)]">
              Estrategia, tecnología y conservación conectadas al territorio para transformar ideas en soluciones
              concretas, medibles y sostenibles.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-primary group" href="/servicio">
                Ver servicio
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Link>
              <Link className="button-secondary" href="/contacto">
                Contactar
              </Link>
            </div>
          </Parallax>

          <Parallax className="leaf-pattern soft-panel relative overflow-hidden p-5 md:p-8" speed={-0.05}>
            <div className="pointer-events-none absolute inset-0 opacity-45">
              <ThreeHero />
            </div>
            <div className="relative z-[1] grid gap-4">
              {pillars.map((item, index) => (
                <Reveal delay={index * 90} key={item.title}>
                  <article className="grid grid-cols-[44px_1fr] gap-4 rounded-[8px] border border-[color:var(--line)] bg-white p-4">
                    <span className="icon-tile">
                      <item.icon size={22} />
                    </span>
                    <div>
                      <h2 className="text-lg font-extrabold text-[color:var(--forest)]">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Parallax>
        </div>
      </section>

      <section className="page-shell py-18 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Qué resolvemos</p>
            <h2 className="section-title mt-3">Soluciones para operar, enseñar y decidir mejor.</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 sm:auto-rows-fr">
            {proofPoints.map((point, index) => (
              <Reveal className="h-full" delay={index * 80} key={point.title}>
                <article className="soft-panel flex h-full items-center p-5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span className="icon-tile shrink-0">
                      <point.icon size={21} />
                    </span>
                    <h3 className="font-extrabold text-[color:var(--forest)]">{point.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
