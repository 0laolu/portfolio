import { motion } from "framer-motion"
import AboutContent from "./AboutContent";

export default function About() {
    return (
        <section className="w-93/100 my-8 mx-auto mt-10">
            <div className="w-full lg:max-w-[1440px] py-8 mx-auto">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-label text-center mb-3"
                >
                    The Process
                </motion.p>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center p-0 m-0 text-3xl lg:text-4xl/15 font-display text-[var(--color-cream)]"
                >
                    How I <span className="grad-text">Work</span>
                </motion.h2>
                <div className="p-none m-none mt-12 lg:flex justify-between items-center">
                    <AboutContent/>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="glow-line w-full mt-12 mx-auto"
                ></motion.div>
            </div>
        </section>
    )
}