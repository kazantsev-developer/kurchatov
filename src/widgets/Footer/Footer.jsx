import { CarouselIndicators } from '../../features/waterTreatmentCarousel/ui/CarouselIndicators';

export const Footer = ({ activeIndex, totalSlides, onGoTo }) => {
  return (
    <footer className="h-10 sm:h-12 md:h-16 flex flex-col items-center justify-center bg-black/40 border-t border-white/5 backdrop-blur-3xl shrink-0 z-50 px-2 sm:px-4">
      <div className="mb-0">
        <CarouselIndicators
          total={totalSlides}
          active={activeIndex}
          onGoTo={onGoTo}
        />
      </div>
      <p className="hidden sm:block text-[10px] sm:text-xs text-white/30 font-black tracking-widest uppercase text-center mt-1">
        Учебный год 2025-2026
      </p>
    </footer>
  );
};
