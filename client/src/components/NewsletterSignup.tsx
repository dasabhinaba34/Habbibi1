import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    if (!agreed) {
      toast({
        title: "Error", 
        description: "Please agree to the privacy policy",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    setEmail("");
    setAgreed(false);
  };

  return (
    <section className="py-16 bg-fenix-darker">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h3 className="text-lg font-serif text-fenix-gold mb-4">
          Sign up for news and updates
        </h3>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-fenix-dark border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-fenix-gold focus:outline-none flex-1"
          />
          <button 
            type="submit" 
            className="bg-fenix-gold text-fenix-dark px-6 py-3 font-semibold tracking-wider hover:bg-fenix-bronze transition-colors"
          >
            SUBSCRIBE
          </button>
        </form>
        
        <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
          <input
            type="checkbox"
            id="privacy-agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="privacy-agree">
            I agree to the{" "}
            <a 
              href="https://fenixrestaurants.com/privacy-policy/" 
              className="text-fenix-gold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
          </label>
        </div>
      </div>
    </section>
  );
}
