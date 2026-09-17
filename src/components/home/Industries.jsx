import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  "E-commerce",
  "Real Estate",
  "Healthcare",
  "Education",
  "Finance",
  "Insurance",
  "Restaurants",
  "Startups",
];

export default function Industries() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Industries
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Technology for different industries.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We create custom digital products around the needs of different
            businesses and industries.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry}
              to={`/industries/${industry.toLowerCase().replaceAll(" ", "-")}`}
              className="group flex items-center justify-between rounded-2xl border border-gray-200 p-5 transition hover:border-gray-400 hover:bg-gray-50"
            >
              <span className="font-semibold text-gray-900">{industry}</span>

              <ArrowUpRight
                size={18}
                className="text-gray-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gray-900"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
