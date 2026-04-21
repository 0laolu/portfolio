import { motion } from "framer-motion"
import TechnologiesContent from "./TechnologiesContent";

export default function Technologies() {
    return (
        <section className="w-93/100 my-16 mx-auto mt-16 ">
            <div className="w-full py-8 mx-auto xl:max-w-[1300px]">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-label text-center mb-3"
                >
                    My Stack
                </motion.p>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center p-0 m-0 text-3xl lg:text-4xl/15 font-display text-[var(--color-cream)]"
                >
                    <span className="grad-text">Technologies</span> I Use
                </motion.h2>
                <div className="my-12">
                    <TechnologiesContent/>
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