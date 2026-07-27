type PageHeroProps = {
  title: string;
  copy: string;
};

export function PageHero({ title, copy }: PageHeroProps) {
  return (
    <section className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)]">
      <div className="page-shell head-hang">
        <h1 className="head-hang__title max-w-3xl">{title}</h1>
        <p className="head-hang__lede">{copy}</p>
      </div>
    </section>
  );
}
