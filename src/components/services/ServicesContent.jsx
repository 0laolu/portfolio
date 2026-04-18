import { faArrowTrendUp, faHandHoldingUsd, faNewspaper, faServer, faUserCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function ServicesContent() {


    return (
        <div className="my-8 lg:flex lg:flex-wrap lg:justify-between lg:gap-6">
            {
                services.map(service => (
                    <div key={service.id} className="lg:w-[calc(50%-12px)]">
                        <div className="card p-6 mb-6">
                            <div className="grad-bg w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                                <FontAwesomeIcon icon={service.icon} className="text-xl text-[var(--color-bg)]" />
                            </div>
                            <h4 className="text-[var(--color-cream)] text-[1.1rem] font-bold font-display mb-2">{service.title}</h4>
                            <p className="mb-5 text-[var(--color-muted)] text-[0.9rem] font-body italic">{service.for}</p>
                            <ul className="space-y-3">
                                {
                                    service.bullets.map((point, index) => (
                                        <li key={index} className="text-[var(--color-muted)] text-[0.9rem] font-body flex items-center gap-3">
                                            <span className="grad-text">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }

            
        </div>
    )
}

const services = [
    {
        id: 1,
        icon: faHandHoldingUsd,
        for: "Ideal for restaurants, service businesses & online brands",
        title: "Websites That Help You Sell More",  
        description: "",
        bullets: ["Sales-driven layouts designed to capture leads and bookings", "Optimized for speed, SEO, and mobile responsiveness", "Clear CTAs that guide users toward purchase or signup"]
    },
    {
        id: 2,
        icon: faArrowTrendUp,
        for: "Best for early-stage and growing startups",
        title: "Apps That Grow With Your Startup",
        description: "",
        bullets: ["Scalable architecture to handle growth and new features", "Intuitive, user-friendly design for seamless adoption", "Built with modern frameworks (React, Node.js, MongoDB) for long-term flexibility"]
    },
    {
        id: 3,
        icon: faUserCheck,
        for: "Perfect for businesses struggling with low conversions",
        title: "User Flows That Convert Clicks Into Customers",
        description: "",
        bullets: ["Navigation built to guide visitors smoothly toward action", "Clear CTAs that keep people moving, not dropping off", "Smart design choices backed by real user behaviour"]
    },
    {
        id: 4,
        icon: faServer,
        for: "Ideal for products that need secure data handling",
        title: "Backend & API Integration",
        description: "",
        bullets: ["Databases designed to handle growth without slowing down", "Authentication and user management that keep data safe", "Smooth API connections that make your product work seamlessly"]
    },
    {
        id: 5,
        icon: faNewspaper,
        for: "Designed for brands that rely on content, SEO & audience trust",
        title: "Informational & Content-Driven Websites",
        description: "",
        bullets: ["SEO-ready structure so your content ranks and gets found", "Easy content management so updates take minutes, not hours", "Clean, responsive blog layouts that are easy to read on any device"]
    }
]