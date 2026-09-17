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
  Send,
  Plus,
  Minus,
  Package,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout.jsx";

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000/api"
).replace(/\/$/, "");

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
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [productsLoading, setProductsLoading] = useState(false);

  const [selectedQuote, setSelectedQuote] = useState(null);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [error, setError] = useState("");

  const [quoteProducts, setQuoteProducts] = useState([]);

  const [customNote, setCustomNote] = useState("");
  const [sendingQuote, setSendingQuote] = useState(false);

  const token = localStorage.getItem("adminToken");

  const api = useMemo(() => {
    return axios.create({
      baseURL: API_URL,
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });
  }, [token]);

  const logout = useCallback(() => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin/login", {
      replace: true,
    });
  }, [navigate]);

  /* ============================================================
     FETCH ENQUIRIES
  ============================================================ */

  const fetchQuotes = useCallback(async () => {
    if (!token) {
      logout();
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await api.get("/quotes");

      if (response.data?.success) {
        setQuotes(
          Array.isArray(response.data.quotes) ? response.data.quotes : [],
        );
      } else {
        setError(response.data?.message || "Unable to load enquiries.");
      }
    } catch (error) {
      console.error("Get quotes error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      setError(
        error.response?.data?.message ||
          error.message ||
          "Unable to load enquiries.",
      );
    } finally {
      setLoading(false);
    }
  }, [api, logout, token]);

  /* ============================================================
     FETCH PRODUCTS
  ============================================================ */

  const fetchProducts = useCallback(async () => {
    if (!token) {
      logout();
      return;
    }

    try {
      setProductsLoading(true);

      const response = await api.get("/products");

      console.log("Dashboard products response:", response.data);

      if (response.data?.success) {
        const productList = Array.isArray(response.data.products)
          ? response.data.products
          : Array.isArray(response.data.data)
            ? response.data.data
            : [];

        setProducts(productList);
      } else {
        setProducts([]);

        console.error(response.data?.message || "Unable to load products.");
      }
    } catch (error) {
      console.error("Dashboard get products error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      setProducts([]);
    } finally {
      setProductsLoading(false);
    }
  }, [api, logout, token]);

  useEffect(() => {
    fetchQuotes();
    fetchProducts();
  }, [fetchQuotes, fetchProducts]);

  /* ============================================================
     ACTIVE PRODUCTS FOR QUOTATIONS
  ============================================================ */

  const availableProducts = useMemo(() => {
    return products.filter((product) => product.active !== false);
  }, [products]);

  /* ============================================================
     UPDATE STATUS
  ============================================================ */

  const updateStatus = async (id, status) => {
    try {
      const response = await api.patch(`/quotes/${id}/status`, {
        status,
      });

      if (response.data?.success) {
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

  /* ============================================================
     DELETE ENQUIRY
  ============================================================ */

  const deleteQuote = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?",
    );

    if (!confirmed) return;

    try {
      const response = await api.delete(`/quotes/${id}`);

      if (response.data?.success) {
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

  /* ============================================================
     OPEN ENQUIRY
  ============================================================ */

  const openQuote = async (quote) => {
    setSelectedQuote(quote);
    setQuoteProducts([]);
    setCustomNote("");

    /*
     * Refresh products when opening quotation.
     * This means newly-created products appear immediately
     * without requiring a full dashboard refresh.
     */
    await fetchProducts();
  };

  /* ============================================================
     ADD PRODUCT
  ============================================================ */

  const addProduct = (product) => {
    if (!product?._id) {
      return;
    }

    if (product.active === false) {
      alert("This product is inactive and cannot be added.");
      return;
    }

    const alreadyAdded = quoteProducts.some(
      (item) => item.productId === product._id,
    );

    if (alreadyAdded) {
      alert("This product is already added.");
      return;
    }

    /*
     * Keep one currency per quotation.
     */
    if (
      quoteProducts.length > 0 &&
      quoteProducts[0].currency !== (product.currency || "USD")
    ) {
      alert(
        `This quotation uses ${quoteProducts[0].currency}. Please select a product with the same currency.`,
      );
      return;
    }

    setQuoteProducts((prev) => [
      ...prev,
      {
        productId: product._id,
        name: product.name || "",
        category: product.category || "",
        description: product.description || "",
        features: Array.isArray(product.features) ? product.features : [],
        deliveryTime: product.deliveryTime || "",
        currency: product.currency || "USD",
        price: Number(product.price) || 0,
        quantity: 1,
      },
    ]);
  };

  /* ============================================================
     REMOVE PRODUCT
  ============================================================ */

  const removeProduct = (productId) => {
    setQuoteProducts((prev) =>
      prev.filter((item) => item.productId !== productId),
    );
  };

  /* ============================================================
     QUANTITY
  ============================================================ */

  const changeQuantity = (productId, change) => {
    setQuoteProducts((prev) =>
      prev.map((item) => {
        if (item.productId !== productId) {
          return item;
        }

        const currentQuantity = Number(item.quantity) || 1;

        const newQuantity = Math.max(1, currentQuantity + change);

        return {
          ...item,
          quantity: newQuantity,
        };
      }),
    );
  };

  /* ============================================================
     PRICE
  ============================================================ */

  const changePrice = (productId, value) => {
    setQuoteProducts((prev) =>
      prev.map((item) => {
        if (item.productId !== productId) {
          return item;
        }

        return {
          ...item,
          price: value === "" ? "" : Math.max(0, Number(value) || 0),
        };
      }),
    );
  };

  /* ============================================================
     TOTAL
  ============================================================ */

  const quoteTotal = useMemo(() => {
    return quoteProducts.reduce((total, item) => {
      const price = Number(item.price) || 0;

      const quantity = Number(item.quantity) || 1;

      return total + price * quantity;
    }, 0);
  }, [quoteProducts]);

  /* ============================================================
     CURRENCY
  ============================================================ */

  const quoteCurrency =
    quoteProducts.length > 0 ? quoteProducts[0].currency || "USD" : "USD";

  /* ============================================================
     SEND QUOTATION
  ============================================================ */

  const sendQuotation = async () => {
    if (!selectedQuote) {
      return;
    }

    if (!selectedQuote.email) {
      alert("This enquiry does not contain a client email.");
      return;
    }

    if (quoteProducts.length === 0) {
      alert("Please select at least one product.");
      return;
    }

    try {
      setSendingQuote(true);

      const response = await api.post(
        `/quotes/${selectedQuote._id}/send-quotation`,
        {
          products: quoteProducts,
          customNote,
          total: quoteTotal,
          currency: quoteCurrency,
        },
      );

      if (response.data?.success) {
        alert(`Quotation sent successfully to ${selectedQuote.email}`);

        /*
         * Update status after successful email.
         */
        try {
          await updateStatus(selectedQuote._id, "Contacted");
        } catch (statusError) {
          console.error("Status update after quotation:", statusError);
        }

        setQuoteProducts([]);
        setCustomNote("");
      } else {
        alert(response.data?.message || "Unable to send quotation.");
      }
    } catch (error) {
      console.error("Send quotation error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      alert(
        error.response?.data?.message ||
          error.message ||
          "Unable to send quotation.",
      );
    } finally {
      setSendingQuote(false);
    }
  };

  /* ============================================================
     FILTER
  ============================================================ */

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

  /* ============================================================
     STATS
  ============================================================ */

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
        {/* HEADER */}

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
            onClick={() => {
              fetchQuotes();
              fetchProducts();
            }}
            disabled={loading || productsLoading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw
              size={17}
              className={loading || productsLoading ? "animate-spin" : ""}
            />
            Refresh
          </button>
        </div>

        {/* ERROR */}

        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {/* STATISTICS */}

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

        {/* SEARCH */}

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

        {/* ENQUIRIES */}

        <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white">
          <div className="border-b border-gray-200 px-6 py-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold">Project Enquiries</h2>

                <p className="mt-1 text-sm text-gray-500">
                  {filteredQuotes.length}{" "}
                  {filteredQuotes.length === 1 ? "enquiry" : "enquiries"}{" "}
                  displayed
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
                      onClick={() => openQuote(quote)}
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

      {/* QUOTE MODAL */}

      {selectedQuote && (
        <QuoteModal
          quote={selectedQuote}
          products={availableProducts}
          totalProducts={products.length}
          productsLoading={productsLoading}
          quoteProducts={quoteProducts}
          customNote={customNote}
          setCustomNote={setCustomNote}
          quoteTotal={quoteTotal}
          quoteCurrency={quoteCurrency}
          sendingQuote={sendingQuote}
          onClose={() => {
            setSelectedQuote(null);
            setQuoteProducts([]);
            setCustomNote("");
          }}
          onStatusChange={updateStatus}
          onDelete={deleteQuote}
          onAddProduct={addProduct}
          onRemoveProduct={removeProduct}
          onChangeQuantity={changeQuantity}
          onChangePrice={changePrice}
          onSendQuotation={sendQuotation}
        />
      )}
    </AdminLayout>
  );
}

/* ================================================================
   STAT CARD
================================================================ */

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

/* ================================================================
   STATUS
================================================================ */

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

/* ================================================================
   QUOTE MODAL
================================================================ */

function QuoteModal({
  quote,
  products,
  totalProducts,
  productsLoading,
  quoteProducts,
  customNote,
  setCustomNote,
  quoteTotal,
  quoteCurrency,
  sendingQuote,
  onClose,
  onStatusChange,
  onDelete,
  onAddProduct,
  onRemoveProduct,
  onChangeQuantity,
  onChangePrice,
  onSendQuotation,
}) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4">
      <div className="flex min-h-full items-center justify-center">
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* HEADER */}

          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                Project Enquiry
              </p>

              <h2 className="mt-1 truncate text-2xl font-bold">
                {quote.companyName || "Unnamed Company"}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {quote.name} · {quote.email}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* CONTENT */}

          <div className="max-h-[75vh] overflow-y-auto p-6">
            {/* CLIENT DETAILS */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

            {/* PRODUCT QUOTATION */}

            <div className="mt-10 border-t border-gray-200 pt-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Package size={20} />

                    <h3 className="text-lg font-bold">Build Quotation</h3>
                  </div>

                  <p className="mt-1 text-sm text-gray-500">
                    Select products and send their details directly to the
                    client.
                  </p>
                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                  {products.length}{" "}
                  {products.length === 1 ? "product" : "products"} available
                </span>
              </div>

              {/* PRODUCT SELECTOR */}

              <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <label className="mb-2 block text-sm font-bold">
                  Add Product
                </label>

                {productsLoading ? (
                  <div className="flex items-center gap-2 py-4 text-sm text-gray-500">
                    <RefreshCw size={17} className="animate-spin" />
                    Loading products...
                  </div>
                ) : products.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-gray-300 bg-white p-5 text-center">
                    <Package size={28} className="mx-auto text-gray-300" />

                    <p className="mt-3 text-sm font-semibold">
                      {totalProducts === 0
                        ? "No products available"
                        : "No active products available"}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {totalProducts === 0
                        ? "Add products from the Products section first."
                        : "Activate a product from the Products section first."}
                    </p>
                  </div>
                ) : (
                  <select
                    value=""
                    onChange={(event) => {
                      const productId = event.target.value;

                      const product = products.find(
                        (item) => item._id === productId,
                      );

                      if (product) {
                        onAddProduct(product);
                      }
                    }}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium outline-none focus:border-gray-950"
                  >
                    <option value="">Select a product...</option>

                    {products.map((product) => (
                      <option
                        key={product._id}
                        value={product._id}
                        disabled={quoteProducts.some(
                          (item) => item.productId === product._id,
                        )}
                      >
                        {product.name} —{" "}
                        {formatMoney(product.price, product.currency)}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* SELECTED PRODUCTS */}

              {quoteProducts.length > 0 && (
                <div className="mt-5 space-y-4">
                  <h4 className="text-sm font-bold">Selected Products</h4>

                  {quoteProducts.map((product) => (
                    <div
                      key={product.productId}
                      className="rounded-2xl border border-gray-200 bg-white p-5"
                    >
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h5 className="font-bold">{product.name}</h5>

                            {product.category && (
                              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
                                {product.category}
                              </span>
                            )}
                          </div>

                          {product.description && (
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                              {product.description}
                            </p>
                          )}

                          {product.features?.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {product.features.map((feature) => (
                                <span
                                  key={feature}
                                  className="rounded-full bg-gray-50 px-2.5 py-1 text-xs text-gray-600"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          )}

                          {product.deliveryTime && (
                            <p className="mt-3 text-xs font-medium text-gray-500">
                              Delivery: {product.deliveryTime}
                            </p>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveProduct(product.productId)}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-red-200 text-red-600 hover:bg-red-50"
                          title="Remove product"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      {/* PRICE / QUANTITY */}

                      <div className="mt-5 grid gap-4 border-t border-gray-100 pt-5 sm:grid-cols-3">
                        <div>
                          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-400">
                            Price
                          </label>

                          <div className="flex rounded-xl border border-gray-200 bg-gray-50">
                            <span className="flex items-center px-3 text-xs font-bold text-gray-500">
                              {product.currency}
                            </span>

                            <input
                              type="number"
                              min="0"
                              step="0.01"
                              value={product.price}
                              onChange={(event) =>
                                onChangePrice(
                                  product.productId,
                                  event.target.value,
                                )
                              }
                              className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm font-semibold outline-none"
                            />
                          </div>

                          <p className="mt-1 text-[11px] text-gray-400">
                            You can customize the price.
                          </p>
                        </div>

                        <div>
                          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-400">
                            Quantity
                          </label>

                          <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50">
                            <button
                              type="button"
                              onClick={() =>
                                onChangeQuantity(product.productId, -1)
                              }
                              className="flex h-11 w-11 items-center justify-center hover:bg-gray-100"
                            >
                              <Minus size={15} />
                            </button>

                            <span className="flex-1 text-center text-sm font-bold">
                              {product.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                onChangeQuantity(product.productId, 1)
                              }
                              className="flex h-11 w-11 items-center justify-center hover:bg-gray-100"
                            >
                              <Plus size={15} />
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-400">
                            Subtotal
                          </label>

                          <div className="rounded-xl bg-gray-950 px-4 py-3 text-sm font-bold text-white">
                            {formatMoney(
                              (Number(product.price) || 0) *
                                (Number(product.quantity) || 1),
                              product.currency,
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* NOTE */}

              <div className="mt-6">
                <label className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <FileText size={16} />
                  Message / Additional Note
                </label>

                <textarea
                  value={customNote}
                  onChange={(event) => setCustomNote(event.target.value)}
                  rows={5}
                  placeholder="Add payment terms, special instructions, project notes, discounts, validity, etc."
                  className="w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm leading-6 outline-none transition focus:border-gray-950 focus:bg-white"
                />
              </div>

              {/* TOTAL */}

              {quoteProducts.length > 0 && (
                <div className="mt-6 rounded-2xl bg-gray-950 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                        Quotation Total
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        {quoteProducts.length}{" "}
                        {quoteProducts.length === 1 ? "product" : "products"}
                      </p>
                    </div>

                    <p className="text-2xl font-bold">
                      {formatMoney(quoteTotal, quoteCurrency)}
                    </p>
                  </div>
                </div>
              )}

              {/* SEND */}

              <button
                type="button"
                onClick={onSendQuotation}
                disabled={sendingQuote || quoteProducts.length === 0}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-4 text-sm font-bold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sendingQuote ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" />
                    Sending quotation...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Quotation to {quote.email}
                  </>
                )}
              </button>
            </div>

            {/* STATUS */}

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

          {/* FOOTER */}

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

/* ================================================================
   INFO
================================================================ */

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

/* ================================================================
   DETAIL
================================================================ */

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

/* ================================================================
   TAGS
================================================================ */

function TagSection({ title, items = [] }) {
  return (
    <div className="mt-7">
      <h3 className="text-sm font-bold">{title}</h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {!Array.isArray(items) || items.length === 0 ? (
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

/* ================================================================
   SOLUTION
================================================================ */

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

/* ================================================================
   MONEY
================================================================ */

function formatMoney(value, currency = "USD") {
  const amount = Number(value) || 0;

  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currency || "USD",
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency || "USD"} ${amount.toFixed(2)}`;
  }
}

/* ================================================================
   DATE
================================================================ */

function formatDate(date) {
  if (!date) return "Unknown";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Unknown";
  }

  return parsedDate.toLocaleString();
}
