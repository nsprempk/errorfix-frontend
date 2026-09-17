import { Plus } from "lucide-react";

export default function ServiceFAQ({
  title = "Frequently asked questions",
  faqs = [],
}) {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            {title}
          </h2>
        </div>

        <div className="mt-12 divide-y divide-gray-200 overflow-hidden rounded-3xl border border-gray-200 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6 sm:p-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-gray-950">
                {faq.question}

                <Plus
                  size={20}
                  className="shrink-0 transition group-open:rotate-45"
                />
              </summary>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
