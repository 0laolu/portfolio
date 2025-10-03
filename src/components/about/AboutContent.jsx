
export default function AboutContent() {
    return(
        <div className="about-content-wrapper w-full my-16">
            <div className=" numbers-container w-4/5 mx-auto relative mt-4">
                <span className="line-through border-gray-500 border-t-1 w-full flex absolute top-7 z-[-2]"></span>
                <div className="w-full flex justify-between">
                    <p className="bg-white text-lg text-gray-600 font-semibold border border-gray-500 rounded-full py-3 px-[1.35rem]">1</p>
                    <p className="bg-white text-lg text-gray-600 font-semibold border border-gray-500 rounded-full py-3 px-[1.35rem]">2</p>
                    <p className="bg-white text-lg text-gray-600 font-semibold border border-gray-500 rounded-full py-3 px-[1.35rem]">3</p>
                    <p className="bg-white text-lg text-gray-600 font-semibold border border-gray-500 rounded-full py-3 px-[1.35rem]">4</p>
                </div>
            </div>
            <div className="about-content w-full flex justify-between mt-8">
                {
                    contentData.map(content => (
                        <div key={content.id} className="content-card w-6/25 text-center">
                            <h3 className="card-title text-[1.2rem] font-semibold my-2">{content.title}</h3>
                            <p className="card-description">{content.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


const contentData = [
    {
        id: 1,
        icon: "",
        title: "Discovery & Goals",
        description: "We begin with a quick call to learn about and understand your business, your audience, and your goals. By the end, you'll have a clear plan for how your website will achieve results"
    }, 
    {
        id: 2,
        icon: "",
        title: "Setup & Preview",
        description: "I’ll create a simple, clickable prototype so you can see exactly how your site will look and feel. This lets you preview the structure and share feedback before full development begins"
    },
    {
        id: 3,
        icon: "",
        title: "Development & Testing",
        description: "This is where your site comes to life. I transform the design into a fast, mobile-first site optimized for conversions. You'll see progress updates, and everything is tested across devices before launch"
    },
    {
        id: 4,
        icon: "",
        title: "Launch & Support",
        description: "Once approved, we launch your site. I'll also guide you through updating content yourself and provide ongoing support to make sure your website keeps performing for your business"
    }
]