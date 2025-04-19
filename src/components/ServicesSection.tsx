import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Film, Music, Mic, Scissors, PenTool } from "lucide-react";

const services = [
  {
    title: "Съёмка модельных тестов",
    description: "Профессиональная съёмка для моделей с подбором образов и локаций.",
    icon: <Video className="h-10 w-10 text-videographer-accent" />
  },
  {
    title: "Актёрские видеовизитки",
    description: "Качественная съёмка актёрских визиток для кастингов и агентств.",
    icon: <Film className="h-10 w-10 text-videographer-accent" />
  },
  {
    title: "Обработка видео",
    description: "Профессиональная цветокоррекция и обработка для идеального результата.",
    icon: <PenTool className="h-10 w-10 text-videographer-accent" />
  },
  {
    title: "Монтаж видео",
    description: "Креативный монтаж с учетом всех требований и пожеланий.",
    icon: <Scissors className="h-10 w-10 text-videographer-accent" />
  },
  {
    title: "Sound Design",
    description: "Разработка звукового оформления, создание эффектов и атмосферы.",
    icon: <Music className="h-10 w-10 text-videographer-accent" />
  },
  {
    title: "Озвучивание",
    description: "Профессиональное озвучивание роликов с подбором голоса.",
    icon: <Mic className="h-10 w-10 text-videographer-accent" />
  }
];

const ServicesSection = () => {
  return (
    <section id="услуги" className="py-20 bg-videographer-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-videographer-primary">
            Мои <span className="text-videographer-accent">услуги</span>
          </h2>
          <p className="text-lg text-videographer-primary/80 max-w-3xl mx-auto">
            Предлагаю полный спектр услуг по созданию видеоконтента: от съёмки до финальной обработки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-videographer-primary/10 shadow-md hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="pb-2">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-videographer-primary group-hover:text-videographer-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-videographer-primary/70 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;