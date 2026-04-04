import { AnimatePresence } from 'framer-motion';
import { useScreenSize } from '../../../shared/hooks/useMediaQuery';
import { slides } from '../model/slidesData';
import { getOffset } from '../../../shared/lib/utils';
import { CarouselCard } from './CarouselCard';
import { CarouselNavigation } from './CarouselNavigation';
import { useSwipeable } from 'react-swipeable';

export const Carousel = ({ activeIndex, onPrev, onNext }) => {
  const { isMobile, isTiny } = useScreenSize();

  const buttonSize = isTiny ? 36 : isMobile ? 44 : 70;
  const buttonIconSize = isTiny ? 20 : isMobile ? 24 : 40;
  const titleSize = isTiny
    ? 'text-base'
    : isMobile
      ? 'text-lg'
      : 'text-2xl md:text-3xl';
  const textSize = isTiny
    ? 'text-xs'
    : isMobile
      ? 'text-sm'
      : 'text-base md:text-lg';
  const chipSize = isTiny ? 'sm' : isMobile ? 'sm' : 'md';

  const handlers = useSwipeable({
    onSwipedLeft: () => onNext(),
    onSwipedRight: () => onPrev(),
    preventScrollOnSwipe: true,
    trackMouse: false,
  });

  return (
    <div {...handlers} className="w-full h-full">
      {!isMobile && (
        <CarouselNavigation
          onPrev={onPrev}
          onNext={onNext}
          buttonSize={buttonSize}
          buttonIconSize={buttonIconSize}
        />
      )}

      <div className="relative flex items-center justify-center w-full h-full">
        <AnimatePresence mode="popLayout">
          {slides.map((slide, index) => {
            const offset = getOffset(index, activeIndex, slides.length);
            const isCenter = index === activeIndex;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            return (
              <CarouselCard
                key={slide.id}
                slide={slide}
                offset={offset}
                isCenter={isCenter}
                isMobile={isMobile}
                isTiny={isTiny}
                titleSize={titleSize}
                textSize={textSize}
                chipSize={chipSize}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
