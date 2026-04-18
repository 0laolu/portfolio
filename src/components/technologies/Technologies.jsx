import TechnologiesContent from "./TechnologiesContent";

export default function Technologies() {
    return (
        <section className="w-93/100 my-16 mx-auto mt-16 ">
            <div className="w-full py-8 mx-auto xl:max-w-[1300px]">
                <p className="section-label text-center mb-3">My Stack</p>
                <h2 className="text-center p-0 m-0 text-3xl lg:text-4xl/15 font-display text-[var(--color-cream)]">
                    <span className="grad-text">Technologies</span> I Use
                </h2>
                <div className="my-12">
                    <TechnologiesContent/>
                </div>
                <div className="glow-line w-full mt-12 mx-auto"></div>
            </div>
        </section>
    )
}