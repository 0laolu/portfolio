import ContactContent from "./ContactContent";

export default function Contact() {
    return (
        <section className="mt-4 mb-8">
            <div className="w-full lg:max-w-[1440px] py-16 mx-auto">
                <p className="section-label text-center mb-3">Get In Touch</p>
                <h2 className="text-center p-0 m-0 text-3xl lg:text-4xl/15 font-display text-[var(--color-cream)]">
                    Let's <span className="grad-text">Work Together</span>
                </h2>
                <div className="my-12 mx-auto">
                    <ContactContent/>
                </div>
            </div>
        </section>
    )
}