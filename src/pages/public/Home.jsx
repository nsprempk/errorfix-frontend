import SEO from "../../components/common/SEO.jsx";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Smartphone,
  Brain,
  Palette,
  Megaphone,
  Monitor,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../components/common/Container.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import Button from "../../components/common/Button.jsx";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description:
      "Modern, responsive websites designed to represent your business and convert visitors into customers.",
    path: "/services/website-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications with smooth experiences across Android and iOS.",
    path: "/services/mobile-app-development",
  },
  {
    icon: Code2,
    title: "Desktop App Development",
    description:
      "Reliable desktop software built around your business workflows and operational requirements.",
    path: "/services/desktop-app-development",
  },
  {
    icon: Brain,
    title: "AI Development",
    description:
      "AI-powered applications and intelligent features that automate tasks and improve user experiences.",
    path: "/services/ai-development",
  },
  {
    icon: Palette,
    title: "UI/UX & Branding",
    description:
      "Clean interfaces and strong visual identities that make your digital product memorable.",
    path: "/services/ui-ux-branding",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Digital strategies designed to improve visibility, reach the right audience, and generate growth.",
    path: "/services/digital-marketing",
  },
];

const solutions = [
  "Business websites",
  "E-commerce platforms",
  "Mobile applications",
  "Custom software",
  "AI-powered products",
  "Digital marketing systems",
];

const stats = [
  {
    value: "Web",
    label: "Development",
  },
  {
    value: "Mobile",
    label: "Applications",
  },
  {
    value: "AI",
    label: "Solutions",
  },
  {
    value: "Digital",
    label: "Growth",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Web, Mobile, Desktop & AI Development, Website Designing"
        description="Errorfix Solution builds professional websites, mobile apps, desktop software, AI solutions, UI/UX experiences and digital marketing solutions for businesses worldwide."
        canonical="https://errorfixsolutions.online/"
      />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gray-50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-[-10%] top-[-20%] h-80 w-80 rounded-full bg-gray-200/60 blur-3xl" />
            <div className="absolute bottom-[-20%] right-[-5%] h-96 w-96 rounded-full bg-gray-200/50 blur-3xl" />
          </div>

          <Container className="relative">
            <div className="grid min-h-[calc(100vh-5rem)] items-center gap-14 py-20 lg:grid-cols-2 lg:py-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                  Digital Solutions Worldwide
                </p>

                <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
                  We build digital products that move businesses forward.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
                  Errorfix Solution creates websites, mobile applications,
                  desktop software, AI-powered products, and digital experiences
                  for businesses worldwide.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button to="/get-quote">
                    Start Your Project
                    <ArrowRight className="ml-2" size={17} />
                  </Button>

                  <Button to="/portfolio" variant="secondary">
                    View Our Work
                  </Button>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={17} />
                    Custom Solutions
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={17} />
                    Modern Technology
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={17} />
                    Worldwide Service
                  </div>
                </div>
              </div>

              {/* Hero visual */}
              <div className="relative">
                <div className="relative mx-auto max-w-xl">
                  <div className="rounded-[2rem] border border-gray-200 bg-white p-4 shadow-2xl shadow-gray-300/30">
                    <div className="rounded-[1.5rem] bg-gray-950 p-7 sm:p-10">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="h-3 w-3 rounded-full bg-white/30" />
                          <span className="h-3 w-3 rounded-full bg-white/20" />
                          <span className="h-3 w-3 rounded-full bg-white/10" />
                        </div>

                        <span className="text-xs text-gray-500">ERRORFIX</span>
                      </div>

                      <div className="mt-14">
                        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                          Build
                        </p>

                        <p className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                          Ideas into
                          <br />
                          digital products.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-3">
                          {["Web", "Mobile", "AI", "Software"].map((item) => (
                            <div
                              key={item}
                              className="rounded-xl border border-white/10 bg-white/5 p-4"
                            >
                              <div className="text-sm font-semibold text-white">
                                {item}
                              </div>

                              <div className="mt-1 text-xs text-gray-500">
                                Solution
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:block">
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      What we build
                    </p>

                    <p className="mt-1 text-lg font-bold text-gray-950">
                      Digital Experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="border-b border-gray-200 bg-white">
          <Container>
            <div className="grid grid-cols-2 divide-x divide-gray-200 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.value} className="px-5 py-10 text-center">
                  <div className="text-2xl font-bold tracking-tight text-gray-950">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Services */}
        <section className="bg-white py-24 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="What We Do"
              title="Everything you need to build your digital presence."
              description="From your first idea to a complete digital product, we provide the technology and creative expertise needed to bring it to life."
            />

            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-gray-950">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-gray-950">
                      Explore service
                      <ArrowRight
                        className="ml-2 transition group-hover:translate-x-1"
                        size={16}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Solutions */}
        <section className="bg-gray-50 py-24 sm:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Solutions
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                  One technology partner for your next big idea.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
                  Whether you need a simple business website or a complete
                  technology ecosystem, we can help you plan, design, develop,
                  and launch your product.
                </p>

                <div className="mt-8">
                  <Button to="/solutions" variant="dark">
                    Explore Solutions
                    <ArrowRight className="ml-2" size={17} />
                  </Button>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {solutions.map((solution, index) => (
                  <div
                    key={solution}
                    className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-950 text-xs font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-semibold text-gray-900">
                      {solution}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Process */}
        <section className="bg-white py-24 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Our Process"
              title="From idea to launch, with a clear process."
              description="We keep projects structured, transparent, and focused on creating something useful for your business."
            />

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Discover",
                  description:
                    "We understand your idea, business goals, users, and technical requirements.",
                },
                {
                  number: "02",
                  title: "Build",
                  description:
                    "Our team designs and develops your solution using modern technologies.",
                },
                {
                  number: "03",
                  title: "Launch",
                  description:
                    "We test, refine, deploy, and help you move your product into the real world.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="border-t border-gray-300 pt-6"
                >
                  <span className="text-sm font-bold text-gray-400">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-gray-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="bg-gray-950 py-24 text-white sm:py-28">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Start Something New
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Have an idea?
                <br />
                Let's build it.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400">
                Tell us what you're planning and we'll help you turn the idea
                into a practical digital solution.
              </p>

              <div className="mt-9">
                <Button to="/get-quote" variant="light">
                  Get a Free Quote
                  <ArrowRight className="ml-2" size={17} />
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
