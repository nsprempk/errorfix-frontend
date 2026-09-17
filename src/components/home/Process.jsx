const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your idea, goals, users and business requirements.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We define features, technology, architecture, milestones and scope.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create the user experience and interface before development.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our team builds the product using modern development technologies.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We test functionality, responsiveness, performance and critical flows.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We deploy your product and provide post-launch technical support.",
  },
];

export default function Process() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Our process
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            From idea to launch.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-gray-200 bg-white p-7"
            >
              <span className="text-sm font-bold text-gray-400">
                {step.number}
              </span>

              <h3 className="mt-8 text-xl font-bold text-gray-950">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
