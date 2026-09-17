import SEO from "../../components/common/SEO";
import {
  ArrowRight,
  Building2,
  MapPin,
  Search,
  Users,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function RealEstate() {
  return (
    <>
      <SEO
        title="Real Estate Software & Website Development | Errorfix Solution"
        description="Custom real estate websites, property platforms, search systems, dashboards and applications designed for real estate businesses."
        keywords="real estate website development, real estate software, property website development, real estate app development, property platform"
        canonical="https://YOUR-DOMAIN.com/industries/real-estate"
      />

      <main className="bg-white text-gray-950">
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              Industry Solutions
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
              Digital solutions for modern real estate businesses.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Build property platforms, real estate websites, mobile apps,
              dashboards and systems that make buying, selling and managing
              property easier.
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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <Card
                icon={Building2}
                title="Property Platforms"
                text="Property listing and management platforms for agencies and builders."
              />

              <Card
                icon={Search}
                title="Property Search"
                text="Advanced search, filters, categories and location-based discovery."
              />

              <Card
                icon={MapPin}
                title="Maps & Location"
                text="Location features that help users discover properties and neighborhoods."
              />

              <Card
                icon={Users}
                title="Lead Management"
                text="Capture and manage enquiries from buyers, sellers and investors."
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <BarChart3 size={34} />

            <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
              Bring your real estate operations online.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              From property discovery to lead management and administration, we
              can create a connected digital system for your business.
            </p>
          </div>
        </section>

        <CTA />
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

function CTA() {
  return (
    <section className="py-20 text-center sm:py-28">
      <h2 className="text-4xl font-bold sm:text-5xl">
        Planning a real estate platform?
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-gray-600">
        Tell us about your business and project requirements.
      </p>

      <Link
        to="/get-quote"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-950 px-8 py-4 text-sm font-semibold text-white hover:bg-gray-800"
      >
        Get a Quote
        <ArrowRight size={17} />
      </Link>
    </section>
  );
}
