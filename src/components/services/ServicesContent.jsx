
export default function ServicesContent() {
    return (
        <div className="my-8 flex-wrap flex justify-between">
            {
                services.map(service => (
                    <div key={service.id} className="border border-gray-500 rounded-xl w-8/25 mb-5 mx-[0.1rem]">
                        <div className="w-93/100 mx-auto py-[0.8rem]">
                            <h4 className="text-gray-800 text-[1.2rem] font-bold font-league mb-[0.5rem]">{service.title}</h4>
                            <p className="text-gray-600 font-league font-base tracking-wide text-[1.05rem]/6">{service.description}</p>
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
        title: "Landing Pages That Convert",
        description: "I build fast, mobile-ready pages that drive signups, sales or leads"
    },
    {
        id: 2,
        title: "Responsive Web Design",
        description: "I specialize in clean, modern designs that are attractive and work smoothly on all devices"
    },
    {
        id: 3,
        title: "Frontend Development (React)",
        description: "I build interactive UIs with React.js for speed, scalability and great user experience"
    },
    {
        id: 4,
        title: "Backend & API Integration",
        description: "I develop forms, dashboards, and other dynamic features powered by Node.js, Express & MongoDB"
    },
    {
        id: 5,
        title: "Site Redesign & Speed Optimization",
        description: "I improve outdated or slow websites to load faster and look more professional"
    },
    {
        id: 6,
        title: "Maintenance & Feature Updates",
        description: "Continued support after release, including updates, bug fixes and new features"
    }
]