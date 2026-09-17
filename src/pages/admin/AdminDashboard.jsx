import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Mail,
  RefreshCw,
  Search,
  Trash2,
  UserRound,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout.jsx";

const API_URL = import.meta.env.VITE_API_URL;

const statusOptions = [
  "New",
  "Contacted",
  "In Progress",
  "Completed",
  "Rejected",
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
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

    navigate("/admin/login", { replace: true });
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
        setError("Unable to load enquiries.");
      }
    } catch (error) {
      console.error("Get quotes error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      setError(error.response?.data?.message || "Unable to load enquiries.");
    } finally {
      setLoading(false);
    }
  }, [api, logout, token]);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  const updateStatus = async (id, status) => {
    try {
      const response = await api.patch(`/quotes/${id}/status`, { status });

      if (response.data.success) {
        setQuotes((prev) =>
          prev.map((quote) => (quote._id === id ? response.data.quote : quote)),
        );

        setSelectedQuote(response.data.quote);
      }
    } catch (error) {
      console.error("Update quote status error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      alert(error.response?.data?.message || "Unable to update status.");
    }
  };

  const deleteQuote = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?",
    );

    if (!confirmed) return;

    try {
      const response = await api.delete(`/quotes/${id}`);

      if (response.data.success) {
        setQuotes((prev) => prev.filter((quote) => quote._id !== id));

        setSelectedQuote(null);
      }
    } catch (error) {
      console.error("Delete quote error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      alert(error.response?.data?.message || "Unable to delete enquiry.");
    }
  };

  const filteredQuotes = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return quotes.filter((quote) => {
      const matchesSearch =
        !searchText ||
        quote.name?.toLowerCase().includes(searchText) ||
        quote.email?.toLowerCase().includes(searchText) ||
        quote.companyName?.toLowerCase().includes(searchText) ||
        quote.solution?.toLowerCase().includes(searchText) ||
        quote.industry?.toLowerCase().includes(searchText) ||
        quote.country?.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All" || quote.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [quotes, search, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: quotes.length,

      new: quotes.filter((quote) => quote.status === "New").length,

      contacted: quotes.filter((quote) => quote.status === "Contacted").length,

      progress: quotes.filter((quote) => quote.status === "In Progress").length,

      completed: quotes.filter((quote) => quote.status === "Completed").length,
    };
  }, [quotes]);

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Overview
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage project enquiries and client requests.
            </p>
          </div>

          <button
            type="button"
            onClick={fetchQuotes}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw size={17} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {/* Statistics */}
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

        {/* Search / filters */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, email, company, country..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-gray-950 focus:bg-white"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium outline-none focus:border-gray-950"
              >
                <option value="All">All Statuses</option>

                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Enquiries */}
        <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white">
          <div className="border-b border-gray-200 px-6 py-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold">Project Enquiries</h2>

                <p className="mt-1 text-sm text-gray-500">
                  {filteredQuotes.length} enquiry
                  {filteredQuotes.length !== 1 ? "ies" : ""} displayed
                </p>
              </div>

              {(search || statusFilter !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setStatusFilter("All");
                  }}
                  className="text-sm font-semibold text-gray-500 hover:text-gray-950"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {loading ? (
            <div className="p-16 text-center">
              <RefreshCw
                size={28}
                className="mx-auto animate-spin text-gray-400"
              />

              <p className="mt-4 text-sm font-medium text-gray-500">
                Loading enquiries...
              </p>
            </div>
          ) : filteredQuotes.length === 0 ? (
            <div className="p-16 text-center">
              <BriefcaseBusiness size={36} className="mx-auto text-gray-300" />

              <p className="mt-5 font-semibold">No enquiries found</p>

              <p className="mt-2 text-sm text-gray-500">
                New quote requests will appear here.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filteredQuotes.map((quote) => (
                <div
                  key={quote._id}
                  className="flex flex-col gap-5 p-6 transition hover:bg-gray-50 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-bold text-gray-950">
                        {quote.companyName || "Unnamed Company"}
                      </h3>

                      <StatusBadge status={quote.status} />
                    </div>

                    <p className="mt-2 text-sm text-gray-600">
                      {quote.name || "Unknown Client"}
                      {" · "}
                      {quote.email || "No email"}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                      <span>{formatSolution(quote.solution)}</span>

                      {quote.industry && <span>{quote.industry}</span>}

                      {quote.country && <span>{quote.country}</span>}
                    </div>

                    <p className="mt-2 text-xs text-gray-400">
                      {formatDate(quote.createdAt)}
                    </p>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedQuote(quote)}
                      className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                    >
                      View Enquiry
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteQuote(quote._id)}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-200 text-red-600 transition hover:bg-red-50"
                      title="Delete enquiry"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Detail modal */}
      {selectedQuote && (
        <QuoteModal
          quote={selectedQuote}
          onClose={() => setSelectedQuote(null)}
          onStatusChange={updateStatus}
          onDelete={deleteQuote}
        />
      )}
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

function StatusBadge({ status }) {
  const styles = {
    New: "bg-blue-50 text-blue-700",
    Contacted: "bg-yellow-50 text-yellow-700",
    "In Progress": "bg-purple-50 text-purple-700",
    Completed: "bg-green-50 text-green-700",
    Rejected: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status || "New"}
    </span>
  );
}

function QuoteModal({ quote, onClose, onStatusChange, onDelete }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4">
      <div className="flex min-h-full items-center justify-center">
        <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Modal header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                Project Enquiry
              </p>

              <h2 className="mt-1 truncate text-2xl font-bold">
                {quote.companyName || "Unnamed Company"}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal content */}
          <div className="max-h-[70vh] overflow-y-auto p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Info label="Client" value={quote.name} />

              <Info label="Email" value={quote.email} />

              <Info label="Phone" value={quote.phone} />

              <Info label="Country" value={quote.country} />

              <Info label="Industry" value={quote.industry} />

              <Info label="Solution" value={formatSolution(quote.solution)} />

              <Info label="Contact Method" value={quote.contactMethod} />

              <Info label="Submitted" value={formatDate(quote.createdAt)} />
            </div>

            <DetailSection
              title="Project Description"
              content={quote.projectDescription}
            />

            {quote.existingWebsite && (
              <DetailSection
                title="Existing Website / App"
                content={quote.existingWebsite}
              />
            )}

            <TagSection title="Features" items={quote.features} />

            <TagSection title="Platforms" items={quote.platforms} />

            {/* Status */}
            <div className="mt-8 border-t border-gray-200 pt-7">
              <label className="mb-3 block text-sm font-bold">
                Enquiry Status
              </label>

              <div className="flex flex-wrap gap-2">
                {statusOptions.map((status) => (
                  <button
                    type="button"
                    key={status}
                    onClick={() => onStatusChange(quote._id, status)}
                    className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                      quote.status === status
                        ? "border-gray-950 bg-gray-950 text-white"
                        : "border-gray-200 hover:border-gray-950"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between border-t border-gray-200 bg-gray-50 px-6 py-5">
            <button
              type="button"
              onClick={() => onDelete(quote._id)}
              className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              <Trash2 size={16} />
              Delete
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-semibold text-gray-900">
        {value || "—"}
      </p>
    </div>
  );
}

function DetailSection({ title, content }) {
  return (
    <div className="mt-7">
      <h3 className="text-sm font-bold">{title}</h3>

      <div className="mt-3 whitespace-pre-wrap rounded-2xl bg-gray-50 p-5 text-sm leading-7 text-gray-600">
        {content || "—"}
      </div>
    </div>
  );
}

function TagSection({ title, items = [] }) {
  return (
    <div className="mt-7">
      <h3 className="text-sm font-bold">{title}</h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {!items || items.length === 0 ? (
          <span className="text-sm text-gray-500">None selected</span>
        ) : (
          items.map((item) => (
            <span
              key={item}
              className="rounded-full bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700"
            >
              {item}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

function formatSolution(solution) {
  const values = {
    website: "Website",
    mobile: "Mobile App",
    desktop: "Desktop App",
    "website-mobile": "Website + Mobile App",
    "mobile-desktop": "Mobile + Desktop App",
    complete: "Complete Solution",
  };

  return values[solution] || solution || "Custom Project";
}

function formatDate(date) {
  if (!date) return "Unknown";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Unknown";
  }

  return parsedDate.toLocaleString();
}
