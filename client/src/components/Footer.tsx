import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
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
    <footer className="bg-fenix-darker py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif text-fenix-gold mb-6">Newsletter</h3>
          <p className="text-gray-300 mb-8">Sign up for news and updates.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-4">
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
          
          <div className="flex items-center justify-center text-xs text-gray-500">
            <input
              type="checkbox"
              id="footer-privacy-agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="footer-privacy-agree">
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
        
        <div className="text-center border-t border-gray-800 pt-8">
          <div className="text-3xl font-serif tracking-wider text-fenix-gold mb-4">
            FENIX
          </div>
          <p className="text-sm text-gray-500">Modern Greek - Mediterranean</p>
        </div>
      </div>
    </footer>
  );
}
