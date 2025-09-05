import ProjectCard from "./ProjectCard";


export default function Projects() {
    return (
        <section className="projects-section">
            <div className="w-9/10 max-w-[1350px] py-16 mx-auto ">
                <h3 className="text-center p-0 m-0 text-3xl font-semibold" >My <span className="pt-4 border-t-4 border-gray-800">Projects</span></h3>
                <div className="my-16 flex justify-center">
                    <ProjectCard/>
                </div>
                <div className="text-center">
                    <button className="w-1/4 border border-gray-400 py-4 rounded-4xl font-semibold cursor-pointer" type="button">Let's build your website</button>
                </div>
            </div>
        </section>
    )
}