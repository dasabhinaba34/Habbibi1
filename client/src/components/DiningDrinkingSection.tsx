export default function DiningDrinkingSection() {
  return (
    <section className="py-20 bg-fenix-darker">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-center">
            <h3 className="text-3xl font-serif text-fenix-gold mb-6">
              Experiential<br />
              <span className="text-white">Dining</span>
            </h3>
            <a 
              href="https://www.sevenrooms.com/explore/fenix/reservations/create/search/"
              className="bg-fenix-gold text-fenix-dark px-8 py-3 font-semibold tracking-wider hover:bg-fenix-bronze transition-colors inline-block mb-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK DINING
            </a>
            <img 
              src="https://pixabay.com/get/ga4bd97d9d602d6dbdd3808931b2dbc5f19dc87777a5089eb00283afe37bdecd7ca45dab273ee5d9fab293b27cf61c27f7e6afac8cff81b135bc21a8495cd89b8_1280.jpg"
              alt="Gourmet orzo pasta"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-serif text-fenix-gold mb-6">
              Adventurous<br />
              <span className="text-white">Drinking</span>
            </h3>
            <a 
              href="https://sevn.ly/xAA5JFMl"
              className="bg-fenix-gold text-fenix-dark px-8 py-3 font-semibold tracking-wider hover:bg-fenix-bronze transition-colors inline-block mb-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK DRINKS
            </a>
            <img 
              src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1067"
              alt="Golden cocktail with citrus"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
