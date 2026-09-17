import SEO from "../../components/common/SEO";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceHero from "../../components/common/ServiceHero";
import FeatureGrid from "../../components/common/FeatureGrid";
import TechStack from "../../components/common/TechStack";
import ServiceFAQ from "../../components/common/ServiceFAQ";
import ServiceCTA from "../../components/common/ServiceCTA";
const applicationTypes = [
  {
    title: "Business Software",
    description:
      "Custom desktop software designed around your company's daily operations and workflows.",
  },
  {
    title: "Billing & POS",
    description:
      "Point-of-sale and billing applications for shops, businesses and service providers.",
  },
  {
    title: "Inventory Management",
    description:
      "Manage products, stock levels, purchases, sales and inventory operations from one application.",
  },
  {
    title: "CRM Applications",
    description:
      "Desktop tools for managing customers, leads, sales activities and business relationships.",
  },
  {
    title: "ERP-style Systems",
    description:
      "Connected business applications for managing multiple operational processes in one platform.",
  },
  {
    title: "Internal Tools",
    description:
      "Purpose-built software for employees, teams and internal business processes.",
  },
];
const features = [
  {
    title: "Windows Applications",
    description:
      "Desktop applications designed for Windows-based business environments.",
  },
  {
    title: "macOS Applications",
    description:
      "Desktop software designed for Apple computers and macOS workflows.",
  },
  {
    title: "Offline Functionality",
    description:
      "Applications can be designed to continue working when an internet connection is unavailable.",
  },
  {
    title: "Local Database",
    description:
      "Store and manage application data locally when your workflow requires it.",
  },
  {
    title: "Cloud Database",
    description:
      "Connect desktop applications to centralized databases and cloud services.",
  },
  {
    title: "API Integration",
    description:
      "Connect desktop software with your website, mobile application or external services.",
  },
  {
    title: "User Management",
    description:
      "Support multiple users, accounts, permissions and role-based access.",
  },
  {
    title: "Reports & Analytics",
    description:
      "Generate useful reports and business information from application data.",
  },
  {
    title: "Automatic Updates",
    description:
      "Applications can be structured to receive new versions and updates after deployment.",
  },
];
const platforms = ["Windows", "macOS", "Linux"];
const technologies = [
  "Electron",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "SQLite",
];
const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business process, users, devices and software requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the application architecture, features, workflows and technical scope.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We design the interface around the daily tasks your users need to perform.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build the desktop application, database, APIs and integrations required by the project.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "We test workflows, data handling, installation, performance and important application functionality.",
  },
  {
    number: "06",
    title: "Deploy",
    description:
      "We prepare production builds and help you deploy the software to the required devices.",
  },
];
const faqs = [
  {
    question: "What type of desktop applications do you build?",
    answer:
      "We can build business software, billing and POS systems, inventory applications, CRM tools, internal applications, reporting software and other custom desktop solutions.",
  },
  {
    question: "Can you build software for Windows?",
    answer:
      "Yes. Windows desktop applications can be developed for businesses and organizations based on their requirements.",
  },
  {
    question: "Can you build macOS applications?",
    answer:
      "Yes. Cross-platform technologies can be used when the project requires applications for macOS as well as other desktop platforms.",
  },
  {
    question: "Can the desktop application work offline?",
    answer:
      "Yes. Depending on the application architecture, functionality and data requirements, offline workflows and local data storage can be implemented.",
  },
  {
    question: "Can the desktop app connect to a website or mobile app?",
    answer:
      "Yes. A desktop application can communicate with a shared backend and APIs, allowing it to work alongside websites and mobile applications.",
  },
  {
    question: "Can multiple employees use the software?",
    answer:
      "Yes. Multi-user systems can include authentication, user roles, permissions and centralized data management.",
  },
  {
    question: "How much does desktop software development cost?",
    answer:
      "We don't publish fixed prices because desktop software can range from a simple internal tool to a complex business platform. We prepare a custom quotation based on functionality, integrations, platforms and technical requirements.",
  },
  {
    question: "Can you provide updates and maintenance?",
    answer:
      "Yes. We can provide ongoing maintenance, bug fixes, application updates, improvements and technical support after deployment.",
  },
];
export default function DesktopAppDevelopment() {
  return (
    <>
      <SEO
        title="Desktop App Development Services | Errorfix Solution"
        description="Custom desktop software development for Windows and macOS, including business applications, dashboards, automation tools and internal software."
        keywords="desktop app development, Windows software development, macOS app development, custom desktop software, business software development"
        canonical="errorfixsolutions.online/services/desktop-app-development"
      />
      {/* Hero */}{" "}
      <ServiceHero
        eyebrow="Desktop App Development"
        title="Desktop software built around your workflow."
        description="We design and develop custom desktop applications for businesses, teams and organizations that need powerful software beyond a traditional website."
        highlights={["Windows", "macOS", "Offline capable", "Custom software"]}
      />{" "}
      {/* Application Types */}{" "}
      <FeatureGrid
        eyebrow="Application Types"
        title="What kind of desktop software can we build?"
        description="From billing systems to internal business tools, we create desktop applications around the way your organization works."
        features={applicationTypes}
      />{" "}
      {/* Capabilities */}{" "}
      <FeatureGrid
        eyebrow="Capabilities"
        title="Software designed for your operations."
        description="Build the functionality your business needs instead of adapting your workflow to generic software."
        features={features}
      />{" "}
      {/* Platforms */}{" "}
      <section className="bg-gray-50 py-24 sm:py-32">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="max-w-3xl">
            {" "}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              {" "}
              Platforms{" "}
            </p>{" "}
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              {" "}
              Build for the devices your team uses.{" "}
            </h2>{" "}
            <p className="mt-5 text-lg leading-8 text-gray-600">
              {" "}
              We can plan your application around the operating systems and
              hardware environment required by your organization.{" "}
            </p>{" "}
          </div>{" "}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {" "}
            {platforms.map((platform) => (
              <div
                key={platform}
                className="rounded-3xl border border-gray-200 bg-white p-8"
              >
                {" "}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white">
                  {" "}
                  <CheckCircle2 size={20} />{" "}
                </div>{" "}
                <h3 className="mt-7 text-2xl font-bold text-gray-950">
                  {" "}
                  {platform}{" "}
                </h3>{" "}
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {" "}
                  Application builds can be planned for this platform when
                  required by your project.{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Technology */}{" "}
      <TechStack
        title="Modern desktop technology."
        description="We combine modern frontend and backend technologies to create maintainable desktop applications and connected business systems."
        technologies={technologies}
      />{" "}
      {/* Custom Quote */}{" "}
      <section className="bg-white py-24 sm:py-32">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="overflow-hidden rounded-[2rem] bg-gray-950 text-white">
            {" "}
            <div className="grid lg:grid-cols-2">
              {" "}
              <div className="p-8 sm:p-12 lg:p-16">
                {" "}
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {" "}
                  Custom Pricing{" "}
                </p>{" "}
                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  {" "}
                  Software built around your requirements.{" "}
                </h2>{" "}
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  {" "}
                  We don't use a fixed public price for custom desktop software.
                  First we understand what your business needs, then we prepare
                  a project-specific quotation.{" "}
                </p>{" "}
                <Link
                  to="/get-quote"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
                >
                  {" "}
                  Request a Custom Quote{" "}
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />{" "}
                </Link>{" "}
              </div>{" "}
              <div className="border-t border-gray-800 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
                {" "}
                <h3 className="text-xl font-semibold">
                  {" "}
                  Your quotation may consider:{" "}
                </h3>{" "}
                <div className="mt-7 space-y-4">
                  {" "}
                  {[
                    "Number of application screens",
                    "Operating systems",
                    "Offline requirements",
                    "Local or cloud database",
                    "Backend and API requirements",
                    "User roles and permissions",
                    "Reports and analytics",
                    "Third-party integrations",
                    "Hardware integrations",
                    "Update and deployment requirements",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      {" "}
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-gray-400"
                      />{" "}
                      <span className="text-sm leading-6 text-gray-400">
                        {" "}
                        {item}{" "}
                      </span>{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Process */}{" "}
      <section className="bg-gray-50 py-24 sm:py-32">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="max-w-3xl">
            {" "}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              {" "}
              Development Process{" "}
            </p>{" "}
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              {" "}
              From workflow to working software.{" "}
            </h2>{" "}
            <p className="mt-5 text-lg leading-8 text-gray-600">
              {" "}
              We turn your business process into a structured desktop
              application through a clear development workflow.{" "}
            </p>{" "}
          </div>{" "}
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-gray-200 bg-white p-7"
              >
                {" "}
                <span className="text-sm font-bold text-gray-400">
                  {" "}
                  {step.number}{" "}
                </span>{" "}
                <h3 className="mt-8 text-xl font-bold text-gray-950">
                  {" "}
                  {step.title}{" "}
                </h3>{" "}
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {" "}
                  {step.description}{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Support */}{" "}
      <section className="bg-white py-24 sm:py-32">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {" "}
            <div>
              {" "}
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                {" "}
                Deployment & Support{" "}
              </p>{" "}
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                {" "}
                Support beyond development.{" "}
              </h2>{" "}
              <p className="mt-5 text-lg leading-8 text-gray-600">
                {" "}
                Your software may need updates, improvements and technical
                support as your business grows. We can continue working with you
                after the initial deployment.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid gap-4 sm:grid-cols-2">
              {" "}
              {[
                "Production builds",
                "Installation support",
                "Software updates",
                "Bug fixes",
                "Feature improvements",
                "Technical support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 p-5"
                >
                  {" "}
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-gray-700"
                  />{" "}
                  <span className="text-sm font-medium text-gray-800">
                    {" "}
                    {item}{" "}
                  </span>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* FAQ */} <ServiceFAQ faqs={faqs} /> {/* CTA */}{" "}
      <ServiceCTA
        title="Need custom desktop software?"
        description="Tell us about your workflow, users and requirements. We'll help you plan the right desktop solution for your business."
      />{" "}
    </>
  );
}
