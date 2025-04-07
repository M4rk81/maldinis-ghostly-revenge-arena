
import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo />
        
        <div className="flex gap-4">
          <Button variant="ghost" className="text-primary hover:text-primary hover:bg-muted">
            Accedi
          </Button>
          <Button className="arcade-btn">
            Registrati
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
