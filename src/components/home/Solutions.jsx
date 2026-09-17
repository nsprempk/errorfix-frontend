import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    number: "01",
    title: "Website Only",
    description:
      "A professional website or web application tailored to your business.",
    features: [
      "Responsive design",
      "Frontend development",
      "Backend integration",
      "SEO foundation",
    ],
    path: "/solutions/website-only",
  },
  {
    number: "02",
    title: "Website + Mobile App",
    description: "Connect your web platform with Android and iOS applications.",
    features: [
      "Web platform",
      "Android & iOS",
      "Shared backend",
      "Admin dashboard",
    ],
    path: "/solutions/website-mobile",
  },
  {
    number: "03",
    title: "Mobile + Desktop",
    description: "A complete operational solution across mobile and desktop.",
    features: [
      "Mobile application",
      "Desktop application",
      "Central backend",
      "Database integration",
    ],
    path: "/solutions/mobile-desktop",
  },
  {
    number: "04",
    title: "Complete Digital System",
    description: "Website, mobile app and desktop software working together.",
    features: [
      "Website",
      "Mobile applications",
      "Desktop software",
      "Complete backend",
    ],
    path: "/solutions/complete-solution",
  },
];

export default function Solutions() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Solutions
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              One idea. Multiple platforms.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-gray-600">
            Choose the combination that matches your business. We can build the
            individual products or connect them into one complete ecosystem.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {solutions.map((solution) => (
            <Link
              key={solution.number}
              to={solution.path}
              className="group rounded-3xl border border-gray-200 p-7 transition hover:border-gray-400 hover:shadow-lg sm:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-gray-400">
                  {solution.number}
                </span>

                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              </div>

              <h3 className="mt-10 text-2xl font-bold text-gray-950">
                {solution.title}
              </h3>

              <p className="mt-3 max-w-xl text-gray-600">
                {solution.description}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {solution.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <Check size={16} />
                    {feature}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
