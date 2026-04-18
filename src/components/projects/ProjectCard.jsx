import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import projectData from "../../data/ProjectData"

export default function ProjectCard() {
    return( 
        <>
            {
                projectData.map(info => (
                    <div key={info.id} className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 my-12">
                        <div className="lg:w-9/20">
                            <div className="text-[var(--color-muted)] text-[1rem] font-body">
                                <h4 className="text-[var(--color-cream)] font-bold text-2xl lg:text-3xl font-display mb-4">{info.title}</h4>
                                <p className="project-description mb-6 text-[var(--color-muted)]">{info.description}</p>
                                
                                <div className="mb-5">
                                    <h4 className="text-[var(--color-cream)] text-[1rem] font-semibold font-display">Who This Was For:</h4>
                                    <p className="text-[var(--color-muted)] mt-1">{info.targetAudience}</p>
                                </div>
                                <div className="mb-5">
                                    <span className="text-[var(--color-cream)] text-[1rem] font-semibold font-display block">What I Did:</span>
                                    <ul className="mt-2 space-y-2">
                                        <li className="text-[var(--color-muted)] flex items-start gap-2">
                                            <span className="grad-text mt-[5px]">•</span>
                                            {info.role.first}
                                        </li>
                                        <li className="text-[var(--color-muted)] flex items-start gap-2">
                                            <span className="grad-text mt-[5px]">•</span>
                                            {info.role.fifth}
                                        </li>
                                        <li className="text-[var(--color-muted)] flex items-start gap-2">
                                            <span className="grad-text mt-[5px]">•</span>
                                            {info.role.second}
                                        </li>
                                        <li className="text-[var(--color-muted)] flex items-start gap-2">
                                            <span className="grad-text mt-[5px]">•</span>
                                            {info.role.third}
                                        </li>
                                        <li className="text-[var(--color-muted)] flex items-start gap-2">
                                            <span className="grad-text mt-[5px]">•</span>
                                            {info.role.fourth}
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-[var(--color-cream)] text-[1rem] font-semibold font-display">Result:</h4>
                                    <p className="text-[var(--color-muted)] mt-1">{info.result}</p>
                                </div>
                                <ul className="project-tools flex flex-wrap gap-3">
                                    {
                                        info.tools.map(tool => (
                                            <li key={tool} className="tech-pill">{tool}</li>
                                        ))
                                    }
                                </ul>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 lg:mx-0">
                                    <a href={info.liveUrl} className="btn-ghost text-center text-[0.85rem]">
                                        <span className="mr-2">Live URL</span>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                    </a>

                                    <Link
                                        to={`/projects/${info.slug}`}
                                        className="btn-primary grad-bg text-center text-[0.85rem]"
                                    >
                                        View Case Study
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="img-container lg:w-12/25 group overflow-hidden rounded-lg relative">
                            <img src={info.image} alt={`${info.title} mockup`} className="w-full transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 grad-bg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}


// const projectData = [
//     {
//         id: 1,
//         image: "/projectImages/thecardiohealthimage.jpg",
//         title: "THE CARDIO HEALTH",
//         // description: "The Cardio Health is a full-stack health awareness platform designed to make vital heart health information accessible to anyone, anywhere. It combines an engaging blog system with an email subscription feature, helping users stay updated with the latest tips, resources, and insights on cardiovascular wellness.",
//         description: "A full-stack health awareness platform designed to make vital heart health information accessible to anyone, using an engaging blog system with an email subscription feature.",
//         tools: ["React JS", "Node JS", "Express JS", "MongoDB", "ReactQuill", "Cloudinary", "Substack"],
//         targetAudience: "A health-focused organization publishing educational content for the public",
//         role: {
//           first: "Built a dynamic blog system so new articles, updates, or even campaigns can be published in minutes",
//           second: "Integrated an email subscription flow that converts visitors into regular readers by sending updates to their inbox",
//           third: "Developed a responsive, user-friendly interface that works seamlessly across all screen sizes ensuring the audience has a smooth experience",
//           fourth: "Built efficient backend workflows that save you time on blogs and subscriber management",
//           fifth: "Ensured fast load times and SEO-friendly structures, making the site easy to find on search engines and keeping users engaged longer"  
//         },
//         result: "Enabled fast content publishing, improved search visibility, and built a scalable platform ready for future expansion.",
//         importance: "This project demonstrates how i help clients build a fully functional business platform, publish content and grow email lists, all while keeping their site fast, modern and mobile ready. Ideal for NGOs, health orgs, or startups looking to engage an audience"
//     }
// ]


