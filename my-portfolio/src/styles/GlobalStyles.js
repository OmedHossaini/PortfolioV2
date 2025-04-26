import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
  
  :root {
    --font-primary: 'Space Grotesk', sans-serif;
    --font-secondary: 'Poppins', sans-serif;
    
    /* Animation timings */
    --transition-slow: 0.5s ease;
    --transition-normal: 0.3s ease;
    --transition-fast: 0.1s ease;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: 1366px) {
      font-size: 15px;
    }
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  
  body {
    font-family: var(--font-primary);
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    line-height: 1.7;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
    
    &::-webkit-scrollbar {
      width: 10px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${props => props.theme.scrollTrack};
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.scrollThumb};
      border-radius: 10px;
      
      &:hover {
        background: ${props => props.theme.primary};
      }
    }
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.text};
    transition: color var(--transition-normal);
    
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 4rem;
    
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }
  
  h2 {
    font-size: 3rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  h3 {
    font-size: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  section {
    padding: 5rem 0;
    
    @media (max-width: 768px) {
      padding: 3rem 0;
    }
  }
  
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  button, .button {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.buttonText};
    border: none;
    border-radius: 5px;
    padding: 0.8rem 1.5rem;
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color var(--transition-normal), transform var(--transition-normal);
    
    &:hover {
      background-color: ${props => props.theme.primaryHover};
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
  
  .hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(50px);
    transition: all 1s;
  }
  
  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
  
  @media (prefers-reduced-motion) {
    .hidden {
      transition: none;
    }
  }
`;

export default GlobalStyles;