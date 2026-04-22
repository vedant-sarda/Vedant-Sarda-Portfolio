import {
    SiPython, SiJavascript, SiHtml5, SiCss, SiReact, SiNextdotjs,
    SiTailwindcss, SiExpress, SiNodedotjs, SiMongodb, SiMysql,
    SiDocker, SiSalesforce, SiPostman
  } from "react-icons/si";
  import { FaAws, FaDatabase } from "react-icons/fa";
  import { VscSettingsGear } from "react-icons/vsc";

  export const skillCategories = [
    {
      title: "Languages & Tools",
      skills: [
        { name: "Python", icon: SiPython },
        { name: "SQL", icon: FaDatabase },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss },
      ],
    },
    { title: "Frontend", skills: [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
    ]},
    { title: "Backend", skills: [
        { name: "Express.js", icon: SiExpress },
        { name: "Node.js", icon: SiNodedotjs },
    ]},
    { title: "Database", skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "DynamoDB", icon: FaDatabase },
    ]},
    { title: "Cloud & DevOps", skills: [
        { name: "AWS", icon: FaAws },
        { name: "CI/CD", icon: VscSettingsGear },
        { name: "Docker", icon: SiDocker },
    ]},
    { title: "Integration", skills: [
        { name: "MuleSoft", icon: VscSettingsGear },
        { name: "Salesforce", icon: SiSalesforce },
    ]},
    { title: "API Tools", skills: [
        { name: "Postman", icon: SiPostman },
        { name: "REST APIs", icon: VscSettingsGear },
    ]},
  ];
  