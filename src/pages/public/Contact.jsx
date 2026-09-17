import SEO from "../../components/common/SEO";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import axios from "axios";

import Container from "../../components/common/Container.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import Button from "../../components/common/Button.jsx";

const initialForm = {
  solution: "Website Development",
  companyName: "",
  industry: "",
  projectDescription: "",
  existingWebsite: "",
  features: "",
  platforms: "",
  name: "",
  email: "",
  phone: "",
  country: "",
  contactMethod: "Email",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const apiUrl =
        import.meta.env.VITE_API_URL || "http://localhost:5000/api";

      const payload = {
        ...form,

        features: form.features
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        platforms: form.platforms
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      await axios.post(`${apiUrl}/quotes`, payload);

      setSuccess(
        "Thank you. Your enquiry has been submitted successfully. We'll get back to you soon.",
      );

      setForm(initialForm);
    } catch (submitError) {
      console.error("Contact form error:", submitError);

      setError(
        submitError?.response?.data?.message ||
          "Unable to submit your enquiry. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Errorfix Solution | Start Your Project"
        description="Contact Errorfix Solution to discuss website development, mobile apps, desktop software, AI development, UI/UX and digital marketing projects."
        keywords="contact software development company, contact Errorfix Solution, website development enquiry, app development enquiry"
        canonical="https://YOUR-DOMAIN.com/contact"
      />
      <main>
        {/* Hero */}
        <section className="bg-gray-50 py-20 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="Contact Us"
              title="Let's talk about your next project."
              description="Tell us what you're building, what you need, and where you want to go. We'll help you understand the next steps."
            />
          </Container>
        </section>

        {/* Contact area */}
        <section className="bg-white py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              {/* Contact information */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Get in Touch
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                  Tell us about your idea.
                </h2>

                <p className="mt-5 max-w-lg leading-7 text-gray-600">
                  Whether you are starting something new or improving an
                  existing product, send us your requirements and we'll take it
                  from there.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="flex gap-4 rounded-2xl border border-gray-200 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-950 text-white">
                      <Mail size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-950">
                        Email
                      </p>

                      <p className="mt-1 text-sm text-gray-600">
                        Submit your project enquiry through the form.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-gray-200 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-950 text-white">
                      <Phone size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-950">
                        Phone
                      </p>

                      <p className="mt-1 text-sm text-gray-600">
                        Available for project discussions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-gray-200 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-950 text-white">
                      <MapPin size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-950">
                        Worldwide
                      </p>

                      <p className="mt-1 text-sm text-gray-600">
                        Working with clients across different markets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-gray-50 p-6">
                  <p className="text-sm font-semibold text-gray-950">
                    What happens next?
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "We review your enquiry.",
                      "We contact you to understand the requirements.",
                      "We discuss scope, technology, and next steps.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-gray-900"
                        />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/30 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  Project Enquiry
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Fill in the details below and we'll get back to you.
                </p>

                {success && (
                  <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                    {success}
                  </div>
                )}

                {error && (
                  <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Project */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-950">
                      Project Details
                    </h3>

                    <div className="mt-4 grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Solution"
                        name="solution"
                        value={form.solution}
                        onChange={handleChange}
                        required
                        options={[
                          "Website Development",
                          "Mobile App Development",
                          "Desktop App Development",
                          "AI Development",
                          "UI/UX & Branding",
                          "Digital Marketing",
                          "Complete Solution",
                          "Other",
                        ]}
                      />

                      <Field
                        label="Company Name"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        required
                      />

                      <Field
                        label="Industry"
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        required
                      />

                      <Field
                        label="Existing Website"
                        name="existingWebsite"
                        value={form.existingWebsite}
                        onChange={handleChange}
                        placeholder="https://example.com"
                      />
                    </div>

                    <div className="mt-5">
                      <Field
                        label="Project Description"
                        name="projectDescription"
                        value={form.projectDescription}
                        onChange={handleChange}
                        required
                        textarea
                        placeholder="Tell us about your project, goals and requirements..."
                      />
                    </div>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Required Features"
                        name="features"
                        value={form.features}
                        onChange={handleChange}
                        placeholder="Login, payment, dashboard..."
                      />

                      <Field
                        label="Platforms"
                        name="platforms"
                        value={form.platforms}
                        onChange={handleChange}
                        placeholder="Web, Android, iOS..."
                      />
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-sm font-semibold text-gray-950">
                      Contact Details
                    </h3>

                    <div className="mt-4 grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Your Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />

                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />

                      <Field
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />

                      <Field
                        label="Country"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        required
                      />

                      <Field
                        label="Preferred Contact Method"
                        name="contactMethod"
                        value={form.contactMethod}
                        onChange={handleChange}
                        options={["Email", "Phone", "WhatsApp"]}
                      />
                    </div>
                  </div>

                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Submitting..." : "Submit Enquiry"}

                    {!loading && <Send className="ml-2" size={16} />}
                  </Button>

                  <p className="text-center text-xs leading-5 text-gray-500">
                    By submitting this form, you agree that we may contact you
                    regarding your enquiry.
                  </p>
                </form>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder = "",
  textarea = false,
  options,
}) {
  const baseClass =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900";

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-800"
      >
        {label}
        {required && <span className="ml-1 text-gray-500">*</span>}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={baseClass}
        />
      ) : options ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClass}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </div>
  );
}
