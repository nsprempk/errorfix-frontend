import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  RefreshCw,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout.jsx";

const API_URL = import.meta.env.VITE_API_URL;

const solutionLabels = {
  website: "Website",
  mobile: "Mobile App",
  desktop: "Desktop App",
  "website-mobile": "Website + Mobile",
  "mobile-desktop": "Mobile + Desktop",
  complete: "Complete Solution",
};

const statusOptions = [
  "New",
  "Contacted",
  "In Progress",
  "Completed",
  "Rejected",
];

export default function AdminAnalytics() {
  const navigate = useNavigate();

  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("adminToken");

  const api = useMemo(() => {
    return axios.create({
      baseURL: API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, [token]);

  const logout = useCallback(() => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin/login", {
      replace: true,
    });
  }, [navigate]);

  const fetchQuotes = useCallback(async () => {
    if (!token) {
      logout();
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await api.get("/quotes");

      if (response.data.success) {
        setQuotes(response.data.quotes || []);
      } else {
        setError("Unable to load analytics data.");
      }
    } catch (error) {
      console.error("Analytics error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      setError(
        error.response?.data?.message || "Unable to load analytics data.",
      );
    } finally {
      setLoading(false);
    }
  }, [api, logout, token]);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  const stats = useMemo(() => {
    return {
      total: quotes.length,

      new: quotes.filter((q) => q.status === "New").length,

      contacted: quotes.filter((q) => q.status === "Contacted").length,

      progress: quotes.filter((q) => q.status === "In Progress").length,

      completed: quotes.filter((q) => q.status === "Completed").length,
    };
  }, [quotes]);

  const solutionStats = useMemo(() => {
    const counts = {};

    quotes.forEach((quote) => {
      const solution = quote.solution || "other";

      counts[solution] = (counts[solution] || 0) + 1;
    });

    return Object.entries(counts)
      .map(([key, count]) => ({
        key,
        label: solutionLabels[key] || key,
        count,
      }))
      .sort((a, b) => b.count - a.count);
  }, [quotes]);

  const countryStats = useMemo(() => {
    const counts = {};

    quotes.forEach((quote) => {
      const country = quote.country?.trim() || "Unknown";

      counts[country] = (counts[country] || 0) + 1;
    });

    return Object.entries(counts)
      .map(([country, count]) => ({
        country,
        count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }, [quotes]);

  const industryStats = useMemo(() => {
    const counts = {};

    quotes.forEach((quote) => {
      const industry = quote.industry?.trim() || "Other";

      counts[industry] = (counts[industry] || 0) + 1;
    });

    return Object.entries(counts)
      .map(([industry, count]) => ({
        industry,
        count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }, [quotes]);

  const monthlyStats = useMemo(() => {
    const months = {};

    quotes.forEach((quote) => {
      if (!quote.createdAt) return;

      const date = new Date(quote.createdAt);

      if (Number.isNaN(date.getTime())) {
        return;
      }

      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        "0",
      )}`;

      months[key] = (months[key] || 0) + 1;
    });

    return Object.entries(months)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-12)
      .map(([month, count]) => ({
        month: formatMonth(month),
        count,
      }));
  }, [quotes]);

  const maxMonthly = Math.max(...monthlyStats.map((item) => item.count), 1);

  const maxSolution = Math.max(...solutionStats.map((item) => item.count), 1);

  const maxCountry = Math.max(...countryStats.map((item) => item.count), 1);

  const maxIndustry = Math.max(...industryStats.map((item) => item.count), 1);

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Business Intelligence
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              Enquiry Analytics
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Understand where enquiries are coming from and which services
              clients are requesting.
            </p>
          </div>

          <button
            type="button"
            onClick={fetchQuotes}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw size={17} className={loading ? "animate-spin" : ""} />
            Refresh Data
          </button>
        </div>

        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard
            title="Total Enquiries"
            value={stats.total}
            icon={BriefcaseBusiness}
          />

          <StatCard title="New" value={stats.new} icon={Mail} />

          <StatCard
            title="Contacted"
            value={stats.contacted}
            icon={UserRound}
          />

          <StatCard title="In Progress" value={stats.progress} icon={Clock3} />

          <StatCard
            title="Completed"
            value={stats.completed}
            icon={CheckCircle2}
          />
        </div>

        {loading ? (
          <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-16 text-center">
            <RefreshCw
              size={28}
              className="mx-auto animate-spin text-gray-400"
            />

            <p className="mt-4 text-sm font-medium text-gray-500">
              Loading analytics...
            </p>
          </div>
        ) : (
          <>
            {/* Monthly chart */}
            <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                    Growth
                  </p>

                  <h2 className="mt-2 text-xl font-bold">Monthly Enquiries</h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Enquiry volume over the latest available months.
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100">
                  <BarChart3 size={20} />
                </div>
              </div>

              {monthlyStats.length === 0 ? (
                <EmptyState text="No enquiry data available yet." />
              ) : (
                <div className="mt-10 flex h-72 items-end gap-3 overflow-x-auto border-b border-gray-200 pb-0 sm:gap-5">
                  {monthlyStats.map((item) => {
                    const height = Math.max((item.count / maxMonthly) * 100, 4);

                    return (
                      <div
                        key={item.month}
                        className="flex min-w-[60px] flex-1 flex-col items-center justify-end"
                      >
                        <span className="mb-2 text-xs font-bold text-gray-700">
                          {item.count}
                        </span>

                        <div
                          className="w-full max-w-14 rounded-t-xl bg-gray-950 transition-all"
                          style={{
                            height: `${height}%`,
                          }}
                        />

                        <span className="mt-3 whitespace-nowrap text-[11px] font-medium text-gray-400">
                          {item.month}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Services + countries */}
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <AnalyticsCard
                eyebrow="Services"
                title="Enquiries by Service"
                description="Solutions requested by potential clients."
                icon={BriefcaseBusiness}
              >
                {solutionStats.length === 0 ? (
                  <EmptyState text="No service data available." />
                ) : (
                  <div className="mt-6 space-y-5">
                    {solutionStats.map((item) => (
                      <ProgressRow
                        key={item.key}
                        label={item.label}
                        value={item.count}
                        max={maxSolution}
                      />
                    ))}
                  </div>
                )}
              </AnalyticsCard>

              <AnalyticsCard
                eyebrow="Geography"
                title="Enquiries by Country"
                description="Countries represented in incoming requests."
                icon={Globe2}
              >
                {countryStats.length === 0 ? (
                  <EmptyState text="No country data available." />
                ) : (
                  <div className="mt-6 space-y-5">
                    {countryStats.map((item) => (
                      <ProgressRow
                        key={item.country}
                        label={item.country}
                        value={item.count}
                        max={maxCountry}
                      />
                    ))}
                  </div>
                )}
              </AnalyticsCard>
            </div>

            {/* Industries + status */}
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <AnalyticsCard
                eyebrow="Industries"
                title="Enquiries by Industry"
                description="Industries represented in your enquiries."
                icon={BriefcaseBusiness}
              >
                {industryStats.length === 0 ? (
                  <EmptyState text="No industry data available." />
                ) : (
                  <div className="mt-6 space-y-5">
                    {industryStats.map((item) => (
                      <ProgressRow
                        key={item.industry}
                        label={item.industry}
                        value={item.count}
                        max={maxIndustry}
                      />
                    ))}
                  </div>
                )}
              </AnalyticsCard>

              <AnalyticsCard
                eyebrow="Pipeline"
                title="Enquiry Status"
                description="Current state of incoming project requests."
                icon={Clock3}
              >
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {statusOptions.map((status) => {
                    const count = quotes.filter(
                      (quote) => quote.status === status,
                    ).length;

                    return (
                      <div
                        key={status}
                        className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                      >
                        <p className="text-sm font-medium text-gray-500">
                          {status}
                        </p>

                        <p className="mt-2 text-3xl font-bold">{count}</p>
                      </div>
                    );
                  })}
                </div>
              </AnalyticsCard>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}

function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{title}</p>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
          <Icon size={19} />
        </div>
      </div>

      <p className="mt-4 text-3xl font-bold">{value}</p>
    </div>
  );
}

function AnalyticsCard({ eyebrow, title, description, icon: Icon, children }) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
            {eyebrow}
          </p>

          <h2 className="mt-2 text-xl font-bold">{title}</h2>

          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gray-100">
          <Icon size={20} />
        </div>
      </div>

      {children}
    </section>
  );
}

function ProgressRow({ label, value, max }) {
  const percentage = Math.max((value / max) * 100, 4);

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="min-w-0 truncate text-sm font-semibold text-gray-800">
          {label}
        </p>

        <span className="shrink-0 text-sm font-bold text-gray-950">
          {value}
        </span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gray-950 transition-all"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}

function EmptyState({ text }) {
  return (
    <div className="mt-8 rounded-2xl border border-dashed border-gray-200 p-8 text-center">
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
}

function formatMonth(value) {
  const [year, month] = value.split("-");

  const date = new Date(Number(year), Number(month) - 1, 1);

  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "2-digit",
  });
}
