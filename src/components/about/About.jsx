import AboutContent from "./AboutContent";

export default function About() {
    return (
        <section className="w-93/100 my-8 mx-auto mt-10">
            <div className="w-full lg:max-w-[1440px] py-8 mx-auto">
                <p className="section-label text-center mb-3">The Process</p>
                <h2 className="text-center p-0 m-0 text-3xl lg:text-4xl/15 font-display text-[var(--color-cream)]">
                    How I <span className="grad-text">Work</span>
                </h2>
                <div className="p-none m-none mt-12 lg:flex justify-between items-center">
                    <AboutContent/>
                </div>
                <div className="glow-line w-full mt-12 mx-auto"></div>
            </div>
        </section>
    )
}