import AboutContent from "./AboutContent";
// import AboutImage from "./AboutImage";


export default function About() {
    return (
        <section className="w-93/100 my-8 mx-auto">
            <div className="w-full max-w-[715px] py-8 mx-auto lg:max-w-[1440px] ">
                <h3 className="text-gray-800 p-0 m-0 text-[1.4rem] text-center font-semibold lg:text-3xl">How I <span className="pt-2 border-t-4 border-gray-800 lg:pt-4">Work</span> </h3>
                <div className="p-none m-none lg:flex justify-between items-center">
                    <AboutContent/>
                </div>
            </div>
        </section>
    )
}