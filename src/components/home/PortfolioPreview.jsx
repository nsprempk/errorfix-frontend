import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Learn Typing",
    category: "Education Platform",
    description:
      "A typing learning and practice platform designed for users of different skill levels.",
  },
  {
    name: "Enjoying Story",
    category: "Content Platform",
    description:
      "A story-reading platform built around a simple and engaging reading experience.",
  },
  {
    name: "Ask Me Something",
    category: "AI Application",
    description:
      "An AI-powered platform for asking questions through different input methods.",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Selected work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Built for real users.
            </h2>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
          >
            View portfolio
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white"
            >
              <div className="aspect-[16/10] bg-gray-900 p-6">
                <div className="flex h-full items-center justify-center rounded-2xl border border-gray-800 bg-gray-950">
                  <span className="text-2xl font-bold tracking-tight text-white">
                    {project.name}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold text-gray-950">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
