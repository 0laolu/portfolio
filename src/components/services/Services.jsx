import ServicesContent from "./ServicesContent";

export default function Services() {
    return(
        <section className="mt-8 mb-12">
            <div className="w-9/10 max-w-[1300px] py-16 mx-auto">
                <h3 className="text-center p-0 m-0 text-3xl font-semibold"><span className="pt-4 border-t-4 border-gray-800">Services</span> I Offer</h3>
                <div className="mt-18">
                    <ServicesContent/>
                </div>
            </div>
        </section>
    )
}