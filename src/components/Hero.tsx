
import React, { useEffect, useRef } from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/button";
import { Music, Disc } from "lucide-react";

export default function Hero() {
  const musicBars = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation logic for music bars
    const interval = setInterval(() => {
      if (musicBars.current) {
        const bars = Array.from(musicBars.current.children);
        bars.forEach((bar) => {
          const height = Math.floor(Math.random() * 30) + 15;
          (bar as HTMLElement).style.height = `${height}px`;
        });
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wide">
                Professional DJ
              </div>
              <div ref={musicBars} className="flex items-end h-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`music-bar animate-wave${i % 3 + 1}`}
                    style={{ height: `${Math.floor(Math.random() * 30) + 15}px` }}
                  ></div>
                ))}
              </div>
            </div>
            
            <h1 className="mb-6 leading-tight">
              Creating <span className="text-accent">Unforgettable</span> Music Experiences
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Elevating events with custom mixes and professional sound that leaves a lasting impression. Book now for your next event.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                <Music size={18} className="mr-2 group-hover:animate-pulse-slow" />
                Listen Now
              </Button>
              <Button size="lg" variant="outline">
                <Disc size={18} className="mr-2" />
                Book Session
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center animate-slide-down">
            <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden glass-dark">
              <div className="absolute inset-3 rounded-full overflow-hidden bg-background flex items-center justify-center shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">DJ Profile Image</p>
                    <p className="text-xs text-muted-foreground/70">Placeholder for artist photo</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-60"></div>
              <div className="absolute -inset-1 border-4 border-accent/20 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
