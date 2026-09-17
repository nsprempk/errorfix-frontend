import SEO from "../../components/common/SEO";

import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Learn Typing",
    category: "Education Platform",
    description:
      "A browser-based typing practice platform with lessons, tests and learning tools.",
  },
  {
    title: "Free Invoice Generator",
    category: "Business Software",
    description:
      "An online invoice creation tool designed to help businesses create and download invoices.",
  },
  {
    title: "Ask Me Something",
    category: "AI Platform",
    description:
      "An AI-powered question answering platform supporting text, image and voice-based questions.",
  },
  {
    title: "Enjoying Story",
    category: "Content Platform",
    description:
      "A story-reading platform with categories, search and story publishing functionality.",
  },
  {
    title: "Property Platform",
    category: "Real Estate",
    description:
      "A property-focused digital platform designed for browsing and discovering real estate opportunities.",
  },
  {
    title: "Bhagavad Gita",
    category: "Mobile Application",
    description:
      "A multilingual application providing chapters, shlokas, meanings and audio experiences.",
  },
];

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio | Websites, Apps & Software Projects | Errorfix Solution"
        description="Explore website, mobile application, software and digital projects developed by Errorfix Solution."
        keywords="software development portfolio, website portfolio, mobile app portfolio, AI project portfolio, Errorfix Solution projects"
        canonical="https://errorfixsolutions.online/portfolio"
      />
      <main className="bg-white text-gray-950">
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              Portfolio
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Digital products built for real-world needs.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600">
              Explore examples of websites, applications and software products
              developed across different industries and use cases.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex aspect-[16/10] items-end bg-gray-950 p-7 text-white">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                        Project {String(index + 1).padStart(2, "0")}
                      </p>

                      <h2 className="mt-3 text-2xl font-bold">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                      {project.category}
                    </p>

                    <p className="mt-4 leading-7 text-gray-600">
                      {project.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
                      Project Overview
                      <ExternalLink size={15} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Let's turn your idea into a digital product.
            </p>

            <Link
              to="/get-quote"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-gray-950 hover:bg-gray-200"
            >
              Start Your Project
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
