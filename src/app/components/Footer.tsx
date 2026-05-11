import { Link } from "react-router";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { labelKey: "nav.home", to: "/" },
    { labelKey: "nav.products", to: "/products" },
    { labelKey: "nav.categories", to: "/categories" },
    { labelKey: "nav.about", to: "/about" },
    { labelKey: "nav.contact", to: "/contact" },
  ];

  const catKeys = [
    "footer.cat1",
    "footer.cat2",
    "footer.cat3",
    "footer.cat4",
    "footer.cat5",
    "footer.cat6",
    "footer.cat7",
    "footer.cat8",
  ];

  return (
    <footer
      style={{ backgroundColor: "#0D1B2A" }}
      className="text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{ backgroundColor: "#CC1517" }}
                className="w-10 h-10 rounded flex items-center justify-center"
              >
                <span className="text-white text-lg font-black">
                  T
                </span>
              </div>
              <div>
                <span className="text-xl tracking-widest font-black text-white">
                  THOAINE
                </span>
                <p className="text-xs tracking-wider text-gray-400">
                  {t("nav.tagline")}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mt-3">
              {t("footer.desc")}
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Youtube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{ backgroundColor: "#1e2d3d" }}
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Icon size={16} className="text-gray-300" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white mb-4"
              style={{
                borderLeft: "3px solid #CC1517",
                paddingLeft: "10px",
              }}
            >
              {t("footer.quick_links")}
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-red-400 transition-colors flex items-center gap-2"
                  >
                    <span style={{ color: "#CC1517" }}>›</span>{" "}
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Part Categories */}
          <div>
            <h4
              className="text-white mb-4"
              style={{
                borderLeft: "3px solid #CC1517",
                paddingLeft: "10px",
              }}
            >
              {t("footer.categories")}
            </h4>
            <ul className="space-y-2 text-sm">
              {catKeys.map((key) => (
                <li key={key}>
                  <Link
                    to="/categories"
                    className="hover:text-red-400 transition-colors flex items-center gap-2"
                  >
                    <span style={{ color: "#CC1517" }}>›</span>{" "}
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-4"
              style={{
                borderLeft: "3px solid #CC1517",
                paddingLeft: "10px",
              }}
            >
              {t("footer.contact_us")}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#CC1517" }}
                />
                <span>
                  416 phạm văn đồng , p11 , quận bình thạnh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="shrink-0"
                  style={{ color: "#CC1517" }}
                />
                <span>{t("nav.phone_label")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="shrink-0"
                  style={{ color: "#CC1517" }}
                />
                <span>dh52006193@thoaine.com</span>
              </li>
            </ul>
            <div
              style={{ backgroundColor: "#1e2d3d" }}
              className="mt-5 rounded p-3 text-xs text-gray-400"
            >
              <p className="font-medium text-white mb-1">
                {t("footer.hours_title")}
              </p>
              <p>{t("footer.hours_weekdays")}</p>
              <p>{t("footer.hours_saturday")}</p>
              <p>{t("footer.hours_sunday")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          backgroundColor: "#080f18",
          borderTop: "1px solid #1e2d3d",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>
            {t("footer.rights").replace(
              "{year}",
              String(new Date().getFullYear()),
            )}
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/thoaitran7865/"
              className="hover:text-gray-300 transition-colors"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="https://www.facebook.com/thoaitran7865/"
              className="hover:text-gray-300 transition-colors"
            >
              {t("footer.terms")}
            </a>
            <a
              href="https://www.facebook.com/thoaitran7865/"
              className="hover:text-gray-300 transition-colors"
            >
              {t("footer.sitemap")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}