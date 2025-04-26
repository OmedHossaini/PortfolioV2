import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
  z-index: 9999;
  overflow: hidden;
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const ProgressBar = styled(motion.div)`
  width: 200px;
  height: 3px;
  background-color: ${props => props.theme.secondary};
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background-color: ${props => props.theme.primary};
  width: 0;
`;

// Animation variants
const containerVariants = {
  initial: { opacity: 1 },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.5,
      when: "afterChildren"
    }
  }
};

const logoVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const progressVariants = {
  initial: { width: 0 },
  animate: { 
    width: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

const Loader = () => {
  return (
    <LoaderContainer
      as={motion.div}
      variants={containerVariants}
      initial="initial"
      exit="exit"
    >
      <LogoContainer
        variants={logoVariants}
        initial="initial"
        animate="animate"
      >
        <Logo>
          Your<span>Name</span>
        </Logo>
        
        <ProgressBar>
          <Progress
            variants={progressVariants}
            initial="initial"
            animate="animate"
          />
        </ProgressBar>
      </LogoContainer>
    </LoaderContainer>
  );
};

export default Loader;