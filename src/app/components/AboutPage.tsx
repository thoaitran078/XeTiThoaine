import { Award, Users, Globe, CheckCircle, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const warehouseImage = "https://images.unsplash.com/photo-1764699186616-8f707281e4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcGFydHMlMjB3YXJlaG91c2UlMjBzdG9yZXxlbnwxfHx8fDE3Nzg1MTQ3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const truckImage = "https://images.unsplash.com/photo-1777734795520-e18b5e40de5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMHRydWNrJTIwY29tbWVyY2lhbCUyMHZlaGljbGV8ZW58MXx8fHwxNzc4NTE0NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function AboutPage() {
  const { t } = useLanguage();

  const milestones = [
    { year: "2002", eventKey: "about.timeline_1" },
    { year: "2018", eventKey: "about.timeline_2" },
    { year: "2019", eventKey: "about.timeline_3" },
    { year: "2020", eventKey: "about.timeline_4" },
    { year: "2021", eventKey: "about.timeline_5" },
    { year: "2026", eventKey: "about.timeline_6" },
  ];

  const team = [
    { name: "cha tui", roleKey: "about.team_ceo",         exp: "30 năm" },
    { name: "mẹ tui",  roleKey: "about.team_procurement",  exp: "22 năm" },
    { name: "Chị tui",     roleKey: "about.team_logistics",    exp: "18 năm" },
    { name: "Anh tui ",     roleKey: "about.team_support",      exp: "15 năm" },
  ];

  const certKeys = [
    "about.cert1", "about.cert2", "about.cert3",
    "about.cert4", "about.cert5", "about.cert6",
  ];

  const checkKeys = [
    "about.check1", "about.check2", "about.check3",
    "about.check4", "about.check5", "about.check6",
  ];

  const values = [
    { icon: Target,    titleKey: "about.val1_title", descKey: "about.val1_desc" },
    { icon: TrendingUp,titleKey: "about.val2_title", descKey: "about.val2_desc" },
    { icon: Globe,     titleKey: "about.val3_title", descKey: "about.val3_desc" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative py-20 overflow-hidden" style={{ backgroundColor: "#0D1B2A" }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${truckImage})` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div
            style={{ backgroundColor: "rgba(204,21,23,0.15)", border: "1px solid rgba(204,21,23,0.3)" }}
            className="inline-block px-4 py-1 rounded text-sm tracking-widest text-red-400 mb-5"
          >
            {t("about.badge")}
          </div>
          <h1
            className="text-white mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, lineHeight: 1.1 }}
          >
            {t("about.hero_title1")} <br />
            <span style={{ color: "#CC1517" }}>{t("about.hero_title2")}</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("about.hero_desc")}
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "#CC1517" }}>
                {t("about.mission_badge")}
              </p>
              <h2 style={{ color: "#0D1B2A", fontSize: "2rem", fontWeight: 800, lineHeight: 1.2 }}>
                {t("about.mission_heading")}
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">{t("about.mission_p1")}</p>
              <p className="text-gray-600 mt-3 leading-relaxed">{t("about.mission_p2")}</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {checkKeys.map((key) => (
                  <div key={key} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} style={{ color: "#CC1517" }} className="shrink-0" />
                    {t(key)}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-auto">
              <img src={warehouseImage} alt="THOAINE Warehouse" className="w-full h-full object-cover" />
              <div
                style={{ backgroundColor: "#CC1517" }}
                className="absolute bottom-6 left-6 right-6 rounded-xl p-5 text-white"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-black">50K+</p>
                    <p className="text-xs opacity-90">{t("about.stat_parts")}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">120+</p>
                    <p className="text-xs opacity-90">{t("about.stat_countries")}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">25</p>
                    <p className="text-xs opacity-90">{t("about.stat_years")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Cards */}
      <section style={{ backgroundColor: "#f8f9fa" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#CC1517" }}>
              {t("about.values_badge")}
            </p>
            <h2 style={{ color: "#0D1B2A", fontSize: "2rem", fontWeight: 800 }}>
              {t("about.values_heading")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.titleKey}
                style={{ backgroundColor: "#0D1B2A" }}
                className="rounded-xl p-7 text-center"
              >
                <div
                  style={{ backgroundColor: "rgba(204,21,23,0.2)" }}
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <v.icon size={26} style={{ color: "#CC1517" }} />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{t(v.titleKey)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t(v.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#CC1517" }}>
              {t("about.timeline_badge")}
            </p>
            <h2 style={{ color: "#0D1B2A", fontSize: "2rem", fontWeight: 800 }}>
              {t("about.timeline_heading")}
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
              style={{ backgroundColor: "#e5e7eb" }}
            />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="inline-block bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
                      <p className="text-sm font-semibold text-gray-800">{t(m.eventKey)}</p>
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#CC1517" }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0 z-10"
                  >
                    {m.year.slice(2)}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`font-black text-xl ${i % 2 === 0 ? "" : "text-right"}`}
                      style={{ color: "#0D1B2A" }}
                    >
                      {m.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ backgroundColor: "#0D1B2A" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#CC1517" }}>
              {t("about.team_badge")}
            </p>
            <h2 className="text-white" style={{ fontSize: "2rem", fontWeight: 800 }}>
              {t("about.team_heading")}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                style={{ backgroundColor: "#1e2d3d" }}
                className="rounded-xl p-5 text-center border border-white/5"
              >
                <div
                  style={{ backgroundColor: "rgba(204,21,23,0.15)" }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <Users size={28} style={{ color: "#CC1517" }} />
                </div>
                <h3 className="text-white text-sm font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400 text-xs">{t(member.roleKey)}</p>
                <p className="text-gray-500 text-xs mt-1">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#CC1517" }}>
              {t("about.cert_badge")}
            </p>
            <h2 style={{ color: "#0D1B2A", fontSize: "2rem", fontWeight: 800 }}>
              {t("about.cert_heading")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certKeys.map((key) => (
              <div
                key={key}
                className="flex items-center gap-3 border border-gray-200 rounded-xl px-5 py-4"
              >
                <Award size={20} style={{ color: "#CC1517" }} className="shrink-0" />
                <span className="text-sm font-medium text-gray-700">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
