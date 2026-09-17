import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import ServiceHero from "../../components/common/ServiceHero";
import FeatureGrid from "../../components/common/FeatureGrid";
import ServiceFAQ from "../../components/common/ServiceFAQ";
import ServiceCTA from "../../components/common/ServiceCTA";

const features = [
  {
    title: "Business Software",
    description:
      "Desktop applications designed around your organization's workflow.",
  },
  {
    title: "Billing & POS",
    description: "Build custom billing, sales and point-of-sale workflows.",
  },
  {
    title: "Inventory",
    description:
      "Manage products, stock, purchases and sales through custom software.",
  },
  {
    title: "Offline Support",
    description:
      "Applications can support offline workflows where appropriate.",
  },
  {
    title: "Database",
    description:
      "Use local or centralized databases depending on the application requirements.",
  },
  {
    title: "User Roles",
    description:
      "Support employees, administrators and different permission levels.",
  },
];

const suitableFor = [
  "Retail businesses",
  "Offices",
  "Inventory operations",
  "Billing systems",
  "Internal tools",
  "Business management",
];

const faqs = [
  {
    question: "What desktop applications can you build?",
    answer:
      "We can build business software, billing systems, inventory applications, internal tools, CRM-style systems and other custom desktop solutions.",
  },
  {
    question: "Can the application work offline?",
    answer:
      "Yes. Offline functionality can be considered where the project architecture and workflow support it.",
  },
  {
    question: "Can multiple employees use the software?",
    answer:
      "Yes. Multi-user authentication, roles and permissions can be implemented.",
  },
  {
    question: "Can it connect to a website?",
    answer:
      "Yes. Desktop software can communicate with websites and backend systems through APIs.",
  },
  {
    question: "How much does desktop software cost?",
    answer:
      "We provide custom quotations based on features, platforms, integrations, database requirements and application complexity.",
  },
];

export default function DesktopOnly() {
  return (
    <>
      <ServiceHero
        eyebrow="Desktop App Solution"
        title="Custom desktop software for your business."
        description="Build powerful business software around your internal processes, workflows and operational requirements."
        highlights={[
          "Windows",
          "Business Software",
          "Offline Ready",
          "Custom Systems",
        ]}
      />

      <FeatureGrid
        eyebrow="What's Included"
        title="Software designed around the way you work."
        description="A focused desktop solution for organizations that need dedicated software without a mobile or website project."
        features={features}
      />

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Suitable For
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Built for operational software.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {suitableFor.map((item) => (
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
          <div className="rounded-[2rem] bg-gray-950 p-8 text-white sm:p-12 lg:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Custom Quote
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Tell us about your business software.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Describe your workflow, users and required functionality. We'll
              help define the right desktop application.
            </p>

            <Link
              to="/get-quote"
              className="mt-9 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 hover:bg-gray-200"
            >
              Request Desktop App Quote
            </Link>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />

      <ServiceCTA
        title="Need custom business software?"
        description="Tell us about your workflow and we'll help plan the right desktop application."
      />
    </>
  );
}
