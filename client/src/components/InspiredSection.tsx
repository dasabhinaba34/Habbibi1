export default function InspiredSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            <em className="text-fenix-gold">INSPIRED</em>{" "}
            <span className="font-bold">BY</span>{" "}
            <span className="font-bold">EXOTIC</span>{" "}
            <span className="font-bold">LANDS</span>{" "}
            <span className="font-bold">AND</span>{" "}
            <span className="font-bold">LEGENDS</span>
            <br />
            <span className="font-bold">WE</span>{" "}
            <span className="font-bold">SERVE</span>{" "}
            <span className="font-bold">ESCAPISM</span>{" "}
            <span className="font-bold">THROUGH</span>
            <br />
            <em className="text-fenix-gold">ELEVATED</em>{" "}
            <em className="text-fenix-bronze">modern</em>{" "}
            <span className="font-bold">Greek-Mediterranean</span>{" "}
            <em className="text-fenix-gold">cuisine.</em>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <img 
            src="https://pixabay.com/get/g49a3be9539163fd1dae8e48efe33aec54618935be6dcabfd3181de61ef5c3ef30629480dfb29fe7f6babc27a83fef72e81ccb6df385b0cf2111bdef1a623ce3b_1280.jpg"
            alt="Mediterranean cuisine"
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
          
          <img 
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1066"
            alt="Premium wagyu beef"
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
          
          <img 
            src="https://pixabay.com/get/g9b3a815846648cd3d2752cfdac142753db68243ca150ac6802456c898b6f97f3c998c261bafc0e6e998cdbac58f606e01a47388818266028692a20fac30c0790_1280.jpg"
            alt="Artisanal cocktail"
            className="w-full h-96 object-cover rounded-lg shadow-2xl md:col-span-2 lg:col-span-1"
          />
          
          <img 
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
            alt="Gourmet appetizer"
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
          
          <img 
            src="https://pixabay.com/get/gc714bcb93546a0496e75f9fc6d96163cbdd2ee623eec69e46c5e2b46c4dda8cbaaa9e1c130f514b9196fe48c66578e136c0dfa0b0f9daf10eb02ecc6271efa70_1280.jpg"
            alt="Elegant seafood dish"
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
          
          <img 
            src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
            alt="Artisanal dessert"
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            The Fenix experience is based on phases, and changes with the hours of your day. A concept inspired by the timeless legacy of rebirth, life, and renewal.
          </p>
          <a 
            href="https://fenixrestaurants.com/phases"
            className="bg-fenix-gold text-fenix-dark px-8 py-3 font-semibold tracking-wider hover:bg-fenix-bronze transition-colors inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            DISCOVER THE PHASES
          </a>
        </div>
      </div>
    </section>
  );
}
