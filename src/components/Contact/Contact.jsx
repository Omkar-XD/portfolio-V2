import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // ✅ VITE_ env vars must be exposed properly in Vite
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 bgTools">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl gradient-text font-bold mb-6">Contact Me</h2>
        <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
          Feel free to reach out to me via the social media links below, or
          contact me directly for more details about my work and projects.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Contact Me"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
          </div>

          <div className="rounded-xl shadow-lg bg-white/10 text-white p-8 hover:scale-105 hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold gradient-text mb-4 flex items-center">
              <MessageCircle className="w-6 h-6 mr-2" />
              Let's Connect
            </h3>

            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center group hover:bg-white/10 p-3 rounded-lg transition-colors duration-200">
                <Mail className="w-5 h-5 text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Email</h4>
                  <p className="text-gray-300 text-sm">
                    omkarchavan21k@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center group hover:bg-white/10 p-3 rounded-lg transition-colors duration-200">
                <Phone className="w-5 h-5 text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Phone</h4>
                  <p className="text-gray-300 text-sm">+91 8591258069</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center group hover:bg-white/10 p-3 rounded-lg transition-colors duration-200">
                <MapPin className="w-5 h-5 text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Location</h4>
                  <p className="text-gray-300 text-sm">Pune,India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-white/20">
                <a
                  href="https://www.linkedin.com/in/omkar-chavan-8b59a8334/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:bg-white/10 p-3 rounded-lg transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-200" />
                </a>

                <a
                  href="https://github.com/Omkar-XD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:bg-white/10 p-3 rounded-lg transition-colors duration-200"
                >
                  <Github className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-200" />
                </a>

                <a
                  href="https://www.instagram.com/its.omkarr_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:bg-white/10 p-3 rounded-lg transition-colors duration-200"
                >
                  <Instagram className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-xl shadow-lg bg-white/10 text-white p-8 hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
          <h3 className="text-2xl font-bold gradient-text mb-8 flex items-center">
            <Send className="w-6 h-6 mr-2" />
            Send me a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-white/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-white/20"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-white mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can I help you?"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-white/20"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-white mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project or inquiry..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-white/20 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <div className="rounded-xl shadow-lg bg-white/10 text-white p-12 hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Ready to start your project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm here to help bring your ideas to life. Let's discuss your project
            and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
  href="tel:+918591258069"   // ✅ Use tel: instead of mailto:
  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
>
  Schedule a Call
</a>

            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                const portfolioSection = document.getElementById("projects");
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border-2 border-purple-400 text-purple-400 font-semibold py-3 px-8 rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 inline-block"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
