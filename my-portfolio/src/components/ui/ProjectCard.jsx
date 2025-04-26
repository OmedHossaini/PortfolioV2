import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const Card = styled(motion.div)`
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    
    .project-image::before {
      opacity: 0.7;
    }
    
    .project-details {
      transform: translateY(0);
    }
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-image: url(${props => props.image || 'https://via.placeholder.com/350x200'});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ProjectTag = styled.span`
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectLink = styled(Link)`
  color: ${props => props.theme.primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ExternalLink = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const ProjectCard = ({ project, ...props }) => {
  const { id, title, description, image, tags, links } = project;
  
  // Default tags if not provided
  const projectTags = tags || ['Web Development', 'React'];
  
  // Default links if not provided
  const projectLinks = links || {
    github: 'https://github.com',
    live: 'https://example.com'
  };
  
  return (
    <Card {...props}>
      <ProjectImage image={image} className="project-image" />
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        
        <ProjectDetails>
          {projectTags.map((tag, index) => (
            <ProjectTag key={index}>{tag}</ProjectTag>
          ))}
        </ProjectDetails>
        
        <ProjectLinks>
          <ProjectLink to={`/projects/${id}`}>
            View Details <FiArrowRight />
          </ProjectLink>
          
          <ExternalLinks>
            {projectLinks.github && (
              <ExternalLink href={projectLinks.github} target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </ExternalLink>
            )}
            
            {projectLinks.live && (
              <ExternalLink href={projectLinks.live} target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </ExternalLink>
            )}
          </ExternalLinks>
        </ProjectLinks>
      </ProjectContent>
    </Card>
  );
};

export default ProjectCard;