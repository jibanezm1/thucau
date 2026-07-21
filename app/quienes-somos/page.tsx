import { BadgeCheck, Lightbulb, UsersRound } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

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
        eyebrow="Quiénes somos"
        title="Un equipo que une tecnología, estrategia, educación y propósito."
      />
      <section className="page-shell py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {founders.map((founder, index) => (
            <Reveal delay={index * 90} key={founder.name}>
              <article className="soft-panel h-full p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8">
                <span className="icon-tile">
                  <UsersRound size={22} />
                </span>
                <h2 className="mt-5 text-2xl font-extrabold text-[color:var(--forest)]">{founder.name}</h2>
                <p className="mt-2 font-bold text-[color:var(--institutional)]">{founder.role}</p>
                <p className="mt-5 leading-8 text-[color:var(--muted)]">{founder.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {founder.strengths.map((strength) => (
                    <span className="rounded-[8px] bg-[color:var(--forest)] px-3 py-2 text-sm font-extrabold text-white" key={strength}>
                      {strength}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="page-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Diferenciadores</p>
            <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-5xl font-normal leading-[1.05] tracking-wide text-[color:var(--forest)]">
              Diseñamos soluciones sostenibles, no solo entregables.
            </h2>
          </Reveal>
          <div className="grid gap-4">
            {values.map((value, index) => (
              <Reveal delay={index * 80} key={value}>
                <article className="flex gap-4 rounded-[8px] border border-[color:var(--line)] bg-[color:var(--natural)] p-5 transition-transform duration-300 hover:-translate-y-1">
                  <span className="icon-tile shrink-0">{index === 1 ? <Lightbulb size={22} /> : <BadgeCheck size={22} />}</span>
                  <p className="text-lg font-bold leading-7 text-[color:var(--forest)]">{value}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
