// components/ProjectCard.js
const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      {image && <img src={image} alt={title} className="project-image" />}
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
      <style jsx>{`
        .project-card {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 1em;
          margin: 1em 0;
          width: 300px; /* Adjust width as needed */
          text-align: center;
        }
        .project-image {
          max-width: 100%;
          height: auto;
          border-radius: 5px;
        }
        .project-link {
          display: inline-block;
          margin-top: 1em;
          color: #0070f3;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
