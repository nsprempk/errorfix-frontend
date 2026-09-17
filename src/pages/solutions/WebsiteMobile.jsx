import SEO from "../../components/common/SEO";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import ServiceHero from "../../components/common/ServiceHero";
import FeatureGrid from "../../components/common/FeatureGrid";
import ServiceFAQ from "../../components/common/ServiceFAQ";
import ServiceCTA from "../../components/common/ServiceCTA";

const features = [
  {
    title: "Professional Website",
    description:
      "A responsive web presence for your business, services and customers.",
  },
  {
    title: "Mobile Application",
    description: "A dedicated Android and iOS experience for your customers.",
  },
  {
    title: "Shared Backend",
    description:
      "Website and mobile application can communicate with a shared backend system.",
  },
  {
    title: "User Accounts",
    description:
      "Authentication and profiles across the digital product where required.",
  },
  {
    title: "API Integration",
    description:
      "Connect the website and application to common business services and systems.",
  },
  {
    title: "Admin Dashboard",
    description:
      "Manage users, content and important business data from one administration system.",
  },
];

const benefits = [
  "Reach customers on the web",
  "Provide a dedicated mobile experience",
  "Centralize application data",
  "Create consistent branding",
  "Connect website and mobile workflows",
  "Build a foundation for future expansion",
];

const faqs = [
  {
    question: "What does the website + mobile solution include?",
    answer:
      "It combines a responsive website with a mobile application and can include shared backend services, authentication, APIs and administration functionality.",
  },
  {
    question: "Can the website and app share the same database?",
    answer:
      "Yes. A shared backend and database architecture can allow both products to work with centralized information.",
  },
  {
    question: "Can both Android and iOS be included?",
    answer:
      "Yes. Android and iOS requirements can be included in the project scope.",
  },
  {
    question: "Can I add an admin dashboard?",
    answer:
      "Yes. An administration dashboard can be developed to manage users, content and business data.",
  },
  {
    question: "How much does this solution cost?",
    answer:
      "We provide a custom quotation based on the website, mobile application, backend, integrations and required functionality.",
  },
];

export default function WebsiteMobile() {
  return (
    <>
      <SEO
        title="Website + Mobile App Development | Errorfix Solution"
        description="Build a connected website and mobile application experience for your customers and business with Errorfix Solution."
        keywords="website and mobile app development, web and mobile solution, website mobile application, custom digital solution"
        canonical="errorfixsolutions.online/solutions/website-mobile"
      />
      <ServiceHero
        eyebrow="Website + Mobile"
        title="Reach customers on web and mobile."
        description="Combine a professional website with a dedicated mobile application and connected backend system."
        highlights={["Website", "Android", "iOS", "Shared Backend"]}
      />

      <FeatureGrid
        eyebrow="What's Included"
        title="Two experiences. One connected system."
        description="Create a consistent digital ecosystem where your website and mobile application can work together."
        features={features}
      />

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Benefits
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Build a broader digital presence.
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
              Build your connected web and mobile product.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Share your business idea and we'll determine the website,
              application and backend scope required.
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
        title="Need both a website and mobile app?"
        description="Let's create one connected digital experience for your customers."
      />
    </>
  );
}
