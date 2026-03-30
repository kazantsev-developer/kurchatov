import { CarouselIndicators } from '../../features/waterTreatmentCarousel/ui/CarouselIndicators';

export const Footer = ({ activeIndex, totalSlides, onGoTo }) => {
  return (
    <footer className="h-20 sm:h-24 md:h-28 flex flex-col items-center justify-center bg-black/40 border-t border-white/5 backdrop-blur-3xl shrink-0 z-50 px-2 sm:px-4">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <CarouselIndicators
          total={totalSlides}
          active={activeIndex}
          onGoTo={onGoTo}
        />
      </div>
      <p className="text-[10px] sm:text-xs md:text-sm text-white/30 font-black tracking-widest sm:tracking-[0.2em] md:tracking-[0.6em] uppercase text-center">
        Учебный год 2025-2026
      </p>
    </footer>
  );
};
