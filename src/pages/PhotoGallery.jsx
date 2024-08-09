import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
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
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Photo Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id}>
              <CardContent className="p-4">
                <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover rounded-lg" />
                <p className="text-center mt-2">{photo.alt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PhotoGallery;
