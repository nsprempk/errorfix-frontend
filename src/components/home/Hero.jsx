import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gray-100 blur-3xl" />

        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-gray-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
            <Sparkles size={15} />
            Digital solutions for modern businesses
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-8xl">
            We build digital
            <span className="block text-gray-400">products that matter.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            Websites, mobile apps, desktop software and AI-powered solutions
            designed to help businesses grow, operate and connect with their
            customers.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/get-quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Start Your Project
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              <Play size={15} />
              View Our Work
            </Link>
          </div>
        </div>

        {/* Product ecosystem */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="rounded-3xl border border-gray-200 bg-gray-950 p-2 shadow-2xl">
            <div className="rounded-[22px] border border-gray-800 bg-gray-900 p-6 sm:p-10">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["01", "Web", "Websites & Web Applications"],
                  ["02", "Mobile", "Android & iOS Applications"],
                  ["03", "Desktop", "Business & Enterprise Software"],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-gray-800 bg-gray-950 p-6"
                  >
                    <span className="text-xs text-gray-500">{number}</span>

                    <h3 className="mt-8 text-xl font-semibold text-white">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
