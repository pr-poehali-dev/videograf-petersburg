import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-videographer-primary/90 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-videographer-light text-xl font-bold">
          Видеограф <span className="text-videographer-accent">СПб</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {['Услуги', 'Обо мне', 'Контакты'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-videographer-light hover:text-videographer-accent transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="https://t.me/vocoders" target="_blank" rel="noopener noreferrer">
            <Button className="bg-videographer-accent hover:bg-videographer-accent/80 text-white">
              Связаться
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-videographer-light" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-videographer-primary/95 backdrop-blur-md py-4 shadow-md animate-fadeIn">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {['Услуги', 'Обо мне', 'Контакты'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-videographer-light hover:text-videographer-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="https://t.me/vocoders" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button 
                className="bg-videographer-accent hover:bg-videographer-accent/80 text-white w-full"
              >
                Связаться
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;