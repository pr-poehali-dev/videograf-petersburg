import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Smartphone, Mail, Send, MessageSquare } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
            
            <p className="text-videographer-light/80 mb-8">
              Свяжитесь со мной любым удобным для вас способом, и я отвечу в самое ближайшее время. 
              Обсудим детали вашего проекта и создадим по-настоящему качественное видео.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-videographer-accent/20 mr-4">
                  <Smartphone className="h-6 w-6 text-videographer-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Телефон</h4>
                  <p className="text-videographer-light/80">+7 (812) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-videographer-accent/20 mr-4">
                  <Mail className="h-6 w-6 text-videographer-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-videographer-light/80">info@videographer-spb.ru</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-videographer-accent/20 mr-4">
                  <MessageSquare className="h-6 w-6 text-videographer-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Telegram</h4>
                  <a 
                    href="https://t.me/vocoders" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-videographer-accent hover:underline"
                  >
                    t.me/vocoders
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-videographer-light/5 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Напишите мне</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Имя
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Ваше имя"
                    className="bg-videographer-light/10 border-videographer-light/20 text-videographer-light placeholder:text-videographer-light/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ваш@email.com"
                    className="bg-videographer-light/10 border-videographer-light/20 text-videographer-light placeholder:text-videographer-light/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Тема
                </label>
                <Input 
                  id="subject" 
                  placeholder="Тема сообщения"
                  className="bg-videographer-light/10 border-videographer-light/20 text-videographer-light placeholder:text-videographer-light/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Сообщение
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Ваше сообщение"
                  rows={5}
                  className="bg-videographer-light/10 border-videographer-light/20 text-videographer-light placeholder:text-videographer-light/50"
                />
              </div>
              
              <Button className="w-full bg-videographer-accent hover:bg-videographer-accent/80 text-white">
                <Send className="mr-2 h-4 w-4" /> Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;