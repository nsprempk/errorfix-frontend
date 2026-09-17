import { Check } from "lucide-react";

export default function FeatureGrid({
  eyebrow = "Features",
  title,
  description,
  features = [],
}) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            {eyebrow}
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

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 p-7 transition hover:border-gray-400 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white">
                <Check size={19} />
              </div>

              <h3 className="mt-7 text-xl font-bold text-gray-950">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
