export default function LifestyleDestination() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            <em className="text-fenix-gold">MORE</em>{" "}
            <span className="font-bold">THAN</span>{" "}
            <span className="font-bold">A</span>{" "}
            <span className="font-bold">RESTAURANT,</span>
            <br />
            <span className="font-bold">FENIX</span>{" "}
            <span className="font-bold">IS</span>{" "}
            <span className="font-bold">A</span>{" "}
            <span className="font-bold">LUXURIOUS</span>
            <br />
            <em className="text-fenix-gold">LIFESTYLE</em>{" "}
            <span className="font-bold">DESTINATION</span>
            <br />
            <span className="font-bold">BUILT</span>{" "}
            <span className="font-bold">AROUND</span>{" "}
            <span className="font-bold">THREE</span>{" "}
            <span className="font-bold">PILLARS</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-fenix-gold mt-8">
            <em>fire</em> <em>rebirth</em>{" "}
            <span className="font-bold text-white">&</span>{" "}
            <em>renewal.</em>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Inspired by the mythical firebird, we have created a contemporary environment from materials forged in volcanic flames and scorched terrain. Traditional craftsmanship meets epicurean innovation and cutting edge experiential technology.
            </p>
            <a 
              href="https://fenixrestaurants.com/our-story"
              className="bg-fenix-gold text-fenix-dark px-8 py-3 font-semibold tracking-wider hover:bg-fenix-bronze transition-colors inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              DISCOVER OUR STORY
            </a>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200"
            alt="Luxury restaurant interior"
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
