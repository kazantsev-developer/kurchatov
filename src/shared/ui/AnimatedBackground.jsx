import { motion } from 'framer-motion';
import { ANIMATION } from '../lib/constants';

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-600/10 rounded-full blur-[100px]"
          animate={{
            y: [0, -120, 0],
            x: [0, 30, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8 + i * 3,
            ...ANIMATION.BACKGROUND,
          }}
          style={{
            width: 300 + i * 100,
            height: 300 + i * 100,
            left: `${i * 25}%`,
            top: `${60 - i * 10}%`,
          }}
        />
      ))}
    </div>
  );
};
