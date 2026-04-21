import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard";


export default function Projects() {
    return (
        <section className="projects-section w-93/100 mx-auto mt-8">
            <div className="w-full xl:max-w-[1300px] mx-auto py-16">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-label text-center mb-3"
                >
                    My Work
                </motion.p>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center p-0 m-0 text-3xl lg:text-4xl/15 font-display text-[var(--color-cream)]"
                >
                    Featured <span className="grad-text">Projects</span>
                </motion.h2>
                <div className="my-16">
                    <ProjectCard/>
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