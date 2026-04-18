export default function AboutContent() {
    return(
        <div className="about-content-wrapper w-full my-16">
            <div className="about-content w-full flex flex-col lg:flex-row justify-between gap-8">
                {
                    contentData.map((content, index) => (
                        <div key={content.id} className="content-card w-full lg:w-[345.58px] text-center">
                            <div className="numbers-container mx-auto relative mt-4 mb-6">
                                <span className="w-full flex absolute top-7 z-[-2] opacity-20 lg:hidden" style={{ borderTop: '1px solid var(--color-border-hover)' }}></span>
                                <p className="grad-bg text-lg text-[var(--color-bg)] font-semibold rounded-full py-3 px-[1.35rem] mx-auto w-fit">{index + 1}</p>
                            </div>
                            <h3 className="card-title text-[var(--color-cream)] text-[1.1rem] font-semibold font-display my-3">{content.title}</h3>
                            <p className="card-description text-[var(--color-muted)] text-[0.9rem] font-body leading-relaxed">{content.description}</p>
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