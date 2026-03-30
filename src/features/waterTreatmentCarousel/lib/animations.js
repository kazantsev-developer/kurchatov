export const getCardAnimation = (offset, isCenter, isMobile, isTiny) => {
  const getScale = () => {
    if (isCenter) {
      return isMobile ? (isTiny ? 0.9 : 0.95) : 1.05;
    }
    return isMobile ? (isTiny ? 0.5 : 0.6) : 0.7;
  };

  const getOffsetX = () => {
    if (isMobile) return isTiny ? 200 : 260;
    return 420;
  };

  return {
    x: offset * getOffsetX(),
    scale: getScale(),
    opacity: isCenter ? 1 : 0.25,
    zIndex: isCenter ? 40 : 20,
    filter: isCenter ? 'blur(0px)' : 'blur(4px)',
    rotateY: offset * 15,
  };
};
