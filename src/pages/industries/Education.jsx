import SEO from "../../components/common/SEO";

import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  Video,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Education() {
  return (
    <>
      <SEO
        title="Education Software & Website Development | Errorfix Solution"
        description="Custom education websites, learning platforms, applications, dashboards and digital solutions for schools, educators, startups and education businesses."
        keywords="education software development, education website development, learning platform development, edtech development, education app"
        canonical="https://YOUR-DOMAIN.com/industries/education"
      />

      <main className="bg-white text-gray-950">
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              Industry Solutions
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
              Technology that makes learning more accessible.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Build learning platforms, education websites, mobile apps,
              dashboards and digital classroom experiences.
            </p>

            <Link
              to="/get-quote"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gray-950 px-7 py-4 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Discuss Your Project
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
            <Card
              icon={GraduationCap}
              title="Learning Platforms"
              text="Custom online learning platforms for schools, institutes and businesses."
            />

            <Card
              icon={BookOpen}
              title="Course Systems"
              text="Courses, lessons, quizzes, assessments and learning progress."
            />

            <Card
              icon={Video}
              title="Digital Classes"
              text="Create digital experiences for video lessons and online education."
            />

            <Card
              icon={BarChart3}
              title="Analytics"
              text="Track learner activity, course progress and platform performance."
            />
          </div>
        </section>

        <section className="bg-gray-950 py-20 text-white sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 sm:px-6 lg:px-8">
            <div>
              <Users size={34} />

              <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
                Create a connected education experience.
              </h2>
            </div>

            <p className="text-lg leading-8 text-gray-400">
              Connect students, teachers, administrators and content through
              websites, mobile applications and custom management systems.
            </p>
          </div>
        </section>

        <section className="py-20 text-center sm:py-28">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Have an education product idea?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-600">
            Tell us what you want to build and we'll help define the digital
            solution.
          </p>

          <Link
            to="/get-quote"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-950 px-8 py-4 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Get a Quote
            <ArrowRight size={17} />
          </Link>
        </section>
      </main>
    </>
  );
}

function Card({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-gray-200 p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
        <Icon size={22} />
      </div>

      <h3 className="mt-6 text-xl font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-gray-500">{text}</p>
    </div>
  );
}
