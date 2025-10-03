import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons" 
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"


export default function ProjectCard() {
    return( 
        <>
            {
                projectData.map(info => (
                    <div key={info.id} className="flex justify-between items-center"> {/* project card */}

                        <div className="lg:w-9/20 my-8">
                            <div className="text-gray-700 text-[1.1rem] font-league">
                                <h4 className="text-gray-800 font-bold text-3xl">{info.title}</h4>
                                <p className="project-description my-4">{info.description}</p>
                                <div className="role"><span className=" text-[1.2rem] font-bold block mt-3">What I Did:</span>
                                    <ul className="my-2 mb-4">
                                        <li className="mb-2 ">• {info.role.first}</li>
                                        <li className="mb-2 ">• {info.role.fifth}</li>
                                        <li className="mb-2 ">• {info.role.second}</li>
                                        <li className="mb-2 ">• {info.role.third}</li>
                                        <li className="">• {info.role.fourth}</li>
                                    </ul>
                                </div>
                                <ul className="project-tools  lg:flex justify-between flex-wrap">
                                    {
                                        info.tools.map(tool => (
                                            <li className="bg-gray-200 text-gray-700 font-semibold border border-gray-50 px-3 py-2 my-2 rounded-md">{tool}</li>
                                        ))
                                    }
                                </ul>
                                

                                {/* <p className="project-importance"><span className="text-[1.2rem] font-bold block mt-3">Why It Matters:</span> 
                                    {info.importance}
                                </p> */}

                                <div className=" w-3/5 mx-auto flex justify-between mt-7 lg:mx-0">
                                    <a href="https://thecardiohealth.org" className="w-full max-w-[164px] text-base text-center font-semibold py-3 rounded-xl border border-gray-500 lg:text-lg ">
                                        <span className="mr-3">Live URL</span>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                    </a>

                                    <a href="https://github.com/0laolu/cardio_health_backend" className="w-full max-w-[194px] text-base text-center font-semibold py-3 rounded-xl border border-gray-500 lg:text-lg ">
                                        <span className="mr-3">Github Code</span>
                                        <FontAwesomeIcon icon={faGithub}/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="img-container lg:w-12/25">
                            <figure className=" border border-gray-100 px-8 py-16 flex justify-center items-center">
                                <img src={info.image} alt="A mockup of The Cardio Health website" className="w-full" />
                            </figure>
                        </div>
                    </div>
                ))
            }
        </>
    )
}


const projectData = [
    {
        id: 1,
        image: "/projectImages/thecardiohealthimage.jpg",
        title: "THE CARDIO HEALTH",
        // description: "The Cardio Health is a full-stack health awareness platform designed to make vital heart health information accessible to anyone, anywhere. It combines an engaging blog system with an email subscription feature, helping users stay updated with the latest tips, resources, and insights on cardiovascular wellness.",
        description: "A full-stack health awareness platform designed to make vital heart health information accessible to anyone, using an engaging blog system with an email subscription feature.",
        tools: ["React JS", "Node JS", "Express JS", "MongoDB", "ReactQuill", "Cloudinary", "Substack"],
        role: {
          first: "Built a dynamic blog system so new articles, updates, or even campaigns can be published in minutes",
          second: "Integrated an email subscription flow that converts visitors into regular readers by sending updates to their inbox",
          third: "Developed a responsive, user-friendly interface that works seamlessly across all screen sizes ensuring the audience has a smooth experience",
          fourth: "Built efficient backend workflows that save you time on blogs and subscriber management",
          fifth: "Ensured fast load times and SEO-friendly structures, making the site easy to find on search engines and keeping users engaged longer"  
        },
        importance: "This project demonstrates how i help clients build a fully functional business platform, publish content and grow email lists, all while keeping their site fast, modern and mobile ready. Ideal for NGOs, health orgs, or startups looking to engage an audience"
    }
]


