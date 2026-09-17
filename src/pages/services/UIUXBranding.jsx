import SEO from "../../components/common/SEO";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceHero from "../../components/common/ServiceHero";
import FeatureGrid from "../../components/common/FeatureGrid";
import ServiceFAQ from "../../components/common/ServiceFAQ";
import ServiceCTA from "../../components/common/ServiceCTA";
const designServices = [
  {
    title: "Website UI/UX",
    description:
      "Modern website interfaces designed around usability, clarity and conversion.",
  },
  {
    title: "Mobile App UI/UX",
    description:
      "Mobile experiences designed for intuitive navigation and smooth user journeys.",
  },
  {
    title: "Dashboard Design",
    description:
      "Clean and functional dashboards for managing complex information and workflows.",
  },
  {
    title: "SaaS Product Design",
    description:
      "Product interfaces designed for software platforms, tools and subscription products.",
  },
  {
    title: "Brand Identity",
    description:
      "Visual identity systems that help establish a consistent and recognizable brand.",
  },
  {
    title: "Logo Design",
    description:
      "Professional logos designed to represent your business across digital platforms.",
  },
];
const capabilities = [
  {
    title: "User Research",
    description:
      "Understand users, business goals and important problems before designing the interface.",
  },
  {
    title: "User Flows",
    description:
      "Map the steps users take through your website, application or digital product.",
  },
  {
    title: "Wireframes",
    description:
      "Create structural layouts before moving into detailed visual design.",
  },
  {
    title: "High-Fidelity Design",
    description:
      "Create polished interface designs with detailed layouts, typography and visual elements.",
  },
  {
    title: "Design Systems",
    description:
      "Build reusable design patterns and components for consistent digital products.",
  },
  {
    title: "Responsive Design",
    description:
      "Design experiences that adapt to different screen sizes and devices.",
  },
  {
    title: "Prototype",
    description:
      "Create interactive prototypes to demonstrate important product flows before development.",
  },
  {
    title: "Brand Guidelines",
    description:
      "Document typography, visual identity and usage guidelines for consistent branding.",
  },
  {
    title: "Developer Handoff",
    description:
      "Prepare organized designs and specifications for a smoother development process.",
  },
];
const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, users, competitors and product objectives.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We define information architecture, user journeys and important product flows.",
  },
  {
    number: "03",
    title: "Wireframe",
    description:
      "We establish the structure and layout before applying the final visual design.",
  },
  {
    number: "04",
    title: "Design",
    description:
      "We create polished visual interfaces and reusable design components.",
  },
  {
    number: "05",
    title: "Prototype",
    description:
      "We connect screens and interactions to demonstrate the intended experience.",
  },
  {
    number: "06",
    title: "Handoff",
    description:
      "We organize the final designs and provide the information needed for development.",
  },
];
const faqs = [
  {
    question: "Do you design websites and mobile apps?",
    answer:
      "Yes. We provide UI/UX design for websites, mobile applications, dashboards, SaaS products and other digital interfaces.",
  },
  {
    question: "Do you provide logo and branding services?",
    answer:
      "Yes. Logo design and broader visual identity work can be provided as part of a project or as a separate branding service.",
  },
  {
    question: "Do you create prototypes?",
    answer:
      "Yes. Interactive prototypes can be created to demonstrate user journeys and important application interactions before development.",
  },
  {
    question: "Can you redesign an existing website or app?",
    answer:
      "Yes. We can review an existing product and redesign its user interface and experience based on the project's goals.",
  },
  {
    question: "Will the design be responsive?",
    answer:
      "Yes. Responsive behavior can be considered for the relevant screen sizes and devices required by your project.",
  },
  {
    question: "How much does UI/UX design cost?",
    answer:
      "We provide custom quotations because design scope varies depending on the number of screens, complexity, research requirements, branding and deliverables.",
  },
];
export default function UIUXBranding() {
  return (
    <>
      <SEO
        title="UI/UX Design & Branding Services | Errorfix Solution"
        description="Professional UI/UX design and branding services for websites, mobile applications and digital products, focused on clear user experiences and modern interfaces."
        keywords="UI UX design services, UI design, UX design, website design, mobile app UI UX, branding services, digital product design"
        canonical="errorfixsolutions.online/services/ui-ux-branding"
      />
      <ServiceHero
        eyebrow="UI/UX & Branding"
        title="Design that makes digital products easier to use."
        description="We create thoughtful interfaces, user experiences and brand identities for websites, mobile applications, software products and businesses."
        highlights={["UI Design", "UX Design", "Branding", "Prototyping"]}
      />{" "}
      <FeatureGrid
        eyebrow="Design Services"
        title="Design for every digital touchpoint."
        description="Create a consistent visual and user experience across your website, applications and brand."
        features={designServices}
      />{" "}
      <FeatureGrid
        eyebrow="Capabilities"
        title="From user flow to final interface."
        description="We combine UX thinking with visual design to create interfaces that are clear, useful and aligned with your business."
        features={capabilities}
      />{" "}
      <section className="bg-gray-50 py-24 sm:py-32">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {" "}
            <div>
              {" "}
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                {" "}
                Design Philosophy{" "}
              </p>{" "}
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                {" "}
                Good design should feel natural.{" "}
              </h2>{" "}
              <p className="mt-5 text-lg leading-8 text-gray-600">
                {" "}
                We focus on making interfaces easy to understand while keeping
                the visual identity distinctive and aligned with the
                business.{" "}
              </p>{" "}
            </div>{" "}
            <div className="space-y-4">
              {" "}
              {[
                "Clear information hierarchy",
                "Simple navigation",
                "Consistent visual language",
                "Responsive layouts",
                "Accessible interaction patterns",
                "Reusable design components",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5"
                >
                  {" "}
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-gray-700"
                  />{" "}
                  <span className="text-sm font-semibold text-gray-800">
                    {" "}
                    {item}{" "}
                  </span>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="bg-white py-24 sm:py-32">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="overflow-hidden rounded-[2rem] bg-gray-950 text-white">
            {" "}
            <div className="grid lg:grid-cols-2">
              {" "}
              <div className="p-8 sm:p-12 lg:p-16">
                {" "}
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {" "}
                  Custom Quote{" "}
                </p>{" "}
                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  {" "}
                  Design scope built around your product.{" "}
                </h2>{" "}
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  {" "}
                  Whether you need a complete product design or a focused
                  redesign, we'll create a scope based on the actual work
                  required.{" "}
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
              <div className="border-t border-gray-800 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
                {" "}
                <h3 className="text-xl font-semibold">
                  {" "}
                  Scope may include:{" "}
                </h3>{" "}
                <div className="mt-7 space-y-4">
                  {" "}
                  {[
                    "Number of screens",
                    "UX research",
                    "User flows",
                    "Wireframes",
                    "High-fidelity screens",
                    "Interactive prototypes",
                    "Design system",
                    "Brand identity",
                    "Developer handoff",
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
      <section className="bg-gray-50 py-24 sm:py-32">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="max-w-3xl">
            {" "}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              {" "}
              Design Process{" "}
            </p>{" "}
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              {" "}
              From idea to interface.{" "}
            </h2>{" "}
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
      <ServiceFAQ faqs={faqs} />{" "}
      <ServiceCTA
        title="Need a better digital experience?"
        description="Tell us about your website, app or brand. We'll help shape the experience and visual identity."
      />{" "}
    </>
  );
}
