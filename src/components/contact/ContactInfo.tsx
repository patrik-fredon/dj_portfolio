
import React from "react";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
      <h3 className="text-xl font-semibold mb-4 md:mb-6">Contact Information</h3>
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-start gap-3 md:gap-4">
          <div className="p-2 md:p-3 rounded-full bg-accent/10 text-accent">
            <Mail size={18} />
          </div>
          <div>
            <p className="font-medium">Email</p>
            <a href="mailto:contact@djportfolio.com" className="text-muted-foreground hover:text-accent transition-colors text-sm md:text-base break-words">
              contact@djportfolio.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3 md:gap-4">
          <div className="p-2 md:p-3 rounded-full bg-accent/10 text-accent">
            <Phone size={18} />
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <a href="tel:+11234567890" className="text-muted-foreground hover:text-accent transition-colors text-sm md:text-base">
              +1 (123) 456-7890
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3 md:gap-4">
          <div className="p-2 md:p-3 rounded-full bg-accent/10 text-accent">
            <MapPin size={18} />
          </div>
          <div>
            <p className="font-medium">Based In</p>
            <p className="text-muted-foreground text-sm md:text-base">Los Angeles, CA</p>
            <p className="text-muted-foreground text-sm md:text-base">Available Worldwide</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 md:gap-4">
          <div className="p-2 md:p-3 rounded-full bg-accent/10 text-accent">
            <Calendar size={18} />
          </div>
          <div>
            <p className="font-medium">Availability</p>
            <p className="text-muted-foreground text-sm md:text-base">Booking 3+ months in advance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
