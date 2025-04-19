import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play } from "lucide-react";

// Portfolio items - in a real app, this would come from an API or CMS
const portfolioItems = [
  {
    id: 1,
    title: "Модельное портфолио Анны",
    category: "модельные-тесты",
    thumbnail: "https://images.unsplash.com/photo-1615212814093-f56085658024?q=80&w=1000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-with-a-green-background-43922-large.mp4",
  },
  {
    id: 2,
    title: "Актёрская визитка Михаила",
    category: "актёрские-визитки",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-1237-large.mp4",
  },
  {
    id: 3,
    title: "Модельный тест Елены",
    category: "модельные-тесты",
    thumbnail: "https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-modeling-for-a-photo-shoot-43744-large.mp4",
  },
  {
    id: 4,
    title: "Визитка для театра",
    category: "актёрские-визитки",
    thumbnail: "https://images.unsplash.com/photo-1594516090948-0d43215f5d9d?q=80&w=1000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-ready-to-fight-wearing-boxing-gloves-34416-large.mp4",
  },
  {
    id: 5,
    title: "Промо нового бренда",
    category: "рекламные",
    thumbnail: "https://images.unsplash.com/photo-1578926288207-32356a2b80df?q=80&w=1000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-modelling-different-outfits-857-large.mp4",
  },
  {
    id: 6,
    title: "Рекламный ролик часов",
    category: "рекламные",
    thumbnail: "https://images.unsplash.com/photo-1577345563319-3d0aec97be51?q=80&w=1000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-product-close-up-macro-shots-28005-large.mp4",
  }
];

const categories = [
  { id: "all", label: "Все работы" },
  { id: "модельные-тесты", label: "Модельные тесты" },
  { id: "актёрские-визитки", label: "Актёрские визитки" },
  { id: "рекламные", label: "Рекламные" }
];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<null | typeof portfolioItems[0]>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Add animation to items when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(item => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, [selectedCategory]);

  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="портфолио" className="py-20 bg-videographer-primary text-videographer-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Моё <span className="text-videographer-accent">портфолио</span>
          </h2>
          <p className="text-lg text-videographer-light/80 max-w-3xl mx-auto">
            Примеры моих работ в различных жанрах видеосъёмки
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="flex justify-center bg-videographer-primary/50 border border-videographer-light/10 mb-8">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="data-[state=active]:bg-videographer-accent data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="animate-fadeIn">
            <div className="gallery-grid">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="relative group overflow-hidden rounded-lg shadow-lg animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-videographer-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <Button 
                      variant="outline" 
                      className="border-videographer-light text-videographer-light hover:bg-videographer-light/10 rounded-full"
                      onClick={() => setSelectedItem(item)}
                    >
                      <Play className="mr-2 h-4 w-4" /> Смотреть видео
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Video Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-videographer-primary border-videographer-light/20">
          <DialogHeader className="p-4">
            <DialogTitle className="text-xl text-videographer-light">{selectedItem?.title}</DialogTitle>
            <DialogDescription className="text-videographer-light/70">
              Нажмите в любое место за пределами видео, чтобы закрыть
            </DialogDescription>
          </DialogHeader>
          <div className="w-full aspect-video">
            {selectedItem && (
              <video 
                src={selectedItem.videoUrl} 
                controls 
                autoPlay
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;