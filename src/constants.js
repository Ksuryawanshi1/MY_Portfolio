// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sp from './assets/tech_logo/springboot.png';
import hb from './assets/tech_logo/hibernate.jpg';
import RA from './assets/tech_logo/RestAPI.jpeg';
import JA from './assets/tech_logo/JPA.png';
import Postman from './assets/tech_logo/postman.png';
import PostgreSql from './assets/tech_logo/postgresql.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import mysqlLogo from './assets/tech_logo/mysql.png';

import cLogo from './assets/tech_logo/c.png';

import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import ECIDE from './assets/tech_logo/eclips.png';


// Experience Section Logo's
import nerdtech from './assets/company_logo/nerdtech.png';
import cravita from './assets/company_logo/cravita.png';

// Education Section Logo's
import DDKMV from './assets/education_logo/DDKMV.jpg'; 
import RBNB from './assets/education_logo/images.jpeg';
import sitrc from './assets/education_logo/collegelogo.png';

// Project Section Logo's
import Emotion from './assets/work_logo/EmotionDetection.png';

import Campus from './assets/work_logo/Campus.png';
import bank from './assets/work_logo/bank.png';
import Reply from './assets/work_logo/Reply.png';
import Research from './assets/work_logo/Research.png';
import Finora from './assets/work_logo/Finora.png';
import Weather from './assets/work_logo/Weather.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend & DB',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'SpringBoot', logo: sp },
      { name: 'Hibernate', logo: hb },
      { name: 'RestAPI', logo: RA },
      
      { name: 'PostgreSQL', logo: PostgreSql }
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     
      { name: 'Python', logo: pythonLogo  },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: Postman },
      { name: 'Eclips IDE', logo: ECIDE }
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img:cravita,
      role: "FullStack Developer",
      company: "Cravita Technologies",
      date: "Jan 2025 - Present",
      desc: "Intern at Cravita Technologies, Developed dynamic and scalable web applications using JAVA, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        "SpringBoot",
        "Servelets",
        "Microservices"
      ],
    },
    {
      id: 1,
      img: nerdtech,
      role: "Web Developer",
      company: "Nerdtech",
      date: "Jan 2024 - Feb 2024",
      desc: "Contributed to innovative projects as a Web Developer Intern, Learned how to create frontend development using technologies such as HTML, CSS, JavaScript, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "Bootstrap",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",

      ],
    },
    
  ];
  
  export const education = [
  
    {
      id: 0,
      img: sitrc,
      school: "Sandip Instite of Technology and Research Centre (SITRC), Nashik",
      date: " December 2021 - June 2025",
      grade: "7.40 CGPA",
      desc: "I earned my Bachelor of Engineering in Information Technology from Sandip Institute of Technology and Research Centre, Nashik. My academic journey enhanced my technical expertise and problem-solving skills, with a strong focus on Data Structures, Algorithms, Web Development, Database Management Systems, and Emerging Technologies, building a solid foundation in modern software engineering",
      degree: "Bachelor of Engineering in Information Technology",
    },
    {
      id: 1,
      img: RBNB,
      school: "R. B. Narayanrao Borawake College,Shrirampur",
      date: "June 2020 - June 2021",
      grade: "82%",
      desc: "I pursued my Class 12 education at R. B. Narayanrao Borawake College under the Maharashtra State Board, with a focused curriculum in Physics, Chemistry, Mathematics (PCM), and Computer as major subject.",
      degree: "Maharashtra State Board HSC(XII) - PCMB with Information Techonology",
    },
    {
      id: 2,
      img: DDKMV,
      school: "D.D.Kachole Madhyamik Vidyalay Secondary School , Shrirampur",
      date: "Apr 2018 - March 2019",
      grade: "76%",
      desc: "I completed my Class 10 education at D.D.Kachole Madhyamik Vidyalay Secondary School under the State board.",
      degree: "Maharashtra State Board SSC(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Finora-AI Financial Assistant",
      description:
         "Finora is an intelligent personal finance management platform that helps users track expenses, analyze spending patterns, and receive AI-powered financial suggestions. Built with Spring Boot 3, Java 21, and React 18, the system provides secure authentication, powerful analytics, and real-time insights to help users make smarter financial decisions.The application integrates Google Gemini AI to analyze transaction data and generate meaningful financial recommendations. Automated email alerts powered by Brevo SMTP and Spring Scheduler keep users informed with daily expense summaries, reminders, and alerts. The frontend is built using React + Vite, featuring rich data visualizations, responsive UI, and a seamless user experience.",
      image: Finora,
      tags: ["Java",  "SpringBoot","Gemini Ai","Spring Security","Brevo SMTP","Spring Scheduler"],
      github: "https://github.com/Ksuryawanshi1/Finora-AI-Financial-Assistant",
      webapp: "",
    },
    {
      id: 1,
      title: "Research Pilot",
      description:
         "Research Pilot is an AI-powered learning assistant built using a Chrome Extension and a Spring Boot backend that helps users transform online content into meaningful study material. It analyzes web pages, summarizes key information, extracts important points, generates intelligent questions, and creates MCQs using AI, making learning faster and more efficient. With seamless browser integration, reliable backend processing, and intelligent prompt handling, Research Pilot helps students, educators, and researchers quickly understand complex content and convert raw web text into structured, easy-to-learn knowledge.",
      image: Research,
      tags: ["Java", "Chrome-Extension", "SpringBoot","Gemini Ai"],
      github: "https://github.com/Ksuryawanshi1/Research-Pilot",
      webapp: "",
    },
 
    {
      id: 2,
      title: "Campus Career Hub",
      description:
        "As the Front-End Developer, I contributed to the development of Campus Career Hub, an innovative full-stack platform built with the MERN stack. Designed as a comprehensive bridge between students and recruiters, the portal empowers students to seamlessly apply to companies, undertake aptitude assessments, participate in live online interviews, and receive digitally generated offer letters—all in a unified ecosystem. With its modern interface, secure architecture, and end-to-end recruitment workflow, this project highlights my expertise in building responsive user interfaces, ensuring smooth user experiences, and collaborating effectively within a team to deliver impactful real-world applications.",
      image: Campus,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Ksuryawanshi1/JOB-PORTAL",
      webapp: "",
    },
     {
      id: 3,
      title: "Reply Wizard ",
      description:
         "Reply Wizard is an AI-powered email automation tool built using Spring Boot and React.js that helps users generate smart, context-aware email replies instantly. The system analyzes incoming emails, summarizes key information, and uses AI to generate professional and personalized responses, significantly reducing manual typing effort and response time. With secure backend APIs, a smooth UI, and real-time AI integration, Reply Wizard improves productivity and enhances communication efficiency.",
      image: Reply,
      tags: ["Java", "React", "SpringBoot","Gemini Ai"],
      github: "https://github.com/Ksuryawanshi1/ReplyWizard",
      webapp: "",
    },
    {
      id: 4,
      title: "World Weather",
      description:
        "World Weather is a lightweight web application built with HTML, CSS, and JavaScript, integrated with a Weather API to provide real-time climate updates. By simply entering a city name, users can instantly access accurate weather details from anywhere in the world. This project demonstrates my skills in API integration, dynamic data rendering, and building responsive user-friendly interfaces that deliver practical, real-world utility.",
      image: Weather,
      tags: ["API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ksuryawanshi1/Weather-Webapp",
      webapp: "https://ksuryawanshi1.github.io/Weather-Webapp/",
    },
    {
      id: 5,
      title: "Emotion Sense",
      description:
        "Emotion Sense is an interactive web application built using HTML, CSS, JavaScript, and Emotion Detection APIs. By leveraging the user’s camera, the system intelligently recognizes facial expressions, analyzes emotional states in real-time, and delivers personalized recommendations tailored to the detected mood. Designed with a sleek front-end and seamless API integration, the project demonstrates my ability to blend modern UI with AI-driven insights, creating an engaging and human-centric digital experience.",
      image: Emotion,
      tags: ["API", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },    
    {
      id: 6,
      title: "Bank Management System",
      description:
         "The Bank Management System is a secure and efficient application developed using Java, JDBC, and MySQL, designed to digitally manage and streamline banking operations. It maintains complete records of customers, accounts, and transactions, ensuring accuracy, transparency, and security in financial data handling. This project highlights my expertise in database-driven application development, backend logic implementation, and real-world financial problem solving, creating a scalable solution that simplifies bank administration.",
      image: bank,
      tags: ["Java", "JDBC", "SQL"],
      github: "https://github.com/Ksuryawanshi1/Bank-Management-System",
      webapp: "",
    }
  ];  
