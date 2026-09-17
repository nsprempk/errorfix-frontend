import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceHero({
  eyebrow,
  title,
  description,
  highlights = [],
}) {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            {eyebrow}
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
            {description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/get-quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
            >
              Get a Free Quote
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-gray-700 px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-900"
            >
              View Our Work
            </Link>
          </div>

          {highlights.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <CheckCircle2 size={16} />
                  {highlight}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
