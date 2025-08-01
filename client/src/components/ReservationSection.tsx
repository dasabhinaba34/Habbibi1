export default function ReservationSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif mb-8">
          <em className="text-fenix-gold">Make</em>{" "}
          <span className="font-bold">your</span>{" "}
          <em className="text-fenix-gold">reservation</em>
        </h2>
        <a 
          href="https://www.sevenrooms.com/explore/fenix/reservations/create/search/"
          className="bg-fenix-gold text-fenix-dark px-12 py-4 text-lg font-semibold tracking-wider hover:bg-fenix-bronze transition-colors inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          CLICK HERE TO BOOK
        </a>
      </div>
    </section>
  );
}
