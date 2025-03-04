
import React, { useState } from "react";
import { Container } from "./ui/Container";
import { Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Track {
  id: number;
  title: string;
  duration: string;
  genre: string;
}

export default function MusicShowcase() {
  const [activeTrack, setActiveTrack] = useState<number | null>(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks: Track[] = [
    { id: 1, title: "Summer Vibes", duration: "4:24", genre: "House" },
    { id: 2, title: "Midnight Session", duration: "3:17", genre: "Techno" },
    { id: 3, title: "Urban Pulse", duration: "5:08", genre: "EDM" },
    { id: 4, title: "Retro Groove", duration: "3:45", genre: "Funk" },
    { id: 5, title: "Deep Dive", duration: "6:12", genre: "Deep House" },
    { id: 6, title: "Festival Energy", duration: "4:59", genre: "EDM" },
  ];

  const togglePlay = (id: number) => {
    if (activeTrack === id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrack(id);
      setIsPlaying(true);
    }
  };

  return (
    <section id="music" className="py-20">
      <Container>
        <div className="mb-16 max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="mb-4">Latest Mixes</h2>
          <p className="text-muted-foreground text-lg">
            Check out some of my latest tracks and mixes. Each one represents a unique mood and energy.
          </p>
        </div>

        {/* Music Player */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-lg bg-white animate-scale delay-200">
          <div className="p-8 pb-4">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-full md:w-32 h-32 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Pause
                  className={cn(
                    "w-12 h-12 text-accent transition-opacity",
                    isPlaying ? "opacity-100" : "opacity-0"
                  )}
                />
                <Play
                  className={cn(
                    "w-12 h-12 text-accent transition-opacity absolute",
                    isPlaying ? "opacity-0" : "opacity-100"
                  )}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  {activeTrack ? tracks.find(t => t.id === activeTrack)?.title : "Select a track"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {activeTrack ? tracks.find(t => t.id === activeTrack)?.genre : "—"}
                </p>
                <div className="w-full bg-secondary rounded-full h-1.5 mb-4">
                  <div className="bg-accent h-1.5 rounded-full" style={{ width: "45%" }}></div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1:56</span>
                  <span>{activeTrack ? tracks.find(t => t.id === activeTrack)?.duration : "0:00"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 pb-8 pt-2 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <SkipBack size={20} />
              </button>
              <button 
                className="p-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <SkipForward size={20} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Volume2 size={18} className="text-muted-foreground" />
              <div className="w-24 bg-secondary rounded-full h-1.5">
                <div className="bg-accent h-1.5 rounded-full" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Track List */}
        <div className="grid gap-4 animate-slide-up delay-300">
          {tracks.map((track) => (
            <div
              key={track.id}
              className={cn(
                "p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-sm cursor-pointer",
                activeTrack === track.id ? "bg-white shadow-sm" : "bg-transparent"
              )}
              onClick={() => togglePlay(track.id)}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  {activeTrack === track.id && isPlaying ? (
                    <Pause size={14} className="text-accent" />
                  ) : (
                    <Play size={14} className="text-accent" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{track.title}</h4>
                    <span className="text-sm text-muted-foreground">{track.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{track.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
