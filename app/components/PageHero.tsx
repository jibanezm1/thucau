type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className="border-b border-[color:var(--line)] bg-white">
      <div className="page-shell py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="section-title mt-4 max-w-4xl">{title}</h1>
        <p className="section-copy mt-6 max-w-3xl">{copy}</p>
      </div>
    </section>
  );
}
