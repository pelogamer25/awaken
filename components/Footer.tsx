import React from 'react';
import { Globe, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-6 h-6 text-accent" />
              <span className="text-xl font-serif font-semibold tracking-wider">LUMINA</span>
            </div>
            <p className="text-gray-500 max-w-xs mb-8">
              Redefining luxury travel for the modern era. Where every journey is a masterpiece of discovery.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-accent transition-all cursor-pointer">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-accent cursor-pointer transition-colors">Destinations</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Private Jets</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Superyachts</li>
              <li className="hover:text-accent cursor-pointer transition-colors">The Journal</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>concierge@lumina.travel</li>
              <li>+1 (888) 000-LUX</li>
              <li>150 Central Park South<br/>New York, NY 10019</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2024 Lumina Lux Travels. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
