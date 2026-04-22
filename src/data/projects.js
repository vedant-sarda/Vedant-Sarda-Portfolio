const B = "/";

  export const projects = [
    {
      id: "atorix",
      title: "Atorixit.com",
      description:
        "Full-stack SAP consultancy platform with SEO optimization, custom dashboard, and scalable architecture deployed on Vercel and Render.",
      category: "fullstack",
      image: `${B}projects/atorix.png`,
      icon: `${B}projects/atorix-favicon.png`,
      screenshots: [`${B}projects/atorix-1.png`, `${B}projects/atorix-2.png`],
      stack: ["Next.js", "Express", "MongoDB", "TailwindCSS", "Vercel", "Render"],
      link: "https://atorixit.com/",
      github: "https://github.com/vedant-sarda/Atorix-it-main",
    },
    {
      id: "erp",
      title: "ConnectingDotsERP.com",
      description:
        "Enterprise resource planning platform with rich dashboards, course catalogs, lead capture, and analytics.",
      category: "fullstack",
      image: `${B}projects/erp.png`,
      screenshots: [`${B}projects/erp-1.png`, `${B}projects/erp-2.png`],
      stack: ["Next.js", "Express", "MongoDB", "REST APIs"],
      isPrivate: true,
    },
    {
      id: "wildrydes",
      title: "Wild Rydes App",
      description:
        "AWS serverless 3-tier web application with Cognito authentication, IAM least-privilege roles, and 10k+ req/day handling.",
      category: "fullstack",
      image: `${B}projects/wildrydes.png`,
      screenshots: [`${B}projects/wildrydes-1.png`],
      stack: ["S3", "CloudFront", "Amplify", "Lambda", "API Gateway", "DynamoDB", "Cognito"],
    },
    {
      id: "art-gallery",
      title: "Art Gallery",
      description: "Personal creative project showcasing digital art.",
      category: "fullstack",
      stack: ["Next.js"],
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description:
        "Modern UI showcase with dark theme, glassmorphism, and smooth animations.",
      category: "fullstack",
      image: `${B}projects/portfolio_website.png`,
      stack: ["React", "Next.js", "Tailwind", "Framer Motion"],
    },
    {
      id: "salesforce-api",
      title: "Salesforce Integration API",
      description:
        "MuleSoft API integrating Salesforce CRM with country-code enrichment via FIRST.org REST API. Includes structured logging, error handling, and SLA throttling (100 req/min).",
      category: "integration",
      image: `${B}projects/salesforce.jpg`,
      stack: ["MuleSoft", "RAML", "DataWeave", "CloudHub", "MUnit"],
    },
    {
      id: "coming-soon",
      title: "Coming Soon",
      description: "New integration project under development.",
      category: "integration",
      stack: [],
    },
  ];
  