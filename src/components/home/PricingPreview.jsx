import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
const options = [
  {
    title: "Website",
    description:
      "Professional websites and web applications tailored to your business requirements.",
  },
  {
    title: "Mobile App",
    description:
      "Modern Android and iOS applications designed around your users and business goals.",
  },
  {
    title: "Desktop App",
    description:
      "Custom desktop software for business operations, productivity and internal workflows.",
  },
  {
    title: "Complete Solution",
    description:
      "Connected website, mobile and desktop applications powered by a shared backend.",
  },
];
const included = [
  "Custom project scope",
  "Requirement analysis",
  "Technology recommendations",
  "Feature-based quotation",
];
export default function PricingPreview() {
  return (
    <section className="bg-gray-950 py-24 text-white sm:py-32">
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Heading */}{" "}
        <div className="max-w-3xl">
          {" "}
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            {" "}
            Custom Pricing{" "}
          </p>{" "}
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {" "}
            Your project. Your requirements. Your quote.{" "}
          </h2>{" "}
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            {" "}
            We don't believe in one-size-fits-all pricing. Every project is
            different, so we prepare a customized quotation based on your
            features, design, integrations, technology and complexity.{" "}
          </p>{" "}
        </div>{" "}
        {/* Options */}{" "}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {" "}
          {options.map((option) => (
            <div
              key={option.title}
              className="rounded-3xl border border-gray-800 bg-gray-900 p-7 transition hover:border-gray-600"
            >
              {" "}
              <h3 className="text-xl font-semibold text-white">
                {" "}
                {option.title}{" "}
              </h3>{" "}
              <p className="mt-4 text-sm leading-7 text-gray-400">
                {" "}
                {option.description}{" "}
              </p>{" "}
              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-white">
                {" "}
                <Check size={16} /> Custom Quote{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* Included */}{" "}
        <div className="mt-12 rounded-3xl border border-gray-800 bg-gray-900 p-7 sm:p-9">
          {" "}
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
            {" "}
            <div>
              {" "}
              <h3 className="text-2xl font-bold">
                {" "}
                How custom pricing works{" "}
              </h3>{" "}
              <p className="mt-3 text-sm leading-7 text-gray-400">
                {" "}
                Share your idea with us and we'll understand the requirements
                before preparing your quotation.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid gap-4 sm:grid-cols-2">
              {" "}
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-gray-800 bg-gray-950 p-4"
                >
                  {" "}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-gray-950">
                    {" "}
                    <Check size={15} />{" "}
                  </div>{" "}
                  <span className="text-sm text-gray-300"> {item} </span>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* CTA */}{" "}
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {" "}
          <p className="max-w-xl text-sm leading-6 text-gray-500">
            {" "}
            Get a project-specific quotation without committing to a fixed
            package or public price.{" "}
          </p>{" "}
          <Link
            to="/get-quote"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
          >
            {" "}
            Request a Custom Quote{" "}
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
