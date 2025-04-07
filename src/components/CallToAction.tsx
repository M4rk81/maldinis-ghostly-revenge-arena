
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-pixel text-primary glow">PRONTO PER LA SFIDA?</h2>
          
          <p className="text-xl opacity-80">
            Entra nel mondo di PAC-Maldini e difendi il tuo territorio dai fantasmi avversari!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="arcade-btn text-lg">
              GIOCA ORA
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              ACCEDI PER SALVARE PROGRESSI
            </Button>
          </div>
          
          <div className="bg-card rounded-lg p-6 mt-8">
            <p className="font-pixel text-sm mb-4">NOTIFICHE</p>
            <div className="space-y-3">
              <p className="text-sm bg-muted p-3 rounded">
                <span className="text-secondary font-bold">SuperMaldini92</span> ha superato il tuo punteggio di 1,250 punti!
              </p>
              <p className="text-sm bg-muted p-3 rounded">
                Sei a solo 2,400 punti dal superare PacMaster nella classifica!
              </p>
              <p className="text-sm bg-muted p-3 rounded">
                <span className="text-primary font-bold">NUOVO!</span> Modalità Multiplayer disponibile questo weekend!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
