export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Tech Stack", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];


export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I am actively seeking new career opportunities.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning new web technologies",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Promptful: Next.js Web Application for Prompt Management",
    des: "Developed and launched a website, Promptful, to create and store prompts using Next.js, integrated with Google Authentication.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/material.svg", "/express.svg", "/mongodb.svg", "/oauth.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
    webname: "Promptful",
    webLink: "https://github.com/adrianhajdin/ai_saas_app"

  },
  {
    id: 2,
    title: "Transform Your Health with Personal Fit Journey",
    des: "Discover personalized fitness plans, expert tips, and a supportive community to achieve your health goals.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/javascript.svg", "/rapidapi-icon.svg", "/material.svg", "/mongodb.svg"],
    link: "https://github.com/AbhayWakle/Fitness",
    webname: "Fit Journey",
    webLink: "https://github.com/AbhayWakle/Fitness"
  },
  {
    id: 3,
    title: "Where Every Step Tells a Story: Adap Shoes",
    des: "Explore the world of footwear with our captivating shoes showcase using Front-end on Adap Shoes.",
    img: "/p1.svg",
    iconLists: ["/html.svg", "/css.svg", "/bootstrap.svg", "/javascript.svg", "/github.svg", "/vs.svg"],
    link: "https://abhaywakle.github.io/Adap-Shoes/",
    webname: "Adap Shoes",
    webLink: "https://github.com/abhaywakle/Adap-Shoes/"
  },
  {
    id: 4,
    title: "MovieFlix - Explore your favourite Movies",
    des: "Search and explore your favoutite movies and get information about their sequels",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/javascript.svg", "/github.svg", "/vs.svg"],
    link: "https://github.com/AbhayWakle/movieflix",
    webname: "MovieFlix",
    webLink: "https://github.com/AbhayWakle/movieflix"
  },
];

export const testimonials = [
  {
    quote:
      "I use Aceternity UI because it's the Swiss Army knife of design tools - sturdy, easy to wield, and always responsive, like a well-trained butler. Its consistent user experience is like having a personal assistant, and the community support feels like a group hug from fellow developers.",
    name: "Aceternity UI",
    title: "Using Aceternity UI enhances development.",
    techimg: "/cloud.svg",
  },
  {
    quote:
      "I use React because its component-based architecture is like Lego for adults, making complex UIs a breeze to build. The virtual DOM is like caffeine for performance, and the bustling community and rich ecosystem are a developer's playground. React's flexibility and reusable components keep my development life efficient and sane.",
    name: "React js",
    title: "React simplifies complex UI development.",
    techimg: "/app.svg",
  },
  {
    quote:
      "With 2 years of JavaScript under my belt, I harness its superhero-like versatility for dynamic web adventures, interactive shenanigans, and even server-side sorcery. JavaScript's omnipresence, along with its vast library of sidekicks and powerful frameworks, turbocharges my quest for efficient and scalable app development.",
    name: "Javascript",
    title: "JavaScript powers dynamic web interactions.",
    techimg: "/javascript.svg",
  },
  {
    quote:
      "With 4 years of experience, I wield HTML and CSS like a web wizard. HTML is my magic wand, structuring content effortlessly, while CSS is my enchanted paintbrush, styling pages into pixel-perfect masterpieces. Together, they turn bland websites into spellbinding digital adventures!",
    name: "HTML",
    title: "HTML: Skeleton of the internet.",
    techimg: "/html.svg",
  },
  {
    quote:
      "With a year of experience, Next.js is my trusty sidekick in the wild world of web development. It's like having a magical teleportation device for creating lightning-fast React applications. With its SSR powers and automatic code splitting, Next.js turns the mundane into the extraordinary, one line of code at a time.",
    name: "Next js",
    title: "Next.js: Making React Fly High!",
    techimg: "/host.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Aceternity ui",
    img: "/cloud.svg",
    nameImg: "Aceternity",
  },
  {
    id: 2,
    name: "React js",
    img: "/app.svg",
    nameImg: "React js",
  },
  {
    id: 3,
    name: "Next js",
    img: "/host.svg",
    nameImg: "Next js",
  },
  {
    id: 4,
    name: "GitHub",
    img: "/s.svg",
    nameImg: "GitHub",
  },
  {
    id: 5,
    name: "MongoDb",
    img: "/mongodb.svg",
    nameImg: "MongoDb",
  },
  {
    id: 6,
    name: "Javascript",
    img: "/javascript.svg",
    nameImg: "Javascript",
  },
  {
    id: 7,
    name: "Express",
    img: "/express.svg",
    nameImg: "Express",
  },
  {
    id: 8,
    name: "HTML",
    img: "/html.svg",
    nameImg: "HTML",
  },
  {
    id: 9,
    name: "CSS",
    img: "/css.svg",
    nameImg: "CSS",
  },
  {
    id: 10,
    name: "Tailwind",
    img: "/tail.svg",
    nameImg: "CSS",
  },
  {
    id: 11,
    name: "Bootstrap",
    img: "/bootstrap.svg",
    nameImg: "Bootstrap",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Intern",
    desc: "As a full stack intern, I weave seamless user interfaces with powerful back-end functionality, crafting complete digital experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Projects",
    desc: "As a freelancer, I transform ideas into reality, delivering customized, end-to-end digital solutions for clients.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/AbhayWakle", // Example GitHub link
  },
  {
    id: 2,
    img: "/leetcode.svg",
    link: "https://leetcode.com/u/abhay_xiv/", // Example Twitter link
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/abhay-wakle-559a96228/", // Example LinkedIn link
  },
  {
    id: 4,
    img: "/insta.svg",
    link: "https://www.instagram.com/abhay_xiv/", // Example LinkedIn link
  },
];