export default function TechStack({
  title = "Built with modern technologies.",
  description,
  technologies = [],
}) {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Technology
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mt-5 text-lg leading-8 text-gray-600">
              {description}
            </p>
          )}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <div
              key={technology}
              className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
