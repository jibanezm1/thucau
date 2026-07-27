import Link from "next/link";
import { BarChart3, BookOpen, Database, Map, MonitorCog, Route } from "lucide-react";

const tiles = [
  {
    icon: MonitorCog,
    title: "Tecnología aplicada",
    text: "Plataformas web, aplicaciones móviles, dashboards, automatizaciones e integraciones a medida.",
    span: "span-2x2",
    tone: "accent",
  },
  {
    icon: Route,
    title: "Estrategia y producto",
    text: "Definición de problemas, priorización, roadmap, validación, implementación y escalamiento.",
    span: "span-1x1",
    tone: "tint",
  },
  {
    icon: Database,
    title: "Datos y decisiones",
    text: "Modelos de datos, reportería, dashboards e indicadores para decidir con evidencia.",
    span: "span-1x1",
    tone: "plain",
  },
  {
    icon: BarChart3,
    title: "Aplicaciones móviles y plataformas web",
    text: "",
    span: "span-2x1",
    tone: "plain",
  },
  {
    icon: Map,
    title: "Sistemas agroclimáticos y mapas interactivos",
    text: "",
    span: "span-1x1",
    tone: "tint",
  },
  {
    icon: BookOpen,
    title: "Cursos, QR y seguimiento de aprendizaje",
    text: "",
    span: "span-1x1",
    tone: "plain",
  },
  {
    icon: MonitorCog,
    title: "Modernización de sistemas legados",
    text: "",
    span: "span-2x1",
    tone: "tint",
  },
] as const;

export default function Home() {
  return (
    <main>
      <section className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)]">
        <div className="page-shell py-[var(--space-3xl)] text-center">
          <h1 className="mx-auto max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.95] tracking-wide text-[color:var(--color-ink)]">
            THUCAU
          </h1>
          <p className="mx-auto mt-[var(--space-md)] max-w-xl text-lg leading-8 text-[color:var(--color-ink-muted)]">
            Estrategia, tecnología y datos conectados al territorio para transformar ideas en soluciones concretas,
            medibles y sostenibles.
          </p>
          <div className="mt-[var(--space-lg)] flex flex-wrap justify-center gap-3">
            <Link className="cta-outline cta-outline--accent" href="/servicio">
              Ver servicio <span aria-hidden className="arrow">→</span>
            </Link>
            <Link className="cta-text" href="/contacto">
              Contactar
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell py-[var(--space-2xl)]">
        <div className="bento">
          {tiles.map((tile, index) => (
            <article
              className={`cell ${tile.span} stagger-in ${tile.tone === "accent" ? "cell--accent" : tile.tone === "tint" ? "cell--tint" : ""}`}
              key={tile.title}
              style={{ "--i": index } as React.CSSProperties}
            >
              <tile.icon size={20} />
              <h2 className="cell__title">{tile.title}</h2>
              {tile.text ? <p className="cell__body">{tile.text}</p> : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
