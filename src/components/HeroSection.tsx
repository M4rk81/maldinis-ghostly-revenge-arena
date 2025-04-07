
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-pixel leading-tight text-primary glow">
              PAC-Maldini's <br />
              <span className="text-secondary">Revenge</span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-80">
              Unisciti a Paolo Pac-Maldini nella sua epica rivincita contro i fantasmi del calcio. Mangia palline, evita avversari e conquista la classifica!
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="arcade-btn">
                GIOCA ORA
              </Button>
              <Button size="lg" variant="outline" className="arcade-btn-secondary">
                VISUALIZZA CLASSIFICA
              </Button>
            </div>
            
            <p className="pt-2 text-sm opacity-70">
              <span className="blinking">▐</span> Nessuna installazione richiesta. Gioca direttamente nel browser!
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-card rounded-lg overflow-hidden pixel-borders">
              <div className="aspect-square md:aspect-video relative bg-black p-4 flex items-center justify-center">
                <div className="grid grid-cols-12 grid-rows-12 gap-1 w-full h-full opacity-20">
                  {Array(144).fill(0).map((_, i) => (
                    <div key={i} className="bg-white/10 rounded-sm"></div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="pacman-animation">
                    <div className="w-16 h-16 bg-primary rounded-full"></div>
                  </div>
                  <div className="ghost-animation absolute ml-32">
                    <div className="w-12 h-12 bg-secondary rounded-t-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <p className="font-pixel text-primary text-xs md:text-sm">INIZIA A GIOCARE</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 z-10">
              <Button size="lg" className="relative arcade-btn group">
                GIOCA <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full">NUOVO</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
