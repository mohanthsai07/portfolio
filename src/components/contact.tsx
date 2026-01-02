"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  Instagram,
  Linkedin,
} from "lucide-react";
import { JSX } from "react/jsx-runtime";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xqaggwpl", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-slate-900 py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - Text + Socials */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Let’s <span className="text-blue-600">Connect</span> ✉️
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-md">
            Have a project idea, collaboration, or just want to say hi?  
            Drop me a message — I’ll respond as soon as possible!
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <SocialLink
              href="https://www.instagram.com/"
              icon={<Instagram size={22} />}
              label="Instagram"
              color="pink"
            />
            <SocialLink
              href="https://www.linkedin.com/"
              icon={<Linkedin size={22} />}
              label="LinkedIn"
              color="blue"
            />
            <SocialLink
              href="mailto:your@email.com"
              icon={<Mail size={22} />}
              label="Email"
              color="purple"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Name"
              name="name"
              placeholder="Your Name"
              icon={<User size={18} className="text-gray-400" />}
              required
            />
            <InputField
              label="Email"
              name="email"
              placeholder="your@email.com"
              type="email"
              icon={<Mail size={18} className="text-gray-400" />}
              required
            />
          </div>

          <TextAreaField
            label="Message"
            name="message"
            placeholder="Write your message..."
            icon={<MessageSquare size={18} className="text-gray-400" />}
            required
          />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={status === "loading"}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
          >
            {status === "loading" ? "Sending..." : <>Send Message <Send size={18} /></>}
          </motion.button>

          {status === "success" && (
            <p className="text-green-600 font-medium pt-2">
              ✅ Message sent successfully! I’ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-medium pt-2">
              ❌ Something went wrong. Please try again later.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

/* 🔹 Input Field Component */
function InputField({
  label,
  name,
  placeholder,
  type = "text",
  icon,
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  icon: JSX.Element;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-3.5">{icon}</span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>
    </div>
  );
}

/* 🔹 Textarea Field Component */
function TextAreaField({
  label,
  name,
  placeholder,
  icon,
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  icon: JSX.Element;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-3.5">{icon}</span>
        <textarea
          name={name}
          placeholder={placeholder}
          rows={5}
          required={required}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
        ></textarea>
      </div>
    </div>
  );
}

/* 🔹 Social Link Button */
function SocialLink({
  href,
  icon,
  label,
  color,
}: {
  href: string;
  icon: JSX.Element;
  label: string;
  color: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      className={`p-3 rounded-full bg-${color}-100 dark:bg-${color}-900/20 text-${color}-600 dark:text-${color}-400 hover:bg-${color}-200 dark:hover:bg-${color}-900/40 transition-all`}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
