import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons" 
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"


export default function ProjectCard() {
    return( 
        <>
            {
                projectData.map(info => (
                    <div key={info.id} className="w-1/3 border border-gray-200 rounded-xl"> {/* project card */}
                        <figure className="img-container">
                            <img src={info.image} alt="" />
                        </figure>

                        <div className="w-19/20 mx-auto my-8">
                            <div className="text-gray-700 text-[1.1rem] font-league">
                                <h4 className="text-gray-800 font-bold text-[1.3rem]">{info.title}</h4>
                                <p className="project-description">{info.description}</p>
                                <p className="project-tools"><span className="text-[1.2rem] font-bold block mt-3">Tools: </span>{info.tools}</p>
                                <div className="role"><span className="text-[1.2rem] font-bold block mt-3">What I Did:</span>
                                    <ul className="">
                                        <li className="mb-2 ">• {info.role.first}</li>
                                        <li className="mb-2 ">• {info.role.second}</li>
                                        <li className="mb-2 ">• {info.role.third}</li>
                                        <li className="">• {info.role.fourth}</li>
                                    </ul>
                                </div>

                                <p className="project-importance"><span className="text-[1.2rem] font-bold block mt-3">Why It Matters:</span> 
                                    {info.importance}
                                </p>

                                <div className="w-4/5 mx-auto flex justify-between mt-7">
                                    <a href="https://thecardiohealth.org" className="w-12/25 text-[1.05rem] text-center font-semibold py-[0.5rem] rounded-xl border border-gray-500 ">
                                        <span className="mr-3">Live Site</span>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                    </a>

                                    <a href="https://github.com/0laolu/cardio_health_backend" className="w-12/25 text-[1.05rem] text-center font-semibold py-[0.5rem] rounded-xl border border-gray-500 ">
                                        <span className="mr-3">Github Code</span>
                                        <FontAwesomeIcon icon={faGithub}/>
                                    </a>
                                </div>
                            </div>
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
        description: "A fullstack health awareness platform with blog publishing and email subscription system.",
        tools: "React js, Node js, Express js, MongoDB, ReactQuill, Cloudinary, Substack",
        role: {
          first: "Built a full-featured platform tailored for a health-focused NGO, handling both frontend UI and backend APIs",
          second: "Developed a blog publishing system with a rich text blog editor (ReactQuill) and secure image uploads via Cloudinary",
          third: "Integrated Substack to automate newsletter signups and deliver regular health updates to subscribers",
          fourth: "Optimized the entire platform for speed, mobile responsiveness, and seamless user experience"  
        },
        importance: "This project demonstrates how i help clients build a fully functional business platform, publish content and grow email lists, all while keeping their site fast, modern and mobile ready. Ideal for NGOs, health orgs, or startups looking to engage an audience"
    }
]


