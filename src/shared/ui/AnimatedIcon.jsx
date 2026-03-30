import { motion } from 'framer-motion';
import { ANIMATION } from '../lib/constants';

export const AnimatedIcon = ({ children, isActive, className }) => {
  return (
    <motion.div
      animate={isActive ? { y: [0, -15, 0] } : {}}
      transition={ANIMATION.ICON_BOUNCE}
      className={className}
    >
      {children}
    </motion.div>
  );
};
