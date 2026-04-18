import ServicesContent from "./ServicesContent";

export default function Services() {
    return(
        <section className="w-93/100 mt-8 mb-12 mx-auto">
            <div className="w-full xl:max-w-[1300px] mx-auto py-16">
                <p className="section-label text-center mb-3">What I Do</p>
                <h2 className="text-center p-0 m-0 text-3xl lg:text-4xl/15 font-display text-[var(--color-cream)]">
                    <span className="grad-text">Services</span> I Offer
                </h2>
                <p className="text-center font-body text-[var(--color-muted)] mt-4 text-[1.05rem]">Services designed to get customers fast</p>
                <div className="mt-12">
                    <ServicesContent/>
                </div>
                <div className="glow-line w-full mt-12 mx-auto"></div>
            </div>
        </section>
    )
}