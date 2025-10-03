import { faArrowTrendUp, faGlobe, faHandHoldingUsd, faNewspaper, faServer, faUserCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function ServicesContent() {


    return (
        <div className="my-8 lg:flex flex-wrap justify-between">
            {
                services.map(service => (
                    <div key={service.id} className="">
                        <div className="w-93/100 mx-auto py-[0.8rem]">
                            <FontAwesomeIcon icon={service.icon} className="text-3xl" />
                            <h4 className="text-gray-800 text-[1.2rem] font-bold font-league mb-[0.5rem]">{service.title}</h4>
                            {/* <p className="text-gray-600 font-league font-base tracking-wide text-[1.05rem]/6"></p> */}
                            <ul className="list-disc">
                                {
                                    service.bullets.map(point => (
                                        <li className="text-gray-700 text-base font-base font-league">{point}</li>
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
        title: "Websites That Help You Sell More",  
        description: "",
        bullets: ["Sales-driven layouts designed to capture leads and bookings", "Optimized for speed, SEO, and mobile responsiveness", "Clear CTAs that guide users toward purchase or signup"]
    },
    {
        id: 2,
        icon: faArrowTrendUp,
        title: "Apps That Grow With Your Startup",
        description: "",
        bullets: ["Scalable architecture to handle growth and new features", "Intuitive, user-friendly design for seamless adoption", "Built with modern frameworks (React, Node.js, MongoDB) for long-term flexibility"]
    },
    {
        id: 3,
        icon: faUserCheck,
        title: "User Flows That Convert Clicks Into Customers",
        description: "",
        bullets: ["Navigation built to guide visitors smoothly toward action", "Clear CTAs that keep people moving, not dropping off", "Smart design choices backed by real user behaviour"]
    },
    {
        id: 4,
        icon: faServer,
        title: "Backend & API Integration",
        description: "",
        bullets: ["Databases designed to handle growth without slowing down", "Authentication and user management that keep data safe", "Smooth API connections that make your product work seamlessly"]
    },
    {
        id: 5,
        icon: faNewspaper,
        title: "Informational & Content-Driven Websites",
        description: "",
        bullets: ["SEO-ready structure so your content ranks and gets found", "Easy content management so updates take minutes, not hours", "Clean, responsive blog layouts that are easy to read on any device"]
    }
]