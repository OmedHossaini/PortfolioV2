import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import BackgroundAnimation from '../components/animations/BackgroundAnimation';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../components/ui/ProjectCard';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 800px;
  padding: 0 1.5rem;
`;

const SubHeading = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Heading = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.textSecondary};
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

const PrimaryButton = styled(Link)`
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primaryHover};
    transform: translateY(-2px);
    color: white;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: ${props => props.theme.text};
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    transform: translateY(-2px);
    color: white;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 3rem;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${props => props.theme.text};
  transition: transform 0.3s ease, color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  p {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .line {
    width: 2px;
    height: 50px;
    background-color: ${props => props.theme.primary};
    position: relative;
    overflow: hidden;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme.text};
      animation: scroll 1.5s ease infinite;
    }
  }
  
  @keyframes scroll {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const ProjectsPreview = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 3rem;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ViewAllButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeInOut"
    }
  })
};

const Home = () => {
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Simulate project data (you'll replace this with actual data)
  const projects = [
    { id: 'project1', title: 'Client Website', description: 'A modern website for a client with a focus on UI/UX design' },
    { id: 'project2', title: 'SaaS Application', description: 'An innovative SaaS platform currently in development' },
    { id: 'project3', title: 'Hackathon Winner', description: 'Award-winning project from a recent hackathon' }
  ];
  
  return (
    <>
      <HeroSection>
        <BackgroundAnimation />
        
        <HeroContent>
          <SubHeading 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Full Stack Developer
          </SubHeading>
          
          <Heading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hi, I'm <span style={{ color: '#7E41FF' }}>Your Name</span>
          </Heading>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's create something amazing together.
          </Description>
          
          <ButtonContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <PrimaryButton to="/projects">
              View My Work <FiArrowRight />
            </PrimaryButton>
            
            <SecondaryButton to="/contact">
              Contact Me
            </SecondaryButton>
          </ButtonContainer>
          
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </SocialLink>
            
            <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </SocialLink>
            
            <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </SocialLink>
          </SocialLinks>
        </HeroContent>
        
        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p>Scroll down</p>
          <div className="line"></div>
        </ScrollIndicator>
      </HeroSection>
      
      <ProjectsPreview ref={projectsRef}>
        <div className="container">
          <SectionTitle
            variants={fadeIn}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            custom={0}
          >
            Featured <span>Projects</span>
          </SectionTitle>
          
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                variants={fadeIn}
                initial="hidden"
                animate={projectsInView ? "visible" : "hidden"}
                custom={index + 1}
              />
            ))}
          </ProjectsGrid>
          
          <ViewAllButton
            variants={fadeIn}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            custom={4}
          >
            <PrimaryButton to="/projects">
              View All Projects <FiArrowRight />
            </PrimaryButton>
          </ViewAllButton>
        </div>
      </ProjectsPreview>
    </>
  );
};

export default Home;