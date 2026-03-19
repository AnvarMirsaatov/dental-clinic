import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    service: t("contact.service.checkup"),
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Majburiy maydonlarni tekshirish
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.date
    ) {
      setStatus("error");
      setErrorMessage("Ism, Familiya , Maqul sana va Telefon majburiy!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        // Formani tozalash
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          date: "",
          service: t("contact.service.checkup"),
          message: "",
        });
        // 5 sekunddan keyin success xabarini yashirish
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Xatolik yuz berdi");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Server bilan bog'lanishda xatolik. Qayta urinib ko'ring.",
      );
      console.error("Error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-500"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div>
              <span className="text-blue-100 font-semibold text-sm uppercase tracking-wide">
                {t("contact.badge")}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4">
                {t("contact.title")}
              </h2>
              <p className="text-xl text-blue-50">{t("contact.description")}</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <a href="https://yandex.uz/maps/-/CPF~Y8jR" target="_blank">
                  <div className="font-semibold mb-1">{t("contact.visit")}</div>
                  <div
                    className="text-blue-50"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {t("contact.address")}
                  </div>
                </a>
              </div>

              <a href="tel:+998946053939" className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t("contact.call")}</div>
                  <div className="text-blue-50">
                    +998 94 6053939
                    <br />
                  </div>
                </div>
              </a>

              <a
                href="mailto:Abdulaziz82152@mail.com"
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t("contact.email")}</div>
                  <div className="text-blue-50">
                    Abdulaziz82152@mail.com{" "}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t("contact.hours")}</div>
                  <div className="text-blue-50">
                    {t("contact.hours.weekday")}
                    <br />
                    {t("contact.hours.sunday")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t("contact.form.title")}
            </h3>

            {/* Success Message */}
            {status === "success" && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-800">
                  Muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.
                </p>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-800">{errorMessage}</p>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.firstName")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Ali"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.lastName")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Valiyev"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ali@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.phone")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+998 90 123 45 67"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.date")}
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.service")}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option>{t("contact.service.checkup")}</option>
                  <option>{t("contact.service.whitening")}</option>
                  <option>{t("contact.service.implants")}</option>
                  <option>{t("contact.service.cosmetic")}</option>
                  <option>{t("contact.service.emergency")}</option>
                  <option>{t("contact.service.orthodontics")}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? "Yuborilmoqda..."
                  : t("contact.form.submit")}
              </button>

              <p className="text-sm text-gray-500 text-center">
                {t("contact.form.note")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
