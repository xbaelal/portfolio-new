import github from "../assets/github.png";
import www from "../assets/www.png";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, liveUrl, githubUrl }) => {
  return (
    <div className="project_card">
      <div className="project_card_img">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project_card_content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project_card_links">
        <a href={liveUrl} className="live">
          <img src={www} alt="liveLogo" />
        </a>
        <a href={githubUrl} className="github">
          <img src={github} alt="githubLogo" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
