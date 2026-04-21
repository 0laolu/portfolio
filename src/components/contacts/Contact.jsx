import { motion } from "framer-motion"
import ContactContent from "./ContactContent";

export default function Contact() {
    return (
        <section className="mt-4 mb-8">
            <div className="w-full lg:max-w-[1440px] py-16 mx-auto">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-label text-center mb-3"
                >
                    Get In Touch
                </motion.p>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center p-0 m-0 text-3xl lg:text-4xl/15 font-display text-[var(--color-cream)]"
                >
                    Let's <span className="grad-text">Work Together</span>
                </motion.h2>
                <div className="my-12 mx-auto">
                    <ContactContent/>
                </div>
            </div>
        </section>
    )
}