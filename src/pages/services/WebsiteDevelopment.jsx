import SEO from "../../components/common/SEO";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceHero from "../../components/common/ServiceHero";
import FeatureGrid from "../../components/common/FeatureGrid";
import TechStack from "../../components/common/TechStack";
import ServiceFAQ from "../../components/common/ServiceFAQ";
import ServiceCTA from "../../components/common/ServiceCTA";
const websiteTypes = [
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages for products, campaigns, services and startups.",
  },
  {
    title: "Business Websites",
    description:
      "Professional websites that establish your brand and generate enquiries.",
  },
  {
    title: "Corporate Websites",
    description:
      "Scalable digital platforms for established organizations and companies.",
  },
  {
    title: "E-commerce",
    description:
      "Online stores with products, cart, checkout, payments and order management.",
  },
  {
    title: "Web Applications",
    description:
      "Custom applications with authentication, dashboards, APIs and databases.",
  },
  {
    title: "SaaS Platforms",
    description:
      "Subscription-based software products designed for scalable online businesses.",
  },
];
const features = [
  {
    title: "Responsive Design",
    description:
      "Interfaces designed to work smoothly across mobile, tablet and desktop screens.",
  },
  {
    title: "Custom UI/UX",
    description:
      "Layouts and interactions designed around your brand, business and users.",
  },
  {
    title: "Backend Development",
    description:
      "APIs, business logic, authentication and database-powered functionality.",
  },
  {
    title: "Admin Dashboard",
    description:
      "Manage users, content, products, orders and business data from one place.",
  },
  {
    title: "Payment Integration",
    description:
      "Payment gateways and transaction workflows can be integrated when required.",
  },
  {
    title: "SEO Foundation",
    description:
      "Technical SEO foundations including metadata, structure and performance.",
  },
  {
    title: "Authentication",
    description:
      "Secure registration, login, password recovery and user access management.",
  },
  {
    title: "Third-Party Integrations",
    description:
      "Connect your website with external services, APIs and business tools.",
  },
  {
    title: "Performance",
    description:
      "Fast-loading experiences designed with performance and scalability in mind.",
  },
];
const technologies = [
  "React",
  "Vite",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
];
const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, target users, goals and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the features, structure, technology and development scope.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create the interface and user experience around your requirements.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Our team builds the frontend, backend, database and required integrations.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "We test functionality, responsiveness, performance and important user flows.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We deploy your website and provide post-launch support when required.",
  },
];
const faqs = [
  {
    question: "How much does website development cost?",
    answer:
      "We don't publish fixed website prices because every project has different requirements. The quotation depends on the website type, number of pages, functionality, design, integrations and technical complexity.",
  },
  {
    question: "Do you build websites from scratch?",
    answer:
      "Yes. We can build custom websites and web applications around your business requirements and design direction.",
  },
  {
    question: "Can you build an e-commerce website?",
    answer:
      "Yes. E-commerce projects can include product management, categories, cart, checkout, payment integration, orders, customer accounts and administration features.",
  },
  {
    question: "Can you add a backend and admin dashboard?",
    answer:
      "Yes. Custom web applications can include APIs, databases, authentication, admin dashboards and other backend functionality.",
  },
  {
    question: "Can you integrate payment gateways?",
    answer:
      "Yes. Payment gateway integration can be included when required by the project and supported by the target market.",
  },
  {
    question: "Do you provide SEO?",
    answer:
      "We can include technical SEO foundations as part of website development and also provide separate SEO and digital marketing services.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. Ongoing maintenance, updates, improvements and technical support can be arranged after launch.",
  },
];
export default function WebsiteDevelopment() {
  return (
    <>
      <SEO
        title="Website Development Services | Errorfix Solution"
        description="Professional website development services for businesses, startups and organizations. Build modern, responsive and scalable websites with Errorfix Solution."
        keywords="website development services, web development company, custom website development, responsive website development, business website development"
        canonical="errorfixsolutions.online/services/website-development"
      />
      {/* Hero */}{" "}
      <ServiceHero
        eyebrow="Website Development"
        title="Websites built around your business."
        description="From high-converting landing pages to powerful web applications, we design and develop modern digital experiences for businesses worldwide."
        highlights={[
          "Responsive",
          "SEO-ready",
          "Scalable",
          "Custom development",
        ]}
      />{" "}
      {/* Website Types */}{" "}
      <FeatureGrid
        eyebrow="Website Types"
        title="What can we build for you?"
        description="Choose the type of website that matches your business goals. Custom functionality can be added when your requirements go beyond a standard website."
        features={websiteTypes}
      />{" "}
      {/* Capabilities */}{" "}
      <FeatureGrid
        eyebrow="Capabilities"
        title="More than just a website."
        description="We can combine frontend, backend and business functionality into one complete web platform."
        features={features}
      />{" "}
      {/* Technology */}{" "}
      <TechStack
        title="Modern technology. Practical architecture."
        description="We use modern technologies to create fast, maintainable and scalable web products."
        technologies={technologies}
      />{" "}
      {/* Custom Quote */}{" "}
      <section className="bg-white py-24 sm:py-32">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="overflow-hidden rounded-[2rem] bg-gray-950 text-white">
            {" "}
            <div className="grid lg:grid-cols-2">
              {" "}
              {/* Content */}{" "}
              <div className="p-8 sm:p-12 lg:p-16">
                {" "}
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {" "}
                  Custom Pricing{" "}
                </p>{" "}
                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  {" "}
                  Every project is different.{" "}
                </h2>{" "}
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  {" "}
                  Instead of forcing your project into a fixed package, we
                  create a quotation based on what you actually need.{" "}
                </p>{" "}
                <Link
                  to="/get-quote"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
                >
                  {" "}
                  Request a Custom Quote{" "}
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />{" "}
                </Link>{" "}
              </div>{" "}
              {/* What determines quote */}{" "}
              <div className="border-t border-gray-800 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
                {" "}
                <h3 className="text-xl font-semibold">
                  {" "}
                  Your quotation may consider:{" "}
                </h3>{" "}
                <div className="mt-7 space-y-4">
                  {" "}
                  {[
                    "Number of pages and screens",
                    "Design and UI/UX requirements",
                    "Frontend functionality",
                    "Backend and database requirements",
                    "Admin dashboard",
                    "Payment and third-party integrations",
                    "Authentication and user roles",
                    "Performance and scalability requirements",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      {" "}
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-gray-400"
                      />{" "}
                      <span className="text-sm leading-6 text-gray-400">
                        {" "}
                        {item}{" "}
                      </span>{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Process */}{" "}
      <section className="bg-gray-50 py-24 sm:py-32">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="max-w-3xl">
            {" "}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              {" "}
              Development Process{" "}
            </p>{" "}
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              {" "}
              From idea to launch.{" "}
            </h2>{" "}
            <p className="mt-5 text-lg leading-8 text-gray-600">
              {" "}
              A structured process helps us turn your requirements into a
              reliable digital product.{" "}
            </p>{" "}
          </div>{" "}
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-gray-200 bg-white p-7"
              >
                {" "}
                <span className="text-sm font-bold text-gray-400">
                  {" "}
                  {step.number}{" "}
                </span>{" "}
                <h3 className="mt-8 text-xl font-bold text-gray-950">
                  {" "}
                  {step.title}{" "}
                </h3>{" "}
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {" "}
                  {step.description}{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* FAQ */} <ServiceFAQ faqs={faqs} /> {/* CTA */}{" "}
      <ServiceCTA
        title="Have a website idea?"
        description="Tell us what you want to build. We'll understand your requirements and prepare a custom quotation for your project."
      />{" "}
    </>
  );
}
