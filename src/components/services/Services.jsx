import ServicesContent from "./ServicesContent";

export default function Services() {
    return(
        <section className="w-93/100 mt-8 mb-12 mx-auto">
            <div className=" w-full mx-auto lg:max-w-[1440px] py-16 ">
                <h3 className="text-center p-0 m-0 text-3xl font-semibold"><span className="pt-4 border-t-4 border-gray-800">Services</span> I Offer</h3>
                <p className="text-center font-league mt-4">Services designed to get customers fast</p>
                <div className="mt-18">
                    <ServicesContent/>
                </div>
            </div>
        </section>
    )
}