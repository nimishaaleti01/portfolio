import React, { useState } from "react";
import { FaJava, FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaAws } from 'react-icons/fa';
import { SiSpring, SiDocker, SiKubernetes, SiGraphql, SiAmazondynamodb, SiMongodb, SiMysql, SiPostgresql, SiJenkins, SiApachemaven, SiLinux, SiPython, SiGit } from 'react-icons/si';

// --- Data filled from resume ---
const portfolioData = {
  name: "Nimisha Reddy Aleti",
  title: "Backend Java Developer",
  bio: "Experienced Backend Java Developer with 2+ years building enterprise applications using Java and the Spring ecosystem. I design RESTful and GraphQL services, work across SQL/NoSQL databases (RDS, DynamoDB), and deploy to AWS using containerized workloads on Kubernetes. I care about reliability, security, and clean API design, with hands-on CI/CD experience in Jenkins and strong Linux fundamentals.",
  contact: {
    email: "Nimisha.aleti.01@gmail.com",
    phone: "913-253-6106",
    linkedin: "https://linkedin.com/in/...", // ← replace with your exact LinkedIn URL
    github: "https://github.com/NimisaAleti",
    resumePdf: "", // optional: add a public PDF URL if you want the Download button to appear
  },
  skills: [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpring /> },
    { name: "Spring Data", icon: <SiSpring /> },
    { name: "REST APIs", icon: <SiSpring /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "DynamoDB", icon: <SiAmazondynamodb /> },
    { name: "RDS / SQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Jenkins", icon: <SiJenkins /> },
    { name: "Maven", icon: <SiApachemaven /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Python (ML integration)", icon: <SiPython /> },
  ],
  projects: [
    {
      id: 1,
      title: "Microservices E‑Commerce Platform",
      description:
        "Scalable backend microservices with Java + Spring Boot/Data on Linux. Exposed RESTful and GraphQL APIs for catalog, users, and orders, backed by DynamoDB and RDS. Integrated ML recommendations, AWS Lambda, and CI/CD via Jenkins; containerized with Docker and orchestrated on Kubernetes.",
      link: "#",
      repoLink: "#",
      tags: ["Java", "Spring Boot", "GraphQL", "DynamoDB", "RDS", "AWS", "Docker", "Kubernetes", "Jenkins"],
    },
    {
      id: 2,
      title: "Real‑time Data Processing System",
      description:
        "Event‑driven ingestion and analysis using Java, Spring (Boot/Data/Security), and ML models. APIs via REST + GraphQL. Used AWS Lambda, DynamoDB, EKS (Kubernetes), Route53; automated with Jenkins and Docker; applied QA testing and performance tuning on Linux.",
      link: "#",
      repoLink: "#",
      tags: ["Java", "Spring", "Lambda", "DynamoDB", "EKS", "Kubernetes", "Route53", "Docker", "Jenkins", "ML"],
    },
    {
      id: 3,
      title: "Enterprise API Gateway",
      description:
        "Java + Spring Boot API gateway with Spring Data. Implemented REST patterns with GraphQL flexibility, integrated AWS (Lambda, DynamoDB, Route53), containerized with Docker, deployed to Kubernetes (EKS), and automated with Jenkins + QA coverage.",
      link: "#",
      repoLink: "#",
      tags: ["Spring Boot", "REST", "GraphQL", "AWS", "Docker", "Kubernetes", "Jenkins"],
    },
  ],
  experience: [
    {
      title: "Java Backend Engineer",
      company: "Virtusa",
      location: "",
      years: "May 2022 – Aug 2023",
      description: [
        "Built backend MVC apps using Java, Spring Boot, Spring Data, Struts, and J2EE on Linux.",
        "Implemented RESTful APIs and SOAP services; integrated GraphQL for efficient data access.",
        "Worked with SQL & NoSQL (incl. DynamoDB) and applied networking & OS fundamentals for performance.",
        "Created CI/CD with Jenkins; containerized with Docker; orchestrated with Kubernetes on AWS.",
        "Wrote unit tests (JUnit/Mockito), performed reviews, and debugged across Linux/Windows.",
      ],
    },
    {
      title: "Junior Java Developer",
      company: "Virtusa",
      location: "",
      years: "Jan 2022 – Apr 2022",
      description: [
        "Developed backend services with Java + Spring Boot and MySQL on Linux.",
        "Implemented REST endpoints and validated backend logic with JDBC.",
        "Learned CI/CD with Jenkins, Docker; gained AWS & NoSQL exposure and QA testing practice.",
        "Collaborated on backend architecture, debugging complex integrations and improving reliability.",
      ],
    },
  ],
  education: [
    {
      degree: "Master’s in Computer Science",
      institution: "University of Central Missouri",
      year: "",
    },
    {
      degree: "Bachelor of Engineering",
      institution: "Neil Gogte Institute of Technology",
      year: "",
    },
  ],
  certifications: [], // none listed on the resume
};

// --- Reusable Components ---
function Section({ title, children, id }) {
  return (
    <section id={id} className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-600 pb-2 text-gray-100">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ProjectCard({ title, description, link, repoLink, tags = [] }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-500/40 transition-shadow duration-300 border border-gray-800 flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-3 text-blue-400">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
      {tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-auto flex items-center space-x-4">
        {link && (
          <a
            href={link}
            className="text-blue-400 hover:text-blue-300 hover:underline text-sm inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View details for ${title}`}
          >
            <FaExternalLinkAlt className="mr-1" /> View Project
          </a>
        )}
        {repoLink && (
          <a
            href={repoLink}
            className="text-gray-500 hover:text-gray-300 text-sm inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View GitHub repository for ${title}`}
          >
            <FaGithub className="mr-1" /> Repo
          </a>
        )}
      </div>
    </div>
  );
}

function SkillBadge({ name, icon }) {
  return (
    <li className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
      {icon && React.cloneElement(icon, { className: "text-lg text-blue-400" })}
      <span className="text-sm text-gray-300">{name}</span>
    </li>
  );
}

function ExperienceCard({ title, company, location, years, description = [] }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-1 text-blue-400">{title}</h3>
      <p className="text-gray-400 text-sm font-medium mb-1">{company}</p>
      <p className="text-gray-500 text-xs mb-3">{[location, years].filter(Boolean).join(' • ')}</p>
      {description.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm mb-4 flex-grow">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function EducationCard({ degree, institution, year }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{degree}</h3>
      <p className="text-gray-400 text-sm">{institution}</p>
      {year ? <p className="text-gray-400 text-sm">{year}</p> : null}
    </div>
  );
}

export default function BackendJavaPortfolio() {
  const { name, title, bio, contact, projects, skills, experience, education, certifications } = portfolioData;
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects || projects.length <= 3 ? projects : projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-mono p-6 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {name}
          </h1>
          <p className="text-xl text-gray-400 mb-2">{title}</p>
          <p className="text-sm text-gray-500">{contact.phone}</p>
          <p className="text-gray-300 max-w-3xl mx-auto text-base font-sans mt-4">{bio}</p>
          <div className="mt-6 flex justify-center space-x-6">
            {contact.github && (
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="GitHub Profile">
                <FaGithub size={24} />
              </a>
            )}
            {contact.linkedin && (
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn Profile">
                <FaLinkedin size={24} />
              </a>
            )}
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Send Email">
                <FaEnvelope size={24} />
              </a>
            )}
          </div>
        </header>

        <Section title="About Me" id="about">
          <p className="text-gray-300 text-lg text-justify font-sans">
            I specialize in backend engineering with Java and Spring (Boot/Data/Security), building clean RESTful and GraphQL APIs, and operating across AWS services like Lambda, EKS, Route53, RDS, and DynamoDB. I ship via automated CI/CD (Jenkins), containerize with Docker, and operate on Kubernetes with strong Linux fundamentals and a security‑first mindset.
          </p>
        </Section>

        <Section title="Tools & Technologies" id="skills">
          <ul className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </ul>
        </Section>

        <Section title="Featured Projects" id="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          {projects.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="text-blue-400 hover:text-blue-300 text-sm flex items-center justify-center mx-auto px-4 py-2 rounded border border-blue-400 hover:bg-blue-900/30 transition-colors duration-200"
              >
                {showAllProjects ? (
                  <>
                    <FaChevronUp className="mr-2" /> Show Less Projects
                  </>
                ) : (
                  <>
                    <FaChevronDown className="mr-2" /> Show More Projects
                  </>
                )}
              </button>
            </div>
          )}
        </Section>

        {experience && experience.length > 0 && (
          <Section title="Experience" id="experience">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experience.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  location={exp.location}
                  years={exp.years}
                  description={exp.description}
                />
              ))}
            </div>
          </Section>
        )}

        <Section title="Education" id="education">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <EducationCard key={index} degree={edu.degree} institution={edu.institution} year={edu.year} />
            ))}
          </div>
        </Section>

        {certifications && certifications.length > 0 && (
          <Section title="Certifications" id="certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* no certifications listed */}
            </div>
          </Section>
        )}

        <Section title="Contact" id="contact">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div>
              {contact.email && (
                <p className="text-gray-400 mb-2 flex items-center">
                  <FaEnvelope className="mr-2 text-blue-400 flex-shrink-0" /> {contact.email}
                </p>
              )}
              {contact.linkedin && (
                <p className="text-gray-400 mb-2 flex items-center">
                  <FaLinkedin className="mr-2 text-blue-400 flex-shrink-0" />
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-300 break-all">LinkedIn</a>
                </p>
              )}
              {contact.github && (
                <p className="text-gray-400 flex items-center">
                  <FaGithub className="mr-2 text-blue-400 flex-shrink-0" />
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-300 break-all">GitHub</a>
                </p>
              )}
            </div>
            {contact.resumePdf ? (
              <a
                href={contact.resumePdf}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors duration-200 text-base font-semibold mt-4 md:mt-0 flex-shrink-0"
                download
                aria-label="Download Resume"
              >
                Download Resume (PDF)
              </a>
            ) : null}
          </div>
        </Section>

        <footer className="text-center text-sm text-gray-600 mt-20 pb-8 font-sans">
          <p>Built with React & Tailwind CSS.</p>
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
