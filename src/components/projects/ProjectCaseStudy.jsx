import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import projectData from "../../data/ProjectData"

export default function ProjectCaseStudy() {

    const { slug } = useParams()
    const project = projectData.find(p => p.slug === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!project) {
        return (
            <div className="text-center py-32">
                <h2 className="text-2xl font-bold text-[var(--color-cream)]">Project not found</h2>
                <Link to="/" className="text-[var(--color-muted)] underline mt-4 block hover:text-[var(--color-cream)] transition-colors">Go back home</Link>
            </div>
        )
    }

    return (
        <div className="w-93/100 mx-auto xl:max-w-[1300px] py-16 pt-24 font-body">

            {/* Back button */}
            <Link to="/" className="flex items-center gap-2 text-[var(--color-muted)] mb-10 hover:text-[var(--color-cream)] transition-colors">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Back to Portfolio</span>
            </Link>

            {/* Hero */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-cream)] font-display mb-4">{project.title}</h1>
            <p className="text-[var(--color-muted)] text-lg mb-8">{project.description}</p>

            <figure className="mb-12">
                <img src={project.image} alt={project.title} className="w-full rounded-xl" />
            </figure>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 flex-wrap">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-ghost text-center text-[0.85rem]">
                    <span className="mr-2">Live URL</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost text-center text-[0.85rem]">
                    <span className="mr-2">Github Code</span>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>

            {/* Project Overview */}
            <section className="mb-12">
                <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-cream)] font-display mb-4 pb-2 border-b border-[var(--color-border)]">Project Overview</h2>
                <p className="text-[var(--color-muted)] leading-relaxed">{project.overview}</p>
            </section>

            {/* Problem */}
            <section className="mb-12">
                <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-cream)] font-display mb-4 pb-2 border-b border-[var(--color-border)]">The Problem</h2>
                <p className="text-[var(--color-muted)] leading-relaxed italic">{project.problem}</p>
            </section>

            {/* Key Features */}
            <section className="mb-12">
                <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-cream)] font-display mb-4 pb-2 border-b border-[var(--color-border)]">Key Features</h2>
                <ul className="space-y-3">
                    {project.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-[var(--color-muted)]">
                            <span className="mt-[6px] w-2 h-2 rounded-full grad-bg shrink-0"></span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Technologies Used */}
            <section className="mb-12">
                <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-cream)] font-display mb-4 pb-2 border-b border-[var(--color-border)]">Technologies Used</h2>
                <ul className="flex flex-wrap gap-3">
                    {project.tools.map(tool => (
                        <li key={tool} className="tech-pill">{tool}</li>
                    ))}
                </ul>
            </section>

            {/* Implementation Details */}
            <section className="mb-12">
                <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-cream)] font-display mb-4 pb-2 border-b border-[var(--color-border)]">Implementation Details</h2>
                <p className="text-[var(--color-muted)] leading-relaxed">{project.implementation}</p>
            </section>

            {/* Challenges */}
            <section className="mb-12">
                <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-cream)] font-display mb-4 pb-2 border-b border-[var(--color-border)]">Challenges Faced</h2>
                <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3 text-[var(--color-muted)]">
                            <span className="mt-[6px] w-2 h-2 rounded-full grad-bg shrink-0"></span>
                            {challenge}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Results & Impact */}
            <section className="mb-16">
                <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-cream)] font-display mb-4 pb-2 border-b border-[var(--color-border)]">Results & Impact</h2>
                <ul className="space-y-3">
                    {project.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3 text-[var(--color-muted)]">
                            <span className="mt-[6px] w-2 h-2 rounded-full grad-bg shrink-0"></span>
                            {result}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Back to portfolio */}
            <div className="text-center">
                <Link to="/" className="btn-primary grad-bg inline-block">
                    ← Back to Portfolio
                </Link>
            </div>
        </div>
    )
}