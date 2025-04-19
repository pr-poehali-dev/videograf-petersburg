import { Button } from "@/components/ui/button";
import { Camera, Video, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="обо-мне" className="py-20 bg-videographer-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1633113093730-47449a244513?q=80&w=1000" 
                alt="Видеограф за работой" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-videographer-accent/20 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-videographer-secondary/20 rounded-lg -z-10"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-videographer-primary">
              Обо <span className="text-videographer-accent">мне</span>
            </h2>
            <p className="text-lg mb-6 text-videographer-primary/80">
              Профессиональный видеограф из Санкт-Петербурга с более чем 5-летним опытом в индустрии. 
              Специализируюсь на создании высококачественных видео для моделей, актёров и брендов.
            </p>
            <p className="text-lg mb-8 text-videographer-primary/80">
              В своей работе сочетаю техническое мастерство, творческий подход и понимание потребностей клиента. 
              Каждый проект для меня — это возможность создать что-то уникальное и запоминающееся.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <Camera className="text-videographer-accent mb-3 h-8 w-8" />
                <h3 className="text-lg font-bold text-videographer-primary">5+ лет</h3>
                <p className="text-videographer-primary/70">профессионального опыта</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <Video className="text-videographer-accent mb-3 h-8 w-8" />
                <h3 className="text-lg font-bold text-videographer-primary">200+</h3>
                <p className="text-videographer-primary/70">успешных проектов</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <Award className="text-videographer-accent mb-3 h-8 w-8" />
                <h3 className="text-lg font-bold text-videographer-primary">15+</h3>
                <p className="text-videographer-primary/70">профессиональных наград</p>
              </div>
            </div>

            <a href="https://t.me/vocoders" target="_blank" rel="noopener noreferrer">
              <Button className="bg-videographer-accent hover:bg-videographer-accent/80 text-white">
                Связаться со мной
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;