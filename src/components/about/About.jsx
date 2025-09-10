import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";


export default function About() {
    return (
        <section className="mt-16">
            <div className="w-93/100 max-w-[715px] py-16 mx-auto lg:9/10 lg:max-w-[1300px]">
                <h3 className="text-gray-800 p-0 m-0 text-[1.4rem] font-semibold lg:text-3xl"><span className="pt-2 border-t-3 border-gray-800 lg:pt-4">About</span> Me</h3>
                <div className="p-none m-none lg:flex justify-between items-center">
                    <AboutContent/>
                    <AboutImage/>
                </div>
            </div>
        </section>
    )
}