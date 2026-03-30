import { Button } from '@heroui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CarouselNavigation = ({
  onPrev,
  onNext,
  buttonSize,
  buttonIconSize,
}) => {
  return (
    <div className="absolute inset-0 z-50 flex justify-between items-center pointer-events-none">
      <Button
        isIconOnly
        radius="full"
        variant="bordered"
        className="pointer-events-auto border-white/10 bg-white/5 hover:bg-blue-600/40 transition-all shadow-2xl cursor-pointer group absolute left-2 sm:left-4 md:left-8 lg:left-12"
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
        className="pointer-events-auto border-white/10 bg-white/5 hover:bg-blue-600/40 transition-all shadow-2xl cursor-pointer group absolute right-2 sm:right-4 md:right-8 lg:right-12"
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
