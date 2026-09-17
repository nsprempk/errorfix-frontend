import SEO from "../../components/common/SEO";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceHero from "../../components/common/ServiceHero";
import FeatureGrid from "../../components/common/FeatureGrid";
import TechStack from "../../components/common/TechStack";
import ServiceFAQ from "../../components/common/ServiceFAQ";
import ServiceCTA from "../../components/common/ServiceCTA";
const appTypes = [
  {
    title: "Business Apps",
    description:
      "Custom mobile applications that help businesses connect with customers and manage operations.",
  },
  {
    title: "E-commerce Apps",
    description:
      "Mobile shopping experiences with products, cart, checkout, payments and order management.",
  },
  {
    title: "Social Apps",
    description:
      "Community and social applications with profiles, feeds, messaging and user interactions.",
  },
  {
    title: "Booking Apps",
    description:
      "Applications for appointments, reservations, services, schedules and online bookings.",
  },
  {
    title: "Education Apps",
    description:
      "Learning applications with courses, lessons, quizzes, progress tracking and user accounts.",
  },
  {
    title: "On-Demand Apps",
    description:
      "Service-based applications connecting customers with businesses, professionals or providers.",
  },
];
const features = [
  {
    title: "Android & iOS",
    description:
      "Build applications for Android and iOS from a unified development approach.",
  },
  {
    title: "Custom UI/UX",
    description:
      "Mobile interfaces designed around your brand, users and application workflow.",
  },
  {
    title: "User Authentication",
    description:
      "Registration, login, password recovery, profiles and role-based access.",
  },
  {
    title: "Push Notifications",
    description:
      "Keep users informed with notifications for updates, messages, orders and important events.",
  },
  {
    title: "Payment Integration",
    description:
      "Integrate supported payment systems and transaction workflows into your application.",
  },
  {
    title: "API Integration",
    description:
      "Connect mobile applications with your backend, databases and third-party services.",
  },
  {
    title: "Location Features",
    description:
      "Maps, location-based functionality and other location-aware features when required.",
  },
  {
    title: "Camera & Media",
    description:
      "Support image uploads, camera functionality, audio, video and other media workflows.",
  },
  {
    title: "Admin Dashboard",
    description:
      "Manage users, content, products, orders and application data from an administration panel.",
  },
];
const technologies = [
  "React Native",
  "Expo",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "Push Notifications",
];
const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your application idea, target users, business goals and required features.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We define the application structure, user flows, technology and development scope.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "We design the mobile experience, screens and interactions before development.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build the mobile application, backend services, database and required integrations.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We test application functionality, navigation, responsiveness and important user flows.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We prepare the application for release and assist with publishing and post-launch support.",
  },
];
const faqs = [
  {
    question: "Do you build both Android and iOS apps?",
    answer:
      "Yes. We can develop applications for both Android and iOS using a cross-platform development approach where appropriate.",
  },
  {
    question: "What technology do you use for mobile apps?",
    answer:
      "We can use React Native and Expo for cross-platform applications, along with Node.js, Express.js and MongoDB for backend systems when required.",
  },
  {
    question: "Can the app have a backend and database?",
    answer:
      "Yes. Applications can be connected to custom APIs, databases, authentication systems and administration dashboards.",
  },
  {
    question: "Can you integrate payments?",
    answer:
      "Yes. Payment integrations can be included based on your requirements, target market and supported payment providers.",
  },
  {
    question: "Can you publish the app to Google Play and the App Store?",
    answer:
      "Yes. We can prepare the application for store submission and assist with the publishing process.",
  },
  {
    question: "How much does mobile app development cost?",
    answer:
      "We don't publish fixed mobile app prices because application complexity varies significantly. We prepare a custom quotation based on features, screens, backend requirements, integrations and overall scope.",
  },
  {
    question: "Can you maintain the app after launch?",
    answer:
      "Yes. Ongoing maintenance, updates, bug fixes, feature improvements and technical support can be arranged after launch.",
  },
];
export default function MobileAppDevelopment() {
  return (
    <>
      <SEO
        title="Mobile App Development Services | Errorfix Solution"
        description="Custom Android and iOS mobile application development for businesses and startups using modern technologies and scalable application architecture."
        keywords="mobile app development, Android app development, iOS app development, React Native development, custom mobile applications"
        canonical="errorfixsolutions.online/services/mobile-app-development"
      />
      {/* Hero */}{" "}
      <ServiceHero
        eyebrow="Mobile App Development"
        title="Mobile apps built for real-world users."
        description="We design and develop modern mobile applications for Android and iOS, from simple business apps to complete platforms with backend systems, payments and administration."
        highlights={["Android", "iOS", "React Native", "Custom development"]}
      />{" "}
      {/* App Types */}{" "}
      <FeatureGrid
        eyebrow="Application Types"
        title="What kind of mobile app can we build?"
        description="From customer-facing applications to complete business platforms, we can build mobile experiences around your specific requirements."
        features={appTypes}
      />{" "}
      {/* Features */}{" "}
      <FeatureGrid
        eyebrow="Capabilities"
        title="Everything your mobile product needs."
        description="Build a complete mobile ecosystem with the functionality your users and business require."
        features={features}
      />{" "}
      {/* Technology */}{" "}
      <TechStack
        title="Modern mobile technology."
        description="We use practical technologies that allow us to build maintainable applications and connected backend systems."
        technologies={technologies}
      />{" "}
      {/* Custom Pricing */}{" "}
      <section className="bg-white py-24 sm:py-32">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="overflow-hidden rounded-[2rem] bg-gray-950 text-white">
            {" "}
            <div className="grid lg:grid-cols-2">
              {" "}
              {/* Main */}{" "}
              <div className="p-8 sm:p-12 lg:p-16">
                {" "}
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {" "}
                  Custom Pricing{" "}
                </p>{" "}
                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  {" "}
                  Your app deserves a custom plan.{" "}
                </h2>{" "}
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  {" "}
                  We don't force every application into the same package. Your
                  quotation is based on the actual functionality, design and
                  technical requirements of your product.{" "}
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
              {/* Quote factors */}{" "}
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
                    "Android and iOS requirements",
                    "UI/UX complexity",
                    "Backend and database requirements",
                    "Authentication and user roles",
                    "Payment integrations",
                    "Push notifications",
                    "Maps and location features",
                    "Third-party API integrations",
                    "Admin dashboard",
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
              From concept to app store.{" "}
            </h2>{" "}
            <p className="mt-5 text-lg leading-8 text-gray-600">
              {" "}
              We follow a structured development process designed to keep the
              project clear from the initial idea through launch.{" "}
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
      {/* App Launch */}{" "}
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
                Launch & Support{" "}
              </p>{" "}
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                {" "}
                We don't stop at development.{" "}
              </h2>{" "}
              <p className="mt-5 text-lg leading-8 text-gray-600">
                {" "}
                A successful mobile product needs more than code. We can help
                prepare your application for release and continue supporting it
                after launch.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid gap-4 sm:grid-cols-2">
              {" "}
              {[
                "Production builds",
                "Release preparation",
                "Store submission support",
                "Bug fixes",
                "Application updates",
                "Feature improvements",
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
        title="Have a mobile app idea?"
        description="Tell us about your application, users and requirements. We'll help you plan the right technology and development approach."
      />{" "}
    </>
  );
}
