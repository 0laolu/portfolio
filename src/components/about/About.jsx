import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";


export default function About() {
    return (
        <section className="mt-16">
            <div className="w-9/10 max-w-[1300px] py-16 mx-auto">
                <h3 className="text-gray-800 p-0 m-0 text-3xl font-semibold"><span className="pt-4 border-t-4 border-gray-800">About</span> Me</h3>
                <div className="p-none m-none flex justify-between items-center">
                    <AboutContent/>
                    <AboutImage/>
                </div>
            </div>
        </section>
    )
}