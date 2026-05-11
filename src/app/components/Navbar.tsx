import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Truck, Phone, Search, ShoppingCart, ChevronDown } from "lucide-react";
import { useLanguage, Lang } from "../context/LanguageContext";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { labelKey: "nav.home", to: "/" },
    { labelKey: "nav.products", to: "/products" },
    { labelKey: "nav.categories", to: "/categories" },
    { labelKey: "nav.about", to: "/about" },
    { labelKey: "nav.contact", to: "/contact" },
  ];

  const languages: { code: Lang; label: string; flag: string }[] = [
    { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
    { code: "en", label: "English", flag: "🇬🇧" },
  ];

  const currentLang = languages.find((l) => l.code === lang)!;

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div style={{ backgroundColor: "#CC1517" }} className="text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Phone size={14} />
            <span>
              {t("nav.phone_label")} &nbsp;|&nbsp; dh52006193@thoaine.com
            </span>
          </span>
          <span className="hidden sm:block">{t("nav.free_shipping")}</span>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{ backgroundColor: "#0D1B2A" }} className="text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div
                style={{ backgroundColor: "#CC1517" }}
                className="w-10 h-10 rounded flex items-center justify-center"
              >
                <Truck size={22} className="text-white" />
              </div>
              <div>
                <span className="text-2xl tracking-widest font-black text-white">THOAINE</span>
                <p className="text-xs tracking-wider" style={{ color: "#aab3be" }}>
                  {t("nav.tagline")}
                </p>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm tracking-wide transition-colors hover:text-red-400 pb-1 ${
                    isActive(link.to)
                      ? "text-white border-b-2 border-red-500"
                      : "text-gray-300"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Search size={18} className="text-gray-300" />
              </button>
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors relative">
                <ShoppingCart size={18} className="text-gray-300" />
                <span
                  style={{ backgroundColor: "#CC1517" }}
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] flex items-center justify-center text-white"
                >
                  0
                </span>
              </button>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded text-sm text-gray-200 hover:bg-white/15 transition-colors"
                >
                  <span>{currentLang.flag}</span>
                  <span>{currentLang.code.toUpperCase()}</span>
                  <ChevronDown size={13} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
                </button>
                {langOpen && (
                  <div
                    style={{ backgroundColor: "#1e2d3d", border: "1px solid rgba(255,255,255,0.1)" }}
                    className="absolute right-0 mt-1 w-40 rounded-lg shadow-xl z-50 overflow-hidden"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setLangOpen(false); }}
                        style={lang === l.code ? { backgroundColor: "#CC1517" } : {}}
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-left transition-colors ${
                          lang === l.code ? "text-white" : "text-gray-300 hover:bg-white/10"
                        }`}
                      >
                        <span className="text-base">{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                style={{ backgroundColor: "#CC1517" }}
                className="px-4 py-2 rounded text-sm text-white hover:opacity-90 transition-opacity"
              >
                {t("nav.get_quote")}
              </Link>
            </div>

            {/* Mobile: lang + menu toggle */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                  className="flex items-center gap-1 px-2 py-1.5 rounded text-xs text-gray-200"
                >
                  <span>{currentLang.flag}</span>
                  <span>{currentLang.code.toUpperCase()}</span>
                  <ChevronDown size={11} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
                </button>
                {langOpen && (
                  <div
                    style={{ backgroundColor: "#1e2d3d", border: "1px solid rgba(255,255,255,0.1)" }}
                    className="absolute right-0 mt-1 w-40 rounded-lg shadow-xl z-50 overflow-hidden"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setLangOpen(false); }}
                        style={lang === l.code ? { backgroundColor: "#CC1517" } : {}}
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-left transition-colors ${
                          lang === l.code ? "text-white" : "text-gray-300 hover:bg-white/10"
                        }`}
                      >
                        <span className="text-base">{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="p-2 rounded hover:bg-white/10"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{ backgroundColor: "#0D1B2A", borderTop: "1px solid #1e2d3d" }}
            className="md:hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 px-3 rounded text-sm ${
                    isActive(link.to)
                      ? "bg-red-600 text-white"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                style={{ backgroundColor: "#CC1517" }}
                className="block mt-2 py-2 px-3 rounded text-sm text-white text-center"
              >
                {t("nav.get_quote")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
