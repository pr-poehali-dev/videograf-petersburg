import { ArrowUpCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-videographer-dark text-videographer-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Logo & About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Видеограф <span className="text-videographer-accent">СПб</span>
            </h3>
            <p className="text-videographer-light/70 mb-6">
              Профессиональная видеосъёмка в Санкт-Петербурге. Создаю качественный видеоконтент для моделей, актёров и брендов.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {['Услуги', 'Обо мне'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-videographer-light/70 hover:text-videographer-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-videographer-light/10">
          <p className="text-videographer-light/50 text-sm mb-4 md:mb-0">
            © 2023 Видеограф СПб. Все права защищены.
          </p>
          <button 
            onClick={scrollToTop}
            className="text-videographer-light/70 hover:text-videographer-accent transition-colors flex items-center space-x-2"
          >
            <span>Наверх</span>
            <ArrowUpCircle size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;