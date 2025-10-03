import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
    return(
        <section className=" w-93/100 mx-auto my-8 lg:mx-0">
            <div className="w-full xl:max-w-[1300px] mx-auto">
                <h1 className="text-[1.9rem]/10 max-w-[640px] mx-auto lg:text-5xl/15 lg:max-w-none lg:mx-0 font-bold">I help e-commerce stores, startups, and restaurants grow with fast, conversion-focused websites.</h1>
                <p className="my-6 text-[1.1rem] max-w-[712px] mx-auto font-league tracking-normal lg:text-[1.6rem] lg:max-w-[1100px] lg:mx-0">Focused on speed, user experience, and results that grow your business. Let's build a digital presence that propels your brand forward!</p>

                <div className="bullet-point-container ">
                     <p className="text-gray-800 text-[1.1rem] font-league font-base lg:text-lg">• Fast, mobile-ready websites</p>
                     <p className="text-gray-800 text-[1.1rem] font-league font-base lg:text-lg">• Modern, conversion-focused design</p>
                     <p className="text-gray-800 text-[1.1rem] font-league font-base lg:text-lg">• Scalable solutions for growth</p>
                </div>

                <div className=" mt-8 max-w-[605px] sm:flex sm:justify-between lg:max-w-[550px]">
                    <button className="w-full max-w-[400px]  bg-gray-600 border border-gray-600 text-white py-4 mb-3 rounded-xl font-semibold cursor-pointer sm:mr-0 sm:mb-0 lg:w-9/10 lg:max-w-[240px] lg:text-lg  lg:mb-0" type="button">See It in Action</button>
                    <button className="w-full max-w-[400px]  border border-gray-400 py-4 rounded-xl font-semibold cursor-pointer lg:text-lg lg:max-w-[280px]" type="button">Let's Build Your Website</button>
                </div>

                <ul className="w-4/5 max-w-[250px] mt-13 flex justify-between lg:w-7/25 lg:max-w-[250px]">
                    <li>
                        <a href="https://github.com/0laolu" className="p-3 border border-gray-400 rounded-full">
                            <FontAwesomeIcon icon={faGithub} className="text-xl text-gray-800  lg:text-2xl"/>            
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/olaoluwa-ajanaku" className=" p-3 px-[0.82rem] border border-gray-400 rounded-full">
                            <FontAwesomeIcon icon={faLinkedin} className="text-xl text-gray-800  lg:text-2xl"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:abdullateefolaolu@gmail.com" className="p-3 border border-gray-400 rounded-full">
                            <FontAwesomeIcon icon={faEnvelope} className="text-xl text-gray-800  lg:text-2xl"/>
                        </a>
                    </li>
                    {/* <li>
                        <img src="" alt="twitter-icon" />
                    </li> */}
                </ul>
            </div>
        </section>
    )
}