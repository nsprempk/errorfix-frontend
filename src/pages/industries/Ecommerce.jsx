import SEO from "../../components/common/SEO";
import {
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
  CreditCard,
  BarChart3,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Product catalog and categories",
  "Shopping cart and checkout",
  "Payment gateway integration",
  "Customer accounts and authentication",
  "Order management",
  "Inventory management",
  "Admin dashboard",
  "Reports and analytics",
];

export default function Ecommerce() {
  return (
    <>
      <SEO
        title="E-commerce Development Services | Errorfix Solution"
        description="Custom e-commerce websites and applications for businesses looking to build modern online shopping experiences, product catalogs, payments and customer systems."
        keywords="ecommerce development, ecommerce website development, online store development, shopping website, ecommerce application"
        canonical="https://YOUR-DOMAIN.com/industries/ecommerce"
      />

      <main className="bg-white text-gray-950">
        {/* Hero */}
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                Industry Solutions
              </p>

              <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                E-commerce solutions built to grow your business.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                We build modern e-commerce websites, mobile apps and business
                systems designed around your products, customers and operations.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/get-quote?solution=website-mobile"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-7 py-4 text-sm font-semibold text-white hover:bg-gray-800"
                >
                  Discuss Your Project
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-4 text-sm font-semibold hover:border-gray-950"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                What We Build
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Everything your online store needs.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={ShoppingBag}
                title="Online Stores"
                text="Modern storefronts designed for browsing, discovery and conversion."
              />

              <FeatureCard
                icon={CreditCard}
                title="Payments"
                text="Secure payment and checkout experiences tailored to your market."
              />

              <FeatureCard
                icon={BarChart3}
                title="Business Analytics"
                text="Track products, orders, customers, revenue and business activity."
              />

              <FeatureCard
                icon={Users}
                title="Customer Experience"
                text="Accounts, wishlists, orders, notifications and personalized experiences."
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-950 py-20 text-white sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                E-commerce Features
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Built around the way your business works.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                Your store doesn't have to fit a generic template. We can design
                the customer experience and internal tools around your exact
                requirements.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 rounded-2xl border border-gray-800 bg-gray-900 p-5"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <ShieldCheck size={36} className="mx-auto" />

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Have an e-commerce idea?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Tell us what you want to build. We'll discuss the requirements,
              technology and project scope with you.
            </p>

            <Link
              to="/get-quote?solution=website-mobile"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-950 px-8 py-4 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Get a Project Quote
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
        <Icon size={22} />
      </div>

      <h3 className="mt-6 text-xl font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-gray-500">{text}</p>
    </div>
  );
}
