import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import ServiceHero from "../../components/common/ServiceHero";
import FeatureGrid from "../../components/common/FeatureGrid";
import ServiceFAQ from "../../components/common/ServiceFAQ";
import ServiceCTA from "../../components/common/ServiceCTA";

const features = [
  {
    title: "Android & iOS",
    description:
      "Build a mobile application for the platforms your customers use.",
  },
  {
    title: "Custom UI/UX",
    description:
      "Design application screens around your users and business workflow.",
  },
  {
    title: "Backend Integration",
    description:
      "Connect your application to APIs, databases and backend services.",
  },
  {
    title: "Authentication",
    description:
      "User registration, login, profiles and secure access workflows.",
  },
  {
    title: "Notifications",
    description: "Keep users informed through application notifications.",
  },
  {
    title: "App Store Support",
    description:
      "Prepare production builds and assist with application publishing.",
  },
];

const suitableFor = [
  "Customer apps",
  "E-commerce apps",
  "Booking apps",
  "Education apps",
  "Social apps",
  "On-demand apps",
];

const faqs = [
  {
    question: "Can you build both Android and iOS?",
    answer:
      "Yes. We can build applications for Android and iOS using an appropriate cross-platform or platform-specific development approach.",
  },
  {
    question: "Can the mobile app have a backend?",
    answer:
      "Yes. Backend APIs, databases, authentication and administration functionality can be included.",
  },
  {
    question: "Can I add payments?",
    answer:
      "Yes. Supported payment integrations can be included based on your requirements.",
  },
  {
    question: "Can you publish the app?",
    answer:
      "Yes. We can prepare production builds and assist with Google Play and App Store publishing.",
  },
  {
    question: "How much does a mobile app cost?",
    answer:
      "We provide a custom quotation based on application complexity, screens, features, backend requirements and integrations.",
  },
];

export default function MobileOnly() {
  return (
    <>
      <ServiceHero
        eyebrow="Mobile App Solution"
        title="A mobile app built around your users."
        description="Create a modern Android and iOS application connected to the functionality your business needs."
        highlights={["Android", "iOS", "Custom UI/UX", "Backend Ready"]}
      />

      <FeatureGrid
        eyebrow="What's Included"
        title="Everything needed for a connected mobile product."
        description="A focused mobile solution for businesses that don't require a website or desktop application as part of the initial project."
        features={features}
      />

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Suitable For
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Turn your idea into a mobile experience.
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
              Let's plan your mobile application.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Share your application idea, target users and required features.
              We'll prepare a custom project scope.
            </p>

            <Link
              to="/get-quote"
              className="mt-9 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 hover:bg-gray-200"
            >
              Request Mobile App Quote
            </Link>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />

      <ServiceCTA
        title="Have a mobile app idea?"
        description="Tell us what you want to build and we'll help turn it into a practical mobile product."
      />
    </>
  );
}
