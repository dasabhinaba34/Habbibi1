import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function GraduationModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-fenix-darker border border-fenix-gold bg-opacity-95 backdrop-blur-custom p-8 max-w-md w-full text-center relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-fenix-gold hover:text-white text-2xl transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-serif text-fenix-gold mb-4">
          Celebrate Your Graduation at Fenix
        </h2>
        
        <p className="text-gray-300 mb-6">
          Enjoy a complimentary glass of bubbles for all graduates
        </p>
        
        <a 
          href="https://www.sevenrooms.com/explore/fenix/reservations/create/search?tracking=fenix-pop-up"
          className="bg-fenix-gold text-fenix-dark px-8 py-3 font-semibold tracking-wider hover:bg-fenix-bronze transition-colors duration-300 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESERVE YOUR TABLE
        </a>
      </div>
    </div>
  );
}
