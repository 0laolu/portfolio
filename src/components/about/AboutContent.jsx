
export default function AboutContent() {
    return(
        <div className="w-full lg:w-1/2">
            <p className="text-base text-gray-700 font-league mt-[1rem] mb-[2rem] font-base tracking-wide lg:text-[1.1rem]/[1.8rem]">
                I help businesses, startups and personal brands turn ideas into modern, high-performing websites that look great and work even better. <span className=" border-b-2 border-solid border-gray-500">From creating attractive landing pages that drive conversions, to fully functional authentication systems and backend APIs, I build scalable solutions that solve real problems.</span>

                <span className="pt-[1rem] block">With the aid of modern technologies like React, Node js, and MongoDB (MERN), I focus on building websites that are user-friendly, load fast and work seamlessly across all devices.</span>
                <span className="pt-[1rem] block">Whether you're launching a new product, need a redesign, or want a developer who can build both frontend and backend systems, I am here to make that happen by incorporating clean code, smooth user experience, and reliable delivery.</span>
                <span className="pt-[1rem] block">Let's build something that not only looks good, but performs even better.</span>
            </p>

            <div className="mt-12 flex justify-center lg:block lg:mt-0">
                <button className="w-4/5 max-w-[295px] border border-gray-400 py-4 rounded-xl font-semibold cursor-pointer lg:w-7/20 lg:max-w-none" type="button">Let's work together</button>
            </div>
        </div>
    )
}
