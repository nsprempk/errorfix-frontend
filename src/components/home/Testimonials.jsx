import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Your client feedback will appear here once testimonials are added through the admin dashboard.",
    name: "Client Testimonial",
    company: "Your Client",
  },
  {
    quote:
      "Real customer feedback can be displayed in this section to build trust with new visitors.",
    name: "Client Testimonial",
    company: "Your Client",
  },
  {
    quote:
      "Testimonials will eventually be managed dynamically from the administration panel.",
    name: "Client Testimonial",
    company: "Your Client",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Client feedback
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            What our clients say.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-3xl border border-gray-200 p-7">
              <Quote size={24} className="text-gray-300" />

              <p className="mt-6 text-base leading-8 text-gray-700">
                "{testimonial.quote}"
              </p>

              <div className="mt-8">
                <p className="font-semibold text-gray-950">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
