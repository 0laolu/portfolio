import ProjectCard from "./ProjectCard";


export default function Projects() {
    return (
        <section className="projects-section w-93/100 mx-auto mt-8">
            <div className="w-full mx-auto lg:max-w-[1440px] py-16 ">
                <h3 className="text-center p-0 m-0 text-3xl font-semibold" >My <span className="pt-4 border-t-4 border-gray-800">Projects</span></h3>
                <div className="my-16">
                    <ProjectCard/>
                </div>
                {/* <div className="text-center">
                    <button className="w-1/4 border border-gray-400 py-4 rounded-4xl font-semibold cursor-pointer" type="button">Let's build your website</button>
                </div> */}
            </div>
        </section>
    )
}