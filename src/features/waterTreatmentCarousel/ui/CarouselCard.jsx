import { Card, CardBody } from '@heroui/card';
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

  const cardWidth = isTiny
    ? 'w-[calc(100vw-32px)] max-w-[320px]'
    : isMobile
      ? 'w-[calc(100vw-48px)] max-w-[380px]'
      : 'w-[500px] md:w-[600px]';

  const cardHeight = isMobile ? '' : 'h-[520px]';

  const imageHeight = isMobile ? 'h-52' : 'h-56 sm:h-64 md:h-72';

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
              : 'bg-slate-900/60 shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)]'
          }
          backdrop-blur-3xl ring-1 ring-white/10 overflow-visible transition-shadow duration-300 relative flex flex-col`}
      >
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
          <Chip
            variant="shadow"
            size={chipSize}
            className="font-bold uppercase tracking-widest px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-600/90 backdrop-blur-sm shadow-lg"
          >
            {slide.slideNumber}
          </Chip>
        </div>

        <div className="w-full overflow-hidden shrink-0">
          <div className={`w-full ${imageHeight}`}>
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
        </div>

        <CardBody className="flex flex-col items-start text-left gap-2 px-4 py-4">
          <h2
            className={`${titleSize} font-black text-white leading-tight uppercase tracking-tighter`}
          >
            {slide.title}
          </h2>
          <p
            className={`text-blue-50/90 ${
              isTiny ? 'text-xs' : textSize
            } font-light leading-relaxed tracking-tight`}
          >
            {slide.text}
          </p>
        </CardBody>
      </Card>
    </motion.div>
  );
};
