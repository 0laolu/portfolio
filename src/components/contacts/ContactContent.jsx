import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectTypes = [
  "Landing Page",
  "Full Website",
  "E-commerce",
  "Web App",
  "Website Redesign",
  "Other",
];

const budgets = [
  "Less than $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    description: "",
    budget: "",
  });

  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xwvangrv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.projectType,
          description: form.description,
          budget: form.budget,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          projectType: "",
          description: "",
          budget: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold font-display text-[var(--color-cream)]">
            Let's build something that converts
          </h2>

          <p className="mt-4 text-[var(--color-muted)] leading-relaxed font-body">
            I help businesses design and build fast, conversion-focused websites
            — from landing pages to full web apps.
          </p>

          <ul className="mt-6 space-y-3 text-[var(--color-muted)] font-body">
            <li className="flex items-start gap-2">
              <span className="grad-text mt-[5px]">•</span> Mobile-first, performance-driven
            </li>
            <li className="flex items-start gap-2">
              <span className="grad-text mt-[5px]">•</span> Clear process from idea to launch
            </li>
            <li className="flex items-start gap-2">
              <span className="grad-text mt-[5px]">•</span> Built with scalability in mind
            </li>
          </ul>
        </motion.div>

        {/* FORM CARD */}
        <AnimatePresence mode="wait">
          {status === "success" ? (

            // SUCCESS STATE
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="card p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]"
            >
              <div className="w-16 h-16 rounded-full grad-bg flex items-center justify-center text-2xl text-[var(--color-bg)]">
                ✓
              </div>
              <h3 className="text-2xl font-semibold font-display text-[var(--color-cream)]">
                Message Sent!
              </h3>
              <p className="text-[var(--color-muted)] font-body">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-g1)] hover:text-[var(--color-cream)] transition font-body text-sm"
              >
                Send another message
              </motion.button>
            </motion.div>

          ) : (

            // FORM STATE
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="card p-8 space-y-6"
            >
              <FormField
                label="Full Name"
                name="name"
                placeholder="E.g Scott McFarlane"
                value={form.name}
                onChange={handleChange}
                focused={focused}
                setFocused={setFocused}
                required
              />

              <FormField
                label="Email Address"
                name="email"
                type="email"
                placeholder="scott13@gmail.com"
                value={form.email}
                onChange={handleChange}
                focused={focused}
                setFocused={setFocused}
                required
              />

              <AnimatedSelect
                label="Project Type"
                name="projectType"
                options={projectTypes}
                value={form.projectType}
                onChange={handleChange}
              />

              <FormField
                label="Project Description"
                name="description"
                placeholder="Briefly describe what you want to build…"
                textarea
                value={form.description}
                onChange={handleChange}
                focused={focused}
                setFocused={setFocused}
              />

              <AnimatedSelect
                label="Approx. Budget (optional)"
                name="budget"
                options={budgets}
                value={form.budget}
                onChange={handleChange}
              />

              {/* ERROR MESSAGE */}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-red-400 text-center font-body"
                >
                  Something went wrong. Please try again or email me directly at{" "}
                  <a
                    href="mailto:abdullateefolaolu@gmail.com"
                    className="underline hover:text-red-300"
                  >
                    abdullateefolaolu@gmail.com
                  </a>
                </motion.p>
              )}

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={status === "loading"}
                className="w-full grad-bg text-[var(--color-bg)] py-4 rounded-xl font-semibold uppercase tracking-widest hover:opacity-90 cursor-pointer transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Send Project Brief"}
              </motion.button>

              <p className="text-xs text-[var(--color-muted)] text-center font-body">
                I'll respond within 24 hours. No spam — ever.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
  value,
  onChange,
  focused,
  setFocused,
  required = false,
}) {
  const isFocused = focused === name;

  return (
    <div>
      <label className="block uppercase tracking-widest text-sm font-medium text-[var(--color-muted)] mb-2 font-body">
        {label}
      </label>

      {textarea ? (
        <motion.textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused(null)}
          placeholder={placeholder}
          rows={4}
          required={required}
          className={`w-full rounded-xl border px-4 py-3 resize-none outline-none transition font-body placeholder:text-base placeholder:text-[var(--color-dim)] ${
            isFocused
              ? "border-[var(--color-g1)] shadow-md bg-[var(--color-surface)]"
              : "border-[var(--color-border)] bg-[var(--color-card)]"
          }`}
          initial={false}
          animate={{ scale: isFocused ? 1.02 : 1 }}
        />
      ) : (
        <motion.input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused(null)}
          placeholder={placeholder}
          required={required}
          className={`w-full rounded-xl border px-4 py-3 outline-none transition font-body placeholder:text-base placeholder:text-[var(--color-dim)] ${
            isFocused
              ? "border-[var(--color-g1)] shadow-md bg-[var(--color-surface)]"
              : "border-[var(--color-border)] bg-[var(--color-card)]"
          }`}
          initial={false}
          animate={{ scale: isFocused ? 1.02 : 1 }}
        />
      )}
    </div>
  );
}

function AnimatedSelect({ label, name, options, value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <label className="block uppercase tracking-widest text-sm font-medium text-[var(--color-muted)] mb-2 font-body">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-left flex justify-between items-center hover:border-[var(--color-border-hover)] transition font-body text-sm cursor-pointer"
      >
        <span className={value ? "text-[var(--color-cream)]" : "text-[var(--color-muted)]"}>
          {value || "Select an option"}
        </span>
        <span className="text-sm">▾</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 w-full card rounded-xl shadow-lg overflow-hidden border"
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  onChange({ target: { name, value: option } });
                  setOpen(false);
                }}
                className="px-4 py-3 cursor-pointer text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-cream)] transition font-body"
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}