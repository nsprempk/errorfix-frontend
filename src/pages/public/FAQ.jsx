import SEO from "../../components/common/SEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What services does Errorfix Solution provide?",
    answer:
      "We provide website development, mobile app development, desktop software development, AI development, UI/UX and branding, and digital marketing services.",
  },
  {
    question: "Do you develop both websites and mobile apps?",
    answer:
      "Yes. We can develop websites, Android and iOS applications, desktop applications, or connected combinations of these platforms.",
  },
  {
    question: "Do you show fixed prices?",
    answer:
      "We don't display fixed project prices because the cost depends on the actual requirements, features, design, platforms, integrations and complexity of each project.",
  },
  {
    question: "Can you build a complete software product?",
    answer:
      "Yes. A complete project can include the frontend, backend, database, APIs, website, mobile application, desktop application, authentication, payments, administration and other required systems.",
  },
  {
    question: "Can you add AI features to an existing application?",
    answer:
      "Yes. AI functionality can be integrated into existing websites and applications depending on the required use case.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients across multiple countries and can discuss project requirements remotely.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Start by submitting the quote form. Provide your project type, requirements, features, platforms and contact information. Our team can then review the project.",
  },
  {
    question: "Can you maintain the application after launch?",
    answer:
      "Yes. Maintenance, improvements, bug fixes and additional development can be discussed as part of the project or as ongoing support.",
  },
];

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ | Software, Website, App & AI Development | Errorfix Solution"
        description="Find answers to common questions about website development, mobile apps, desktop software, AI development, project timelines and working with Errorfix Solution."
        keywords="software development FAQ, website development FAQ, mobile app development FAQ, AI development FAQ, Errorfix Solution FAQ"
        canonical="errorfixsolutions.online/faq"
      />
      <main className="bg-white text-gray-950">
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              FAQ
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Questions, answered.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600">
              Find answers to common questions about our development services
              and project process.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-200 bg-white"
                >
                  <summary className="cursor-pointer list-none px-6 py-5 font-bold">
                    <div className="flex items-center justify-between gap-6">
                      <span>{faq.question}</span>

                      <span className="text-2xl font-normal transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <div className="border-t border-gray-100 px-6 py-5 text-sm leading-7 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-950 py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Still have questions?
            </h2>

            <p className="mt-5 text-lg text-gray-400">
              Tell us about your project and we'll discuss your requirements.
            </p>

            <Link
              to="/get-quote"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-gray-950 hover:bg-gray-200"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
