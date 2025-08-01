const events = [
  {
    date: "01.07.25",
    title: "News Moonlight Dining Club",
    url: "https://fenixrestaurants.com/new-moonlight-dining-club/",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&h=500",
    alt: "Moonlight dining club"
  },
  {
    date: "01.07.25",
    title: "Father's Day at Fenix",
    url: "https://fenixrestaurants.com/fathers-day-at-fenix/",
    image: null,
    alt: ""
  },
  {
    date: "29.05.25",
    title: "NEW SEASON. NEW MENU.",
    url: "https://fenixrestaurants.com/new-season-new-menu/",
    image: "https://pixabay.com/get/g2daa72b686dec7f5401d4ad5d41086c120d5bea78e7e5d0132eeae1b35d021a6a67a6747b5dd2c093c310b7657cfc939b0e2a5f312d7417ea2acaf69ca036d2c_1280.jpg",
    alt: "Linguine with prawns"
  },
  {
    date: "03.01.25",
    title: "New Year's Eve",
    url: "https://fenixrestaurants.com/new-years-eve-2024/",
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&h=901",
    alt: "New Year's Eve celebration"
  }
];

export default function WhatsOnSection() {
  return (
    <section className="py-20 bg-fenix-darker">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-16">
          <em className="text-fenix-gold">What's</em>{" "}
          <span className="font-bold text-white">on</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <article key={index} className="group">
              {event.image && (
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={event.image}
                    alt={event.alt}
                    className="w-full h-64 object-cover rounded-lg shadow-2xl mb-4 group-hover:opacity-80 transition-opacity"
                  />
                </a>
              )}
              <p className="text-sm text-fenix-gold mb-2">{event.date}</p>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-fenix-gold transition-colors">
                {event.title}
              </h3>
              <a 
                href={event.url}
                className="text-fenix-bronze hover:text-fenix-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View article
              </a>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://fenixrestaurants.com/whats-on"
            className="bg-fenix-gold text-fenix-dark px-8 py-3 font-semibold tracking-wider hover:bg-fenix-bronze transition-colors inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            DISCOVER ALL EVENTS
          </a>
        </div>
      </div>
    </section>
  );
}
