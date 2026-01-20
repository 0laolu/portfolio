import ContactContent from "./ContactContent";

export default function Contact() {
    return (
        <section className="mt-4 mb-8">
            <div className="w-9/10 max-w-[1440px] py-16 mx-auto">
                <h3 className=" flex justify-center align-baseline">
                    <img className="w-[40px] mr-3" src="/projectImages/rocket_emoji.png" alt="rocket icon" />
                    <span className="p-0 m-0 text-3xl font-semibold">Let's Work Together</span>
                </h3>
                <div className=" my-12 mx-auto lg:flex">
                    <ContactContent/>
                </div>
            </div>
        </section>
    )
}