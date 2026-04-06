import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
    return(
        <section className=" w-93/100 mx-auto my-8 lg:mx-0">
            <div className="w-full xl:max-w-[1300px] mx-auto">
                <h1 className="text-[var(--color-cream)] text-[1.9rem]/10 max-w-[640px] mx-auto lg:text-5xl/15 lg:max-w-none lg:mx-0 font-bold">
                    I help e-commerce stores, startups, and restaurants grow with {" "} 
                    <em className="grad-text font-display italic font-normal">
                        fast, conversion-focused
                    </em>
                    {" "}websites.
                </h1>
                <p className="my-6 text-[1.1rem] max-w-[712px] mx-auto font-display tracking-normal lg:text-[1.6rem] lg:max-w-[1100px] lg:mx-0">Focused on speed, user experience, and results that grow your business. Let's build a digital presence that propels your brand forward!</p>

                <div className="bullet-point-container ">
                     <p className="text-[var(--color-dim)] text-[1.1rem] font-body font-base lg:text-lg"><span className="grad-text">•</span> Fast, mobile-ready websites</p>
                     <p className="text-[var(--color-dim)] text-[1.1rem] font-body font-base lg:text-lg"><span className="grad-text">•</span> Modern, conversion-focused design</p>
                     <p className="text-[var(--color-dim)] text-[1.1rem] font-body font-base lg:text-lg"><span className="grad-text">•</span> Scalable solutions for growth</p>
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

                <div className=" mt-8 max-w-[605px] sm:flex sm:justify-between lg:max-w-[550px]">
                    <button className="w-full max-w-[400px] btn-primary grad-bg text-white py-4 mb-3 rounded-xl font-semibold cursor-pointer sm:mr-0 sm:mb-0 lg:w-9/10 lg:max-w-[240px] lg:text-lg  lg:mb-0" type="button">See It in Action</button>
                    <button className="w-full max-w-[400px]  btn-ghost py-4 rounded-xl font-semibold cursor-pointer lg:text-lg lg:max-w-[280px]" type="button">Let's Build Your Website</button>
                </div>

                <div className="social-proof mt-8 ">
                    <p className="text-[var(--color-cream)] font-display lg:text-[1.2rem]">Built real-world, production-ready websites for businesses and growing startups.</p>
                </div>

                <ul className="w-4/5 max-w-[250px] mt-13 flex justify-between lg:w-7/25 lg:max-w-[250px]">
                    <li>
                        <a href="https://github.com/0laolu" className="p-3 border border-[var(--color-border)] rounded-full">
                            <FontAwesomeIcon icon={faGithub} className="text-xl text-[var(--color-dim)] relative top-[2px] lg:text-2xl"/>            
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/olaoluwa-ajanaku" className=" p-3 px-[0.82rem] border border-[var(--color-border)] rounded-full">
                            <FontAwesomeIcon icon={faLinkedin} className="text-xl text-[var(--color-dim)] relative top-[2px] left-[1px] lg:text-2xl"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:abdullateefolaolu@gmail.com" className="p-3 border border-[var(--color-border)] rounded-full">
                            <FontAwesomeIcon icon={faEnvelope} className="text-xl text-[var(--color-dim)] relative top-[2px] lg:text-2xl"/>
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