import SEO from "../../components/common/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Errorfix Solution helped us turn our idea into a working digital product with a clear development process.",
    name: "Business Client",
    role: "Business Owner",
  },
  {
    quote:
      "The team understood our requirements and worked through the project step by step.",
    name: "Startup Client",
    role: "Startup Founder",
  },
  {
    quote:
      "We needed a custom solution rather than an off-the-shelf product, and the development process was structured around our needs.",
    name: "Technology Client",
    role: "Product Owner",
  },
];

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Client Testimonials | Errorfix Solution"
        description="Read feedback and experiences from clients who have worked with Errorfix Solution on websites, applications and digital projects."
        keywords="Errorfix Solution reviews, software development testimonials, web development reviews, app development testimonials"
        canonical="errorfixsolutions.online/testimonials"
      />
      <main className="bg-white text-gray-950">
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              Testimonials
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              What clients say about working with us.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600">
              Every project is different. We focus on communication,
              understanding requirements and building practical digital
              solutions.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-3xl border border-gray-200 p-8"
              >
                <Quote size={28} />

                <p className="mt-7 text-lg leading-8 text-gray-700">
                  "{testimonial.quote}"
                </p>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <p className="font-bold">{testimonial.name}</p>

                  <p className="mt-1 text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 bg-gray-50 py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="text-4xl font-bold">Ready to start?</h2>

            <Link
              to="/get-quote"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gray-950 px-7 py-4 text-sm font-bold text-white hover:bg-gray-800"
            >
              Request a Quote
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
