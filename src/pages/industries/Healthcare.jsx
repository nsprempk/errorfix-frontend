import SEO from "../../components/common/SEO";

import {
  ArrowRight,
  HeartPulse,
  CalendarCheck,
  ShieldCheck,
  Users,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Healthcare() {
  return (
    <>
      <SEO
        title="Healthcare Software & Website Development | Errorfix Solution"
        description="Custom digital solutions for healthcare businesses including websites, applications, dashboards, booking systems and business software."
        keywords="healthcare software development, healthcare website development, healthcare app development, medical software, healthcare digital solutions"
        canonical="https://YOUR-DOMAIN.com/industries/healthcare"
      />
      <main className="bg-white text-gray-950">
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              Industry Solutions
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
              Digital healthcare experiences designed around people.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Create healthcare websites, appointment systems, patient portals,
              mobile applications and management platforms.
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
              icon={HeartPulse}
              title="Healthcare Platforms"
              text="Custom digital platforms for healthcare organizations and providers."
            />

            <Card
              icon={CalendarCheck}
              title="Appointments"
              text="Online appointment booking and scheduling systems."
            />

            <Card
              icon={Users}
              title="Patient Experience"
              text="Patient-facing websites, portals and mobile applications."
            />

            <Card
              icon={Database}
              title="Management Systems"
              text="Internal tools and dashboards for managing healthcare operations."
            />
          </div>
        </section>

        <section className="bg-gray-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ShieldCheck size={36} />

            <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
              Technology with privacy and security in mind.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Healthcare projects require careful handling of user information,
              access controls and application security. Requirements can be
              designed around the applicable regulations and your operational
              needs.
            </p>
          </div>
        </section>

        <section className="py-20 text-center sm:py-28">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Building a healthcare product?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-600">
            Tell us about your project and we'll discuss the requirements.
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
