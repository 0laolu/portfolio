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
            <nav className="  w-9/10 max-w-[800px] mx-auto pt-4 flex justify-between items-center lg:max-w-none">
                <div className="text-2xl font-bold">O.A.</div>

                {/*hamburger menu*/}
                <div ref={menuBarRef} onClick={showNavbar} className="hamburger-menu w-[28px] block relative top-0 cursor-pointer bg-none outline-none z-100 lg:invisible [-webkit-tap-highlight-color: transparent]">
                    {/*bar element*/}
                    <span className={`bg-black block w-full h-[3px] rounded-lg my-[5px] transition duration-400 lg:transition-none ${isActive ? "transform rotate-[-45deg] translate-x-[-8px] translate-y-[6px]" : "transform-none rotate-none translate-none"}`}></span>
                    <span className={`bg-black block w-full h-[3px] rounded-lg my-[5px] transition duration-400 lg:transition-none
                        ${isActive ? "opacity-0" : "opacity-100"}
                        `}
                    >  
                    </span>
                    <span className={`bg-black block w-full h-[3px] rounded-lg my-[5px] transition duration-400 lg:transition-none ${isActive ? "transform rotate-[45deg] translate-x-[-8px] translate-y-[-10px]" : "transform-none rotate-none translate-none"}`}></span>
                </div>

                <ul ref={navLinksRef} className={` bg-white invisible fixed w-full min-h-full top-0 left-0 transform translate-x-[-100%] transition duration-500 lg:visible lg:static lg:w-1/2 min-h-auto lg:transform-none lg:translate-x-[0] lg:transition-none ${isActive ? "visible transform-none translate-none": "invisible"}`}>
                    <div className=" w-1/2 text-center mx-auto my-30 lg:w-full lg:text-left lg:mx-0 lg:my-0  lg:flex lg:justify-evenly">
                         <li className="p-8 cursor-pointer">About</li>
                        <li className="p-8 cursor-pointer">Projects</li>
                        <li className="p-8 cursor-pointer">Contact</li>
                        <li className="p-8 cursor-pointer">Resumé</li>
                    </div>
                       
                    
                </ul>
            </nav>
        </header>
    )
}