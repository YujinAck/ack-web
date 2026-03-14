import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Instantly jump to the top
    // For smooth scrolling, use: window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]); // This effect runs every time the pathname changes

  return null; // This component doesn't render anything
}