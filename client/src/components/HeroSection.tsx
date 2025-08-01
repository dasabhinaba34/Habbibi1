import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&h=1316')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-fenix-dark via-transparent to-fenix-dark opacity-70" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif text-fenix-gold mb-6 leading-tight">
            Welcome to Fenix Restaurants
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Exceptional Dining Awaits
          </p>
          <p className="text-sm tracking-wider text-fenix-bronze mb-8">
            Modern Greek - Mediterranean
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-fenix-gold" />
      </div>
    </section>
  );
}
