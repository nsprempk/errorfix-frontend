import SEO from "../../components/common/SEO";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Monitor,
  Smartphone,
  Sparkles,
} from "lucide-react";

const solutions = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional websites, business websites, landing pages, portals and e-commerce platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Modern Android and iOS applications designed around your users and business requirements.",
  },
  {
    icon: Monitor,
    title: "Desktop Application",
    description:
      "Custom desktop software for Windows, macOS and business workflows.",
  },
  {
    icon: Sparkles,
    title: "Complete Digital Solution",
    description:
      "Connected website, mobile application, desktop software, backend and supporting systems.",
  },
];

const factors = [
  "Project complexity",
  "Number of pages or screens",
  "Required features",
  "Design and branding requirements",
  "Backend and database requirements",
  "Third-party integrations",
  "Platform requirements",
  "AI and automation requirements",
  "Security requirements",
  "Maintenance and future development",
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Software Development Pricing | Errorfix Solution"
        description="Explore how Errorfix Solution approaches pricing for website development, mobile apps, desktop software, AI solutions and custom digital products."
        keywords="software development pricing, website development cost, mobile app development cost, AI development cost, Errorfix Solution pricing"
        canonical="errorfixsolutions.online/pricing"
      />

      <main className="bg-white text-gray-950">
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              Pricing
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Every project is different.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600">
              We don't use one fixed price for every project. Your proposal is
              based on the technology, features, platforms and requirements your
              project actually needs.
            </p>

            <Link
              to="/get-quote"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-950 px-7 py-4 text-sm font-bold text-white hover:bg-gray-800"
            >
              Request a Custom Quote
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2">
              {solutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <div
                    key={solution.title}
                    className="rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                      <Icon size={22} />
                    </div>

                    <h2 className="mt-7 text-2xl font-bold">
                      {solution.title}
                    </h2>

                    <p className="mt-3 leading-7 text-gray-600">
                      {solution.description}
                    </p>

                    <Link
                      to="/get-quote"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold"
                    >
                      Discuss this solution
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                What determines the quote
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Built around your requirements.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {factors.map((factor) => (
                <div
                  key={factor}
                  className="flex gap-3 rounded-2xl border border-gray-200 bg-white p-4"
                >
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
