import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.secondary};
  padding: 4rem 0 2rem;
  position: relative;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const FooterDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1.5rem;
  max-width: 300px;
  
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const FooterHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 50px;
    height: 2px;
    background-color: ${props => props.theme.primary};
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 1rem;
  
  a {
    color: ${props => props.theme.textSecondary};
    transition: color 0.3s ease;
    display: inline-block;
    
    &:hover {
      color: ${props => props.theme.primary};
      transform: translateX(5px);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.cardBorder};
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const ScrollToTop = styled(motion.button)`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.theme.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primaryHover};
    transform: translateX(-50%) translateY(-5px);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <FooterContainer>
      <ScrollToTop 
        onClick={scrollToTop}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiArrowUp />
      </ScrollToTop>
      
      <div className="container">
        <FooterContent>
          <FooterColumn>
            <FooterLogo to="/">
              Your<span>Name</span>
            </FooterLogo>
            <FooterDescription>
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            </FooterDescription>
            
            <SocialLinks>
              <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </SocialLink>
              
              <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </SocialLink>
              
              <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </SocialLink>
              
              <SocialLink href="mailto:youremail@example.com">
                <FiMail />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <Link to="/">Home</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/about">About</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/projects">Projects</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/contact">Contact</Link>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Contact</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <a href="mailto:youremail@example.com">youremail@example.com</a>
              </FooterLink>
              <FooterLink>
                <a href="tel:+1234567890">(123) 456-7890</a>
              </FooterLink>
              <FooterLink>
                <a href="#">Your Location</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>
        
        <Copyright>
          &copy; {new Date().getFullYear()} YourName. All rights reserved.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;