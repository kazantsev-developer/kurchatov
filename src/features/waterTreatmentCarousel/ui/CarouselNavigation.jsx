import { Button } from '@heroui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CarouselNavigation = ({ onPrev, onNext, buttonSize, buttonIconSize }) => {
  return (
    <div className="absolute inset-0 z-50 flex justify-between items-center pointer-events-none px-4 sm:px-8 md:px-12">
      <Button
        isIconOnly
        radius="full"
        variant="bordered"
        className="pointer-events-auto border-white/10 bg-white/5 hover:bg-blue-600/40 transition-all shadow-2xl cursor-pointer group"
        style={{ width: buttonSize, height: buttonSize }}
        onClick={onPrev}
      >
        <ChevronLeft
          size={buttonIconSize}
          className="text-blue-400 transition-colors group-hover:text-white"
        />
      </Button>

      <Button
        isIconOnly
        radius="full"
        variant="bordered"
        className="pointer-events-auto border-white/10 bg-white/5 hover:bg-blue-600/40 transition-all shadow-2xl cursor-pointer group"
        style={{ width: buttonSize, height: buttonSize }}
        onClick={onNext}
      >
        <ChevronRight
          size={buttonIconSize}
          className="text-blue-400 transition-colors group-hover:text-white"
        />
      </Button>
    </div>
  );
};
