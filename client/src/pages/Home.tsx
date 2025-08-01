import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GraduationModal from "@/components/GraduationModal";
import NewsletterSignup from "@/components/NewsletterSignup";
import InspiredSection from "@/components/InspiredSection";
import DiningDrinkingSection from "@/components/DiningDrinkingSection";
import LifestyleDestination from "@/components/LifestyleDestination";
import MenusSection from "@/components/MenusSection";
import RestaurantGallery from "@/components/RestaurantGallery";
import WhatsOnSection from "@/components/WhatsOnSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-fenix-dark text-white">
      <GraduationModal />
      <Navigation />
      <HeroSection />
      <NewsletterSignup />
      <InspiredSection />
      <DiningDrinkingSection />
      <LifestyleDestination />
      <MenusSection />
      <RestaurantGallery />
      <WhatsOnSection />
      <ReservationSection />
      <Footer />
    </div>
  );
}
