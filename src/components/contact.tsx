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
        headers: { Accept: "application/json" },
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
      className="bg-[#FFF3E6] py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span
            className="inline-block px-4 py-1 rounded-md
            bg-[#FACC15] text-black font-semibold
            shadow-[4px_4px_0_#0F172A]"
          >
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
            Let’s Connect ✉️
          </h2>

          <p className="text-[#334155] max-w-md">
            Have a project idea, collaboration, or just want to say hi?
            Drop me a message — I’ll respond as soon as possible!
          </p>

          <div className="flex gap-4 pt-4">
            <SocialLink
              href=":www.instagram.com/mohanth_sai"
              icon={<Instagram size={22} />}
              label="Instagram"
            />
            <SocialLink
              href="https://www.linkedin.com/"
              icon={<Linkedin size={22} />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:your@email.com"
              icon={<Mail size={22} />}
              label="Email"
            />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            bg-white p-8 rounded-xl
            border-2 border-black
            shadow-[8px_8px_0_#0F172A]
            space-y-6
          "
        >
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Name"
              name="name"
              placeholder="Your Name"
              icon={<User size={18} />}
              required
            />
            <InputField
              label="Email"
              name="email"
              placeholder="your@email.com"
              type="email"
              icon={<Mail size={18} />}
              required
            />
          </div>

          <TextAreaField
            label="Message"
            name="message"
            placeholder="Write your message..."
            icon={<MessageSquare size={18} />}
            required
          />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={status === "loading"}
            className="
              inline-flex items-center gap-2 px-8 py-3
              rounded-md font-semibold text-black
              bg-[#FACC15] hover:bg-purple-500/80
              border-2 border-black
              shadow-[4px_4px_0_#0F172A]
              hover:translate-x-[1px] hover:translate-y-[1px]
              hover:shadow-[3px_3px_0_#0F172A]
              transition disabled:opacity-60
            "
          >
            {status === "loading" ? "Sending..." : <>Send Message <Send size={18} /></>}
          </motion.button>

          {status === "success" && (
            <p className="text-emerald-600 font-medium pt-2">
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
      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-3.5 text-[#0F172A]/40">
          {icon}
        </span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="
            w-full pl-10 pr-4 py-3 rounded-md
            bg-[#FFF3E6] border-2 border-black
            text-[#0F172A]
            focus:outline-none
          "
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
      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-3.5 text-[#0F172A]/40">
          {icon}
        </span>
        <textarea
          name={name}
          placeholder={placeholder}
          rows={5}
          required={required}
          className="
            w-full pl-10 pr-4 py-3 rounded-md resize-none
            bg-[#FFF3E6] border-2 border-black
            text-[#0F172A]
            focus:outline-none
          "
        />
      </div>
    </div>
  );
}

/* =======================
   SOCIAL LINK
======================= */
function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      className="
        p-3 rounded-md bg-[#FACC15] hover:bg-purple-500/80 text-black
        border-2 border-black
        shadow-[3px_3px_0_#0F172A]
        transition
      "
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
