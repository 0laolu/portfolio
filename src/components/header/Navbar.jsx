import { useState, useRef } from "react"

export default function Navbar() {

    const [isActive, setIsActive] = useState(false)

    const navLinksRef = useRef()
    const menuBarRef = useRef()

    const showNavbar = () => {
        setIsActive(!isActive)
        navLinksRef.current.classList.toggle("active")
        menuBarRef.current.classList.toggle("active")
    }

    

    return (
        <header>
            <nav className=" w-93/100 max-w-[800px] mx-auto pt-4 flex justify-between items-center lg:max-w-[1440px] lg:pt-0">
                <div className="grad-text text-2xl font-bold font-display tracking-tight">olaolu.</div>

                {/*hamburger menu*/}
                <div ref={menuBarRef} onClick={showNavbar} className="hamburger-menu w-[28px] block relative top-0 cursor-pointer bg-none outline-none z-100 lg:invisible [-webkit-tap-highlight-color: transparent]">
                    {/*bar element*/}
                    <span className={`bg-[var(--color-cream)] block w-full h-[3px] rounded-lg my-[5px] transition duration-400 lg:transition-none ${isActive ? "transform rotate-[-45deg] translate-x-[-8px] translate-y-[6px]" : "transform-none rotate-none translate-none"}`}></span>
                    <span className={`bg-[var(--color-cream)] block w-full h-[3px] rounded-lg my-[5px] transition duration-400 lg:transition-none
                        ${isActive ? "opacity-0" : "opacity-100"}
                        `}
                    >  
                    </span>
                    <span className={`bg-[var(--color-cream)] block w-full h-[3px] rounded-lg my-[5px] transition duration-400 lg:transition-none ${isActive ? "transform rotate-[45deg] translate-x-[-8px] translate-y-[-10px]" : "transform-none rotate-none translate-none"}`}></span>
                </div>

                <ul ref={navLinksRef} className={` bg-[var(--color-bg)] invisible fixed w-full min-h-full top-0 left-0 transform translate-x-[-100%] transition duration-500 lg:visible lg:static lg:w-1/2 min-h-auto lg:transform-none lg:translate-x-[0] lg:transition-none ${isActive ? "visible transform-none translate-none": "invisible"}`}>
                    <div className=" w-1/2 text-center mx-auto my-30 lg:w-full lg:text-left lg:mx-0 lg:my-0  lg:flex lg:justify-evenly">
                         <li className="text-[var(--color-dim)] hover:text-[var(--color-cream)] uppercase tracking-widest text-sm p-8 cursor-pointer">Work</li>
                        <li className="text-[var(--color-dim)] hover:text-[var(--color-cream)] uppercase tracking-widest text-sm p-8 cursor-pointer">Services</li>
                        <li className="text-[var(--color-dim)] hover:text-[var(--color-cream)] uppercase tracking-widest text-sm p-8 cursor-pointer">About</li>
                        <li className="text-[var(--color-muted)] hover:text-[var(--color-cream)] uppercase tracking-widest text-sm p-8 cursor-pointer">Contact</li>
                        <li className="grad-bg text-[var(--color-bg)] font-semibold py-4 px-6 rounded-md my-4 mx-4 cursor-pointer hover:opacity-90">Hire Me</li>
                    </div>
                       
                    
                </ul>
            </nav>
        </header>
    )
}