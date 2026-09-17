import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BarChart3,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  X,
} from "lucide-react";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin/login", { replace: true });
  };

  const navItems = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Analytics",
      path: "/admin/analytics",
      icon: BarChart3,
    },
    {
      label: "Products",
      path: "/admin/products",
      icon: Package,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-950">
      {/* =========================================================
          HEADER
      ========================================================== */}

      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 transition hover:bg-gray-50 lg:hidden"
              aria-label="Open admin menu"
            >
              <Menu size={20} />
            </button>

            {/* Brand */}

            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="text-left"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                Errorfix Solution
              </p>

              <p className="text-sm font-bold">Admin Panel</p>
            </button>
          </div>

          {/* Logout */}

          <button
            type="button"
            onClick={logout}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold transition hover:bg-gray-50"
          >
            <LogOut size={17} />

            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* =========================================================
          BODY
      ========================================================== */}

      <div className="flex">
        {/* =======================================================
            DESKTOP SIDEBAR
        ======================================================== */}

        <aside className="hidden min-h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-gray-200 bg-white lg:block">
          <div className="sticky top-16 p-4">
            <AdminNavigation navItems={navItems} />
          </div>
        </aside>

        {/* =======================================================
            MOBILE SIDEBAR
        ======================================================== */}

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Overlay */}

            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 h-full w-full bg-black/40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}

            <aside className="relative h-full w-72 bg-white shadow-2xl">
              <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                    Errorfix Solution
                  </p>

                  <p className="text-sm font-bold">Admin Panel</p>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-gray-100"
                  aria-label="Close admin menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-4">
                <AdminNavigation
                  navItems={navItems}
                  onNavigate={() => setMobileMenuOpen(false)}
                />
              </div>
            </aside>
          </div>
        )}

        {/* =======================================================
            PAGE
        ======================================================== */}

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}

function AdminNavigation({ navItems, onNavigate }) {
  return (
    <nav className="space-y-2">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-gray-950 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
              }`
            }
          >
            <Icon size={18} />

            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
}
