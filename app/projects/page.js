"use client"
import ProjectCard from '../../components/ProjectCard';
import Header from '../../components/Header';

const Projects = () => {
  const projectList = [
    {
      title: "My First Project",
      description: "This is a religious app that provides useful information and valuable content. It was developed using Next.js, focusing on high performance and a seamless user experience.",
      image: "1.jpeg", // Update with your image path
      link: "https://first-project-psi-silk.vercel.app/", // Update with your project link
    },
    {
      title: "second Project",
      description: "In this project, I created a newsletter application. This application allows users to select the type of news they want to subscribe to using their email addresses. After subscribing, users are redirected to another page to complete the subscription process by entering all their details.",
      image: "2.jpeg", // Update with your image path
      link: "https://news-one-alpha-54.vercel.app/", // Update with your project link
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <Header />
      <h1>My Projects</h1>
      <div className="project-list">
        {projectList.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title} 
            description={project.description} 
            image={project.image} 
            link={project.link} 
          />
        ))}
      </div>
      <style jsx>{`
        .project-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1em;
        }
      `}</style>
    </div>
  );
};

export default Projects;
