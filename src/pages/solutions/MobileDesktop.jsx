import SEO from "../../components/common/SEO";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import ServiceHero from "../../components/common/ServiceHero";
import FeatureGrid from "../../components/common/FeatureGrid";
import ServiceFAQ from "../../components/common/ServiceFAQ";
import ServiceCTA from "../../components/common/ServiceCTA";

const features = [
  {
    title: "Mobile Application",
    description:
      "Provide customers or users with a dedicated Android and iOS experience.",
  },
  {
    title: "Desktop Software",
    description:
      "Give internal teams powerful desktop software for business operations.",
  },
  {
    title: "Shared Backend",
    description:
      "Connect mobile and desktop applications through a centralized backend.",
  },
  {
    title: "Centralized Data",
    description:
      "Allow approved systems and users to work with shared business information.",
  },
  {
    title: "User Roles",
    description:
      "Different interfaces and permissions can be provided for customers, employees and administrators.",
  },
  {
    title: "Admin System",
    description:
      "Manage important users, content and operational data from an administration system.",
  },
];

const benefits = [
  "Customer-facing mobile experience",
  "Employee desktop workflow",
  "Shared business data",
  "Centralized backend",
  "Role-based access",
  "Scalable architecture",
];

const faqs = [
  {
    question: "Why combine mobile and desktop applications?",
    answer:
      "This model can work well when customers need a mobile experience while employees or administrators need more powerful desktop workflows.",
  },
  {
    question: "Can both applications use the same backend?",
    answer:
      "Yes. They can communicate with a shared backend and centralized database when appropriate.",
  },
  {
    question: "Can employees and customers have different access?",
    answer:
      "Yes. User roles and permissions can be designed for different types of users.",
  },
  {
    question: "Can the desktop software work offline?",
    answer:
      "Offline functionality can be considered depending on the business workflow and technical architecture.",
  },
  {
    question: "How much does this solution cost?",
    answer:
      "We provide a custom quotation based on the mobile application, desktop software, backend, integrations and overall project complexity.",
  },
];

export default function MobileDesktop() {
  return (
    <>
      <SEO
        title="Mobile + Desktop App Development | Errorfix Solution"
        description="Develop connected mobile and desktop applications for businesses, internal systems and customer-facing digital products."
        keywords="mobile desktop app development, mobile application, desktop software, business application development"
        canonical="errorfixsolutions.online/solutions/mobile-desktop"
      />
      <ServiceHero
        eyebrow="Mobile + Desktop"
        title="One system for customers and your team."
        description="Combine a customer-facing mobile application with powerful desktop software for your internal operations."
        highlights={[
          "Mobile App",
          "Desktop App",
          "Shared Backend",
          "Centralized Data",
        ]}
      />

      <FeatureGrid
        eyebrow="What's Included"
        title="Connect your customer and business experiences."
        description="Build mobile software for users and desktop tools for employees through a connected technical architecture."
        features={features}
      />

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Benefits
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Different interfaces. Connected operations.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
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
              Let's connect your mobile and desktop workflows.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Tell us what customers need and what your internal team needs.
              We'll plan the connected solution.
            </p>

            <Link
              to="/get-quote"
              className="mt-9 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 hover:bg-gray-200"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />

      <ServiceCTA
        title="Need mobile and desktop software?"
        description="Build one connected system for customers, employees and administrators."
      />
    </>
  );
}
