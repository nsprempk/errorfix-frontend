import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  Package,
  Plus,
  RefreshCw,
  Send,
  Trash2,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout.jsx";

const API_URL = import.meta.env.VITE_API_URL;

const statusOptions = [
  "New",
  "Contacted",
  "In Progress",
  "Completed",
  "Rejected",
];

export default function AdminQuotation() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [quote, setQuote] = useState(null);
  const [products, setProducts] = useState([]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const [additionalCharges, setAdditionalCharges] = useState("");

  const [currency, setCurrency] = useState("USD");
  const [message, setMessage] = useState("");
  const [validUntil, setValidUntil] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [sending, setSending] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = localStorage.getItem("adminToken");

  const api = useMemo(() => {
    return axios.create({
      baseURL: API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }, [token]);

  const logout = useCallback(() => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin/login", { replace: true });
  }, [navigate]);

  /*
  |--------------------------------------------------------------------------
  | LOAD QUOTE + PRODUCTS + EXISTING QUOTATION
  |--------------------------------------------------------------------------
  */

  const loadData = useCallback(async () => {
    if (!token) {
      logout();
      return;
    }

    if (!id) {
      setError("Quote ID is missing.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const [quoteResponse, productsResponse, quotationResponse] =
        await Promise.all([
          api.get(`/quotes/${id}`),
          api.get("/products"),
          api.get(`/quotes/${id}/quotation`),
        ]);

      if (!quoteResponse.data.success) {
        throw new Error(
          quoteResponse.data.message || "Unable to load enquiry.",
        );
      }

      if (!productsResponse.data.success) {
        throw new Error(
          productsResponse.data.message || "Unable to load products.",
        );
      }

      setQuote(quoteResponse.data.quote);

      const activeProducts = (productsResponse.data.products || []).filter(
        (product) => product.active !== false,
      );

      setProducts(activeProducts);

      const quotation = quotationResponse.data.quotation;

      if (quotation) {
        setDiscount(quotation.discount ?? "");
        setTax(quotation.tax ?? "");
        setAdditionalCharges(quotation.additionalCharges ?? "");
        setCurrency(quotation.currency || "USD");
        setMessage(quotation.message || "");

        if (quotation.validUntil) {
          const date = new Date(quotation.validUntil);

          if (!Number.isNaN(date.getTime())) {
            setValidUntil(date.toISOString().split("T")[0]);
          }
        }

        if (Array.isArray(quotation.products)) {
          setSelectedProducts(
            quotation.products.map((item) => ({
              productId:
                typeof item.productId === "object"
                  ? item.productId?._id
                  : item.productId,
              quantity: Number(item.quantity) || 1,
            })),
          );
        }
      }
    } catch (error) {
      console.error("Load quotation data error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      setError(
        error.response?.data?.message ||
          error.message ||
          "Unable to load quotation data.",
      );
    } finally {
      setLoading(false);
    }
  }, [api, id, logout, token]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  /*
  |--------------------------------------------------------------------------
  | PRODUCT SELECTION
  |--------------------------------------------------------------------------
  */

  const isSelected = (productId) => {
    return selectedProducts.some(
      (item) => String(item.productId) === String(productId),
    );
  };

  const toggleProduct = (product) => {
    setSuccess("");
    setError("");

    if (isSelected(product._id)) {
      setSelectedProducts((prev) =>
        prev.filter((item) => String(item.productId) !== String(product._id)),
      );

      return;
    }

    setSelectedProducts((prev) => [
      ...prev,
      {
        productId: product._id,
        quantity: 1,
      },
    ]);
  };

  const updateQuantity = (productId, quantity) => {
    const numericQuantity = Number(quantity);

    setSelectedProducts((prev) =>
      prev.map((item) =>
        String(item.productId) === String(productId)
          ? {
              ...item,
              quantity:
                Number.isInteger(numericQuantity) && numericQuantity > 0
                  ? numericQuantity
                  : 1,
            }
          : item,
      ),
    );
  };

  const removeProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.filter((item) => String(item.productId) !== String(productId)),
    );
  };

  /*
  |--------------------------------------------------------------------------
  | CALCULATIONS
  |--------------------------------------------------------------------------
  */

  const quotationItems = useMemo(() => {
    return selectedProducts
      .map((selected) => {
        const product = products.find(
          (item) => String(item._id) === String(selected.productId),
        );

        if (!product) return null;

        const quantity = Number(selected.quantity) || 1;
        const price = Number(product.price) || 0;

        return {
          ...product,
          quantity,
          lineTotal: Number((price * quantity).toFixed(2)),
        };
      })
      .filter(Boolean);
  }, [products, selectedProducts]);

  const subtotal = useMemo(() => {
    return Number(
      quotationItems.reduce((sum, item) => sum + item.lineTotal, 0).toFixed(2),
    );
  }, [quotationItems]);

  const numericDiscount = Number(discount) || 0;
  const numericTax = Number(tax) || 0;
  const numericAdditionalCharges = Number(additionalCharges) || 0;

  const total = Math.max(
    0,
    subtotal - numericDiscount + numericTax + numericAdditionalCharges,
  );

  /*
  |--------------------------------------------------------------------------
  | SAVE QUOTATION
  |--------------------------------------------------------------------------
  */

  const saveQuotation = async () => {
    if (selectedProducts.length === 0) {
      setError("Please select at least one product.");
      return false;
    }

    if (numericDiscount < 0) {
      setError("Discount cannot be negative.");
      return false;
    }

    if (numericTax < 0) {
      setError("Tax cannot be negative.");
      return false;
    }

    if (numericAdditionalCharges < 0) {
      setError("Additional charges cannot be negative.");
      return false;
    }

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const payload = {
        products: selectedProducts.map((item) => ({
          productId: item.productId,
          quantity: Number(item.quantity) || 1,
        })),
        discount: numericDiscount,
        tax: numericTax,
        additionalCharges: numericAdditionalCharges,
        currency,
        message: message.trim(),
        validUntil: validUntil || null,
      };

      const response = await api.patch(`/quotes/${id}/quotation`, payload);

      if (!response.data.success) {
        throw new Error(response.data.message || "Unable to save quotation.");
      }

      setSuccess("Quotation saved successfully.");

      if (response.data.quote) {
        setQuote(response.data.quote);
      }

      return true;
    } catch (error) {
      console.error("Save quotation error:", error);

      if (error.response?.status === 401) {
        logout();
        return false;
      }

      setError(
        error.response?.data?.message ||
          error.message ||
          "Unable to save quotation.",
      );

      return false;
    } finally {
      setSaving(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | SEND QUOTATION
  |--------------------------------------------------------------------------
  */

  const sendQuotation = async () => {
    if (selectedProducts.length === 0) {
      setError("Please select at least one product before sending.");
      return;
    }

    const confirmed = window.confirm(
      `Send this quotation to ${quote?.email || "the client"}?`,
    );

    if (!confirmed) return;

    try {
      setSending(true);
      setError("");
      setSuccess("");

      /*
       * Save the latest quotation first.
       */

      const saved = await saveQuotation();

      if (!saved) {
        return;
      }

      const response = await api.post(`/quotes/${id}/quotation/send`);

      if (!response.data.success) {
        throw new Error(response.data.message || "Unable to send quotation.");
      }

      setSuccess("Quotation sent successfully to the client.");

      if (response.data.quote) {
        setQuote(response.data.quote);
      }
    } catch (error) {
      console.error("Send quotation error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      setError(
        error.response?.data?.message ||
          error.message ||
          "Unable to send quotation.",
      );
    } finally {
      setSending(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="text-center">
            <RefreshCw
              size={30}
              className="mx-auto animate-spin text-gray-400"
            />

            <p className="mt-4 text-sm font-medium text-gray-500">
              Loading quotation builder...
            </p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | PAGE
  |--------------------------------------------------------------------------
  */

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-gray-950"
            >
              <ArrowLeft size={16} />
              Back to Enquiries
            </button>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Quotation
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              Build Quotation
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Select products and send their details directly to the client.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={loadData}
              disabled={loading || saving || sending}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold transition hover:bg-gray-50 disabled:opacity-50"
            >
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>

            <button
              type="button"
              onClick={saveQuotation}
              disabled={saving || sending || selectedProducts.length === 0}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-gray-50 disabled:opacity-50"
            >
              {saving && <RefreshCw size={16} className="animate-spin" />}

              {saving ? "Saving..." : "Save Quotation"}
            </button>

            <button
              type="button"
              onClick={sendQuotation}
              disabled={saving || sending || selectedProducts.length === 0}
              className="inline-flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending ? (
                <RefreshCw size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}

              {sending ? "Sending..." : "Send to Client"}
            </button>
          </div>
        </div>

        {/* Client */}

        {quote && (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                  Client
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  {quote.name || "Unknown Client"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {quote.companyName || "No company"} ·{" "}
                  {quote.email || "No email"}
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-3">
                <Mail size={17} className="text-gray-500" />

                <span className="text-sm font-semibold">{quote.email}</span>
              </div>
            </div>
          </div>
        )}

        {/* Messages */}

        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
            <CheckCircle2 size={18} />
            {success}
          </div>
        )}

        {/* Main */}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Products */}

          <section className="rounded-3xl border border-gray-200 bg-white">
            <div className="border-b border-gray-200 px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold">Available Products</h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {products.length} active product
                    {products.length !== 1 ? "s" : ""} available
                  </p>
                </div>

                <Package size={22} className="text-gray-400" />
              </div>
            </div>

            {products.length === 0 ? (
              <div className="p-12 text-center">
                <Package size={40} className="mx-auto text-gray-300" />

                <p className="mt-5 font-semibold">
                  No active products available
                </p>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                  Add products from the Products section first and make sure
                  they are active.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/admin/products")}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white"
                >
                  <Plus size={16} />
                  Go to Products
                </button>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {products.map((product) => {
                  const selected = isSelected(product._id);

                  return (
                    <div
                      key={product._id}
                      className={`p-6 transition ${
                        selected ? "bg-gray-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-bold text-gray-950">
                              {product.name}
                            </h3>

                            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                              {product.category}
                            </span>
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
                                  className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-gray-500">
                            <span className="font-bold text-gray-950">
                              {formatPrice(product.price, product.currency)}
                            </span>

                            {product.deliveryTime && (
                              <span>Delivery: {product.deliveryTime}</span>
                            )}
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-3">
                          {selected && (
                            <input
                              type="number"
                              min="1"
                              step="1"
                              value={
                                selectedProducts.find(
                                  (item) =>
                                    String(item.productId) ===
                                    String(product._id),
                                )?.quantity || 1
                              }
                              onChange={(event) =>
                                updateQuantity(product._id, event.target.value)
                              }
                              className="w-20 rounded-xl border border-gray-200 px-3 py-2.5 text-center text-sm font-semibold outline-none focus:border-gray-950"
                            />
                          )}

                          <button
                            type="button"
                            onClick={() => toggleProduct(product)}
                            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                              selected
                                ? "bg-gray-950 text-white hover:bg-gray-800"
                                : "border border-gray-200 bg-white hover:bg-gray-100"
                            }`}
                          >
                            {selected ? (
                              "Selected"
                            ) : (
                              <>
                                <Plus size={16} />
                                Add
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* Summary */}

          <aside className="h-fit rounded-3xl border border-gray-200 bg-white">
            <div className="border-b border-gray-200 px-6 py-5">
              <h2 className="text-lg font-bold">Quotation Summary</h2>

              <p className="mt-1 text-sm text-gray-500">
                {quotationItems.length} item
                {quotationItems.length !== 1 ? "s" : ""} selected
              </p>
            </div>

            <div className="p-6">
              {quotationItems.length === 0 ? (
                <div className="rounded-2xl bg-gray-50 p-6 text-center">
                  <Package size={30} className="mx-auto text-gray-300" />

                  <p className="mt-3 text-sm font-semibold">
                    No products selected
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Select products from the list to build the quotation.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {quotationItems.map((item) => (
                    <div key={item._id} className="rounded-2xl bg-gray-50 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-sm font-bold">{item.name}</p>

                          <p className="mt-1 text-xs text-gray-500">
                            {item.quantity} ×{" "}
                            {formatPrice(item.price, item.currency)}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeProduct(item._id)}
                          className="text-gray-400 transition hover:text-red-600"
                          title="Remove"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <p className="mt-3 text-right text-sm font-bold">
                        {formatPrice(item.lineTotal, item.currency)}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Currency */}

              <div className="mt-6">
                <label className="mb-2 block text-sm font-semibold">
                  Quotation Currency
                </label>

                <select
                  value={currency}
                  onChange={(event) => setCurrency(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium outline-none focus:border-gray-950"
                >
                  <option value="USD">USD</option>
                  <option value="CAD">CAD</option>
                  <option value="AUD">AUD</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                </select>
              </div>

              {/* Charges */}

              <div className="mt-6 space-y-4">
                <NumberField
                  label="Discount"
                  value={discount}
                  onChange={setDiscount}
                  placeholder="0"
                />

                <NumberField
                  label="Tax"
                  value={tax}
                  onChange={setTax}
                  placeholder="0"
                />

                <NumberField
                  label="Additional Charges"
                  value={additionalCharges}
                  onChange={setAdditionalCharges}
                  placeholder="0"
                />
              </div>

              {/* Valid Until */}

              <div className="mt-6">
                <label className="mb-2 block text-sm font-semibold">
                  Quotation Valid Until
                </label>

                <input
                  type="date"
                  value={validUntil}
                  onChange={(event) => setValidUntil(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-950"
                />
              </div>

              {/* Message */}

              <div className="mt-6">
                <label className="mb-2 block text-sm font-semibold">
                  Message to Client
                </label>

                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={5}
                  placeholder="Thank you for considering Errorfix Solution..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm leading-6 outline-none focus:border-gray-950"
                />
              </div>

              {/* Totals */}

              <div className="mt-7 border-t border-gray-200 pt-5">
                <SummaryRow
                  label="Subtotal"
                  value={formatPrice(subtotal, currency)}
                />

                <SummaryRow
                  label="Discount"
                  value={`- ${formatPrice(numericDiscount, currency)}`}
                />

                <SummaryRow
                  label="Tax"
                  value={formatPrice(numericTax, currency)}
                />

                <SummaryRow
                  label="Additional Charges"
                  value={formatPrice(numericAdditionalCharges, currency)}
                />

                <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                  <span className="text-base font-bold">Total</span>

                  <span className="text-2xl font-bold">
                    {formatPrice(total, currency)}
                  </span>
                </div>
              </div>

              {/* Send */}

              <button
                type="button"
                onClick={sendQuotation}
                disabled={saving || sending || selectedProducts.length === 0}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sending ? (
                  <RefreshCw size={17} className="animate-spin" />
                ) : (
                  <Send size={17} />
                )}

                {sending ? "Sending..." : "Save & Send Quotation"}
              </button>

              {quote?.quotation?.sentAt && (
                <p className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-green-600">
                  <CheckCircle2 size={14} />
                  Last sent: {formatDate(quote.quotation.sentAt)}
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </AdminLayout>
  );
}

function NumberField({ label, value, onChange, placeholder = "0" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}</label>

      <input
        type="number"
        min="0"
        step="0.01"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-950"
      />
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2 text-sm">
      <span className="text-gray-500">{label}</span>

      <span className="font-semibold text-gray-900">{value}</span>
    </div>
  );
}

function formatPrice(price, currency = "USD") {
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(Number(price) || 0);
  } catch {
    return `${currency} ${Number(price) || 0}`;
  }
}

function formatDate(date) {
  if (!date) return "Unknown";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Unknown";
  }

  return parsedDate.toLocaleString();
}
