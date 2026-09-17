import SEO from "../../components/common/SEO";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../components/common/Container.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import Button from "../../components/common/Button.jsx";

const values = [
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    description:
      "We use modern technology where it creates real value instead of adding unnecessary complexity.",
  },
  {
    icon: Users,
    title: "User Focused",
    description:
      "Every digital product should be simple to understand, easy to use, and built around its users.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    description:
      "We focus on maintainable systems, thoughtful development, and dependable digital experiences.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "We work with current technologies and development practices to create scalable digital products.",
  },
];

const capabilities = [
  "Website and web application development",
  "Android and iOS mobile applications",
  "Custom desktop software",
  "AI-powered applications and integrations",
  "UI/UX design and digital branding",
  "Digital marketing and online growth solutions",
];

export default function About() {
  return (
    <>
      <SEO
        title="About Errorfix Solution | Software Development Company"
        description="Learn about Errorfix Solution, a software development company providing websites, mobile applications, desktop software, AI solutions and digital services."
        keywords="about Errorfix Solution, software development company, web development company, mobile app development company, AI development company"
        canonical="https://errorfixsolutions.online/about"
      />
      <main>
        {/* Hero */}
        <section className="bg-gray-50">
          <Container>
            <div className="grid min-h-[65vh] items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                  About Errorfix Solution
                </p>

                <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-tight text-gray-950 sm:text-6xl">
                  Technology should solve problems, not create them.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
                  Errorfix Solution OPC Private Limited is a digital technology
                  company focused on building websites, applications, software,
                  AI-powered products, and digital experiences for businesses.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button to="/get-quote">
                    Start a Project
                    <ArrowRight className="ml-2" size={17} />
                  </Button>

                  <Button to="/services" variant="secondary">
                    Explore Our Services
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] bg-gray-950 p-8 shadow-2xl shadow-gray-300/30 sm:p-10">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                    Our approach
                  </p>

                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Understand.
                    <br />
                    Design.
                    <br />
                    Build.
                    <br />
                    Improve.
                  </h2>

                  <div className="mt-10 space-y-4">
                    {[
                      "Understand the business problem",
                      "Design the right experience",
                      "Build with modern technology",
                      "Improve based on real needs",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 border-b border-white/10 pb-4 text-sm text-gray-300"
                      >
                        <CheckCircle2 size={17} className="shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Who We Are */}
        <section className="bg-white py-24 sm:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Who We Are
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                  A technology partner for ideas at every stage.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-gray-600">
                <p>
                  Businesses need more than just software. They need technology
                  that supports their goals, communicates their value, and makes
                  everyday work easier.
                </p>

                <p>
                  That's where Errorfix Solution comes in. We combine
                  development, design, AI, and digital expertise to create
                  solutions tailored to the specific requirements of each
                  project.
                </p>

                <p>
                  From a business website to a custom application or an
                  AI-powered product, our focus is on building practical digital
                  solutions that can grow with the business.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="bg-gray-50 py-24 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Our Values"
              title="The principles behind our work."
              description="Good technology is not only about writing code. It is about making thoughtful decisions throughout the entire product journey."
            />

            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="rounded-3xl border border-gray-200 bg-white p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-gray-950">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Capabilities */}
        <section className="bg-white py-24 sm:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  What We Build
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                  From a single page to a complete digital ecosystem.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
                  Our capabilities cover the major technology and digital needs
                  of modern businesses.
                </p>

                <div className="mt-8">
                  <Button to="/services" variant="secondary">
                    View All Services
                    <ArrowRight className="ml-2" size={17} />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                {capabilities.map((capability, index) => (
                  <div
                    key={capability}
                    className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-950 text-xs font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-semibold text-gray-900">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Global */}
        <section className="bg-gray-950 py-24 text-white sm:py-28">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Worldwide
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Building for businesses wherever they are.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400">
                We work with businesses and clients across different markets,
                helping them turn ideas into useful and scalable digital
                products.
              </p>

              <div className="mt-9">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
                >
                  Talk to Us
                  <ArrowRight className="ml-2" size={17} />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
