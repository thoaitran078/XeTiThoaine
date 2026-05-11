import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Truck,
  Wrench,
  Clock,
  Award,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const heroImage =
  "https://images.unsplash.com/photo-1777734795520-e18b5e40de5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMHRydWNrJTIwY29tbWVyY2lhbCUyMHZlaGljbGV8ZW58MXx8fHwxNzc4NTE0NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const engineImage =
  "https://images.unsplash.com/photo-1770705950498-d373e33ecb1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGVuZ2luZSUyMHBhcnRzJTIwbWVjaGFuaWNhbHxlbnwxfHx8fDE3Nzg1MTQ3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const brakeImage =
  "https://images.unsplash.com/photo-1760317890322-364a810cd4da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGJyYWtlJTIwc3lzdGVtJTIwcGFydHN8ZW58MXx8fHwxNzc4NTE0Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const suspensionImage =
  "https://images.unsplash.com/photo-1633504095688-4a1e36d6b3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHN1c3BlbnNpb24lMjBwYXJ0cyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3ODUxNDc5Nnww&ixlib=rb-4.1.0&q=80&w=1080";
const exhaustImage =
  "https://images.unsplash.com/photo-1652048184069-dae95c75b73f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGV4aGF1c3QlMjBzeXN0ZW0lMjBwYXJ0c3xlbnwxfHx8fDE3Nzg1MTQ3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const transmissionImage =
  "https://images.unsplash.com/photo-1725916631373-23184b9b9170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zbWlzc2lvbiUyMGdlYXJib3glMjBwYXJ0c3xlbnwxfHx8fDE3Nzg1MTQ3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const warehouseImage =
  "https://images.unsplash.com/photo-1764699186616-8f707281e4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcGFydHMlMjB3YXJlaG91c2UlMjBzdG9yZXxlbnwxfHx8fDE3Nzg1MTQ3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function HomePage() {
  const { t } = useLanguage();

  const categories = [
    {
      nameKey: "categories.cat1_name",
      image: engineImage,
      count: 320,
    },
    {
      nameKey: "categories.cat2_name",
      image: brakeImage,
      count: 214,
    },
    {
      nameKey: "categories.cat4_name",
      image: transmissionImage,
      count: 178,
    },
    {
      nameKey: "categories.cat5_name",
      image: exhaustImage,
      count: 95,
    },
    {
      nameKey: "categories.cat3_name",
      image: suspensionImage,
      count: 142,
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      nameKey: "THOAINE 4HK1 Engine Assembly",
      partNo: "TH-ENG-4HK1-001",
      price: 4850.0,
      rating: 4.9,
      reviews: 38,
      badgeKey: "products.badge_bestseller",
      categoryKey: "categories.cat1_name",
      image: engineImage,
    },
    {
      id: 2,
      nameKey: "Front Disc Brake Kit",
      partNo: "TH-BRK-FD-220",
      price: 389.0,
      rating: 4.7,
      reviews: 62,
      badgeKey: "products.badge_new",
      categoryKey: "categories.cat2_name",
      image: brakeImage,
    },
    {
      id: 3,
      nameKey: "Heavy-Duty Shock Absorber Set",
      partNo: "TH-SUS-SHA-440",
      price: 245.0,
      rating: 4.8,
      reviews: 54,
      badgeKey: "products.badge_popular",
      categoryKey: "categories.cat3_name",
      image: suspensionImage,
    },
    {
      id: 4,
      nameKey: "Stainless Exhaust Manifold",
      partNo: "TH-EXH-MFD-110",
      price: 520.0,
      rating: 4.6,
      reviews: 29,
      badgeKey: "products.badge_oem",
      categoryKey: "categories.cat5_name",
      image: exhaustImage,
    },
  ];

  const stats = [
    { value: "50,000+", labelKey: "home.stat_parts" },
    { value: "25+", labelKey: "home.stat_years" },
    { value: "120+", labelKey: "home.stat_countries" },
    { value: "98%", labelKey: "home.stat_satisfaction" },
  ];

  const whyUs = [
    {
      icon: Shield,
      titleKey: "home.why1_title",
      descKey: "home.why1_desc",
    },
    {
      icon: Truck,
      titleKey: "home.why2_title",
      descKey: "home.why2_desc",
    },
    {
      icon: Wrench,
      titleKey: "home.why3_title",
      descKey: "home.why3_desc",
    },
    {
      icon: Clock,
      titleKey: "home.why4_title",
      descKey: "home.why4_desc",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="THOAINE Trucks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(13,27,42,0.95) 0%, rgba(13,27,42,0.75) 50%, rgba(13,27,42,0.3) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div
              style={{ backgroundColor: "#CC1517" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded text-white text-xs tracking-widest mb-5"
            >
              <Award size={12} /> {t("home.badge")}
            </div>
            <h1
              className="text-white mb-5"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              {t("home.hero_title1")} <br />
              <span style={{ color: "#CC1517" }}>
                THOAINE
              </span>{" "}
              {t("home.hero_title2")}
            </h1>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {t("home.hero_desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                style={{ backgroundColor: "#CC1517" }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-white hover:opacity-90 transition-opacity"
              >
                {t("home.shop_all")} <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-white hover:bg-white/20 transition-colors"
              >
                {t("home.request_quote")}
              </Link>
            </div>
            <div className="flex flex-wrap gap-5 mt-10">
              {[
                t("home.oem_cert"),
                t("home.warranty"),
                t("home.worldwide"),
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <CheckCircle
                    size={16}
                    style={{ color: "#CC1517" }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div style={{ backgroundColor: "#CC1517" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {stats.map((s) => (
              <div key={s.labelKey}>
                <p className="text-3xl font-black">{s.value}</p>
                <p className="text-sm opacity-90 mt-0.5">
                  {t(s.labelKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              className="text-sm tracking-widest uppercase mb-2"
              style={{ color: "#CC1517" }}
            >
              {t("home.browse_title")}
            </p>
            <h2
              style={{
                color: "#0D1B2A",
                fontSize: "2rem",
                fontWeight: 800,
              }}
            >
              {t("home.browse_heading")}
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              {t("home.browse_desc")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.nameKey}
                to="/categories"
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={t(cat.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(13,27,42,0.9) 40%, transparent 100%)",
                    }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-sm font-semibold">
                    {t(cat.nameKey)}
                  </h3>
                  <p className="text-gray-300 text-xs mt-0.5">
                    {cat.count} {t("home.parts_count")}
                  </p>
                </div>
                <div
                  style={{ backgroundColor: "#CC1517" }}
                  className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight
                    size={14}
                    className="text-white"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/categories"
              style={{
                color: "#CC1517",
                border: "2px solid #CC1517",
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded hover:bg-red-50 transition-colors text-sm"
            >
              {t("home.view_all_cat")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p
                className="text-sm tracking-widest uppercase mb-2"
                style={{ color: "#CC1517" }}
              >
                {t("home.top_selling")}
              </p>
              <h2
                style={{
                  color: "#0D1B2A",
                  fontSize: "2rem",
                  fontWeight: 800,
                }}
              >
                {t("home.featured_heading")}
              </h2>
            </div>
            <Link
              to="/products"
              style={{ color: "#CC1517" }}
              className="hidden sm:flex items-center gap-1 text-sm hover:underline"
            >
              {t("home.view_all")} <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.nameKey}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span
                    style={{ backgroundColor: "#CC1517" }}
                    className="absolute top-3 left-3 text-white text-[11px] px-2 py-0.5 rounded"
                  >
                    {t(product.badgeKey)}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-400 mb-1">
                    {t(product.categoryKey)} &bull;{" "}
                    {product.partNo}
                  </p>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-snug">
                    {product.nameKey}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        fill={
                          i < Math.floor(product.rating)
                            ? "#CC1517"
                            : "none"
                        }
                        style={{
                          color:
                            i < Math.floor(product.rating)
                              ? "#CC1517"
                              : "#d1d5db",
                        }}
                      />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-lg font-black"
                      style={{ color: "#0D1B2A" }}
                    >
                      
                      {product.price.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })} vnđ
                    </span>
                    <button
                      style={{ backgroundColor: "#CC1517" }}
                      className="text-white text-xs px-3 py-1.5 rounded hover:opacity-90 transition-opacity"
                    >
                      {t("home.add_cart")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{ backgroundColor: "#0D1B2A" }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm tracking-widest uppercase mb-2"
              style={{ color: "#CC1517" }}
            >
              {t("home.why_title")}
            </p>
            <h2
              className="text-white"
              style={{ fontSize: "2rem", fontWeight: 800 }}
            >
              {t("home.why_heading")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.titleKey}
                style={{ backgroundColor: "#1e2d3d" }}
                className="rounded-xl p-6 border border-white/5 hover:border-red-600/40 transition-colors"
              >
                <div
                  style={{
                    backgroundColor: "rgba(204,21,23,0.15)",
                  }}
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                >
                  <item.icon
                    size={24}
                    style={{ color: "#CC1517" }}
                  />
                </div>
                <h3 className="text-white mb-2 text-base font-semibold">
                  {t(item.titleKey)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse Banner */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={warehouseImage}
          alt="THOAINE Warehouse"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(13,27,42,0.82)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-white mb-4"
            style={{ fontSize: "2.25rem", fontWeight: 800 }}
          >
            {t("home.cant_find")}
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            {t("home.cant_find_desc")}
          </p>
          <Link
            to="/contact"
            style={{ backgroundColor: "#CC1517" }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded text-white hover:opacity-90 transition-opacity text-sm"
          >
            {t("home.talk_specialist")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}