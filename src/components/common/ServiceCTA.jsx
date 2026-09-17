import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCTA({
  title = "Ready to build your project?",
  description = "Tell us about your requirements and we'll help you plan the next step.",
}) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-gray-950 px-6 py-16 text-center sm:px-12 sm:py-24">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            {description}
          </p>

          <Link
            to="/get-quote"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
          >
            Get a Free Quote
            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
