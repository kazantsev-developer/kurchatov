import { useState } from 'react';
import { AnimatedBackground } from '../../shared/ui/AnimatedBackground';
import { Header } from '../../widgets/Header/Header';
import { Footer } from '../../widgets/Footer/Footer';
import { Carousel } from '../../features/waterTreatmentCarousel';

export const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 11;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleGoTo = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#020617] text-white antialiased overflow-hidden relative">
      <AnimatedBackground />
      <Header activeIndex={activeIndex} totalSlides={totalSlides} />
      <main className="flex-1 relative flex items-center justify-center overflow-hidden pt-1">
        {' '}
        <Carousel
          activeIndex={activeIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </main>
      <Footer
        activeIndex={activeIndex}
        totalSlides={totalSlides}
        onGoTo={handleGoTo}
      />
    </div>
  );
};
