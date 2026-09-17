import SEO from "../../components/common/SEO";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceHero from "../../components/common/ServiceHero";
import FeatureGrid from "../../components/common/FeatureGrid";
import TechStack from "../../components/common/TechStack";
import ServiceFAQ from "../../components/common/ServiceFAQ";
import ServiceCTA from "../../components/common/ServiceCTA";
const aiSolutions = [
  {
    title: "AI Chatbots",
    description:
      "Intelligent conversational assistants for websites, applications and customer support.",
  },
  {
    title: "AI SaaS",
    description:
      "Custom AI-powered software products with user accounts, dashboards and subscription workflows.",
  },
  {
    title: "AI Automation",
    description:
      "Automate repetitive business processes using AI-powered workflows and integrations.",
  },
  {
    title: "Document AI",
    description:
      "Extract, understand and process information from documents and business files.",
  },
  {
    title: "Image & Vision AI",
    description:
      "Build applications that analyze images and use computer vision capabilities.",
  },
  {
    title: "Voice AI",
    description:
      "Create voice-enabled applications for speech input, transcription and conversational experiences.",
  },
];
const capabilities = [
  {
    title: "AI API Integration",
    description:
      "Connect your application with suitable AI models and external AI services.",
  },
  {
    title: "Custom AI Workflows",
    description:
      "Design AI-powered workflows around your specific business process.",
  },
  {
    title: "Knowledge-Based AI",
    description:
      "Build experiences that can work with your approved business information and documents.",
  },
  {
    title: "AI Content Generation",
    description:
      "Generate text and other supported content within your application workflows.",
  },
  {
    title: "Image Processing",
    description:
      "Create workflows involving image understanding, analysis or transformation.",
  },
  {
    title: "Speech & Voice",
    description:
      "Add speech recognition, transcription and voice-based interactions when required.",
  },
  {
    title: "User Authentication",
    description:
      "Secure user accounts, login systems, permissions and access management.",
  },
  {
    title: "Admin Dashboard",
    description:
      "Manage users, usage, content, configurations and application data.",
  },
  {
    title: "Usage & Analytics",
    description:
      "Track application activity and relevant usage information through dashboards and reporting.",
  },
];
const technologies = [
  "OpenAI API",
  "React",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
];
const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the problem you want AI to solve and identify the required workflow.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We determine the AI capabilities, data requirements, integrations and application structure.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We design the user experience and AI interaction flow around your users.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build the application, backend, AI integrations, database and required workflows.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "We test application functionality, AI workflows, user flows and important edge cases.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We deploy the product and can continue supporting improvements and new AI capabilities.",
  },
];
const faqs = [
  {
    question: "What type of AI applications can you build?",
    answer:
      "We can build AI chatbots, AI-powered SaaS products, document processing systems, image and vision applications, voice-enabled applications and custom AI workflows.",
  },
  {
    question: "Can you integrate AI into an existing website or app?",
    answer:
      "Yes. AI capabilities can be integrated into existing websites, mobile applications, desktop software or backend systems.",
  },
  {
    question: "Can you build an AI chatbot?",
    answer:
      "Yes. Chatbots can be designed for customer support, information retrieval, business workflows and other conversational use cases.",
  },
  {
    question: "Can AI work with my business documents?",
    answer:
      "Depending on the use case, applications can be designed to process and work with information from approved business documents and data sources.",
  },
  {
    question: "Can you build voice or image AI applications?",
    answer:
      "Yes. We can build applications involving supported speech, transcription, image understanding and other AI capabilities.",
  },
  {
    question: "How much does AI development cost?",
    answer:
      "We don't publish fixed prices because AI projects vary significantly in complexity, model usage, integrations, infrastructure and application requirements. We provide a custom quotation based on the project scope.",
  },
];
export default function AIDevelopment() {
  return (
    <>
      <SEO
        title="AI Development Services | Errorfix Solution"
        description="Custom AI development services including AI chatbots, AI SaaS, automation, document AI, image and vision AI, voice AI and intelligent business applications."
        keywords="AI development services, custom AI development, AI chatbot development, AI SaaS development, AI automation, document AI, image AI, voice AI"
        canonical="errorfixsolutions.online/services/ai-development"
      />
      <ServiceHero
        eyebrow="AI Development"
        title="Turn AI into a real product."
        description="We design and develop AI-powered applications, automation workflows and intelligent digital products that solve practical business problems."
        highlights={["AI Applications", "Automation", "Chatbots", "Custom AI"]}
      />{" "}
      <FeatureGrid
        eyebrow="AI Solutions"
        title="What can we build with AI?"
        description="From customer-facing AI assistants to internal automation systems, we build practical AI experiences around your requirements."
        features={aiSolutions}
      />{" "}
      <FeatureGrid
        eyebrow="Capabilities"
        title="AI integrated into your workflow."
        description="Combine AI capabilities with authentication, databases, dashboards and your existing business systems."
        features={capabilities}
      />{" "}
      <TechStack
        title="AI backed by modern application architecture."
        description="AI is only one part of the product. We combine AI services with modern frontend, backend and database technologies."
        technologies={technologies}
      />{" "}
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
                  Custom Pricing{" "}
                </p>{" "}
                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  {" "}
                  AI development starts with the problem.{" "}
                </h2>{" "}
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  {" "}
                  Tell us what you want AI to accomplish. We'll determine the
                  appropriate architecture, integrations and development scope
                  before preparing your quotation.{" "}
                </p>{" "}
                <Link
                  to="/get-quote"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
                >
                  {" "}
                  Discuss Your AI Project{" "}
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
                  Project scope may include:{" "}
                </h3>{" "}
                <div className="mt-7 space-y-4">
                  {" "}
                  {[
                    "AI model and API requirements",
                    "Number of users",
                    "Application functionality",
                    "Data and document requirements",
                    "AI workflow complexity",
                    "Backend and database",
                    "Third-party integrations",
                    "Usage and infrastructure requirements",
                    "Admin and analytics features",
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
              Development Process{" "}
            </p>{" "}
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              {" "}
              From idea to intelligent product.{" "}
            </h2>{" "}
            <p className="mt-5 text-lg leading-8 text-gray-600">
              {" "}
              We focus on the business problem first, then design the technology
              around the solution.{" "}
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
      <ServiceFAQ faqs={faqs} />{" "}
      <ServiceCTA
        title="Have an AI idea?"
        description="Tell us what you want to automate, improve or build with AI. We'll help you turn the idea into a practical digital product."
      />{" "}
    </>
  );
}
