// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// export default function TechnologiesContent() {

//     const [stack, setStack] = useState("languages")

//     const handleTechStack = (category) => {
//         setStack(category)
//     }

//     const categories = {
//         languages: "Languages",
//         frameworks: "Frameworks & Libraries",
//         tools: "DevOps & Tools"
//     }

//     const activeStack = technologyData[stack]

    

//     return (
//         <div className="content-container py-8">
            
//             <div className="btn-container w-1/2 mx-auto flex justify-around">
//                 {
//                     Object.entries(categories).map(([key, label]) => (
//                         <button
//                          key={key}
//                          onClick={()=> handleTechStack(key)} 
//                          className={`border border-gray-600 text-xl py-3 px-8 rounded-md cursor-pointer font-league ${
//                             stack === key
//                                 ? "bg-gray-600 text-white border-gray-600"
//                                 : "border-white-400 text-white-700 hover:border-gray-400 hover:text-gray-500"
//                          }`}
//                         >
//                             {label}
//                         </button>
//                     ))
//                 }
//             </div>

//             {/* Tech Stack Display */}
//             <div className="stack-container mt-10 flex flex-wrap justify-center gap-6">
//                 <AnimatePresence mode="wait">
//                 <motion.div
//                     key={stack}
//                     initial={{ opacity: 0, y: 15 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -15 }}
//                     transition={{ duration: 0.4 }}
//                     className="flex flex-wrap justify-center gap-6"
//                 >
//                     {activeStack.map((tech) => (
//                     <motion.div
//                         key={tech}
//                         whileHover={{ scale: 1.1 }}
//                         className="bg-gray-100 shadow-sm border border-gray-200 text-gray-700 rounded-xl px-6 py-3 text-lg font-medium"
//                     >
//                         {tech}
//                     </motion.div>
//                     ))}
//                 </motion.div>
//                 </AnimatePresence>
//             </div>
//         </div>
//     )
// }
 

// const technologyData = {
//         languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
//         frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Context API", "Framer Motion",],
//         tools: ["Git/GitHub", "Vercel/ Netlify", "Render", "MongoDB Atlas", "Postman", "Figma"]
//     }


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
    tools: "DevOps & Tools",
  }

  const activeStack = technologyData[stack]

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-4">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleTechStack(key)}
              className={`whitespace-nowrap rounded-md font-body transition-all duration-300 cursor-pointer
                text-sm sm:text-base md:text-lg 
                px-4 py-2 sm:px-6 sm:py-3
                ${
                  stack === key
                    ? "grad-bg text-[var(--color-bg)] border border-transparent"
                    : "border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-cream)]"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tech Stack Display */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
            key={stack}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 place-items-center"
            >
            {activeStack.map((tech) => (
                <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="w-[200px] flex items-center justify-center
                    card text-[var(--color-muted)] font-body
                    rounded-xl font-medium text-center
                    h-14 sm:h-16 md:h-18
                    px-2 sm:px-4
                    text-sm sm:text-base
                    transition-colors duration-200 hover:border-[var(--color-border-hover)]"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

const technologyData = {
  languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  frameworks: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Context API",
    "Framer Motion",
  ],
  tools: [
    "Git/GitHub",
    "Vercel / Netlify",
    "Render",
    "MongoDB Atlas",
    "Postman",
    "Figma",
  ],
}
