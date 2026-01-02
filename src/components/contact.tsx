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

/* =======================
   MAIN CONTACT COMPONENT
======================= */
export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xqaggwpl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-slate-900 py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
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

        {/* RIGHT SIDE */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
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
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : <>Send Message <Send size={18} /></>}
          </motion.button>

          {status === "success" && (
            <p className="text-green-600 font-medium pt-2">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 font-medium pt-2">
              ❌ Something went wrong. Try again later.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

/* =======================
   INPUT FIELD
======================= */
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
  icon: React.ReactNode;
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
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

/* =======================
   TEXTAREA FIELD
======================= */
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
  icon: React.ReactNode;
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
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>
    </div>
  );
}

/* =======================
   SOCIAL LINK (TAILWIND SAFE)
======================= */
const colorMap = {
  pink:
    "bg-pink-100 text-pink-600 hover:bg-pink-200 dark:bg-pink-900/20 dark:text-pink-400 dark:hover:bg-pink-900/40",
  blue:
    "bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40",
  purple:
    "bg-purple-100 text-purple-600 hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/40",
};

function SocialLink({
  href,
  icon,
  label,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: keyof typeof colorMap;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      className={`p-3 rounded-full transition-all ${colorMap[color]}`}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
