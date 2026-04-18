import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="w-93/100 mx-auto py-12">
            <div className="w-full lg:max-w-[1440px] mx-auto">
                <div className="glow-line w-full mb-12 mx-auto"></div>
                
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="grad-text text-xl font-bold font-display">olaolu.</div>
                    
                    <nav className="flex flex-wrap justify-center gap-8">
                        <a href="#services" className="text-[var(--color-muted)] hover:text-[var(--color-cream)] font-body text-sm transition-colors">Services</a>
                        <a href="#work" className="text-[var(--color-muted)] hover:text-[var(--color-cream)] font-body text-sm transition-colors">Work</a>
                        <a href="#about" className="text-[var(--color-muted)] hover:text-[var(--color-cream)] font-body text-sm transition-colors">About</a>
                        <a href="#technologies" className="text-[var(--color-muted)] hover:text-[var(--color-cream)] font-body text-sm transition-colors">Technologies</a>
                        <a href="#contact" className="text-[var(--color-muted)] hover:text-[var(--color-cream)] font-body text-sm transition-colors">Contact</a>
                    </nav>
                    
                    <p className="text-[var(--color-dim)] font-body text-sm">
                        © 2026 Olaoluwa Ajanaku
                    </p>
                </div>
            </div>
        </footer>
    )
}