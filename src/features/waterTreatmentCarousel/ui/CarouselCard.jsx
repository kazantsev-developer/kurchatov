import { Card, CardHeader, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { motion } from 'framer-motion';
import { getCardAnimation } from '../lib/animations';

export const CarouselCard = ({
  slide,
  offset,
  isCenter,
  isMobile,
  isTiny,
  titleSize,
  textSize,
  chipSize,
}) => {
  const animation = getCardAnimation(offset, isCenter, isMobile, isTiny);
  const cardWidth = isMobile ? 'w-72 sm:w-80' : 'w-[500px] md:w-[600px]';
  const cardHeight = isMobile ? 'h-[480px]' : 'h-[520px]';

  return (
    <motion.div
      initial={false}
      animate={animation}
      transition={{ type: 'spring', stiffness: 220, damping: 28 }}
      className="absolute"
    >
      <Card
        className={`${cardWidth} ${cardHeight} border-none 
          ${
            isCenter
              ? 'bg-slate-800/90 shadow-[0_0_80px_-15px_rgba(59,130,246,0.8)] ring-2 ring-blue-500/30'
              : 'bg-slate-900/60 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]'
          }
          backdrop-blur-3xl ring-1 ring-white/10 overflow-hidden transition-shadow duration-300 relative`}
      >
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10">
          <Chip
            variant="shadow"
            size={chipSize}
            className="font-bold uppercase tracking-widest px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-600/90 backdrop-blur-sm shadow-lg"
          >
            {slide.slideNumber}
          </Chip>
        </div>

        <div className="w-full h-52 sm:h-64 md:h-72 overflow-hidden">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                'https://placehold.co/800x400/1e293b/3b82f6?text=Image+loading';
            }}
          />
        </div>

        <CardBody className="flex flex-col items-start text-left gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4">
          <h2
            className={`${titleSize} font-black text-white leading-tight uppercase tracking-tighter`}
          >
            {slide.title}
          </h2>
          <p
            className={`text-blue-50/90 ${
              isMobile ? (isTiny ? 'text-sm' : 'text-base') : 'text-xl'
            } font-light leading-relaxed tracking-tight line-clamp-4`}
          >
            {slide.text}
          </p>
        </CardBody>
      </Card>
    </motion.div>
  );
};
