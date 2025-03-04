
import React, { useState } from "react";
import { Container } from "./ui/Container";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const categories = ["All", "Events", "Studio", "Festivals", "Collaborations"];

interface GalleryItem {
  id: number;
  category: string;
  description: string;
  isWide?: boolean;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    { id: 1, category: "Events", description: "Summer festival main stage performance" },
    { id: 2, category: "Studio", description: "Recording new tracks in the studio", isWide: true },
    { id: 3, category: "Festivals", description: "Crowd interaction during sunset set" },
    { id: 4, category: "Collaborations", description: "Working with top producers" },
    { id: 5, category: "Events", description: "Private event at exclusive venue", isWide: true },
    { id: 6, category: "Festivals", description: "Backstage with the crew" },
    { id: 7, category: "Studio", description: "Testing new equipment setup" },
    { id: 8, category: "Collaborations", description: "Guest appearance on radio show" },
  ];

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  
  const openModal = (id: number) => setActiveImage(id);
  const closeModal = () => setActiveImage(null);
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (activeImage === null) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === activeImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setActiveImage(filteredItems[newIndex].id);
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/50">
      <Container>
        <div className="mb-16 max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="mb-4">Work & Highlights</h2>
          <p className="text-muted-foreground text-lg">
            Visual highlights from performances, studio sessions, and collaborations around the world.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-scale delay-100">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-accent text-white shadow-sm"
                  : "bg-white hover:bg-accent/10"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in delay-200">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className={cn(
                "group relative overflow-hidden rounded-xl shadow-sm hover-scale cursor-pointer",
                item.isWide && "md:col-span-2"
              )}
              onClick={() => openModal(item.id)}
            >
              <div className="aspect-[4/3] bg-accent/10 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-foreground mb-2">{item.category}</p>
                    <p className="text-sm text-muted-foreground">Gallery image placeholder</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p className="text-white text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {activeImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <div className="absolute inset-0" onClick={closeModal}></div>
            <div className="relative z-10 w-full max-w-6xl px-4">
              <button 
                className="absolute right-4 top-4 bg-white/10 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
                onClick={closeModal}
              >
                <X size={24} />
              </button>
              
              <div className="aspect-video bg-accent/10 rounded-xl overflow-hidden my-8 mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-xl mb-2">
                      {filteredItems.find(item => item.id === activeImage)?.category}
                    </p>
                    <p className="text-lg">
                      {filteredItems.find(item => item.id === activeImage)?.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  className="bg-white/10 rounded-full p-3 text-white hover:bg-white/20 transition-colors"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  className="bg-white/10 rounded-full p-3 text-white hover:bg-white/20 transition-colors"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
