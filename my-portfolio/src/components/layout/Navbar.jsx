import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const NavbarContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  background: ${props => props.scrolled ? props.theme.navBackground : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  z-index: 1000;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? props.theme.primary : props.theme.text};
  font-weight: 500;
  position: relative;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.background};
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
`;

const MobileMenuClose = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1.5rem;
`;

const mobileMenuVariants = {
  hidden: { opacity: 0, y: '-100%' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  exit: { opacity: 0, y: '-100%', transition: { duration: 0.3, ease: 'easeInOut' } }
};

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const isActive = (path) => location.pathname === path;
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      <NavbarContainer 
        scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <NavbarContent>
          <Logo to="/">
            Your<span>Name</span>
          </Logo>
          
          <NavLinks>
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
            <NavLink to="/projects" active={isActive('/projects')}>Projects</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
          </NavLinks>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <ThemeToggle onClick={toggleTheme}>
              {theme === 'light' ? <FiMoon /> : <FiSun />}
            </ThemeToggle>
            
            <MobileMenuButton onClick={toggleMobileMenu}>
              <FiMenu />
            </MobileMenuButton>
          </div>
        </NavbarContent>
      </NavbarContainer>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <MobileMenuClose onClick={toggleMobileMenu}>
              <FiX />
            </MobileMenuClose>
            
            <MobileMenuLinks>
              <NavLink to="/" onClick={toggleMobileMenu} active={isActive('/')}>Home</NavLink>
              <NavLink to="/about" onClick={toggleMobileMenu} active={isActive('/about')}>About</NavLink>
              <NavLink to="/projects" onClick={toggleMobileMenu} active={isActive('/projects')}>Projects</NavLink>
              <NavLink to="/contact" onClick={toggleMobileMenu} active={isActive('/contact')}>Contact</NavLink>
              
              <ThemeToggle onClick={toggleTheme}>
                {theme === 'light' ? <FiMoon /> : <FiSun />}
              </ThemeToggle>
            </MobileMenuLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;