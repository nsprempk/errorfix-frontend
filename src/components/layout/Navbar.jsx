import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";

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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setDesktopMenu(null);
    setMobileMenu(null);
  };

  const toggleMobileMenu = (menu) => {
    setMobileMenu((current) => (current === menu ? null : menu));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenus}
          className="group flex items-center gap-2"
          aria-label="Errorfix Solution home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-lg font-bold text-white transition group-hover:bg-gray-700">
            E
          </div>

          <div>
            <div className="text-lg font-bold tracking-tight text-gray-900">
              ERRORFIX
            </div>

            <div className="text-[10px] font-medium tracking-[0.2em] text-gray-500">
              SOLUTION
            </div>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          <DesktopLink to="/" label="Home" />

          <DesktopLink to="/about" label="About" />

          <DesktopDropdown
            label="Services"
            menu="services"
            open={desktopMenu === "services"}
            setOpen={setDesktopMenu}
            items={services}
          />

          <DesktopDropdown
            label="Solutions"
            menu="solutions"
            open={desktopMenu === "solutions"}
            setOpen={setDesktopMenu}
            items={solutions}
          />

          <DesktopDropdown
            label="Industries"
            menu="industries"
            open={desktopMenu === "industries"}
            setOpen={setDesktopMenu}
            items={industries}
          />

          <DesktopLink to="/pricing" label="Pricing" />

          <DesktopLink to="/portfolio" label="Portfolio" />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+18257931477"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-900 hover:bg-gray-50"
            aria-label="Call Errorfix Solution"
          >
            <Phone size={16} />
            Call Us at : +1 (825)-793-1477
          </a>

          <Link
            to="/get-quote"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Get a Quote
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => {
            setMobileOpen((current) => !current);
            setMobileMenu(null);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-900 transition hover:bg-gray-100 lg:hidden"
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <nav className="space-y-1" aria-label="Mobile navigation">
              <MobileLink to="/" label="Home" onClick={closeMenus} />

              <MobileLink to="/about" label="About" onClick={closeMenus} />

              <MobileDropdown
                label="Services"
                menu="services"
                open={mobileMenu === "services"}
                onToggle={toggleMobileMenu}
                items={services}
                onNavigate={closeMenus}
              />

              <MobileDropdown
                label="Solutions"
                menu="solutions"
                open={mobileMenu === "solutions"}
                onToggle={toggleMobileMenu}
                items={solutions}
                onNavigate={closeMenus}
              />

              <MobileDropdown
                label="Industries"
                menu="industries"
                open={mobileMenu === "industries"}
                onToggle={toggleMobileMenu}
                items={industries}
                onNavigate={closeMenus}
              />

              <MobileLink to="/pricing" label="Pricing" onClick={closeMenus} />

              <MobileLink
                to="/portfolio"
                label="Portfolio"
                onClick={closeMenus}
              />

              <MobileLink
                to="/testimonials"
                label="Testimonials"
                onClick={closeMenus}
              />

              <MobileLink to="/faq" label="FAQ" onClick={closeMenus} />

              <a
                href="tel:+18257931477"
                onClick={closeMenus}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-semibold text-gray-900 transition hover:border-gray-900 hover:bg-gray-50"
              >
                <Phone size={17} />
                Call Us
              </a>

              <Link
                to="/get-quote"
                onClick={closeMenus}
                className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                Get a Quote
                <ArrowRight size={17} />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium transition ${
          isActive ? "text-gray-950" : "text-gray-600 hover:text-gray-950"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function DesktopDropdown({ label, menu, open, setOpen, items }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(menu)}
      onMouseLeave={() => setOpen(null)}
    >
      <button
        type="button"
        onClick={() => setOpen(open ? null : menu)}
        className={`flex items-center gap-1 text-sm font-medium transition ${
          open ? "text-gray-950" : "text-gray-600 hover:text-gray-950"
        }`}
        aria-expanded={open}
      >
        {label}

        <ChevronDown
          size={15}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(null)}
                className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-gray-950"
              >
                <span>{item.name}</span>

                <ArrowRight
                  size={15}
                  className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileLink({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
          isActive
            ? "bg-gray-950 text-white"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-950"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function MobileDropdown({ label, menu, open, onToggle, items, onNavigate }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => onToggle(menu)}
        className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
          open
            ? "bg-gray-100 text-gray-950"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-950"
        }`}
        aria-expanded={open}
      >
        {label}

        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="ml-3 mt-1 space-y-1 border-l border-gray-200 pl-3">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onNavigate}
              className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
            >
              {item.name}

              <ArrowRight size={14} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
