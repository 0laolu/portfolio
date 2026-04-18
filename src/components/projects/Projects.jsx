import ProjectCard from "./ProjectCard";


export default function Projects() {
    return (
        <section className="projects-section w-93/100 mx-auto mt-8">
            <div className="w-full xl:max-w-[1300px] mx-auto py-16">
                <p className="section-label text-center mb-3">My Work</p>
                <h2 className="text-center p-0 m-0 text-3xl lg:text-4xl/15 font-display text-[var(--color-cream)]">
                    Featured <span className="grad-text">Projects</span>
                </h2>
                <div className="my-16">
                    <ProjectCard/>
                </div>
                <div className="glow-line w-full mt-12 mx-auto"></div>
            </div>
        </section>
    )
}