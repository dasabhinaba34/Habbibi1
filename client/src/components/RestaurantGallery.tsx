export default function RestaurantGallery() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=533"
            alt="Upscale dining room"
            className="w-full h-64 object-cover rounded-lg shadow-2xl"
          />
          
          <img 
            src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=533"
            alt="Restaurant with pink lighting"
            className="w-full h-64 object-cover rounded-lg shadow-2xl"
          />
          
          <img 
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=533"
            alt="Modern restaurant bar"
            className="w-full h-64 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
