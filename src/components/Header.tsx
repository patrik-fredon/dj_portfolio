import React, { useState, useEffect } from "react";
import { Container } from "./ui/Container";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Menu, X, Shield } from "lucide-react";
import { adminPanel } from "@/lib/config";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleAdminClick = () => {
    window.open(adminPanel.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white/90 shadow-sm backdrop-blur-md py-3" : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className="text-xl font-display font-bold tracking-tight">
          DJ<span className="text-accent">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#music" className="nav-link">
            Music
          </a>
          <a href="#gallery" className="nav-link">
            Gallery
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <button
            onClick={handleAdminClick}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            <Shield size={16} />
            Admin
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-background z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Container className="py-6 flex flex-col">
          <nav className="flex flex-col space-y-6 items-center">
            {["home", "about", "music", "gallery", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-lg font-medium capitalize nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              onClick={handleAdminClick}
              className="inline-flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              <Shield size={18} />
              Admin Panel
            </button>
            <Button className="mt-4 w-full" onClick={() => setIsMenuOpen(false)}>
              Book Now
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
