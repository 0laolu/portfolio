const projectData = [
    {
        id: 1,
        slug: "cardio-health",
        image: "/projectImages/thecardiohealthimage.jpg",
        title: "THE CARDIO HEALTH",
        description: "A full-stack health awareness platform designed to make vital heart health information accessible to anyone, using an engaging blog system with an email subscription feature.",
        tools: ["React JS", "Node JS", "Express JS", "MongoDB", "ReactQuill", "Cloudinary", "Substack"],
        targetAudience: "A health-focused organization publishing educational content for the public",
        role: {
            first: "Built a dynamic blog system so new articles, updates, or even campaigns can be published in minutes",
            second: "Integrated an email subscription flow that converts visitors into regular readers by sending updates to their inbox",
            third: "Developed a responsive, user-friendly interface that works seamlessly across all screen sizes ensuring the audience has a smooth experience",
            fourth: "Built efficient backend workflows that save you time on blogs and subscriber management",
            fifth: "Ensured fast load times and SEO-friendly structures, making the site easy to find on search engines and keeping users engaged longer"
        },
        result: "Enabled fast content publishing, improved search visibility, and built a scalable platform ready for future expansion.",
        liveUrl: "https://thecardiohealth.org",
        githubUrl: "https://github.com/0laolu/cardio_health_backend",

        // Case study specific fields
        overview: "The Cardio Health is a full-stack health awareness platform built for a youth-led Nigerian healthcare initiative. The goal was to create a modern digital home where the organization could publish cardiovascular health content, grow their audience through email subscriptions, and manage everything from a simple admin dashboard — without needing a developer every time.",
        problem: "The organization had no digital presence and was relying entirely on social media to share health information. They needed a platform they could own, manage independently, and scale as their audience grew. Content was being lost, subscriber data was unorganized, and there was no way to track engagement.",
        keyFeatures: [
            "Dynamic blog system with rich text editor for publishing articles, campaigns and updates",
            "Email subscription flow that automatically adds new subscribers and sends updates",
            "Cloudinary-powered image uploads for fast, optimized media management",
            "Fully responsive design across mobile, tablet and desktop",
            "SEO-friendly page structure for better search engine visibility",
            "Admin dashboard for managing blog posts and subscribers"
        ],
        implementation: "The frontend was built with React JS, using component-based architecture for scalability and reusability. The backend was built with Node JS and Express JS, with MongoDB as the database. ReactQuill was integrated as the rich text editor for blog post creation. Cloudinary handles all image uploads and optimization. Substack was connected to manage and send email newsletters to subscribers.",
        challenges: [
            "Integrating ReactQuill with the backend while preserving formatting on render was tricky — solved by sanitizing and parsing HTML output carefully",
            "Managing image uploads efficiently without slowing down the site led to the decision to use Cloudinary's transformation API",
            "Making the platform easy enough for a non-technical team to use required simplifying the admin UI significantly"
        ],
        results: [
            "The organization can now publish new content in minutes without developer support",
            "Email subscriber base is growing with an automated flow in place",
            "Site loads fast and ranks better on search engines due to SEO-friendly structure",
            "Platform is fully scalable and ready for future features like events and donations"
        ]
    }
]

export default projectData