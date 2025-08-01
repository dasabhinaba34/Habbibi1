import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-fenix-dark bg-opacity-90 backdrop-blur-custom">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif tracking-wider text-fenix-gold">FENIX</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm tracking-wider">
          <a 
            href="https://www.sevenrooms.com/explore/fenix/reservations/create/search/" 
            className="hover:text-fenix-gold transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK DINING
          </a>
          <a 
            href="https://sevn.ly/xAA5JFMl" 
            className="hover:text-fenix-gold transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK DRINKS
          </a>
          <a 
            href="#menus" 
            className="hover:text-fenix-gold transition-colors duration-300"
          >
            MENUS
          </a>
          <a 
            href="#" 
            className="hover:text-fenix-gold transition-colors duration-300"
          >
            MORE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-fenix-gold"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-fenix-dark bg-opacity-95 backdrop-blur-custom">
          <div className="px-6 py-4 space-y-4 text-sm tracking-wider">
            <a 
              href="https://www.sevenrooms.com/explore/fenix/reservations/create/search/" 
              className="block hover:text-fenix-gold transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              BOOK DINING
            </a>
            <a 
              href="https://sevn.ly/xAA5JFMl" 
              className="block hover:text-fenix-gold transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              BOOK DRINKS
            </a>
            <a 
              href="#menus" 
              className="block hover:text-fenix-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              MENUS
            </a>
            <a 
              href="#" 
              className="block hover:text-fenix-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              MORE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
