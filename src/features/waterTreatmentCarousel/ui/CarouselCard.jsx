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
  const cardWidth = isMobile ? 'w-80 sm:w-96' : 'w-[600px] md:w-[800px]';
  const cardHeight = isMobile ? 'h-[550px]' : 'h-[650px]';

  return (
    <motion.div
      initial={false}
      animate={animation}
      transition={{ type: 'spring', stiffness: 220, damping: 28 }}
      className="absolute"
    >
      <Card
        className={`${cardWidth} ${cardHeight} border-none 
          ${isCenter ? 'bg-slate-800/90 shadow-[0_0_100px_-20px_rgba(59,130,246,0.5)]' : 'bg-slate-900/60'}
          backdrop-blur-3xl ring-1 ring-white/10 overflow-hidden`}
      >
        {/* Chip с отступами больше сверху */}
        <CardHeader className="absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 z-10">
          <Chip
            variant="shadow"
            size={chipSize}
            className="font-bold uppercase tracking-widest px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-blue-600/80 backdrop-blur-sm"
          >
            {slide.slideNumber}
          </Chip>
        </CardHeader>

        <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
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
              isMobile ? (isTiny ? 'text-base' : 'text-lg') : 'text-2xl'
            } font-light leading-relaxed tracking-tight`}
          >
            {slide.text}
          </p>
        </CardBody>
      </Card>
    </motion.div>
  );
};
