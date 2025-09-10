import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
    return(
        <section className=" md:w-9/10 mx-auto my-8">
            <div className="w-19/20 text-center lg:w-full xl:max-w-[1225px] mx-auto">
                <h1 className="text-[2rem]/10 max-w-[640px] mx-auto lg:text-6xl/20 lg:max-w-none font-bold">Empowering Businesses with Fast, Scalable Web Solutions That Drive Growth.</h1>
                <p className="my-8 text-[1.05rem] max-w-[712px] font-league tracking-normal lg:text-[1.6rem] lg:max-w-[1100px] mx-auto">From dynamic restaurant menus to interactive real estate listings, e-commerce stores, and even startup landing pages — I build custom web applications that enhance user experience and boost conversions. Let's build a digital presence that propels your brand forward!</p>

                <div className="mt-12">
                    <button className="w-4/5 max-w-[295px] border border-gray-400 py-4 rounded-xl font-semibold cursor-pointer lg:w-7/25 lg:max-w-none lg:text-xl" type="button">Let's Build Your Website</button>
                </div>

                <ul className="w-4/5 max-w-[295px] mx-auto mt-16 flex justify-evenly lg:w-7/25 lg:max-w-none">
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