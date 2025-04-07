
import React from 'react';
import Logo from './Logo';
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Logo />
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="text-sm hover:text-primary transition-colors">Termini di Servizio</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Contattaci</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">FAQ</a>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>© {new Date().getFullYear()} PAC-Maldini's Revenge. Tutti i diritti riservati.</p>
            <p>Un tributo non ufficiale a Paolo Maldini e al mondo di Pac-Man</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
