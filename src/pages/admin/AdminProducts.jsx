import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  Edit3,
  Package,
  Plus,
  RefreshCw,
  Search,
  Trash2,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout.jsx";

const API_URL = import.meta.env.VITE_API_URL;

const categories = [
  "Website",
  "Mobile App",
  "Desktop App",
  "Software",
  "Digital Marketing",
  "UI/UX Design",
  "Other",
];

const currencies = ["USD", "CAD", "AUD", "GBP", "INR"];

const emptyForm = {
  name: "",
  category: "Website",
  description: "",
  features: "",
  price: "",
  currency: "USD",
  deliveryTime: "",
  active: true,
};

export default function AdminProducts() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [form, setForm] = useState(emptyForm);

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
  | FETCH PRODUCTS
  |--------------------------------------------------------------------------
  */

  const fetchProducts = useCallback(async () => {
    if (!token) {
      logout();
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await api.get("/products");

      if (response.data.success) {
        setProducts(response.data.products || []);
      } else {
        setError(response.data.message || "Unable to load products.");
      }
    } catch (error) {
      console.error("Get products error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      setError(error.response?.data?.message || "Unable to load products.");
    } finally {
      setLoading(false);
    }
  }, [api, logout, token]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  /*
  |--------------------------------------------------------------------------
  | OPEN CREATE MODAL
  |--------------------------------------------------------------------------
  */

  const openCreateModal = () => {
    setEditingProduct(null);
    setForm(emptyForm);
    setError("");
    setSuccess("");
    setModalOpen(true);
  };

  /*
  |--------------------------------------------------------------------------
  | OPEN EDIT MODAL
  |--------------------------------------------------------------------------
  */

  const openEditModal = (product) => {
    setEditingProduct(product);

    setForm({
      name: product.name || "",
      category: product.category || "Website",
      description: product.description || "",
      features: Array.isArray(product.features)
        ? product.features.join(", ")
        : "",
      price: product.price ?? "",
      currency: product.currency || "USD",
      deliveryTime: product.deliveryTime || "",
      active: product.active !== false,
    });

    setError("");
    setSuccess("");
    setModalOpen(true);
  };

  /*
  |--------------------------------------------------------------------------
  | CLOSE MODAL
  |--------------------------------------------------------------------------
  */

  const closeModal = () => {
    if (saving) return;

    setModalOpen(false);
    setEditingProduct(null);
    setForm(emptyForm);
  };

  /*
  |--------------------------------------------------------------------------
  | FORM CHANGE
  |--------------------------------------------------------------------------
  */

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /*
  |--------------------------------------------------------------------------
  | SAVE PRODUCT
  |--------------------------------------------------------------------------
  */

  const saveProduct = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const name = form.name.trim();

    if (!name) {
      setError("Product name is required.");
      return;
    }

    const price = Number(form.price);

    if (!Number.isFinite(price) || price < 0) {
      setError("Please enter a valid product price.");
      return;
    }

    const features = form.features
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const payload = {
      name,
      category: form.category,
      description: form.description.trim(),
      features,
      price,
      currency: form.currency,
      deliveryTime: form.deliveryTime.trim(),
      active: Boolean(form.active),
    };

    try {
      setSaving(true);

      let response;

      if (editingProduct?._id) {
        response = await api.patch(`/products/${editingProduct._id}`, payload);
      } else {
        response = await api.post("/products", payload);
      }

      if (!response.data.success) {
        throw new Error(response.data.message || "Unable to save product.");
      }

      setSuccess(
        editingProduct
          ? "Product updated successfully."
          : "Product created successfully.",
      );

      await fetchProducts();

      setTimeout(() => {
        setModalOpen(false);
        setEditingProduct(null);
        setForm(emptyForm);
        setSuccess("");
      }, 500);
    } catch (error) {
      console.error("Save product error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      setError(
        error.response?.data?.message ||
          error.message ||
          "Unable to save product.",
      );
    } finally {
      setSaving(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | DELETE PRODUCT
  |--------------------------------------------------------------------------
  */

  const deleteProduct = async (product) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${product.name}"?`,
    );

    if (!confirmed) return;

    try {
      setError("");

      const response = await api.delete(`/products/${product._id}`);

      if (!response.data.success) {
        throw new Error(response.data.message || "Unable to delete product.");
      }

      setProducts((prev) => prev.filter((item) => item._id !== product._id));

      setSuccess("Product deleted successfully.");

      setTimeout(() => {
        setSuccess("");
      }, 2500);
    } catch (error) {
      console.error("Delete product error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      setError(
        error.response?.data?.message ||
          error.message ||
          "Unable to delete product.",
      );
    }
  };

  /*
  |--------------------------------------------------------------------------
  | FILTER
  |--------------------------------------------------------------------------
  */

  const filteredProducts = useMemo(() => {
    const text = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !text ||
        product.name?.toLowerCase().includes(text) ||
        product.category?.toLowerCase().includes(text) ||
        product.description?.toLowerCase().includes(text);

      const isActive = product.active !== false;

      const matchesStatus =
        statusFilter === "All" ||
        (statusFilter === "Active" && isActive) ||
        (statusFilter === "Inactive" && !isActive);

      return matchesSearch && matchesStatus;
    });
  }, [products, search, statusFilter]);

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* ======================================================
            HEADER
        ======================================================= */}

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Products
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight">Products</h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage products and services available for client quotations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={fetchProducts}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold transition hover:bg-gray-50 disabled:opacity-50"
            >
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>

            <button
              type="button"
              onClick={openCreateModal}
              className="inline-flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              <Plus size={17} />
              Add Product
            </button>
          </div>
        </div>

        {/* ======================================================
            MESSAGES
        ======================================================= */}

        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
            {success}
          </div>
        )}

        {/* ======================================================
            FILTERS
        ======================================================= */}

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-gray-950 focus:bg-white"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium outline-none focus:border-gray-950"
            >
              <option value="All">All Products</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* ======================================================
            PRODUCTS
        ======================================================= */}

        <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white">
          <div className="border-b border-gray-200 px-6 py-5">
            <h2 className="text-lg font-bold">Product Catalogue</h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"} displayed
            </p>
          </div>

          {loading ? (
            <div className="p-16 text-center">
              <RefreshCw
                size={30}
                className="mx-auto animate-spin text-gray-400"
              />

              <p className="mt-4 text-sm font-medium text-gray-500">
                Loading products...
              </p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-16 text-center">
              <Package size={40} className="mx-auto text-gray-300" />

              <p className="mt-5 font-semibold">No products found</p>

              <p className="mt-2 text-sm text-gray-500">
                Add your first product to use it in quotations.
              </p>

              <button
                type="button"
                onClick={openCreateModal}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white"
              >
                <Plus size={16} />
                Add Product
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filteredProducts.map((product) => {
                const active = product.active !== false;

                return (
                  <div
                    key={product._id}
                    className="p-6 transition hover:bg-gray-50"
                  >
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold">{product.name}</h3>

                          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                            {product.category || "Other"}
                          </span>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              active
                                ? "bg-green-50 text-green-700"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {active ? "Active" : "Inactive"}
                          </span>
                        </div>

                        {product.description && (
                          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-500">
                            {product.description}
                          </p>
                        )}

                        {product.features?.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {product.features.map((feature, index) => (
                              <span
                                key={`${feature}-${index}`}
                                className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                          <span className="text-lg font-bold text-gray-950">
                            {formatPrice(product.price, product.currency)}
                          </span>

                          {product.deliveryTime && (
                            <span className="text-sm text-gray-500">
                              Delivery: {product.deliveryTime}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex shrink-0 gap-2">
                        <button
                          type="button"
                          onClick={() => openEditModal(product)}
                          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold transition hover:bg-gray-100"
                        >
                          <Edit3 size={16} />
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => deleteProduct(product)}
                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-200 text-red-600 transition hover:bg-red-50"
                          title="Delete product"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* ========================================================
          PRODUCT MODAL
      ========================================================= */}

      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4">
          <div className="flex min-h-full items-center justify-center">
            <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
              {/* Header */}

              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                    Product
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    {editingProduct ? "Edit Product" : "Add Product"}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  disabled={saving}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100 disabled:opacity-50"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form */}

              <form onSubmit={saveProduct}>
                <div className="max-h-[70vh] overflow-y-auto p-6">
                  {error && (
                    <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                      {error}
                    </div>
                  )}

                  {success && (
                    <div className="mb-5 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
                      {success}
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold">
                        Product Name
                      </label>

                      <input
                        type="text"
                        value={form.name}
                        onChange={(event) =>
                          updateField("name", event.target.value)
                        }
                        placeholder="Website Development"
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-950"
                      />
                    </div>

                    {/* Category */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Category
                      </label>

                      <select
                        value={form.category}
                        onChange={(event) =>
                          updateField("category", event.target.value)
                        }
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-950"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Currency */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Currency
                      </label>

                      <select
                        value={form.currency}
                        onChange={(event) =>
                          updateField("currency", event.target.value)
                        }
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-950"
                      >
                        {currencies.map((currency) => (
                          <option key={currency} value={currency}>
                            {currency}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Price */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Price
                      </label>

                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={form.price}
                        onChange={(event) =>
                          updateField("price", event.target.value)
                        }
                        placeholder="1000"
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-950"
                      />
                    </div>

                    {/* Delivery */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Delivery Time
                      </label>

                      <input
                        type="text"
                        value={form.deliveryTime}
                        onChange={(event) =>
                          updateField("deliveryTime", event.target.value)
                        }
                        placeholder="7-10 business days"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-950"
                      />
                    </div>

                    {/* Description */}

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold">
                        Description
                      </label>

                      <textarea
                        value={form.description}
                        onChange={(event) =>
                          updateField("description", event.target.value)
                        }
                        rows={4}
                        placeholder="Describe this product or service..."
                        className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-sm leading-6 outline-none focus:border-gray-950"
                      />
                    </div>

                    {/* Features */}

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold">
                        Features
                      </label>

                      <input
                        type="text"
                        value={form.features}
                        onChange={(event) =>
                          updateField("features", event.target.value)
                        }
                        placeholder="Responsive Design, SEO, Admin Panel"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-950"
                      />

                      <p className="mt-2 text-xs text-gray-400">
                        Separate features with commas.
                      </p>
                    </div>

                    {/* Active */}

                    <div className="sm:col-span-2">
                      <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4">
                        <input
                          type="checkbox"
                          checked={form.active}
                          onChange={(event) =>
                            updateField("active", event.target.checked)
                          }
                          className="h-4 w-4"
                        />

                        <span>
                          <span className="block text-sm font-semibold">
                            Active Product
                          </span>

                          <span className="mt-1 block text-xs text-gray-500">
                            Active products appear in the quotation builder.
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Footer */}

                <div className="flex justify-end gap-3 border-t border-gray-200 bg-gray-50 px-6 py-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    disabled={saving}
                    className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-gray-100 disabled:opacity-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {saving && <RefreshCw size={16} className="animate-spin" />}

                    {saving
                      ? "Saving..."
                      : editingProduct
                        ? "Update Product"
                        : "Create Product"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

/* ================================================================
   FORMAT PRICE
================================================================ */

function formatPrice(price, currency = "USD") {
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currency || "USD",
      maximumFractionDigits: 2,
    }).format(Number(price) || 0);
  } catch {
    return `${currency || "USD"} ${Number(price) || 0}`;
  }
}
