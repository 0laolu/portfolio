import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
    return(
        <section className=" md:w-9/10 mx-auto my-8">
            <div className=" text-center xl:max-w-[1225px] mx-auto">
                <h1 className="text-6xl/20 font-bold">Empowering Businesses with Fast, Scalable Web Solutions That Drive Growth.</h1>
                <p className="my-8 font-league tracking-wide text-[1.2rem] max-w-[1130px] mx-auto">From dynamic restaurant menus to interactive real estate listings, e-commerce stores, and even startup landing pages — I build custom web applications that enhance user experience and boost conversions. Let's build a digital presence that propels your brand forward</p>

                <div className="mt-8">
                    <button className="w-1/5 border border-gray-400 py-4 rounded-4xl font-semibold cursor-pointer" type="button">Let's Build Your Website</button>
                </div>

                <ul className="w-1/4 mx-auto mt-10 flex justify-evenly">
                    <li>
                        <a href="https://github.com/0laolu">
                            <FontAwesomeIcon icon={faGithub} className="text-xl text-gray-800 p-3 border border-gray-400 rounded-full"/>            
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/olaoluwa-ajanaku">
                            <FontAwesomeIcon icon={faLinkedin} className="text-xl text-gray-800 p-3 px-[0.82rem] border border-gray-400 rounded-full"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:abdullateefolaolu@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} className="text-xl text-gray-800 p-3 border border-gray-400 rounded-full"/>
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