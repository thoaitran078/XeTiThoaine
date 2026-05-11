import { useState } from "react";
import { Search, Filter, Star, ShoppingCart, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const engineImage = "https://images.unsplash.com/photo-1770705950498-d373e33ecb1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGVuZ2luZSUyMHBhcnRzJTIwbWVjaGFuaWNhbHxlbnwxfHx8fDE3Nzg1MTQ3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const brakeImage = "https://images.unsplash.com/photo-1760317890322-364a810cd4da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGJyYWtlJTIwc3lzdGVtJTIwcGFydHN8ZW58MXx8fHwxNzc4NTE0Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const suspensionImage = "https://images.unsplash.com/photo-1633504095688-4a1e36d6b3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHN1c3BlbnNpb24lMjBwYXJ0cyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3ODUxNDc5Nnww&ixlib=rb-4.1.0&q=80&w=1080";
const exhaustImage = "https://images.unsplash.com/photo-1652048184069-dae95c75b73f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGV4aGF1c3QlMjBzeXN0ZW0lMjBwYXJ0c3xlbnwxfHx8fDE3Nzg1MTQ3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const transmissionImage = "https://images.unsplash.com/photo-1725916631373-23184b9b9170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zbWlzc2lvbiUyMGdlYXJib3glMjBwYXJ0c3xlbnwxfHx8fDE3Nzg1MTQ3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080";

const allProducts = [
  { id: 1,  name: "THOAINE 4HK1 Engine Assembly",   partNo: "TH-ENG-4HK1-001", price: 4850, rating: 4.9, reviews: 38, badgeKey: "products.badge_bestseller", catKey: "categories.cat1_name", image: engineImage,       inStock: true  },
  { id: 2,  name: "THOAINE 6HK1 Long Block Engine",  partNo: "TH-ENG-6HK1-002", price: 6200, rating: 4.8, reviews: 21, badgeKey: "products.badge_oem",        catKey: "categories.cat1_name", image: engineImage,       inStock: true  },
  { id: 3,  name: "Cylinder Head Assembly 4JJ1",      partNo: "TH-ENG-CYL-110",  price: 980,  rating: 4.7, reviews: 44, badgeKey: "",                          catKey: "categories.cat1_name", image: engineImage,       inStock: true  },
  { id: 4,  name: "Water Pump Assembly",              partNo: "TH-ENG-WP-330",   price: 145,  rating: 4.6, reviews: 89, badgeKey: "",                          catKey: "categories.cat1_name", image: engineImage,       inStock: false },
  { id: 5,  name: "Front Disc Brake Kit",             partNo: "TH-BRK-FD-220",   price: 389,  rating: 4.7, reviews: 62, badgeKey: "products.badge_new",        catKey: "categories.cat2_name", image: brakeImage,        inStock: true  },
  { id: 6,  name: "Rear Drum Brake Assembly",         partNo: "TH-BRK-RD-410",   price: 265,  rating: 4.5, reviews: 33, badgeKey: "",                          catKey: "categories.cat2_name", image: brakeImage,        inStock: true  },
  { id: 7,  name: "Brake Master Cylinder",            partNo: "TH-BRK-MC-105",   price: 188,  rating: 4.6, reviews: 47, badgeKey: "",                          catKey: "categories.cat2_name", image: brakeImage,        inStock: true  },
  { id: 8,  name: "ABS Sensor – Front Axle",          partNo: "TH-BRK-ABS-201",  price: 92,   rating: 4.4, reviews: 58, badgeKey: "",                          catKey: "categories.cat2_name", image: brakeImage,        inStock: false },
  { id: 9,  name: "Heavy-Duty Shock Absorber Set",    partNo: "TH-SUS-SHA-440",   price: 245,  rating: 4.8, reviews: 54, badgeKey: "products.badge_popular",   catKey: "categories.cat3_name", image: suspensionImage,   inStock: true  },
  { id: 10, name: "Front Leaf Spring Assembly",       partNo: "TH-SUS-LS-310",    price: 320,  rating: 4.7, reviews: 29, badgeKey: "",                          catKey: "categories.cat3_name", image: suspensionImage,   inStock: true  },
  { id: 11, name: "Stabilizer Bar Link Kit",          partNo: "TH-SUS-SBL-220",   price: 78,   rating: 4.5, reviews: 61, badgeKey: "",                          catKey: "categories.cat3_name", image: suspensionImage,   inStock: true  },
  { id: 12, name: "Stainless Exhaust Manifold",       partNo: "TH-EXH-MFD-110",   price: 520,  rating: 4.6, reviews: 29, badgeKey: "products.badge_oem",       catKey: "categories.cat5_name", image: exhaustImage,      inStock: true  },
  { id: 13, name: "DPF Filter Assembly",              partNo: "TH-EXH-DPF-440",   price: 890,  rating: 4.5, reviews: 18, badgeKey: "",                          catKey: "categories.cat5_name", image: exhaustImage,      inStock: true  },
  { id: 14, name: "5-Speed Manual Gearbox",           partNo: "TH-TRS-5M-200",    price: 3100, rating: 4.9, reviews: 12, badgeKey: "products.badge_oem",       catKey: "categories.cat4_name", image: transmissionImage, inStock: true  },
  { id: 15, name: "Clutch Kit Complete Set",          partNo: "TH-TRS-CLT-310",   price: 420,  rating: 4.7, reviews: 35, badgeKey: "",                          catKey: "categories.cat4_name", image: transmissionImage, inStock: false },
  { id: 16, name: "Propeller Shaft Assembly",         partNo: "TH-TRS-PS-115",    price: 680,  rating: 4.6, reviews: 22, badgeKey: "",                          catKey: "categories.cat4_name", image: transmissionImage, inStock: true  },
];

// Category filter keys mapped to translation keys
const categoryFilters = [
  { key: "all",        labelKey: "products.cat_all" },
  { key: "engine",     labelKey: "categories.cat1_name" },
  { key: "brakes",     labelKey: "categories.cat2_name" },
  { key: "suspension", labelKey: "categories.cat3_name" },
  { key: "exhaust",    labelKey: "categories.cat5_name" },
  { key: "trans",      labelKey: "categories.cat4_name" },
];

const catKeyMap: Record<string, string> = {
  engine:     "categories.cat1_name",
  brakes:     "categories.cat2_name",
  suspension: "categories.cat3_name",
  exhaust:    "categories.cat5_name",
  trans:      "categories.cat4_name",
};

export function ProductsPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const filtered = allProducts
    .filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.partNo.toLowerCase().includes(search.toLowerCase());
      const matchesCat =
        activeFilter === "all" || p.catKey === catKeyMap[activeFilter];
      const matchesStock = !showInStockOnly || p.inStock;
      return matchesSearch && matchesCat && matchesStock;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div style={{ backgroundColor: "#0D1B2A" }} className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm mb-1">{t("products.breadcrumb")}</p>
          <h1 className="text-white" style={{ fontSize: "2rem", fontWeight: 800 }}>
            {t("products.heading")}
          </h1>
          <p className="text-gray-400 mt-1">{t("products.subheading")}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t("products.search_placeholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="default">{t("products.sort_default")}</option>
            <option value="price-asc">{t("products.sort_price_asc")}</option>
            <option value="price-desc">{t("products.sort_price_desc")}</option>
            <option value="rating">{t("products.sort_rating")}</option>
          </select>
          {/* In Stock Toggle */}
          <label className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg bg-white cursor-pointer text-sm">
            <input
              type="checkbox"
              checked={showInStockOnly}
              onChange={(e) => setShowInStockOnly(e.target.checked)}
              className="accent-red-600"
            />
            {t("products.in_stock_only")}
          </label>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 flex-wrap mb-6">
          {categoryFilters.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              style={
                activeFilter === cat.key
                  ? { backgroundColor: "#CC1517", color: "white" }
                  : { backgroundColor: "white", color: "#374151", border: "1px solid #e5e7eb" }
              }
              className="px-4 py-1.5 rounded-full text-sm transition-colors hover:opacity-90 flex items-center gap-1"
            >
              {t(cat.labelKey)}
              {cat.key !== "all" && (
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full ml-1"
                  style={
                    activeFilter === cat.key
                      ? { backgroundColor: "rgba(255,255,255,0.25)" }
                      : { backgroundColor: "#f3f4f6", color: "#6b7280" }
                  }
                >
                  {allProducts.filter((p) => p.catKey === catKeyMap[cat.key]).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500 mb-4">
          {t("products.showing")} <strong>{filtered.length}</strong> {t("products.of")} {allProducts.length} {t("products.parts")}
        </p>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Filter size={40} className="mx-auto mb-3 opacity-40" />
            <p>{t("products.no_results")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badgeKey && (
                    <span
                      style={{ backgroundColor: "#CC1517" }}
                      className="absolute top-3 left-3 text-white text-[11px] px-2 py-0.5 rounded"
                    >
                      {t(product.badgeKey)}
                    </span>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
                        {t("products.out_of_stock")}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-400 mb-1">
                    {t(product.catKey)} &bull; {product.partNo}
                  </p>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-snug">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        fill={i < Math.floor(product.rating) ? "#CC1517" : "none"}
                        style={{ color: i < Math.floor(product.rating) ? "#CC1517" : "#d1d5db" }}
                      />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black" style={{ color: "#0D1B2A" }}>
                      {product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })} vnđ
                    </span>
                    <button
                      disabled={!product.inStock}
                      style={product.inStock ? { backgroundColor: "#CC1517" } : {}}
                      className={`flex items-center gap-1 text-white text-xs px-3 py-1.5 rounded transition-opacity ${
                        product.inStock
                          ? "hover:opacity-90"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <ShoppingCart size={13} />
                      {product.inStock ? t("products.add") : t("products.unavailable")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
