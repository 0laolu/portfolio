// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCheck } from "@fortawesome/free-solid-svg-icons"

// export default function ContactContent() {
//     return (
//         <>
//             <div className="left-col text-[1.2rem] font-league lg:w-1/2">
//                 <p className="text-center">From clean landing pages to full web apps, I help brands like yours build fast, clean and user-focused websites</p>
//                 <ul className=" py-5">
//                     <li><FontAwesomeIcon className="mr-3 text-lime-500" icon={faCheck}/>Need a website that looks great and runs smoothly?</li>
//                     <li><FontAwesomeIcon className="mr-3 text-lime-500" icon={faCheck}/>Want a developer who understands both design and performance? </li>
//                     <li><FontAwesomeIcon className="mr-3 text-lime-500" icon={faCheck}/>Want to turn your idea into a digital product that actually works? </li>
//                 </ul>
//                 <div className="mt-8">
//                     <a href="mailto:abdullateefolaolu@gmail.com">
//                         <button className="w-1/2 mx-auto block border border-gray-400 py-4 rounded-4xl font-semibold cursor-pointer" type="button">Let's Begin!</button>
//                     </a>
//                 </div>
//             </div>
//             <div className="right-col bg-gray-100 lg:w-1/2">
//                 <form >
//                     <div>
//                         <label htmlFor="fullname">Fullname: </label>
//                         <input id="fullname" type="text" name="fullname" placeholder="John Schmoe" />
//                     </div>

//                     <div>
//                         <label htmlFor="email">Email Address: </label>
//                         <input id="email" type="email" name="email" placeholder="johnschmoe@example.com" />
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }


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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
            Let’s build something that converts
          </h2>

          <p className="mt-4 text-neutral-600 leading-relaxed">
            I help businesses design and build fast, conversion-focused websites
            — from landing pages to full web apps.
          </p>

          <ul className="mt-6 space-y-3 text-neutral-700">
            <li>• Mobile-first, performance-driven</li>
            <li>• Clear process from idea to launch</li>
            <li>• Built with scalability in mind</li>
          </ul>
        </motion.div>

        {/* FORM CARD */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >
          {/* NAME */}
          <FormField
            label="Full Name"
            name="name"
            placeholder="Jane Doe"
            value={form.name}
            onChange={handleChange}
            focused={focused}
            setFocused={setFocused}
          />

          {/* EMAIL */}
          <FormField
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
            focused={focused}
            setFocused={setFocused}
          />

          {/* PROJECT TYPE */}
          <AnimatedSelect
            label="Project Type"
            name="projectType"
            options={projectTypes}
            value={form.projectType}
            onChange={handleChange}
          />

          {/* DESCRIPTION */}
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

          {/* BUDGET */}
          <AnimatedSelect
            label="Approx. Budget (optional)"
            name="budget"
            options={budgets}
            value={form.budget}
            onChange={handleChange}
          />

          {/* CTA */}
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gray-700 text-white py-4 rounded-xl font-medium tracking-wide shadow-lg hover:bg-indigo-700 transition"
          >
            Send Project Brief
          </motion.button>

          <p className="text-xs text-neutral-500 text-center">
            I’ll respond within 24 hours. No spam — ever.
          </p>
        </motion.form>
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
}) {
  const isFocused = focused === name;

  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-1">
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
          className={`w-full rounded-xl border px-4 py-3 resize-none outline-none transition
            ${isFocused ? "border-indigo-600 shadow-md" : "border-neutral-300"}`}
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
          className={`w-full rounded-xl border px-4 py-3 outline-none transition
            ${isFocused ? "border-indigo-600 shadow-md" : "border-neutral-300"}`}
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
      <label className="block text-sm font-medium text-neutral-700 mb-1">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-left flex justify-between items-center hover:border-indigo-600 transition"
      >
        <span className={value ? "text-neutral-900" : "text-neutral-400"}>
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
            className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden border"
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  onChange({ target: { name, value: option } });
                  setOpen(false);
                }}
                className="px-4 py-3 cursor-pointer hover:bg-indigo-50 transition"
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
