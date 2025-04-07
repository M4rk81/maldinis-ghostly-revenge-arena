
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Share2 } from 'lucide-react';

const SocialArea: React.FC = () => {
  const [score, setScore] = useState(42000); // Add a default score for the challenge message
  
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-pixel mb-6 text-primary">Condividi la sfida</h2>
          
          <p className="text-lg opacity-80 max-w-2xl mb-8">
            Sfida i tuoi amici e condividi i tuoi punteggi sui social media. Vediamo chi sarà il migliore difensore virtuale!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Facebook size={20} /> Facebook
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Twitter size={20} /> Twitter
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Instagram size={20} /> Instagram
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Share2 size={20} /> Condividi
            </Button>
          </div>
          
          <div className="mt-8 bg-card p-6 rounded-lg max-w-md text-center">
            <p className="font-pixel text-sm mb-4">SFIDA UN AMICO</p>
            <p className="text-sm opacity-80 mb-4">
              "Ehi! Ho appena fatto {score.toLocaleString()} punti su PAC-Maldini's Revenge. Riesci a battermi?"
            </p>
            <Button className="arcade-btn-secondary w-full">INVIA SFIDA</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialArea;
