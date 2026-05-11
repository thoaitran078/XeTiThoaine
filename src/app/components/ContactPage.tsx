import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    partNo: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    { icon: Phone, labelKey: "contact.phone_label",   value: t("nav.phone_label"),      subKey: "contact.phone_sub" },
    { icon: Mail,  labelKey: "contact.email_label",   value: "DH52006193@thoaine.com",     subKey: "contact.email_sub" },
    { icon: MapPin,labelKey: "contact.address_label", value: t("contact.address_value"), subKey: "contact.address_sub" },
    { icon: Clock, labelKey: "contact.hours_label",   value: t("contact.hours_value"),   subKey: "contact.hours_sub" },
  ];

  const faqs = [
    { qKey: "contact.faq1_q", aKey: "contact.faq1_a" },
    { qKey: "contact.faq2_q", aKey: "contact.faq2_a" },
    { qKey: "contact.faq3_q", aKey: "contact.faq3_a" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div style={{ backgroundColor: "#0D1B2A" }} className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm mb-1">{t("contact.breadcrumb")}</p>
          <h1 className="text-white" style={{ fontSize: "2rem", fontWeight: 800 }}>
            {t("contact.heading")}
          </h1>
          <p className="text-gray-400 mt-1">{t("contact.subheading")}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-5">
            <div style={{ backgroundColor: "#0D1B2A" }} className="rounded-xl p-6 text-white">
              <h2 className="text-lg font-semibold mb-4">{t("contact.get_in_touch")}</h2>
              <div className="space-y-4">
                {contactItems.map((item) => (
                  <div key={item.labelKey} className="flex items-start gap-4">
                    <div
                      style={{ backgroundColor: "rgba(204,21,23,0.2)" }}
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    >
                      <item.icon size={18} style={{ color: "#CC1517" }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-200">{t(item.labelKey)}</p>
                      <p className="text-sm text-white">{item.value}</p>
                      <p className="text-xs text-gray-400">{t(item.subKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Quick */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-gray-800 font-semibold mb-3">{t("contact.faq_title")}</h3>
              <div className="space-y-3 text-sm">
                {faqs.map((faq) => (
                  <div key={faq.qKey} style={{ borderLeft: "3px solid #CC1517" }} className="pl-3">
                    <p className="font-medium text-gray-700">{t(faq.qKey)}</p>
                    <p className="text-gray-500 mt-0.5">{t(faq.aKey)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div
                  style={{ backgroundColor: "rgba(204,21,23,0.1)" }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
                >
                  <CheckCircle size={40} style={{ color: "#CC1517" }} />
                </div>
                <h2 className="text-gray-800 text-xl font-bold mb-2">{t("contact.success_title")}</h2>
                <p className="text-gray-500 max-w-sm">{t("contact.success_desc")}</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", subject: "", partNo: "", message: "" });
                  }}
                  style={{ backgroundColor: "#CC1517" }}
                  className="mt-6 px-6 py-2.5 rounded text-white text-sm hover:opacity-90 transition-opacity"
                >
                  {t("contact.send_another")}
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-gray-800 text-xl font-bold mb-6">{t("contact.form_heading")}</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("contact.field_name")} <span style={{ color: "#CC1517" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.field_name_req")}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("contact.field_email")} <span style={{ color: "#CC1517" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="email@company.com"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("contact.field_phone")}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+84 ..."
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("contact.field_partno")}
                      </label>
                      <input
                        type="text"
                        name="partNo"
                        value={form.partNo}
                        onChange={handleChange}
                        placeholder="e.g. TH-ENG-4HK1-001"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t("contact.field_subject")} <span style={{ color: "#CC1517" }}>*</span>
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                    >
                      <option value="">{t("contact.subject_placeholder")}</option>
                      <option value="quote">{t("contact.subject_quote")}</option>
                      <option value="order">{t("contact.subject_order")}</option>
                      <option value="technical">{t("contact.subject_technical")}</option>
                      <option value="shipping">{t("contact.subject_shipping")}</option>
                      <option value="returns">{t("contact.subject_returns")}</option>
                      <option value="other">{t("contact.subject_other")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t("contact.field_message")} <span style={{ color: "#CC1517" }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={t("contact.message_placeholder")}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ backgroundColor: "#CC1517" }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
                  >
                    <Send size={16} />
                    {t("contact.send")}
                  </button>
                  <p className="text-xs text-gray-400 text-center">{t("contact.disclaimer")}</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
