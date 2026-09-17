import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Edit3, Package, Plus, RefreshCw, Trash2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout.jsx";

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000/api"
).replace(/\/$/, "");

const emptyForm = {
  name: "",
  category: "",
  description: "",
  price: "",
  currency: "USD",
  features: [],
  deliveryTime: "",
  notes: "",
  active: true,
};

export function AdminProducts() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [form, setForm] = useState(emptyForm);
  const [featureInput, setFeatureInput] = useState("");
  const [saving, setSaving] = useState(false);

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

    navigate("/admin/login", { replace: true });
  }, [navigate]);

  const fetchProducts = useCallback(async () => {
    if (!token) {
      logout();
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await api.get("/products");

      console.log("Products API response:", response.data);

      if (response.data?.success) {
        const productList = Array.isArray(response.data.products)
          ? response.data.products
          : Array.isArray(response.data.data)
            ? response.data.data
            : [];

        setProducts(productList);
      } else {
        setProducts([]);

        setError(response.data?.message || "Unable to load products.");
      }
    } catch (error) {
      console.error("Get products error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      setError(
        error.response?.data?.message ||
          error.message ||
          "Unable to load products.",
      );
    } finally {
      setLoading(false);
    }
  }, [api, logout, token]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const openAddModal = () => {
    setEditingProduct(null);
    setForm({
      ...emptyForm,
      features: [],
    });
    setFeatureInput("");
    setError("");
    setModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);

    setForm({
      name: product.name || "",
      category: product.category || "",
      description: product.description || "",
      price: product.price ?? "",
      currency: product.currency || "USD",
      features: Array.isArray(product.features) ? product.features : [],
      deliveryTime: product.deliveryTime || "",
      notes: product.notes || "",
      active: product.active !== false,
    });

    setFeatureInput("");
    setError("");
    setModalOpen(true);
  };

  const closeModal = () => {
    if (saving) return;

    setModalOpen(false);
    setEditingProduct(null);
    setFeatureInput("");

    setForm({
      ...emptyForm,
      features: [],
    });
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addFeature = () => {
    const feature = featureInput.trim();

    if (!feature) return;

    const exists = form.features.some(
      (item) => item.toLowerCase() === feature.toLowerCase(),
    );

    if (exists) {
      setFeatureInput("");
      return;
    }

    setForm((prev) => ({
      ...prev,
      features: [...prev.features, feature],
    }));

    setFeatureInput("");
  };

  const removeFeature = (featureToRemove) => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.filter((feature) => feature !== featureToRemove),
    }));
  };

  const handleFeatureKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addFeature();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter a product name.");
      return;
    }

    if (!form.category.trim()) {
      alert("Please enter a category.");
      return;
    }

    if (
      form.price === "" ||
      Number.isNaN(Number(form.price)) ||
      Number(form.price) < 0
    ) {
      alert("Please enter a valid price.");
      return;
    }

    if (!form.currency.trim()) {
      alert("Please select a currency.");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        name: form.name.trim(),
        category: form.category.trim(),
        description: form.description.trim(),
        price: Number(form.price),
        currency: form.currency.trim().toUpperCase(),
        features: form.features,
        deliveryTime: form.deliveryTime.trim(),
        notes: form.notes.trim(),
        active: Boolean(form.active),
      };

      let response;

      if (editingProduct) {
        response = await api.patch(`/products/${editingProduct._id}`, payload);
      } else {
        response = await api.post("/products", payload);
      }

      if (!response.data?.success) {
        alert(response.data?.message || "Unable to save product.");
        return;
      }

      const savedProduct = response.data.product;

      if (editingProduct) {
        setProducts((prev) =>
          prev.map((product) =>
            product._id === editingProduct._id ? savedProduct : product,
          ),
        );
      } else {
        setProducts((prev) => [savedProduct, ...prev]);
      }

      closeModal();
    } catch (error) {
      console.error("Save product error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      alert(
        error.response?.data?.message ||
          error.message ||
          "Unable to save product.",
      );
    } finally {
      setSaving(false);
    }
  };

  const deleteProduct = async (product) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${product.name}"?`,
    );

    if (!confirmed) return;

    try {
      const response = await api.delete(`/products/${product._id}`);

      if (response.data?.success) {
        setProducts((prev) => prev.filter((item) => item._id !== product._id));
      } else {
        alert(response.data?.message || "Unable to delete product.");
      }
    } catch (error) {
      console.error("Delete product error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      alert(
        error.response?.data?.message ||
          error.message ||
          "Unable to delete product.",
      );
    }
  };

  const toggleActive = async (product) => {
    try {
      const response = await api.patch(`/products/${product._id}`, {
        active: !product.active,
      });

      if (response.data?.success) {
        setProducts((prev) =>
          prev.map((item) =>
            item._id === product._id ? response.data.product : item,
          ),
        );
      } else {
        alert(response.data?.message || "Unable to update product.");
      }
    } catch (error) {
      console.error("Toggle product status error:", error);

      if (error.response?.status === 401) {
        logout();
        return;
      }

      alert(
        error.response?.data?.message ||
          error.message ||
          "Unable to update product.",
      );
    }
  };

  const categories = useMemo(() => {
    return [
      ...new Set(products.map((product) => product.category).filter(Boolean)),
    ].sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !searchText ||
        product.name?.toLowerCase().includes(searchText) ||
        product.category?.toLowerCase().includes(searchText) ||
        product.description?.toLowerCase().includes(searchText);

      const matchesCategory =
        categoryFilter === "All" || product.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, categoryFilter]);

  const activeCount = products.filter((item) => item.active !== false).length;

  const inactiveCount = products.length - activeCount;

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* HEADER */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Catalogue
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              Products & Services
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage the products and services available for client quotations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={fetchProducts}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold transition hover:bg-gray-50 disabled:opacity-60"
            >
              <RefreshCw size={17} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>

            <button
              type="button"
              onClick={openAddModal}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              <Plus size={17} />
              Add Product
            </button>
          </div>
        </div>

        {/* ERROR */}

        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {/* STATS */}

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <MiniStat label="Total Products" value={products.length} />

          <MiniStat label="Active" value={activeCount} />

          <MiniStat label="Inactive" value={inactiveCount} />
        </div>

        {/* FILTERS */}

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products or services..."
              className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-gray-950 focus:bg-white"
            />

            <select
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium outline-none focus:border-gray-950"
            >
              <option value="All">All Categories</option>

              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* PRODUCTS */}

        <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white">
          <div className="border-b border-gray-200 px-6 py-5">
            <h2 className="text-lg font-bold">Product Catalogue</h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>

          {loading ? (
            <div className="p-16 text-center">
              <RefreshCw
                size={28}
                className="mx-auto animate-spin text-gray-400"
              />

              <p className="mt-4 text-sm text-gray-500">Loading products...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-16 text-center">
              <Package size={40} className="mx-auto text-gray-300" />

              <p className="mt-5 font-semibold">
                {products.length === 0
                  ? "No products available"
                  : "No products found"}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {products.length === 0
                  ? "Add your first product or service to get started."
                  : "Try changing your search or category filter."}
              </p>

              {products.length === 0 && (
                <button
                  type="button"
                  onClick={openAddModal}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white"
                >
                  <Plus size={17} />
                  Add Product
                </button>
              )}
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="p-6 transition hover:bg-gray-50"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-bold text-gray-950">
                          {product.name}
                        </h3>

                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                          {product.category}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            product.active !== false
                              ? "bg-green-50 text-green-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {product.active !== false ? "Active" : "Inactive"}
                        </span>
                      </div>

                      {product.description && (
                        <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-500">
                          {product.description}
                        </p>
                      )}

                      {Array.isArray(product.features) &&
                        product.features.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {product.features.map((feature) => (
                              <span
                                key={feature}
                                className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}

                      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                        {product.deliveryTime && (
                          <span>Delivery: {product.deliveryTime}</span>
                        )}

                        {product.notes && <span>Notes: {product.notes}</span>}
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
                      <div className="text-2xl font-bold text-gray-950">
                        {formatPrice(product.price, product.currency)}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => toggleActive(product)}
                          className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold transition hover:bg-gray-100"
                        >
                          {product.active !== false ? "Deactivate" : "Activate"}
                        </button>

                        <button
                          type="button"
                          onClick={() => openEditModal(product)}
                          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold transition hover:bg-gray-100"
                        >
                          <Edit3 size={15} />
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => deleteProduct(product)}
                          className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                        >
                          <Trash2 size={15} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* MODAL */}

      {modalOpen && (
        <ProductModal
          editingProduct={editingProduct}
          form={form}
          featureInput={featureInput}
          saving={saving}
          onChange={handleChange}
          onFeatureInputChange={setFeatureInput}
          onAddFeature={addFeature}
          onRemoveFeature={removeFeature}
          onFeatureKeyDown={handleFeatureKeyDown}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      )}
    </AdminLayout>
  );
}

/* ================================================================
   MODAL
================================================================ */

function ProductModal({
  editingProduct,
  form,
  featureInput,
  saving,
  onChange,
  onFeatureInputChange,
  onAddFeature,
  onRemoveFeature,
  onFeatureKeyDown,
  onSubmit,
  onClose,
}) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4">
      <div className="flex min-h-full items-center justify-center py-8">
        <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                Product Catalogue
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                {editingProduct ? "Edit Product" : "Add Product"}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100 disabled:opacity-50"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={onSubmit}>
            <div className="max-h-[70vh] overflow-y-auto p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Product / Service Name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Website Development"
                  required
                />

                <Field
                  label="Category"
                  name="category"
                  value={form.category}
                  onChange={onChange}
                  placeholder="Website"
                  required
                />

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Price
                  </label>

                  <div className="flex">
                    <select
                      name="currency"
                      value={form.currency}
                      onChange={onChange}
                      className="w-28 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 px-3 py-3 text-sm font-semibold outline-none focus:border-gray-950"
                    >
                      <option value="USD">USD</option>
                      <option value="CAD">CAD</option>
                      <option value="AUD">AUD</option>
                      <option value="GBP">GBP</option>
                      <option value="INR">INR</option>
                    </select>

                    <input
                      type="number"
                      name="price"
                      value={form.price}
                      onChange={onChange}
                      min="0"
                      step="0.01"
                      placeholder="499"
                      required
                      className="min-w-0 flex-1 rounded-r-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-950"
                    />
                  </div>
                </div>

                <Field
                  label="Delivery Time"
                  name="deliveryTime"
                  value={form.deliveryTime}
                  onChange={onChange}
                  placeholder="7-14 days"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold">
                  Description
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={onChange}
                  rows={4}
                  placeholder="Describe what the client receives..."
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-gray-950"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold">
                  Features / Included Items
                </label>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={featureInput}
                    onChange={(event) =>
                      onFeatureInputChange(event.target.value)
                    }
                    onKeyDown={onFeatureKeyDown}
                    placeholder="e.g. Responsive Design"
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-950"
                  />

                  <button
                    type="button"
                    onClick={onAddFeature}
                    className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                  >
                    Add
                  </button>
                </div>

                {form.features.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {form.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700"
                      >
                        {feature}

                        <button
                          type="button"
                          onClick={() => onRemoveFeature(feature)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <X size={13} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold">
                  Notes
                </label>

                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={onChange}
                  rows={3}
                  placeholder="Optional notes, exclusions, conditions..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm leading-6 outline-none focus:border-gray-950"
                />
              </div>

              <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4">
                <input
                  type="checkbox"
                  name="active"
                  checked={form.active}
                  onChange={onChange}
                  className="h-4 w-4"
                />

                <div>
                  <p className="text-sm font-semibold">Product is active</p>

                  <p className="mt-1 text-xs text-gray-500">
                    Active products will be available when creating client
                    quotations.
                  </p>
                </div>
              </label>
            </div>

            <div className="flex justify-end gap-3 border-t border-gray-200 bg-gray-50 px-6 py-5">
              <button
                type="button"
                onClick={onClose}
                disabled={saving}
                className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold hover:bg-gray-100 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-gray-950 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
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
  );
}

/* ================================================================
   FIELD
================================================================ */

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}</label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-950"
      />
    </div>
  );
}

/* ================================================================
   STAT
================================================================ */

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <p className="text-sm font-medium text-gray-500">{label}</p>

      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

/* ================================================================
   PRICE
================================================================ */

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

export default AdminProducts;
