import SEO from "../../components/common/SEO";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceHero from "../../components/common/ServiceHero";
import FeatureGrid from "../../components/common/FeatureGrid";
import ServiceFAQ from "../../components/common/ServiceFAQ";
import ServiceCTA from "../../components/common/ServiceCTA";
const marketingServices = [
  {
    title: "SEO",
    description:
      "Improve your website's technical foundation, content structure and search visibility.",
  },
  {
    title: "Google Ads",
    description:
      "Plan and manage search advertising campaigns around your business objectives.",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build a consistent social presence with content planning and campaign support.",
  },
  {
    title: "Content Marketing",
    description:
      "Create useful content designed to attract, educate and engage your target audience.",
  },
  {
    title: "Local SEO",
    description:
      "Improve online visibility for businesses serving specific locations and local customers.",
  },
  {
    title: "Lead Generation",
    description:
      "Create digital campaigns and landing experiences focused on generating relevant enquiries.",
  },
];
const capabilities = [
  {
    title: "Technical SEO",
    description:
      "Improve website structure, metadata, indexing foundations and technical search factors.",
  },
  {
    title: "Keyword Research",
    description:
      "Identify relevant search topics and opportunities based on your market and audience.",
  },
  {
    title: "On-Page SEO",
    description:
      "Optimize page content, headings, internal links and other on-page elements.",
  },
  {
    title: "Content Strategy",
    description:
      "Plan useful content around your audience, products, services and search demand.",
  },
  {
    title: "Campaign Management",
    description:
      "Plan, launch and optimize digital advertising campaigns based on agreed objectives.",
  },
  {
    title: "Landing Pages",
    description:
      "Create focused landing experiences designed around specific campaigns and audiences.",
  },
  {
    title: "Analytics",
    description:
      "Use analytics and measurement tools to understand traffic and campaign activity.",
  },
  {
    title: "Conversion Optimization",
    description:
      "Improve important website journeys and calls to action using measurable insights.",
  },
  {
    title: "Reporting",
    description:
      "Provide clear reporting around agreed marketing activities and measurable indicators.",
  },
];
const process = [
  {
    number: "01",
    title: "Audit",
    description:
      "We review your current website, digital presence, competitors and marketing setup.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We identify relevant channels, audiences and activities based on your objectives.",
  },
  {
    number: "03",
    title: "Plan",
    description:
      "We create a practical roadmap covering content, SEO, campaigns and measurement.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "We implement the agreed marketing activities and campaign improvements.",
  },
  {
    number: "05",
    title: "Measure",
    description:
      "We review relevant analytics and campaign information to understand performance.",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "We use the available data to refine campaigns, content and conversion opportunities.",
  },
];
const faqs = [
  {
    question: "What digital marketing services do you provide?",
    answer:
      "We provide SEO, Google Ads support, social media marketing, content marketing, local SEO, lead generation and related digital marketing services.",
  },
  {
    question: "Do you provide SEO for new websites?",
    answer:
      "Yes. We can establish technical SEO foundations for new websites and create an ongoing optimization strategy.",
  },
  {
    question: "Can you manage Google Ads campaigns?",
    answer:
      "Yes. We can help plan, launch and optimize search advertising campaigns according to the agreed scope and objectives.",
  },
  {
    question: "Do you provide local SEO?",
    answer:
      "Yes. Local SEO can be included for businesses targeting customers in specific cities, regions or service areas.",
  },
  {
    question: "Can you generate leads through digital marketing?",
    answer:
      "We can design campaigns and landing experiences around lead generation objectives, with measurement configured to track relevant actions.",
  },
  {
    question: "How much does digital marketing cost?",
    answer:
      "We don't publish fixed marketing prices because requirements vary by channel, market, campaign scope and ongoing workload. We provide a custom proposal based on your objectives.",
  },
];
export default function DigitalMarketing() {
  return (
    <>
      <SEO
        title="Digital Marketing Services | Errorfix Solution"
        description="Digital marketing services including SEO, content strategy, search visibility, analytics and online growth support for businesses and digital products."
        keywords="digital marketing services, SEO services, search engine optimization, online marketing, business digital marketing"
        canonical="errorfixsolutions.online/services/digital-marketing"
      />
      <ServiceHero
        eyebrow="Digital Marketing"
        title="Get your business in front of the right audience."
        description="We help businesses build their online presence through SEO, paid campaigns, content, social media and conversion-focused digital experiences."
        highlights={["SEO", "Paid Advertising", "Content", "Lead Generation"]}
      />{" "}
      <FeatureGrid
        eyebrow="Marketing Services"
        title="Build visibility across digital channels."
        description="Choose the channels that make sense for your business and target audience."
        features={marketingServices}
      />{" "}
      <FeatureGrid
        eyebrow="Capabilities"
        title="Marketing backed by measurement."
        description="We combine strategy, execution and measurement to create a clearer view of your digital marketing activity."
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
                Marketing Approach{" "}
              </p>{" "}
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                {" "}
                Strategy before spending.{" "}
              </h2>{" "}
              <p className="mt-5 text-lg leading-8 text-gray-600">
                {" "}
                We start by understanding your business, audience and objectives
                before deciding which digital channels and activities should be
                part of the plan.{" "}
              </p>{" "}
            </div>{" "}
            <div className="space-y-4">
              {" "}
              {[
                "Understand your business",
                "Identify your target audience",
                "Review the current digital presence",
                "Choose relevant marketing channels",
                "Define measurable objectives",
                "Track and improve activity",
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
                  Custom Proposal{" "}
                </p>{" "}
                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  {" "}
                  Marketing built around your goals.{" "}
                </h2>{" "}
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  {" "}
                  We don't use one fixed marketing package for every business.
                  Your proposal can be structured around the channels, market
                  and objectives that matter to you.{" "}
                </p>{" "}
                <Link
                  to="/get-quote"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
                >
                  {" "}
                  Request a Custom Proposal{" "}
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
                  Your marketing scope may include:{" "}
                </h3>{" "}
                <div className="mt-7 space-y-4">
                  {" "}
                  {[
                    "Target market",
                    "Marketing channels",
                    "Campaign objectives",
                    "SEO requirements",
                    "Content requirements",
                    "Advertising campaigns",
                    "Landing pages",
                    "Analytics and tracking",
                    "Reporting frequency",
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
              Marketing Process{" "}
            </p>{" "}
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              {" "}
              From strategy to optimization.{" "}
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
        title="Ready to grow your digital presence?"
        description="Tell us about your business, target audience and goals. We'll help you identify a practical digital marketing approach."
      />{" "}
    </>
  );
}
