import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gray-950 px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gray-950">
              <MessageSquare size={25} />
            </div>

            <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Have an idea?
              <span className="block text-gray-500">Let's build it.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Tell us what you're planning to build. We'll help you understand
              the technology, scope and next steps.
            </p>

            <div className="mt-10">
              <Link
                to="/get-quote"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
              >
                Start Your Project
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
