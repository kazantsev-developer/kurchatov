import { AnimatePresence } from 'framer-motion';
import { useScreenSize } from '../../../shared/hooks/useMediaQuery';
import { slides } from '../model/slidesData';
import { getOffset } from '../../../shared/lib/utils';
import { CarouselCard } from './CarouselCard';
import { CarouselNavigation } from './CarouselNavigation';

export const Carousel = ({ activeIndex, onPrev, onNext }) => {
  const { isMobile, isTiny } = useScreenSize();

  const buttonSize = isMobile ? (isTiny ? 40 : 48) : 80;
  const buttonIconSize = isMobile ? (isTiny ? 24 : 28) : 44;
  const titleSize = isMobile ? (isTiny ? 'text-lg' : 'text-xl') : 'text-2xl';
  const textSize = isMobile ? (isTiny ? 'text-sm' : 'text-base') : 'text-lg';
  const chipSize = isMobile ? 'sm' : 'md';

  return (
    <>
      <CarouselNavigation
        onPrev={onPrev}
        onNext={onNext}
        buttonSize={buttonSize}
        buttonIconSize={buttonIconSize}
      />

      <div className="relative flex items-center justify-center w-full h-full py-8 md:py-12 lg:py-16">
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
    </>
  );
};
