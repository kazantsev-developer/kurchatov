import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Droplets } from 'lucide-react';
import { useScreenSize } from '../../shared/hooks/useMediaQuery';

export const Header = () => {
  const { isMobile, isTiny } = useScreenSize();

  return (
    <Navbar
      isBordered
      className="bg-slate-900/60 backdrop-blur-2xl border-white/10 h-auto min-h-14 md:min-h-16 lg:h-24 shrink-0 px-2 sm:px-3 md:px-6 py-1 md:py-0"
    >
      <NavbarBrand className="gap-1 sm:gap-2 md:gap-4">
        <Droplets
          className="text-blue-500 animate-bounce shrink-0"
          size={isTiny ? 24 : isMobile ? 28 : 36}
        />
        <div className="flex flex-col">
          {/* Курчатовский класс показывается только с lg (1024px) */}
          <p
            className={`font-black text-blue-500 text-sm sm:text-base md:text-3xl tracking-tighter uppercase leading-none whitespace-nowrap hidden lg:block`}
          >
            Курчатовский класс
          </p>
          {/* ПРЕДМЕТ БИОЛОГИЯ показывается только с lg (1024px) */}
          <p
            className={`text-[8px] sm:text-[10px] md:text-[15px] text-blue-300/60 tracking-widest sm:tracking-[0.2em] md:tracking-[0.4em] font-black uppercase mt-0.5 sm:mt-1 md:mt-2 hidden lg:block`}
          >
            ПРЕДМЕТ БИОЛОГИЯ
          </p>
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 bg-white/5 px-2 sm:px-3 md:px-6 py-1 sm:py-1.5 md:py-3 rounded-full border border-white/10 backdrop-blur-md">
            <p className="text-white font-black text-[10px] sm:text-xs md:text-xl uppercase tracking-tight italic whitespace-nowrap">
              Казанцева Яна
            </p>
            <div className="w-0.5 h-3 sm:h-4 md:h-6 bg-blue-500/50" />
            <p className="text-blue-400 font-black text-[10px] sm:text-xs md:text-xl uppercase whitespace-nowrap">
              7 «А» класс
            </p>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
