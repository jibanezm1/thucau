import { BarChart3, BookOpenCheck, Braces, ClipboardCheck, Cpu, Sprout } from "lucide-react";
import { PageHero } from "../components/PageHero";

const services = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico y levantamiento",
    text: "Analizamos procesos, dolores operacionales, brechas tecnológicas, usuarios, restricciones y oportunidades de mejora.",
  },
  {
    icon: Braces,
    title: "Diseño de solución",
    text: "Definimos arquitectura, flujos, funcionalidades, roadmap, experiencia de usuario y modelo de implementación.",
  },
  {
    icon: Cpu,
    title: "Desarrollo e implementación",
    text: "Construimos plataformas web, apps móviles, sistemas internos, APIs, automatizaciones y paneles de gestión.",
  },
  {
    icon: BarChart3,
    title: "Acompañamiento y evolución",
    text: "Apoyamos mejora continua, nuevas funcionalidades, analítica, soporte, adopción y escalamiento del producto.",
  },
  {
    icon: BookOpenCheck,
    title: "Educación y transferencia",
    text: "Creamos plataformas, contenidos digitales, herramientas de evaluación y experiencias interactivas de aprendizaje.",
  },
  {
    icon: Sprout,
    title: "Conservación y proyectos con impacto",
    text: "Diseñamos sistemas para datos en terreno, indicadores, visualización territorial y apoyo a decisiones ambientales.",
  },
];

const steps = ["Entendimiento", "Propuesta", "Diseño funcional y técnico", "Desarrollo", "Puesta en marcha", "Evolución"];

export default function ServicioPage() {
  return (
    <main>
      <PageHero
        copy="Acompañamos desde la definición del problema hasta la puesta en marcha, combinando visión técnica, producto digital y ejecución práctica."
        eyebrow="Servicio"
        title="Desarrollo de soluciones digitales para organizaciones que buscan impacto real."
      />
      <section className="page-shell py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article className="soft-panel p-6" key={service.title}>
              <span className="icon-tile">
                <service.icon size={22} />
              </span>
              <h2 className="mt-5 text-xl font-extrabold text-[color:var(--forest)]">{service.title}</h2>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="page-shell">
          <p className="eyebrow">Forma de trabajo</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-[color:var(--forest)]">
            Un proceso claro, iterativo y orientado a resultados.
          </h2>
          <div className="mt-10 grid gap-3 md:grid-cols-6">
            {steps.map((step, index) => (
              <article className="rounded-[8px] border border-[color:var(--line)] bg-[color:var(--natural)] p-4" key={step}>
                <p className="text-sm font-extrabold text-[color:var(--leaf)]">0{index + 1}</p>
                <h3 className="mt-2 min-h-[48px] font-extrabold text-[color:var(--forest)]">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
