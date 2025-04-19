import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="контакты" className="py-20 bg-videographer-primary text-videographer-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Свяжитесь <span className="text-videographer-accent">со мной</span>
          </h2>
          <p className="text-lg text-videographer-light/80 max-w-3xl mx-auto">
            Готов обсудить ваш проект и ответить на все вопросы
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8 max-w-xl mx-auto">
          <div className="bg-videographer-light/5 p-8 rounded-lg shadow-lg text-center w-full">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-videographer-accent/20 mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-videographer-accent" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Telegram</h3>
            <p className="text-videographer-light/80 mb-6">
              Для обсуждения проектов и заказов пишите мне в Telegram
            </p>
            
            <a 
              href="https://t.me/vocoders" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block"
            >
              <Button className="bg-videographer-accent hover:bg-videographer-accent/80 text-white">
                Написать в Telegram
              </Button>
            </a>
          </div>
          
          <p className="text-videographer-light/60 text-center max-w-md">
            Свяжитесь со мной в Telegram, и я отвечу в самое ближайшее время. 
            Обсудим детали вашего проекта и создадим по-настоящему качественное видео.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;