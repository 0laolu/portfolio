import { motion } from "framer-motion"

export default function Footer() {
    return (
        <footer className="w-93/100 mx-auto py-12">
            <div className="w-full lg:max-w-[1440px] mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glow-line w-full mb-12 mx-auto"
                ></motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col lg:flex-row justify-between items-center gap-8"
                >
                    <motion.div 
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grad-text text-xl font-bold font-display"
                    >
                        olaolu.
                    </motion.div>
                    
                    <motion.nav 
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-8"
                    >
                        <a href="#services" className="text-[var(--color-muted)] hover:text-[var(--color-cream)] font-body text-sm transition-colors">Services</a>
                        <a href="#work" className="text-[var(--color-muted)] hover:text-[var(--color-cream)] font-body text-sm transition-colors">Work</a>
                        <a href="#about" className="text-[var(--color-muted)] hover:text-[var(--color-cream)] font-body text-sm transition-colors">About</a>
                        <a href="#technologies" className="text-[var(--color-muted)] hover:text-[var(--color-cream)] font-body text-sm transition-colors">Technologies</a>
                        <a href="#contact" className="text-[var(--color-muted)] hover:text-[var(--color-cream)] font-body text-sm transition-colors">Contact</a>
                    </motion.nav>
                    
                    <motion.p 
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[var(--color-dim)] font-body text-sm"
                    >
                        © 2026 Olaoluwa Ajanaku
                    </motion.p>
                </motion.div>
            </div>
        </footer>
    )
}