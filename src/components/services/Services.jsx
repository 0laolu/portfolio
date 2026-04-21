import { motion } from "framer-motion"
import ServicesContent from "./ServicesContent";

export default function Services() {
    return(
        <section className="w-93/100 mt-8 mb-12 mx-auto">
            <div className="w-full xl:max-w-[1300px] mx-auto py-16">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-label text-center mb-3"
                >
                    What I Do
                </motion.p>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center p-0 m-0 text-3xl lg:text-4xl/15 font-display text-[var(--color-cream)]"
                >
                    <span className="grad-text">Services</span> I Offer
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center font-body text-[var(--color-muted)] mt-4 text-[1.05rem]"
                >
                    Services designed to get customers fast
                </motion.p>
                <div className="mt-12">
                    <ServicesContent/>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="glow-line w-full mt-12 mx-auto"
                ></motion.div>
            </div>
        </section>
    )
}