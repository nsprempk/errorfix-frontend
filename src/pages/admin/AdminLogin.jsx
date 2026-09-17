import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = form.email.trim();
    const password = form.password;

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      if (!response.data?.success) {
        setError(
          response.data?.message || "Unable to login. Please try again.",
        );
        return;
      }

      const { token, admin } = response.data;

      if (!token) {
        setError("Login succeeded but no authentication token was returned.");
        return;
      }

      localStorage.setItem("adminToken", token);

      if (admin) {
        localStorage.setItem("adminUser", JSON.stringify(admin));
      } else {
        localStorage.removeItem("adminUser");
      }

      navigate("/admin/dashboard", {
        replace: true,
      });
    } catch (error) {
      console.error("Admin login error:", error);

      setError(
        error.response?.data?.message ||
          "Unable to login. Please check your credentials and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-12 text-white">
      <div className="flex min-h-[90vh] items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-gray-950">
              <LockKeyhole size={28} />
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight">
              Admin Login
            </h1>

            <p className="mt-3 text-gray-400">
              Errorfix Solution administration
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-gray-800 bg-gray-900 p-7 sm:p-9"
          >
            {error && (
              <div className="mb-6 rounded-xl border border-red-900 bg-red-950/40 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="admin-email"
                className="mb-2 block text-sm font-semibold"
              >
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  id="admin-email"
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="admin@example.com"
                  autoComplete="email"
                  className="w-full rounded-xl border border-gray-700 bg-gray-950 py-3.5 pl-11 pr-4 text-white outline-none transition focus:border-white"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="admin-password"
                className="mb-2 block text-sm font-semibold"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  id="admin-password"
                  type="password"
                  value={form.password}
                  onChange={(event) =>
                    updateField("password", event.target.value)
                  }
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-gray-700 bg-gray-950 py-3.5 pl-11 pr-4 text-white outline-none transition focus:border-white"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 font-semibold text-gray-950 transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}

              {!loading && <ArrowRight size={18} />}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
