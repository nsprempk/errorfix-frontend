import { Routes, Route } from "react-router-dom";

/* Public Layout */
import PublicLayout from "../components/layout/PublicLayout.jsx";

/* Public Pages */
import Home from "../pages/public/Home.jsx";
import About from "../pages/public/About.jsx";
import Contact from "../pages/public/Contact.jsx";
import Pricing from "../pages/public/Pricing.jsx";
import Portfolio from "../pages/public/Portfolio.jsx";
import Testimonials from "../pages/public/Testimonials.jsx";
import FAQ from "../pages/public/FAQ.jsx";
import GetQuote from "../pages/public/GetQuote.jsx";
import Privacy from "../pages/public/Privacy.jsx";
import Terms from "../pages/public/Terms.jsx";
import RefundPolicy from "../pages/public/RefundPolicy.jsx";

/* Services */
import WebsiteDevelopment from "../pages/services/WebsiteDevelopment.jsx";
import MobileAppDevelopment from "../pages/services/MobileAppDevelopment.jsx";
import DesktopAppDevelopment from "../pages/services/DesktopAppDevelopment.jsx";
import AIDevelopment from "../pages/services/AIDevelopment.jsx";
import UIUXBranding from "../pages/services/UIUXBranding.jsx";
import DigitalMarketing from "../pages/services/DigitalMarketing.jsx";

/* Solutions */
import WebsiteOnly from "../pages/solutions/WebsiteOnly.jsx";
import WebsiteMobile from "../pages/solutions/WebsiteMobile.jsx";
import MobileDesktop from "../pages/solutions/MobileDesktop.jsx";
import CompleteSolution from "../pages/solutions/CompleteSolution.jsx";

/* Industries */
import Ecommerce from "../pages/industries/Ecommerce.jsx";
import RealEstate from "../pages/industries/RealEstate.jsx";
import Healthcare from "../pages/industries/Healthcare.jsx";
import Education from "../pages/industries/Education.jsx";

/* Admin */
import AdminLogin from "../pages/admin/AdminLogin.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import AdminAnalytics from "../pages/admin/AdminAnalytics.jsx";
import AdminProtectedRoute from "../pages/admin/AdminProtectedRoute.jsx";

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
          Error 404
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          Page not found
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-gray-500">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-gray-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* =====================================================
          PUBLIC WEBSITE
         ===================================================== */}

      <Route element={<PublicLayout />}>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<RefundPolicy />} />

        {/* Services */}
        <Route
          path="/services/website-development"
          element={<WebsiteDevelopment />}
        />

        <Route
          path="/services/mobile-app-development"
          element={<MobileAppDevelopment />}
        />

        <Route
          path="/services/desktop-app-development"
          element={<DesktopAppDevelopment />}
        />

        <Route path="/services/ai-development" element={<AIDevelopment />} />

        <Route path="/services/ui-ux-branding" element={<UIUXBranding />} />

        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />

        {/* Solutions */}
        <Route path="/solutions/website-only" element={<WebsiteOnly />} />

        <Route path="/solutions/website-mobile" element={<WebsiteMobile />} />

        <Route path="/solutions/mobile-desktop" element={<MobileDesktop />} />

        <Route
          path="/solutions/complete-solution"
          element={<CompleteSolution />}
        />

        {/* Industries */}
        <Route path="/industries/ecommerce" element={<Ecommerce />} />

        <Route path="/industries/real-estate" element={<RealEstate />} />

        <Route path="/industries/healthcare" element={<Healthcare />} />

        <Route path="/industries/education" element={<Education />} />

        {/* Public 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* =====================================================
          ADMIN LOGIN
         ===================================================== */}

      <Route path="/admin/login" element={<AdminLogin />} />

      {/* =====================================================
          PROTECTED ADMIN
         ===================================================== */}

      <Route element={<AdminProtectedRoute />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/admin/analytics" element={<AdminAnalytics />} />
      </Route>
    </Routes>
  );
}
