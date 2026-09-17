import SEO from "../../components/common/SEO";
import axios from "axios";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  Smartphone,
  Monitor,
  Sparkles,
  ShieldCheck,
  Send,
  Loader2,
} from "lucide-react";

const solutionOptions = [
  {
    id: "website",
    title: "Website",
    description: "A professional website for your business.",
    icon: Globe,
  },
  {
    id: "mobile",
    title: "Mobile App",
    description: "Android and iOS application development.",
    icon: Smartphone,
  },
  {
    id: "desktop",
    title: "Desktop App",
    description: "Custom desktop software for your business.",
    icon: Monitor,
  },
  {
    id: "website-mobile",
    title: "Website + Mobile App",
    description: "Connected web and mobile experience.",
    icon: Sparkles,
  },
  {
    id: "mobile-desktop",
    title: "Mobile + Desktop App",
    description: "Mobile application with desktop software.",
    icon: Monitor,
  },
  {
    id: "complete",
    title: "Complete Solution",
    description: "Website, mobile app and desktop application.",
    icon: Sparkles,
  },
];

const industries = [
  "E-commerce",
  "Real Estate",
  "Healthcare",
  "Education",
  "Finance",
  "Restaurant & Food",
  "Travel & Tourism",
  "Entertainment",
  "Professional Services",
  "Startup",
  "Other",
];

const featureOptions = [
  "User Registration & Login",
  "Admin Dashboard",
  "Payment Gateway",
  "Online Booking",
  "E-commerce",
  "API Integration",
  "AI Features",
  "Database",
  "Push Notifications",
  "Chat / Messaging",
  "Maps & Location",
  "Reports & Analytics",
  "Subscription System",
  "Other",
];

const platformOptions = ["Web", "Android", "iOS", "Windows", "macOS"];

const contactMethods = ["Email", "Phone", "WhatsApp"];

const initialForm = {
  solution: "",
  companyName: "",
  industry: "",
  projectDescription: "",
  existingWebsite: "",
  features: [],
  platforms: [],
  name: "",
  email: "",
  phone: "",
  country: "",
  contactMethod: "Email",
};

function getSolutionFromQuery(value) {
  if (!value) return "";

  const aliases = {
    website: "website",
    "website-only": "website",
    mobile: "mobile",
    "mobile-only": "mobile",
    desktop: "desktop",
    "desktop-only": "desktop",
    "website-mobile": "website-mobile",
    "mobile-desktop": "mobile-desktop",
    complete: "complete",
    "complete-solution": "complete",
  };

  return aliases[value.toLowerCase()] || "";
}

export default function GetQuote() {
  const [searchParams] = useSearchParams();

  const initialSolution = useMemo(
    () => getSolutionFromQuery(searchParams.get("solution")),
    [searchParams],
  );

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    ...initialForm,
    solution: initialSolution,
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = 5;

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));

    setSubmitError("");
  };

  const toggleArrayValue = (field, value) => {
    setForm((prev) => {
      const currentValues = prev[field] || [];
      const exists = currentValues.includes(value);

      return {
        ...prev,
        [field]: exists
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));

    setSubmitError("");
  };

  const validateStep = () => {
    const nextErrors = {};

    if (step === 1 && !form.solution) {
      nextErrors.solution = "Please select a project type.";
    }

    if (step === 2) {
      if (!form.companyName.trim()) {
        nextErrors.companyName = "Please enter your company or business name.";
      }

      if (!form.industry) {
        nextErrors.industry = "Please select an industry.";
      }

      if (!form.projectDescription.trim()) {
        nextErrors.projectDescription =
          "Please describe what you want to build.";
      }
    }

    if (step === 3 && form.features.length === 0) {
      nextErrors.features = "Please select at least one feature.";
    }

    if (step === 4 && form.platforms.length === 0) {
      nextErrors.platforms = "Please select at least one platform.";
    }

    if (step === 5) {
      if (!form.name.trim()) {
        nextErrors.name = "Please enter your name.";
      }

      if (!form.email.trim()) {
        nextErrors.email = "Please enter your email.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        nextErrors.email = "Please enter a valid email address.";
      }

      if (!form.phone.trim()) {
        nextErrors.phone = "Please enter your phone number.";
      }

      if (!form.country.trim()) {
        nextErrors.country = "Please enter your country.";
      }
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextStep = () => {
    if (!validateStep()) return;

    if (step < totalSteps) {
      setStep((prev) => prev + 1);
      scrollToTop();
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      scrollToTop();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) return;

    if (!validateStep()) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error("VITE_API_URL is not configured.");
      }

      const baseUrl = apiUrl.endsWith("/") ? apiUrl.slice(0, -1) : apiUrl;

      const response = await axios.post(`${baseUrl}/quotes`, form, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 15000,
      });

      console.log("Quote submitted:", response.data);

      setSubmitted(true);
      scrollToTop();
    } catch (error) {
      console.error("Quote submission failed:", error);

      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Unable to submit your request. Please try again.";

      setSubmitError(message);
      scrollToTop();
    } finally {
      setSubmitting(false);
    }
  };

  const selectedSolution = solutionOptions.find(
    (item) => item.id === form.solution,
  );

  const resetForm = () => {
    setForm({
      ...initialForm,
      solution: initialSolution,
    });

    setErrors({});
    setSubmitError("");
    setStep(1);
    setSubmitted(false);
    setSubmitting(false);

    scrollToTop();
  };

  if (submitted) {
    return (
      <>
        <SEO
          title="Quote Request Received | Errorfix Solution"
          description="Your project quote request has been received by Errorfix Solution. Our team will review your requirements and contact you."
          keywords="Errorfix Solution quote request, software development quote, website development quote, mobile app quote"
          canonical="https://errorfixsolutions.online/get-quote"
        />

        <main className="min-h-screen bg-gray-950 px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
            <div className="w-full rounded-[2rem] border border-gray-800 bg-gray-900 p-8 text-center sm:p-14">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-gray-950">
                <Check size={38} aria-hidden="true" />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Request Received
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Thank you for contacting us.
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
                We've received your project requirements. Our team will review
                the information and contact you to discuss the project.
              </p>

              <div className="mx-auto mt-10 max-w-md rounded-2xl border border-gray-800 bg-gray-950 p-6 text-left">
                <p className="text-sm text-gray-500">Selected solution</p>

                <p className="mt-2 text-lg font-semibold text-white">
                  {selectedSolution?.title || "Custom Project"}
                </p>

                <p className="mt-4 text-sm text-gray-500">Contact method</p>

                <p className="mt-2 font-medium text-gray-300">
                  {form.contactMethod}
                </p>
              </div>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/"
                  className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
                >
                  Back to Home
                </Link>

                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full border border-gray-700 px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Get a Free Quote | Website, Mobile App & Software Development"
        description="Request a customized quote from Errorfix Solution for website development, mobile apps, desktop software, AI solutions, UI/UX design and digital products."
        keywords="get software development quote, website development quote, mobile app quote, desktop software quote, AI development quote, free development quote"
        canonical="https://errorfixsolutions.online/get-quote"
      />

      <main className="min-h-screen bg-white text-gray-950">
        {/* Hero */}
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-gray-950"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to Home
              </Link>

              <p className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Start Your Project
              </p>

              <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Let's build something great.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Tell us about your project, requirements and goals. We'll review
                your information and prepare a customized proposal.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Progress */}
            <div
              className="mb-12"
              aria-label={`Quote form progress: step ${step} of ${totalSteps}`}
            >
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="flex flex-1 items-center last:flex-none"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                        step >= item
                          ? "border-gray-950 bg-gray-950 text-white"
                          : "border-gray-300 bg-white text-gray-400"
                      }`}
                      aria-current={step === item ? "step" : undefined}
                    >
                      {step > item ? (
                        <Check size={17} aria-hidden="true" />
                      ) : (
                        item
                      )}
                    </div>

                    {item !== 5 && (
                      <div
                        className={`mx-3 h-px flex-1 ${
                          step > item ? "bg-gray-950" : "bg-gray-200"
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between text-xs font-medium text-gray-500">
                <span>Project</span>
                <span>Details</span>
                <span>Features</span>
                <span>Platforms</span>
                <span>Contact</span>
              </div>
            </div>

            {submitError && (
              <div
                className="mb-8 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700"
                role="alert"
              >
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* STEP 1 */}
              {step === 1 && (
                <div>
                  <StepHeading
                    eyebrow="Step 1 of 5"
                    title="What do you want to build?"
                    description="Choose the solution that best matches your project."
                  />

                  <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {solutionOptions.map((option) => {
                      const Icon = option.icon;
                      const selected = form.solution === option.id;

                      return (
                        <button
                          type="button"
                          key={option.id}
                          onClick={() => updateField("solution", option.id)}
                          aria-pressed={selected}
                          className={`group rounded-3xl border p-6 text-left transition ${
                            selected
                              ? "border-gray-950 bg-gray-950 text-white shadow-xl"
                              : "border-gray-200 bg-white hover:border-gray-400 hover:shadow-lg"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div
                              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                                selected
                                  ? "bg-white text-gray-950"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              <Icon size={22} aria-hidden="true" />
                            </div>

                            {selected && (
                              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-950">
                                <Check size={15} aria-hidden="true" />
                              </div>
                            )}
                          </div>

                          <h2 className="mt-6 text-xl font-bold">
                            {option.title}
                          </h2>

                          <p
                            className={`mt-2 text-sm leading-6 ${
                              selected ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {option.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {errors.solution && (
                    <ErrorMessage>{errors.solution}</ErrorMessage>
                  )}
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div>
                  <StepHeading
                    eyebrow="Step 2 of 5"
                    title="Tell us about your project."
                    description="A little context helps us understand what you're trying to achieve."
                  />

                  <div className="mt-10 space-y-7">
                    <InputField
                      label="Company / Business Name"
                      value={form.companyName}
                      onChange={(value) => updateField("companyName", value)}
                      placeholder="Enter your company or business name"
                      error={errors.companyName}
                      required
                    />

                    <SelectField
                      label="Industry"
                      value={form.industry}
                      onChange={(value) => updateField("industry", value)}
                      options={industries}
                      placeholder="Select your industry"
                      error={errors.industry}
                      required
                    />

                    <TextAreaField
                      label="What do you want to build?"
                      value={form.projectDescription}
                      onChange={(value) =>
                        updateField("projectDescription", value)
                      }
                      placeholder="Describe your idea, business requirements, target users and important functionality..."
                      error={errors.projectDescription}
                      required
                    />

                    <InputField
                      label="Existing Website / App"
                      value={form.existingWebsite}
                      onChange={(value) =>
                        updateField("existingWebsite", value)
                      }
                      placeholder="https://example.com (optional)"
                      type="url"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div>
                  <StepHeading
                    eyebrow="Step 3 of 5"
                    title="What features do you need?"
                    description="Select the features you already know you need. You can also discuss additional requirements with our team."
                  />

                  <div className="mt-10 grid gap-3 sm:grid-cols-2">
                    {featureOptions.map((feature) => {
                      const selected = form.features.includes(feature);

                      return (
                        <button
                          type="button"
                          key={feature}
                          onClick={() => toggleArrayValue("features", feature)}
                          aria-pressed={selected}
                          className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition ${
                            selected
                              ? "border-gray-950 bg-gray-950 text-white"
                              : "border-gray-200 bg-white hover:border-gray-400"
                          }`}
                        >
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${
                              selected
                                ? "border-white bg-white text-gray-950"
                                : "border-gray-300"
                            }`}
                          >
                            {selected && <Check size={15} aria-hidden="true" />}
                          </span>

                          <span className="text-sm font-semibold">
                            {feature}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {errors.features && (
                    <ErrorMessage>{errors.features}</ErrorMessage>
                  )}

                  <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-sm leading-6 text-gray-600">
                      Don't worry if you're not sure about all the features.
                      Select what you know and explain the rest in your project
                      description.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div>
                  <StepHeading
                    eyebrow="Step 4 of 5"
                    title="Which platforms do you need?"
                    description="Select all platforms that should be part of your project."
                  />

                  <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {platformOptions.map((platform) => {
                      const selected = form.platforms.includes(platform);

                      return (
                        <button
                          type="button"
                          key={platform}
                          onClick={() =>
                            toggleArrayValue("platforms", platform)
                          }
                          aria-pressed={selected}
                          className={`rounded-3xl border p-7 text-left transition ${
                            selected
                              ? "border-gray-950 bg-gray-950 text-white"
                              : "border-gray-200 bg-white hover:border-gray-400 hover:shadow-lg"
                          }`}
                        >
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                              selected
                                ? "bg-white text-gray-950"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {platform === "Web" && (
                              <Globe size={22} aria-hidden="true" />
                            )}

                            {platform === "Android" && (
                              <Smartphone size={22} aria-hidden="true" />
                            )}

                            {platform === "iOS" && (
                              <Smartphone size={22} aria-hidden="true" />
                            )}

                            {platform === "Windows" && (
                              <Monitor size={22} aria-hidden="true" />
                            )}

                            {platform === "macOS" && (
                              <Monitor size={22} aria-hidden="true" />
                            )}
                          </div>

                          <div className="mt-6 flex items-center justify-between">
                            <span className="font-bold">{platform}</span>

                            {selected && <Check size={18} aria-hidden="true" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {errors.platforms && (
                    <ErrorMessage>{errors.platforms}</ErrorMessage>
                  )}

                  <div className="mt-10 rounded-3xl border border-gray-200 p-6">
                    <div className="flex gap-4">
                      <ShieldCheck
                        size={22}
                        className="mt-1 shrink-0 text-gray-700"
                        aria-hidden="true"
                      />

                      <div>
                        <h3 className="font-bold text-gray-900">
                          Need help choosing?
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          That's completely fine. Select the platforms you
                          currently expect to need and we can refine the
                          technical scope together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <div>
                  <StepHeading
                    eyebrow="Step 5 of 5"
                    title="How can we contact you?"
                    description="Provide your contact details so our team can follow up about your project."
                  />

                  <div className="mt-10 space-y-7">
                    <InputField
                      label="Your Name"
                      value={form.name}
                      onChange={(value) => updateField("name", value)}
                      placeholder="Enter your full name"
                      error={errors.name}
                      required
                    />

                    <InputField
                      label="Email Address"
                      type="email"
                      value={form.email}
                      onChange={(value) => updateField("email", value)}
                      placeholder="you@example.com"
                      error={errors.email}
                      required
                    />

                    <InputField
                      label="Phone Number"
                      type="tel"
                      value={form.phone}
                      onChange={(value) => updateField("phone", value)}
                      placeholder="+91 98765 43210"
                      error={errors.phone}
                      required
                    />

                    <InputField
                      label="Country"
                      value={form.country}
                      onChange={(value) => updateField("country", value)}
                      placeholder="India, USA, Canada, Australia, UK..."
                      error={errors.country}
                      required
                    />

                    <div>
                      <label className="mb-3 block text-sm font-semibold text-gray-900">
                        Preferred Contact Method
                      </label>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {contactMethods.map((method) => {
                          const selected = form.contactMethod === method;

                          return (
                            <button
                              type="button"
                              key={method}
                              onClick={() =>
                                updateField("contactMethod", method)
                              }
                              aria-pressed={selected}
                              className={`rounded-2xl border px-5 py-4 text-sm font-semibold transition ${
                                selected
                                  ? "border-gray-950 bg-gray-950 text-white"
                                  : "border-gray-200 bg-white hover:border-gray-400"
                              }`}
                            >
                              {method}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-14 flex flex-col-reverse gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={previousStep}
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-7 py-4 text-sm font-semibold text-gray-800 transition hover:border-gray-950 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ArrowLeft size={17} aria-hidden="true" />
                    Previous
                  </button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={submitting}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Continue
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2
                          size={17}
                          className="animate-spin"
                          aria-hidden="true"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={17} aria-hidden="true" />
                        Request a Quote
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

function StepHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">{description}</p>
    </div>
  );
}

function ErrorMessage({ children }) {
  return (
    <p className="mt-3 text-sm font-medium text-red-600" role="alert">
      {children}
    </p>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  required = false,
}) {
  const fieldId = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <div>
      <label
        htmlFor={fieldId}
        className="mb-3 block text-sm font-semibold text-gray-900"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-600" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        id={fieldId}
        name={fieldId}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        autoComplete={
          fieldId === "your-name"
            ? "name"
            : fieldId === "email-address"
              ? "email"
              : fieldId === "phone-number"
                ? "tel"
                : fieldId === "country"
                  ? "country-name"
                  : undefined
        }
        className={`w-full rounded-2xl border bg-white px-5 py-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-gray-200 focus:border-gray-950"
        }`}
      />

      {error && (
        <p
          id={`${fieldId}-error`}
          className="mt-3 text-sm font-medium text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
  required = false,
}) {
  const fieldId = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <div>
      <label
        htmlFor={fieldId}
        className="mb-3 block text-sm font-semibold text-gray-900"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-600" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <select
        id={fieldId}
        name={fieldId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        aria-invalid={Boolean(error)}
        className={`w-full appearance-none rounded-2xl border bg-white px-5 py-4 text-sm text-gray-900 outline-none transition ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-gray-200 focus:border-gray-950"
        }`}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  error,
  required = false,
}) {
  const fieldId = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <div>
      <label
        htmlFor={fieldId}
        className="mb-3 block text-sm font-semibold text-gray-900"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-600" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <textarea
        id={fieldId}
        name={fieldId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={7}
        required={required}
        aria-invalid={Boolean(error)}
        className={`w-full resize-none rounded-2xl border bg-white px-5 py-4 text-sm leading-7 text-gray-900 outline-none transition placeholder:text-gray-400 ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-gray-200 focus:border-gray-950"
        }`}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}
