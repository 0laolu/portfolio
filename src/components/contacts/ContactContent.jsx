import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function ContactContent() {
    return (
        <div className="text-[1.2rem] font-league">
            <p className="text-center">From clean landing pages to full web apps, I help brands like yours build fast, clean and user-focused websites</p>
            <ul className=" py-5">
                <li><FontAwesomeIcon className="mr-3 text-lime-500" icon={faCheck}/>Need a website that looks great and runs smoothly?</li>
                <li><FontAwesomeIcon className="mr-3 text-lime-500" icon={faCheck}/>Want a developer who understands both design and performance? </li>
                <li><FontAwesomeIcon className="mr-3 text-lime-500" icon={faCheck}/>Want to turn your idea into a digital product that actually works? </li>
            </ul>
            <div className="mt-8">
                <a href="mailto:abdullateefolaolu@gmail.com">
                    <button className="w-1/2 mx-auto block border border-gray-400 py-4 rounded-4xl font-semibold cursor-pointer" type="button">Let's Begin!</button>
                </a>
            </div>
        </div>
    )
}