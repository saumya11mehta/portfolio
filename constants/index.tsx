import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    techsmith,
    sparsh,
    jobsdash,
    tasklist,
    portfolio,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];

  const technologiesMobile = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Sparsh Technologies",
      icon: sparsh,
      iconBg: "#E6DEDD",
      date: "May 2019 - August 2021",
      points: [
        "Developed custom modules for Magento 2 and integrated them with mobile apps using REST APIs.",
        "Customized third-party extensions, including CSV import, and deployed modules to client repositories.",
        "Used PHP, JavaScript, and Laravel to implement Listing Management, Auto Posting, and Ads functionalities for an E-commerce, Store Management System, as well as a Template Editor Module.",
        "Generated critical documents, such as Order PDFs and accounting reports, and used Jira for project management and GIT for version control.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "TechSmith Solutions Pvt. Ltd.",
      icon: techsmith,
      iconBg: "#E6DEDD",
      date: "June 2017 - May 2019",
      points: [
        "As a full-stack developer, performed diverse tasks ranging from configuring client systems and database manipulation to front-end (JavaScipt & jQuery) and back-end (PHP) coding, and project management.",
        "Contributed to developing basic modules of the Hospital Management System, such as registration and billing.",
        "Leveraged my Python skills to integrate lab systems with the software and enable seamless data transfer.",
        "Working independently, I designed and implemented queue management for hospital patients.",
        "Created a user-friendly & responsive web view that allowed users to scan and upload PDF documents from mobile and computer platforms.",
        "Also generated and designed multiple Management Information System (MIS) reports.",
      ],
    }
    
  ];
  
  const projects = [
    {
      name: "Jobs Board",
      description:
        "Web-based platform that allows users to search, apply and manage their job applications.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobsdash,
      source_code_link: "https://github.com/saumya11mehta/JobsDashboard",
    },
    {
      name: "Task List",
      description:
        "A simple task list made with react and typescript. Something that I built when learning react and will also improve and apply new concepts to the same in future.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tasklist,
      source_code_link: "https://github.com/saumya11mehta/TaskList",
    },
    {
      name: "My Portfolio",
      description:
        "I don't think this needs a description as you are checking it out already!!! But well this is my attempt at making an impressive portfolio website with Next.js, Three.js & Tailwind CSS. Might add a mongo connection soon. So contact me if there's anything that I can do for you.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/saumya11mehta/portfolio",
    },
  ];
  
  export { services, technologies, technologiesMobile, experiences, projects };