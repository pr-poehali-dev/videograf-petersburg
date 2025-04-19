import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('услуги')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 hero-video-overlay z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="object-cover w-full h-full"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-filming-a-model-at-a-professional-photo-shoot-34486-large.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img src="/placeholder.svg" alt="Видеосъемка в СПб" className="object-cover w-full h-full" />
        </video>
      </div>

      {/* Hero Content */}
      <div className="container relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeIn">
          Профессиональная <span className="text-videographer-accent">видеосъёмка</span> <br />
          в Санкт-Петербурге
        </h1>
        <p className="text-xl text-videographer-light mb-8 max-w-3xl mx-auto animate-slideUp">
          Создаю уникальные видео для моделей, актёров и брендов. 
          От съёмки до финального монтажа — всё в одних руках.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp">
          <a href="https://t.me/vocoders" target="_blank" rel="noopener noreferrer">
            <Button className="bg-videographer-accent hover:bg-videographer-accent/80 text-white px-8 py-6 text-lg">
              Заказать съёмку
            </Button>
          </a>
          <Button 
            variant="outline" 
            className="border-videographer-light text-videographer-light hover:bg-videographer-light/10 px-8 py-6 text-lg"
            onClick={scrollToServices}
          >
            Узнать подробнее
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 animate-bounce">
        <button onClick={scrollToServices} className="text-videographer-light hover:text-videographer-accent">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;