import {
  Globe,
  Smartphone,
  Monitor,
  Bot,
  Palette,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, responsive and scalable websites and web applications built around your business.",
    path: "/services/website-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Modern Android and iOS applications with smooth user experiences.",
    path: "/services/mobile-app-development",
  },
  {
    icon: Monitor,
    title: "Desktop Software",
    description:
      "Powerful desktop applications for business operations and productivity.",
    path: "/services/desktop-app-development",
  },
  {
    icon: Bot,
    title: "AI Development",
    description:
      "AI-powered products, assistants, automation and intelligent applications.",
    path: "/services/ai-development",
  },
  {
    icon: Palette,
    title: "UI/UX & Branding",
    description:
      "Interfaces and visual identities designed to create memorable experiences.",
    path: "/services/ui-ux-branding",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "SEO, analytics and digital marketing strategies designed around measurable growth.",
    path: "/services/digital-marketing",
  },
];

export default function Services() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            What we do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Everything you need to build your digital product.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            From the first idea to launch and ongoing support, we create digital
            experiences across web, mobile and desktop.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to={service.path}
                className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white">
                    <Icon size={22} />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gray-900"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-gray-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-7 text-sm font-semibold text-gray-900">
                  Explore service →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
