import TechnologiesContent from "./TechnologiesContent";


export default function Technologies() {
    return (
        <section className="w-93/100 my-8 mx-auto">
            <div className="w-full py-8 mx-auto lg:max-w-[1440px] ">
                <h3 className="text-gray-800 p-0 m-0 text-[1.4rem] text-center font-semibold lg:text-3xl"><span className="pt-2 border-t-4 border-gray-800 lg:pt-4">Technologies</span> I use</h3>
                <div className="my-8">
                    <TechnologiesContent/>
                </div>
            </div>
        </section>
    )
}