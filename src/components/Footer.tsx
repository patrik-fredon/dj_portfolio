
import React from "react";
import { Container } from "./ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DJ<span className="text-accent">Portfolio</span></h3>
            <p className="text-primary-foreground/80 max-w-md mb-6">
              Professional DJ services for events of all sizes. Creating unforgettable music experiences and elevating your events.
            </p>
            <div className="flex gap-4">
              {["Twitter", "Instagram", "SoundCloud", "Spotify"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  aria-label={platform}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Music", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Nightclub Events",
                "Corporate Events",
                "Private Parties",
                "Weddings",
                "Music Production",
                "Masterclasses"
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#contact"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} DJ Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 text-sm hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 text-sm hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
