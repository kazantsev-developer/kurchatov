export const CarouselIndicators = ({ total, active, onGoTo }) => {
  return (
    <div className="flex gap-2 sm:gap-2 md:gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onGoTo(i)}
          className={`transition-all duration-700 rounded-full 
            ${
              active === i
                ? `h-1.5 sm:h-1.5 md:h-2 w-5 sm:w-6 md:w-8 bg-blue-500`
                : `h-1.5 sm:h-1.5 md:h-2 w-1.5 sm:w-2 md:w-2.5 bg-white/30 hover:bg-white/50`
            }`}
        />
      ))}
    </div>
  );
};
