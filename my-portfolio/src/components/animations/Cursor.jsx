import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorDot = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.theme.primary};
  pointer-events: none;
  z-index: 9999;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const CursorCircle = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.primary};
  pointer-events: none;
  z-index: 9999;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Cursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring animations for smooth following
  const springConfig = { damping: 25, stiffness: 300 };
  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);
  
  // Circle follows with a slight delay
  const circleX = useSpring(cursorX, { ...springConfig, damping: 20, stiffness: 200 });
  const circleY = useSpring(cursorY, { ...springConfig, damping: 20, stiffness: 200 });
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 5); // Adjust for dot center
      cursorY.set(e.clientY - 5);
      setIsVisible(true);
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' || 
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('mouseout', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [cursorX, cursorY]);
  
  return (
    <>
      <CursorDot 
        style={{ 
          x: dotX, 
          y: dotY,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.5 : 1,
        }}
      />
      <CursorCircle 
        style={{ 
          x: circleX, 
          y: circleY,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
        }}
      />
    </>
  );
};

export default Cursor;