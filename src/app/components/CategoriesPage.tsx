import { Link } from "react-router";
import { ArrowRight, Zap, Settings, RotateCcw, Wind, Cpu, Layers, Droplets, Thermometer } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const engineImage = "https://images.unsplash.com/photo-1770705950498-d373e33ecb1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGVuZ2luZSUyMHBhcnRzJTIwbWVjaGFuaWNhbHxlbnwxfHx8fDE3Nzg1MTQ3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const brakeImage = "https://images.unsplash.com/photo-1760317890322-364a810cd4da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGJyYWtlJTIwc3lzdGVtJTIwcGFydHN8ZW58MXx8fHwxNzc4NTE0Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const suspensionImage = "https://images.unsplash.com/photo-1633504095688-4a1e36d6b3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHN1c3BlbnNpb24lMjBwYXJ0cyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3ODUxNDc5Nnww&ixlib=rb-4.1.0&q=80&w=1080";
const exhaustImage = "https://images.unsplash.com/photo-1652048184069-dae95c75b73f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGV4aGF1c3QlMjBzeXN0ZW0lMjBwYXJ0c3xlbnwxfHx8fDE3Nzg1MTQ3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const transmissionImage = "https://images.unsplash.com/photo-1725916631373-23184b9b9170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zbWlzc2lvbiUyMGdlYXJib3glMjBwYXJ0c3xlbnwxfHx8fDE3Nzg1MTQ3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080";

const subCatsEn: Record<string, string[]> = {
  "categories.cat1_name": ["Engine Assembly", "Cylinder Head", "Gaskets & Seals", "Water Pump", "Radiator", "Thermostat", "Timing Components"],
  "categories.cat2_name": ["Disc Brake Kit", "Drum Brake", "Brake Pads", "Brake Rotors", "Calipers", "Master Cylinder", "ABS Sensors"],
  "categories.cat3_name": ["Shock Absorbers", "Leaf Springs", "Ball Joints", "Tie Rod Ends", "Stabilizer Bar", "Steering Rack", "Control Arms"],
  "categories.cat4_name": ["Gearbox Assembly", "Clutch Kit", "Propeller Shaft", "Differential", "Transfer Case", "U-Joints", "Flywheel"],
  "categories.cat5_name": ["Exhaust Manifold", "Muffler", "Catalytic Converter", "DPF Filter", "EGR Valve", "Flex Pipe", "Exhaust Clamps"],
  "categories.cat6_name": ["Alternator", "Starter Motor", "ECU / ECM", "Wiring Harness", "Headlights", "Taillights", "Sensors"],
  "categories.cat7_name": ["Turbo Assembly", "Intercooler", "Actuator", "Wastegate Valve", "Charge Pipe", "Turbo Rebuild Kit"],
  "categories.cat8_name": ["Oil Filter", "Air Filter", "Fuel Filter", "Cabin Filter", "Engine Oil", "Coolant", "Hydraulic Fluid"],
};

const subCatsVi: Record<string, string[]> = {
  "categories.cat1_name": ["Bộ động cơ", "Nắp máy", "Gioăng & Phớt", "Bơm nước", "Két nước", "Van hằng nhiệt", "Bộ phận phân phối khí"],
  "categories.cat2_name": ["Bộ phanh đĩa", "Phanh trống", "Má phanh", "Đĩa phanh", "Kẹp phanh", "Xy-lanh tổng", "Cảm biến ABS"],
  "categories.cat3_name": ["Bộ giảm xóc", "Nhíp lá", "Khớp bi", "Đầu thanh nối", "Thanh cân bằng", "Hộp lái", "Cánh tay đòn"],
  "categories.cat4_name": ["Hộp số", "Bộ ly hợp", "Trục các-đăng", "Bộ vi sai", "Hộp số phụ", "Khớp chữ thập", "Bánh đà"],
  "categories.cat5_name": ["Ống góp xả", "Bình giảm âm", "Bộ lọc xúc tác", "Lọc DPF", "Van EGR", "Ống xả mềm", "Kẹp ống xả"],
  "categories.cat6_name": ["Máy phát điện", "Máy đề", "ECU / ECM", "Dây điện", "Đèn pha", "Đèn hậu", "Cảm biến"],
  "categories.cat7_name": ["Bộ tăng áp", "Két làm mát khí nạp", "Bộ truyền động", "Van xả áp", "Ống nạp", "Bộ đại tu turbo"],
  "categories.cat8_name": ["Lọc dầu", "Lọc gió", "Lọc nhiên liệu", "Lọc cabin", "Dầu động cơ", "Dầu làm mát", "Dầu thủy lực"],
};

export function CategoriesPage() {
  const { t, lang } = useLanguage();

  const categories = [
    { nameKey: "categories.cat1_name", descKey: "categories.cat1_desc", count: 320, icon: Thermometer, image: engineImage },
    { nameKey: "categories.cat2_name", descKey: "categories.cat2_desc", count: 214, icon: Settings,    image: brakeImage },
    { nameKey: "categories.cat3_name", descKey: "categories.cat3_desc", count: 142, icon: RotateCcw,   image: suspensionImage },
    { nameKey: "categories.cat4_name", descKey: "categories.cat4_desc", count: 178, icon: Layers,      image: transmissionImage },
    { nameKey: "categories.cat5_name", descKey: "categories.cat5_desc", count: 95,  icon: Wind,        image: exhaustImage },
    { nameKey: "categories.cat6_name", descKey: "categories.cat6_desc", count: 267, icon: Zap,         image: engineImage },
    { nameKey: "categories.cat7_name", descKey: "categories.cat7_desc", count: 88,  icon: Cpu,         image: exhaustImage },
    { nameKey: "categories.cat8_name", descKey: "categories.cat8_desc", count: 196, icon: Droplets,    image: transmissionImage },
  ];

  const subCats = lang === "vi" ? subCatsVi : subCatsEn;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div style={{ backgroundColor: "#0D1B2A" }} className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm mb-1">{t("categories.breadcrumb")}</p>
          <h1 className="text-white" style={{ fontSize: "2rem", fontWeight: 800 }}>
            {t("categories.heading")}
          </h1>
          <p className="text-gray-400 mt-1">{t("categories.subheading")}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.nameKey}
              to="/products"
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row group border border-gray-100"
            >
              {/* Image */}
              <div className="sm:w-44 h-44 sm:h-auto overflow-hidden shrink-0 relative">
                <img
                  src={cat.image}
                  alt={t(cat.nameKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, transparent 60%, rgba(13,27,42,0.3))" }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        style={{ backgroundColor: "rgba(204,21,23,0.1)" }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                      >
                        <cat.icon size={16} style={{ color: "#CC1517" }} />
                      </div>
                      <h2 className="text-gray-900 text-base font-semibold">{t(cat.nameKey)}</h2>
                    </div>
                    <span
                      style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }}
                      className="text-xs px-2 py-0.5 rounded-full"
                    >
                      {cat.count} {t("categories.parts_count")}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{t(cat.descKey)}</p>
                  {/* Sub categories */}
                  <div className="flex flex-wrap gap-1.5">
                    {(subCats[cat.nameKey] ?? []).map((sub) => (
                      <span
                        key={sub}
                        className="text-xs px-2 py-0.5 rounded border border-gray-200 text-gray-500"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-3" style={{ color: "#CC1517" }}>
                  <span className="text-sm font-medium">{t("categories.browse")}</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
