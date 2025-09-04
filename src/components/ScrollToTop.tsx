import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Temporarily disable smooth scrolling
    const originalBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Jump to top instantly
    window.scrollTo(0, 0);
    
    // Restore smooth scrolling after a brief delay
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = originalBehavior;
    }, 10);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
