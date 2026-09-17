import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Website pricing depends on the type, number of pages, functionality and integrations. Our website projects start from ₹15,000.",
  },
  {
    question: "Do you build mobile applications?",
    answer:
      "Yes. We develop modern mobile applications for Android and iOS, including cross-platform applications.",
  },
  {
    question: "Can you build a complete software system?",
    answer:
      "Yes. We can build websites, mobile applications, desktop software, APIs, databases and admin dashboards as one connected system.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients in India, USA, Canada, Australia, the UK and other markets.",
  },
  {
    question: "How do I get a project quotation?",
    answer:
      "Use our Get a Quote form and provide your project requirements. We can then review the scope and prepare a suitable quotation.",
  },
];

export default function FAQPreview() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-14 divide-y divide-gray-200 rounded-3xl border border-gray-200 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6 sm:p-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-gray-950">
                {faq.question}

                <Plus
                  size={20}
                  className="shrink-0 transition group-open:rotate-45"
                />
              </summary>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
          >
            View all FAQs
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
