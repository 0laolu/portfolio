import { useState, useRef, useEffect } from "react"

export default function Navbar() {

    const [isActive, setIsActive] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    const navLinksRef = useRef()
    const menuBarRef = useRef()

    const showNavbar = () => {
        setIsActive(!isActive)
        navLinksRef.current.classList.toggle("active")
        menuBarRef.current.classList.toggle("active")
    }

    const closeNavbar = () => {
        setIsActive(false)
        if (navLinksRef.current) {
            navLinksRef.current.classList.remove("active")
            navLinksRef.current.classList.add("invisible")
        }
        if (menuBarRef.current) {
            menuBarRef.current.classList.remove("active")
        }
    }

    useEffect(() => {
        const sections = ['services', 'work', 'about', 'technologies', 'contact']

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId)
                if (section) {
                    const offsetTop = section.offsetTop
                    const height = section.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(sectionId)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="fixed top-0 w-full z-50 bg-[var(--color-bg)] shadow-lg">
            <nav className=" w-93/100 max-w-[800px] mx-auto pt-4 flex justify-between items-center lg:max-w-[1440px] lg:pt-0">
                <a href="/" className="grad-text text-2xl font-bold font-display tracking-tight">olaolu.</a>

                <div ref={menuBarRef} onClick={showNavbar} className="hamburger-menu w-[28px] block relative top-0 cursor-pointer bg-none outline-none z-100 lg:invisible [-webkit-tap-highlight-color: transparent]">
                    <span className={`bg-[var(--color-cream)] block w-full h-[3px] rounded-lg my-[5px] transition duration-400 lg:transition-none ${isActive ? "transform rotate-[-45deg] translate-x-[-8px] translate-y-[6px]" : "transform-none rotate-none translate-none"}`}></span>
                    <span className={`bg-[var(--color-cream)] block w-full h-[3px] rounded-lg my-[5px] transition duration-400 lg:transition-none ${isActive ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`bg-[var(--color-cream)] block w-full h-[3px] rounded-lg my-[5px] transition duration-400 lg:transition-none ${isActive ? "transform rotate-[45deg] translate-x-[-8px] translate-y-[-10px]" : "transform-none rotate-none translate-none"}`}></span>
                </div>

                <ul ref={navLinksRef} className={` bg-[var(--color-bg)] invisible fixed w-full min-h-full top-0 left-0 transform translate-x-[-100%] transition duration-500 lg:visible lg:static lg:w-1/2 min-h-auto lg:transform-none lg:translate-x-[0] lg:transition-none ${isActive ? "visible transform-none translate-none": "invisible"}`}>
                    <div className=" w-1/2 text-center mx-auto my-30 lg:w-full lg:text-left lg:mx-0 lg:my-0 lg:flex lg:justify-evenly">
                         <li onClick={closeNavbar} className={`${activeSection === 'services' ? 'grad-text' : ''} text-[var(--color-dim)] hover:text-[var(--color-cream)] uppercase tracking-widest text-sm p-8 cursor-pointer`}><a href="#services">Services</a></li>
                        <li onClick={closeNavbar} className={`${activeSection === 'work' ? 'grad-text' : ''} text-[var(--color-dim)] hover:text-[var(--color-cream)] uppercase tracking-widest text-sm p-8 cursor-pointer`}><a href="#work">Work</a></li>
                        <li onClick={closeNavbar} className={`${activeSection === 'about' ? 'grad-text' : ''} text-[var(--color-dim)] hover:text-[var(--color-cream)] uppercase tracking-widest text-sm p-8 cursor-pointer`}><a href="#about">About</a></li>
                        <li onClick={closeNavbar} className={`${activeSection === 'technologies' ? 'grad-text' : ''} text-[var(--color-dim)] hover:text-[var(--color-cream)] uppercase tracking-widest text-sm p-8 cursor-pointer`}><a href="#technologies">Technologies</a></li>
                        <li onClick={closeNavbar} className={`${activeSection === 'contact' ? 'grad-text' : ''} text-[var(--color-muted)] hover:text-[var(--color-cream)] uppercase tracking-widest text-sm p-8 cursor-pointer`}><a href="#contact">Contact</a></li>
                        <li onClick={closeNavbar} className="grad-bg text-[var(--color-bg)] font-semibold py-4 px-6 rounded-md my-4 mx-4 cursor-pointer hover:opacity-90 whitespace-nowrap"><a href="#contact">Hire Me</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}