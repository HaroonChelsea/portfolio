import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad Haroon",
  initials: "MH",
  url: "https://mharoon.dev",
  location: "Lahore, Pakistan",
  locationLink: "https://maps.app.goo.gl/nqSUYf5atyhi6w9d6",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people.",
  summary:
    "I am a Full Stack Developer with expertise in backend development, passionate about creating scalable and secure applications using the latest web technologies.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
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
