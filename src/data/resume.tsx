import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad Haroon",
  initials: "MH",
  url: "https://mharoon.dev",
  location: "Lahore, Pakistan",
  locationLink: "https://maps.app.goo.gl/nqSUYf5atyhi6w9d6",
  description:
    "Software Engineer who loves to explore ideas, build rapidly, and learn through shipping.",
  summary:
    "I'm Haroon, a full-stack developer passionate about building scalable applications and exploring innovative technologies. With experience in React.js, Node.js, and AI integrations, I thrive in fast-paced environments where experimentation leads to impactful solutions. Let's build something remarkable together.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "Kubernetes",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "haroonchelsea2761@gmail.com ",
    tel: "+923136595259",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/HaroonChelsea",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D8%AF-%DB%81%D8%A7%D8%B1%D9%88%D9%86-876675174/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "GoRealTravel",
      href: "https://gorealtravel.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/gorealtravel.png",
      start: "Sept 2023",
      end: "Present",
      description:
        "Worked as a full-stack developer on a travel management platform. Led backend development using Ruby on Rails, with frontend built in Angular. Implemented subscription gates, Redis caching, itinerary tracking, SEO editing workflows, and HubSpot CRM integrations. Managed AWS infrastructure and automated deployment pipelines for seamless production updates.",
    },
    {
      company: "Routd",
      href: "https://routd.com/",
      badges: [],
      location: "Remote",
      title: "React Native Developer",
      logoUrl: "/routd.jpg", // Add a logo asset if you have one
      start: "Apr 2024",
      end: "Jan 2025",
      description:
        "Worked on Routd’s mobile application as a React Native developer. Implemented background location tracking using native modules written in Kotlin and Swift. Integrated real-time notifications using SignalR and worked on overall app performance optimization.",
    },
    {
      company: "TradeFundrr",
      href: "https://tradefundrr.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/tradefundrr.png",
      start: "Feb 2023",
      end: "May 2023",
      description:
        "Worked as a frontend developer using React.js. Built interactive financial charts and visualizations. Wrote unit and integration tests to ensure frontend reliability and maintainability. Collaborated with design and backend teams to deliver a seamless user experience.",
    },
    {
      company: "Hashlogics",
      href: "https://hashlogics.com/",
      badges: [],
      location: "San Jose, CA",
      title: "Full Stack Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQHj7iuYokL8eg/company-logo_200_200/company-logo_200_200/0/1688558906326/hashlogics_logo?e=1746662400&v=beta&t=-FDXaTOo5-Op4wBDFbeH2XE6S3UPYyDu_CbUICUmsuo",
      start: "July 2022",
      end: "Present",
      description:
        "Led backend development for multiple projects, ensuring robust architecture. Managed AWS services, including S3 and CloudFront, for scalable solutions. Automated deployment pipelines using CircleCI for continuous integration. Streamlined cloud infrastructure management and optimized server deployments.",
    },
    {
      company: "Ownish",
      href: "https://ownish.co.uk/",
      badges: [],
      location: "Liverpool, Merseyside, England",
      title: "Reactjs and React Native Developer",
      logoUrl: "/ownish.png",
      start: "Sept 2021",
      end: "May 2022",
      description:
        "Integrated various third-party APIs, enhancing application functionality. Implemented real-time chat features for improved user engagement. Integrated Stripe payments and connected accounts, ensuring secure transactions. Developed and maintained both front-end and back-end components for seamless user experiences.",
    },
    {
      company: "AKODES IT SOLUTIONS",
      href: "http://www.akodes.com",
      badges: [],
      location: "Multan, Punjab",
      title: "Jr. Mobile Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQFTNKCLv-XXCQ/company-logo_200_200/company-logo_200_200/0/1694163449790/akodes_it_solutions_logo?e=1746662400&v=beta&t=31a3RxmM0fVrnzw3oEuEY2Q3XDmRpZiDtbhhx6pAXu4",
      start: "Jun 2021",
      end: "Sep 2021",
      description:
        "Worked as a full-stack developer, creating RESTful APIs using Laravel and CodeIgniter, and integrating them into Ionic mobile applications. Collaborated with front-end teams, optimized database performance, and gained experience in server-side programming and web technologies.",
    },
  ],
  education: [
    {
      school: "Muhammad Nawaz Sharif University of Agriculture, Multan",
      href: "https://www.mnsuam.edu.pk/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl:
        "https://www.mnsuam.edu.pk/images/logos/cropped-MNS-UAM-Logo-Large-180x180.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [] as Array<{
    title: string;
    href: string;
    dates: string;
    description: string;
    technologies: Array<string>;
    image: string;
    video: string;
    links: Array<{
      icon: React.ReactNode;
      type: string;
      href: string;
    }>;
  }>,
  hackathons: [] as Array<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    links: Array<{
      title: string;
      icon: JSX.Element;
      href: string;
    }>;
  }>,
} as const;
