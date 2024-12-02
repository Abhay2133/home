import { useState, useEffect } from 'react';

function useDarkMode() {
  // State to store the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Function to check if the user prefers dark mode
    const checkDarkMode = () => {
      // `window.matchMedia` checks the user's preference for dark mode
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    };

    // Initial check when the component mounts
    checkDarkMode();

    // Add an event listener to watch for changes in color scheme
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener('change', checkDarkMode);

    // Clean up the event listener on component unmount
    return () => {
      mediaQueryList.removeEventListener('change', checkDarkMode);
    };
  }, []);

  return isDarkMode;
}

export default useDarkMode;
