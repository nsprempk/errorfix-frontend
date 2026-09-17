import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";

const services = [
  {
    name: "Website Development",
    path: "/services/website-development",
  },
  {
    name: "Mobile App Development",
    path: "/services/mobile-app-development",
  },
  {
    name: "Desktop App Development",
    path: "/services/desktop-app-development",
  },
  {
    name: "AI Development",
    path: "/services/ai-development",
  },
  {
    name: "UI/UX & Branding",
    path: "/services/ui-ux-branding",
  },
  {
    name: "Digital Marketing",
    path: "/services/digital-marketing",
  },
];

const solutions = [
  {
    name: "Website Only",
    path: "/solutions/website-only",
  },
  {
    name: "Website + Mobile",
    path: "/solutions/website-mobile",
  },
  {
    name: "Mobile + Desktop",
    path: "/solutions/mobile-desktop",
  },
  {
    name: "Complete Solution",
    path: "/solutions/complete-solution",
  },
];

const industries = [
  {
    name: "E-Commerce",
    path: "/industries/ecommerce",
  },
  {
    name: "Real Estate",
    path: "/industries/real-estate",
  },
  {
    name: "Healthcare",
    path: "/industries/healthcare",
  },
  {
    name: "Education",
    path: "/industries/education",
  },
];

const companyLinks = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Refund Policy",
    path: "/refund",
  },
];

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-1 text-sm text-gray-400 transition hover:text-white"
    >
      <span>{children}</span>

      <ArrowRight
        size={13}
        className="translate-x-[-3px] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
      />
    </Link>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
        {title}
      </h3>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <FooterLink key={item.path} to={item.path}>
            {item.name}
          </FooterLink>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2"
              aria-label="Errorfix Solution home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-bold text-gray-950">
                E
              </div>

              <div>
                <div className="text-lg font-bold tracking-tight text-white">
                  ERRORFIX
                </div>

                <div className="text-[10px] font-medium tracking-[0.2em] text-gray-500">
                  SOLUTION
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Websites, mobile applications, desktop software and AI-powered
              digital solutions for businesses worldwide.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-gray-500"
                  aria-hidden="true"
                />
                <span>Contact us through our enquiry form</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-gray-500"
                  aria-hidden="true"
                />
                <span>Serving clients worldwide</span>
              </div>
            </div>
          </div>

          <FooterColumn title="Services" items={services} />

          <FooterColumn title="Solutions" items={solutions} />

          <FooterColumn title="Industries" items={industries} />

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Company
            </h3>

            <div className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <FooterLink key={item.path} to={item.path}>
                  {item.name}
                </FooterLink>
              ))}
            </div>

            <Link
              to="/get-quote"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
            >
              Get a Free Quote
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-800 bg-gray-900">
          <div className="flex flex-col gap-6 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Start a Project
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Have an idea you want to build?
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Tell us what you need and we'll help you turn your idea into a
                practical digital solution.
              </p>
            </div>

            <Link
              to="/get-quote"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
            >
              Start Your Project
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-gray-800 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Errorfix Solution OPC Private Limited.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition hover:text-white">
              Terms & Conditions
            </Link>

            <Link to="/refund" className="transition hover:text-white">
              Return & Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
