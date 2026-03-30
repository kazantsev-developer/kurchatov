import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatches = () => setMatches(media.matches);

    updateMatches();
    media.addEventListener('change', updateMatches);

    return () => media.removeEventListener('change', updateMatches);
  }, [query]);

  return matches;
};

export const useScreenSize = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTiny = useMediaQuery('(max-width: 419px)');

  return { isMobile, isTablet, isDesktop, isTiny };
};
