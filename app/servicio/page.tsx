import { BarChart3, Bot, BookOpenCheck, Braces, ClipboardCheck, Cpu } from "lucide-react";
import { PageHero } from "../components/PageHero";

const services = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico y levantamiento",
    text: "Analizamos procesos, dolores operacionales, brechas tecnológicas, usuarios, restricciones y oportunidades de mejora.",
    span: "span-2x1",
    tone: "tint",
  },
  {
    icon: Braces,
    title: "Diseño de solución",
    text: "Definimos arquitectura, flujos, funcionalidades, roadmap, experiencia de usuario y modelo de implementación.",
    span: "span-1x1",
    tone: "plain",
  },
  {
    icon: Cpu,
    title: "Desarrollo e implementación",
    text: "Construimos plataformas web, apps móviles, sistemas internos, APIs, automatizaciones y paneles de gestión.",
    span: "span-2x2",
    tone: "accent",
  },
  {
    icon: BarChart3,
    title: "Acompañamiento y evolución",
    text: "Apoyamos mejora continua, nuevas funcionalidades, analítica, soporte, adopción y escalamiento del producto.",
    span: "span-1x1",
    tone: "tint",
  },
  {
    icon: BookOpenCheck,
    title: "Educación y transferencia",
    text: "Creamos plataformas, contenidos digitales, herramientas de evaluación y experiencias interactivas de aprendizaje.",
    span: "span-1x1",
    tone: "plain",
  },
  {
    icon: Bot,
    title: "Contactabilidad y agentes IA",
    text: "Construimos flujos de atención y ventas con agentes de WhatsApp e IA, integrados a tus sistemas y con seguimiento en tiempo real.",
    span: "span-1x1",
    tone: "tint",
  },
] as const;

const steps = [
  { stage: "1.0", title: "Entendimiento", text: "Levantamos el problema real, las restricciones y qué decisión debe habilitar la solución." },
  { stage: "2.0", title: "Propuesta", text: "Alcance, arquitectura preliminar, riesgos y una estimación honesta de tiempo y costo." },
  { stage: "3.0", title: "Diseño funcional y técnico", text: "Flujos, modelo de datos, integraciones y experiencia de usuario, validados contigo antes de construir." },
  { stage: "4.0", title: "Desarrollo", text: "Construcción iterativa con entregas visibles, no una caja negra hasta el final." },
  { stage: "5.0", title: "Puesta en marcha", text: "Migración, capacitación del equipo y acompañamiento en el primer uso real." },
  { stage: "6.0", title: "Evolución", text: "Soporte, nuevas funcionalidades y ajustes a medida que el negocio cambia." },
];

export default function ServicioPage() {
  return (
    <main>
      <PageHero
        copy="Acompañamos desde la definición del problema hasta la puesta en marcha, combinando visión técnica, producto digital y ejecución práctica."
        title="Desarrollo de soluciones digitales para organizaciones que buscan impacto real."
      />
      <section className="page-shell py-[var(--space-2xl)]">
        <div className="bento">
          {services.map((service) => (
            <article
              className={`cell ${service.span} ${service.tone === "accent" ? "cell--accent" : service.tone === "tint" ? "cell--tint" : ""}`}
              key={service.title}
            >
              <service.icon size={20} />
              <h2 className="cell__title">{service.title}</h2>
              <p className="cell__body">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)] py-[var(--space-2xl)]">
        <div className="page-shell">
          <h2 className="head-hang__title" style={{ paddingBlock: 0 }}>
            Un proceso claro, iterativo y orientado a resultados.
          </h2>
          <ol className="steps mt-[var(--space-lg)]">
            {steps.map((step) => (
              <li key={step.stage}>
                <span className="stage">{step.stage}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
