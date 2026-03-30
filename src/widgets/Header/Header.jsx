import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Brain } from 'lucide-react';
import { useScreenSize } from '../../shared/hooks/useMediaQuery';

export const Header = ({ activeIndex, totalSlides }) => {
  const { isMobile, isTiny } = useScreenSize();
  const progress = ((activeIndex + 1) / totalSlides) * 100;

  return (
    <Navbar
      isBordered
      maxWidth="full"
      className="bg-slate-900/60 backdrop-blur-2xl border-white/10 h-auto min-h-14 md:min-h-16 shrink-0 py-1 md:py-0"
      classNames={{
        wrapper: 'px-[30px] w-full',
      }}
    >
      <div className="flex w-full items-center justify-between gap-8">
        {/* Левая часть — мозг и курчатовский класс */}
        <NavbarBrand className="gap-2 sm:gap-3 md:gap-4 shrink-0">
          <Brain
            className="text-blue-500 animate-pulse shrink-0"
            size={isTiny ? 28 : isMobile ? 32 : 40}
          />
          <div className="flex flex-col">
            <p className="font-black text-blue-500 text-sm sm:text-base md:text-2xl tracking-tighter uppercase leading-none whitespace-nowrap">
              Курчатовский класс
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm text-blue-300/60 tracking-wider font-black uppercase mt-0.5 whitespace-nowrap">
              физика + математика + информатика
            </p>
          </div>
        </NavbarBrand>

        <div className="flex-1 max-w-100 mx-4">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <NavbarContent justify="end" className="shrink-0">
          <NavbarItem>
            <p className="text-white font-black text-sm sm:text-base md:text-xl uppercase tracking-tight whitespace-nowrap">
              Казанцева Яна (7 "А")
            </p>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
};
