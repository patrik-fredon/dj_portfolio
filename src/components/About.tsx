
import React from "react";
import { Container } from "./ui/Container";
import { Headphones, Music, Disc, Users, Award, Calendar } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover-scale">
      <div className="p-3 rounded-full bg-accent/10 text-accent mb-3">
        {icon}
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <Container>
        <div className="mb-16 max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="mb-4">About The Artist</h2>
          <p className="text-muted-foreground text-lg">
            A passionate DJ with over a decade of experience crafting unforgettable soundscapes for events of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div className="relative animate-slide-right delay-200">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg glass-dark">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-foreground mb-2">Profile Video/Image</p>
                  <p className="text-sm text-muted-foreground">Placeholder for artist media</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          </div>

          <div className="flex flex-col justify-center animate-slide-left delay-300">
            <h3 className="mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6">
              Starting from underground venues to main stages, my passion for music has driven me to push boundaries and create unique experiences. My approach combines technical precision with creative intuition.
            </p>
            <p className="text-muted-foreground mb-8">
              Each set is crafted to the specific audience and venue, ensuring that every performance is a unique journey through sound.
            </p>
            <div className="flex gap-4 flex-wrap">
              {["House", "Techno", "EDM", "Hip-Hop", "Funk"].map((genre) => (
                <span
                  key={genre}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 animate-scale delay-500">
          <StatCard 
            icon={<Headphones size={24} />} 
            value="10+" 
            label="Years Experience" 
          />
          <StatCard 
            icon={<Calendar size={24} />} 
            value="500+" 
            label="Events" 
          />
          <StatCard 
            icon={<Users size={24} />} 
            value="100k+" 
            label="Audience Reached" 
          />
          <StatCard 
            icon={<Music size={24} />} 
            value="250+" 
            label="Original Mixes" 
          />
          <StatCard 
            icon={<Award size={24} />} 
            value="25+" 
            label="Industry Awards" 
          />
          <StatCard 
            icon={<Disc size={24} />} 
            value="10+" 
            label="Record Labels" 
          />
        </div>
      </Container>
    </section>
  );
}
