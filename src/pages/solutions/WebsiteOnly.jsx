import SEO from "../../components/common/SEO";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceHero from "../../components/common/ServiceHero";
import FeatureGrid from "../../components/common/FeatureGrid";
import ServiceFAQ from "../../components/common/ServiceFAQ";
import ServiceCTA from "../../components/common/ServiceCTA";
const features = [
  {
    title: "Business Website",
    description:
      "A professional website designed to present your business, services and brand online.",
  },
  {
    title: "Responsive Design",
    description:
      "Designed to work smoothly across mobile, tablet and desktop devices.",
  },
  {
    title: "Custom UI/UX",
    description:
      "A tailored interface instead of a generic template-based experience.",
  },
  {
    title: "Contact & Lead Forms",
    description:
      "Allow visitors to contact your business and submit enquiries directly.",
  },
  {
    title: "SEO Foundation",
    description:
      "Technical and on-page foundations to help search engines understand your website.",
  },
  {
    title: "Analytics Integration",
    description:
      "Connect suitable analytics and measurement tools to understand website activity.",
  },
];
const suitableFor = [
  "Business websites",
  "Agency websites",
  "Service businesses",
  "Portfolio websites",
  "Startup websites",
  "Professional websites",
];
const faqs = [
  {
    question: "What is included in the website-only solution?",
    answer:
      "The solution focuses on creating a professional responsive website with the pages, features, integrations and functionality required for your business.",
  },
  {
    question: "Can I request custom website features?",
    answer:
      "Yes. Features can be added according to your business requirements and project scope.",
  },
  {
    question: "Will the website work on mobile?",
    answer:
      "Yes. Responsive design can be included so the website adapts to different screen sizes.",
  },
  {
    question: "Can you help with SEO?",
    answer:
      "Yes. SEO foundations, technical setup and other agreed SEO activities can be included.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "We provide a custom quotation because the cost depends on the number of pages, functionality, integrations, design requirements and project scope.",
  },
];
export default function WebsiteOnly() {
  return (
    <>
      <SEO
        title="Website Development Solution | Errorfix Solution"
        description="A complete website development solution for businesses that need a professional, responsive and scalable online presence."
        keywords="website solution, business website development, custom website, website development package"
        canonical="errorfixsolutions.online/solutions/website-only"
      />
      <ServiceHero
        eyebrow="Website Solution"
        title="A professional website for your business."
        description="Get a modern, responsive website designed around your brand, services and business goals."
        highlights={[
          "Responsive",
          "Custom Design",
          "SEO Ready",
          "Lead Generation",
        ]}
      />{" "}
      <FeatureGrid
        eyebrow="What's Included"
        title="Everything you need to establish your business online."
        description="A focused website solution for businesses that need a strong digital presence without a mobile or desktop application."
        features={features}
      />{" "}
      <section className="bg-gray-50 py-24 sm:py-32">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="max-w-3xl">
            {" "}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              {" "}
              Suitable For{" "}
            </p>{" "}
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              {" "}
              A strong starting point for many businesses.{" "}
            </h2>{" "}
          </div>{" "}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {" "}
            {suitableFor.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6"
              >
                {" "}
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-gray-700"
                />{" "}
                <span className="font-semibold text-gray-800">{item}</span>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="bg-white py-24 sm:py-32">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="rounded-[2rem] bg-gray-950 p-8 text-white sm:p-12 lg:p-16">
            {" "}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              {" "}
              Custom Quote{" "}
            </p>{" "}
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              {" "}
              Tell us what your website needs.{" "}
            </h2>{" "}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              {" "}
              Every business is different. Share your requirements and we'll
              prepare a project-specific quotation.{" "}
            </p>{" "}
            <Link
              to="/get-quote"
              className="mt-9 inline-flex items-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 hover:bg-gray-200"
            >
              {" "}
              Request Website Quote{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <ServiceFAQ faqs={faqs} />{" "}
      <ServiceCTA
        title="Need a professional website?"
        description="Tell us about your business and we'll help you plan the right website."
      />{" "}
    </>
  );
}
