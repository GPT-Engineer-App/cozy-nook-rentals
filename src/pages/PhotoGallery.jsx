import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Footer from '../components/Footer';

const photos = [
  { id: 1, src: "/placeholder.svg", alt: "Living Room" },
  { id: 2, src: "/placeholder.svg", alt: "Kitchen" },
  { id: 3, src: "/placeholder.svg", alt: "Bedroom" },
  { id: 4, src: "/placeholder.svg", alt: "Bathroom" },
  { id: 5, src: "/placeholder.svg", alt: "Exterior" },
  { id: 6, src: "/placeholder.svg", alt: "View" },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Photo Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id}>
              <CardContent className="p-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="w-full h-64 object-cover rounded-lg cursor-pointer" 
                      onClick={() => setSelectedPhoto(photo)}
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] flex items-center justify-center">
                    <img 
                      src={selectedPhoto?.src} 
                      alt={selectedPhoto?.alt} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </DialogContent>
                </Dialog>
                <p className="text-center mt-2">{photo.alt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default PhotoGallery;
