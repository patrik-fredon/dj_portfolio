
import React from "react";
import { Instagram, Music, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLink {
  name: string;
  icon: React.ComponentType<any>; // Using any to allow for the size prop
  url: string;
  color: string;
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://instagram.com", 
      color: "hover:bg-pink-500/10 hover:text-pink-500" 
    },
    { 
      name: "SoundCloud", 
      icon: Music, 
      url: "https://soundcloud.com", 
      color: "hover:bg-orange-500/10 hover:text-orange-500" 
    },
    { 
      name: "Spotify", 
      icon: Music, // Changed from Spotify to Music since Spotify isn't available
      url: "https://spotify.com", 
      color: "hover:bg-green-500/10 hover:text-green-500" 
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      url: "https://youtube.com", 
      color: "hover:bg-red-500/10 hover:text-red-500" 
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h3 className="text-xl font-semibold mb-6">Follow On Socials</h3>
      
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            rel="noopener noreferrer"
            target="_blank"
            className={cn(
              "flex items-center gap-2 px-3 py-2 bg-secondary rounded-full text-sm font-medium transition-all duration-300",
              "hover:shadow-md", 
              link.color
            )}
          >
            <link.icon size={16} />
            <span className="hidden sm:inline">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
