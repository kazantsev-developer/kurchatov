export const CarouselIndicators = ({ total, active, onGoTo }) => {
  return (
    <div className="flex gap-2 sm:gap-2.5 md:gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onGoTo(i)}
          className={`h-1.5 transition-all duration-700 rounded-full 
            ${
              active === i
                ? `w-5 sm:w-7 md:w-14 bg-blue-500`
                : `w-1.5 sm:w-2 md:w-3 bg-white/10 hover:bg-white/40`
            }`}
        />
      ))}
    </div>
  );
};
