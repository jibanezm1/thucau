import { PageHero } from "../components/PageHero";

const founders = [
  {
    name: "Juan Pablo Ibáñez Maians",
    role: "Ingeniero en Ejecución en Informática",
    text: "Trayectoria en desarrollo de software, gestión TI, productos digitales, experiencia de usuario y emprendimiento tecnológico. Ha liderado sistemas, intranets, inventarios, facturación interna, apps móviles y plataformas web.",
    strengths: ["Desarrollo de software", "Gestión TI", "Visión de producto"],
  },
  {
    name: "Julio Cornejo Burgos",
    role: "Ingeniero Civil Industrial TI · MBA Candidate UC",
    text: "Más de 12 años liderando productos digitales, transformación organizacional, negocios tecnológicos y equipos multidisciplinarios en banca, SaaS, servicios B2B y tecnología.",
    strengths: ["Transformación digital", "Desarrollo de negocios", "Gestión de equipos"],
  },
];

const values = [
  "Visión técnica y visión de negocio en una misma mesa.",
  "Experiencia construyendo productos digitales desde cero.",
  "Trabajo práctico, medible y pensado para usuarios reales.",
];

export default function QuienesSomosPage() {
  return (
    <main>
      <PageHero
        copy="Somos una empresa chilena orientada a soluciones tecnológicas, educativas y de gestión para instituciones, empresas y proyectos territoriales."
        title="Un equipo que une tecnología, estrategia, educación y propósito."
      />

      <section className="page-shell py-[var(--space-2xl)]">
        <div className="grid gap-[var(--space-2xl)]">
          {founders.map((founder, index) => (
            <div className={`split ${index === 1 ? "split--reverse" : ""}`} key={founder.name}>
              <div>
                <h2 className="text-2xl font-extrabold text-[color:var(--color-ink)]">{founder.name}</h2>
                <p className="mt-[var(--space-2xs)] font-bold text-[color:var(--color-accent)]">{founder.role}</p>
                <p className="mt-[var(--space-md)] leading-8 text-[color:var(--color-ink-muted)]">{founder.text}</p>
              </div>
              <div className="proof-panel">
                <p className="proof-panel__label">Fortalezas</p>
                <ul className="proof-panel__list">
                  {founder.strengths.map((strength) => (
                    <li key={strength}>{strength}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)] py-[var(--space-2xl)]">
        <div className="page-shell grid gap-[var(--space-xl)] md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="head-hang__title" style={{ paddingBlock: 0 }}>
            Diseñamos soluciones sostenibles, no solo entregables.
          </h2>
          <ol className="steps">
            {values.map((value, index) => (
              <li key={value}>
                <span className="stage">0{index + 1}</span>
                <p className="!mt-0 text-lg font-bold leading-7 text-[color:var(--color-ink)]">{value}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
