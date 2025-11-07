import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TechnologiesContent() {

    const [stack, setStack] = useState("languages")

    const handleTechStack = (category) => {
        setStack(category)
    }

    const categories = {
        languages: "Languages",
        frameworks: "Frameworks & Libraries",
        tools: "DevOps & Tools"
    }

    const activeStack = technologyData[stack]

    

    return (
        <div className="content-container py-8">
            
            <div className="btn-container w-1/2 mx-auto flex justify-around">
                {
                    Object.entries(categories).map(([key, label]) => (
                        <button
                         key={key}
                         onClick={()=> handleTechStack(key)} 
                         className={`border border-gray-600 text-xl py-3 px-8 rounded-md cursor-pointer font-league ${
                            stack === key
                                ? "bg-gray-600 text-white border-gray-600"
                                : "border-white-400 text-white-700 hover:border-gray-400 hover:text-gray-500"
                         }`}
                        >
                            {label}
                        </button>
                    ))
                }
            </div>

            {/* Tech Stack Display */}
            <div className="stack-container mt-10 flex flex-wrap justify-center gap-6">
                <AnimatePresence mode="wait">
                <motion.div
                    key={stack}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {activeStack.map((tech) => (
                    <motion.div
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-100 shadow-sm border border-gray-200 text-gray-700 rounded-xl px-6 py-3 text-lg font-medium"
                    >
                        {tech}
                    </motion.div>
                    ))}
                </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
 

const technologyData = {
        languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
        frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Context API", "Framer Motion",],
        tools: ["Git/GitHub", "Vercel/ Netlify", "Render", "MongoDB Atlas", "Postman", "Figma"]
    }