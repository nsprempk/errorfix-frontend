import SEO from "../../components/common/SEO";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import ServiceHero from "../../components/common/ServiceHero";
import FeatureGrid from "../../components/common/FeatureGrid";
import ServiceFAQ from "../../components/common/ServiceFAQ";
import ServiceCTA from "../../components/common/ServiceCTA";

const components = [
  {
    title: "Website",
    description:
      "A responsive web experience for your business, customers and online presence.",
  },
  {
    title: "Mobile App",
    description:
      "Android and iOS applications designed around your customers and users.",
  },
  {
    title: "Desktop App",
    description:
      "Dedicated software for employees, administrators and operational workflows.",
  },
  {
    title: "Backend",
    description:
      "Centralized APIs, authentication, databases and business logic connecting the ecosystem.",
  },
  {
    title: "Admin Dashboard",
    description:
      "A central administration system for managing users, content and business data.",
  },
  {
    title: "Integrations",
    description:
      "Connect payments, third-party services and other systems required by the project.",
  },
];

const advantages = [
  "One connected digital ecosystem",
  "Consistent brand experience",
  "Shared backend architecture",
  "Centralized business data",
  "Customer and employee applications",
  "Room for future expansion",
];

const faqs = [
  {
    question: "What is the complete solution?",
    answer:
      "It combines a website, mobile application and desktop application with shared backend infrastructure and administration functionality where required.",
  },
  {
    question: "Can all platforms share the same database?",
    answer:
      "Yes. The system can be architected around a centralized backend and database so the different applications can work with shared information.",
  },
  {
    question: "Can customers and employees have different systems?",
    answer:
      "Yes. Different applications and user roles can be designed around the needs of customers, employees, administrators and other users.",
  },
  {
    question: "Can AI be added to the complete solution?",
    answer:
      "Yes. AI capabilities can be added where they provide value, depending on the requirements and architecture.",
  },
  {
    question: "How much does the complete solution cost?",
    answer:
      "We provide a project-specific quotation after understanding the website, mobile application, desktop software, backend, integrations and other requirements.",
  },
];

export default function CompleteSolution() {
  return (
    <>
      <SEO
        title="Complete Digital Solution | Errorfix Solution"
        description="Build a complete digital product with website, mobile application, desktop software, backend systems and AI capabilities tailored to your business."
        keywords="complete digital solution, website mobile desktop development, custom software solution, business digital solution"
        canonical="errorfixsolutions.online/solutions/complete-solution"
      />
      <ServiceHero
        eyebrow="Complete Digital Solution"
        title="Website + mobile + desktop. One connected ecosystem."
        description="For businesses that need a complete digital platform, we can design and develop the website, mobile applications, desktop software and backend systems together."
        highlights={["Website", "Mobile App", "Desktop App", "Backend"]}
      />

      <FeatureGrid
        eyebrow="The Complete Ecosystem"
        title="Everything connected through one architecture."
        description="Build the different experiences your business needs while keeping the underlying systems connected."
        features={components}
      />

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Why This Model
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Designed as one digital product.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Instead of treating every platform as a separate project, we can
              plan the ecosystem together from the beginning.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6"
              >
                <CheckCircle2 size={20} className="shrink-0 text-gray-700" />
                <span className="font-semibold text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gray-950 text-white">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Custom Project
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Tell us what you're building.
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-400">
                  A complete digital ecosystem requires careful planning. Share
                  your business model, users and requirements and we'll help
                  define the project.
                </p>

                <Link
                  to="/get-quote"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 hover:bg-gray-200"
                >
                  Start Your Project
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="border-t border-gray-800 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
                <h3 className="text-xl font-semibold">
                  Project planning can cover:
                </h3>

                <div className="mt-7 space-y-4">
                  {[
                    "Business requirements",
                    "Website architecture",
                    "Mobile application",
                    "Desktop software",
                    "Backend and database",
                    "Authentication",
                    "Admin dashboard",
                    "Payment integrations",
                    "Third-party APIs",
                    "Future scalability",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-gray-400"
                      />

                      <span className="text-sm leading-6 text-gray-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />

      <ServiceCTA
        title="Building something bigger?"
        description="Let's plan the complete website, mobile, desktop and backend ecosystem around your business."
      />
    </>
  );
}
