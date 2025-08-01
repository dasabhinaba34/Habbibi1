const menuItems = [
  {
    title: "À LA CARTE",
    url: "https://fenixrestaurants.com/wp-content/uploads/2025/06/Fenix-Summer-ALC-ONLINE-1.pdf"
  },
  {
    title: "DESSERT",
    url: "https://fenixrestaurants.com/wp-content/uploads/2025/06/Fenix-Dessert-ONLINE.pdf"
  },
  {
    title: "COCKTAILS",
    url: "https://fenixrestaurants.com/wp-content/uploads/2025/06/Fenix_Cocktails_Summer_2025_A5-ONLINE-1.pdf"
  },
  {
    title: "WINE & DRINK",
    url: "https://fenixrestaurants.com/wp-content/uploads/2025/06/Fenix-Wine-Drink-ONLINE.pdf"
  },
  {
    title: "TASTE OF FENIX",
    url: "https://fenixrestaurants.com/wp-content/uploads/2025/06/Taste-of-Fenix-Summer-2025-ONLINE.pdf"
  },
  {
    title: "VEG SHARING",
    url: "https://fenixrestaurants.com/wp-content/uploads/2025/06/Fenix-Veggie-Sharing-ONLINE.pdf"
  },
  {
    title: "VEGAN",
    url: "https://fenixrestaurants.com/wp-content/uploads/2025/06/Fenix-Vegan-Summer-ONLINE.pdf"
  },
  {
    title: "SHARING",
    url: "https://fenixrestaurants.com/wp-content/uploads/2025/06/Fenix-Sharing-ONLINE.pdf"
  },
  {
    title: "SUNDAY ROAST",
    url: "https://fenixrestaurants.com/wp-content/uploads/2025/06/Sunday-Roast-Menu-Summer-2025-ONLINE.pdf"
  },
  {
    title: "LUNCH",
    url: "https://fenixrestaurants.com/wp-content/uploads/2025/06/Fenix-Summer-Lunch-ONLINE.pdf"
  }
];

export default function MenusSection() {
  return (
    <section id="menus" className="py-20 bg-fenix-darker">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-fenix-gold mb-8">
            <em>Our</em> <em>Menus</em>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Authentic in nature, we celebrate heritage and mythology, taking inspiration from timeless architecture and art. A contemporary representation of the evocative lands we love, our goal is to transport the high-end culture of modern Greece to UK shores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.url}
              className="bg-fenix-dark border border-fenix-gold p-6 text-center hover:bg-fenix-gold hover:text-fenix-dark transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl font-semibold tracking-wider mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-fenix-dark">
                View Menu
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
