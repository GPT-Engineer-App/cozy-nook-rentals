import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Footer from '../components/Footer';

const rentals = [
  { 
    id: 1, 
    name: "Cozy Studio", 
    price: "$100/night", 
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    squareMeters: 30,
    floorPlan: "/placeholder.svg",
    amenities: ["Wi-Fi", "Air Conditioning", "Kitchenette"],
    rent: "$2000/month",
    description: "A charming studio apartment perfect for solo travelers or couples. Enjoy a compact living space with all the essentials for a comfortable stay."
  },
  { 
    id: 2, 
    name: "Spacious 2BR Apartment", 
    price: "$200/night", 
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    squareMeters: 80,
    floorPlan: "/placeholder.svg",
    amenities: ["Wi-Fi", "Air Conditioning", "Full Kitchen", "Washer/Dryer"],
    rent: "$3500/month",
    description: "A roomy two-bedroom apartment ideal for families or groups. Features a full kitchen, separate living area, and in-unit laundry for added convenience."
  },
  { 
    id: 3, 
    name: "Luxury Penthouse", 
    price: "$500/night", 
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    squareMeters: 150,
    floorPlan: "/placeholder.svg",
    amenities: ["Wi-Fi", "Air Conditioning", "Full Kitchen", "Washer/Dryer", "Private Terrace", "Gym Access"],
    rent: "$7000/month",
    description: "Experience the height of luxury in this stunning penthouse. Enjoy breathtaking views, high-end finishes, and exclusive amenities for a truly unforgettable stay."
  },
];

const RentalDialog = ({ rental }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="w-full">View Details</Button>
    </DialogTrigger>
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <DialogTitle>{rental.name}</DialogTitle>
      </DialogHeader>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Images</h3>
          <div className="grid grid-cols-2 gap-2">
            {rental.images.map((img, index) => (
              <img key={index} src={img} alt={`${rental.name} - Image ${index + 1}`} className="w-full h-32 object-cover rounded" />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Details</h3>
          <p>Size: {rental.squareMeters} m²</p>
          <p>Price: {rental.price}</p>
          <p>Rent: {rental.rent}</p>
          <h3 className="font-semibold mt-4 mb-2">Amenities</h3>
          <ul className="list-disc list-inside">
            {rental.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{rental.description}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Floor Plan</h3>
        <img src={rental.floorPlan} alt={`${rental.name} Floor Plan`} className="w-full h-64 object-contain" />
      </div>
    </DialogContent>
  </Dialog>
);

const AvailableRentals = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Available Rentals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentals.map((rental) => (
            <Card key={rental.id}>
              <CardHeader>
                <CardTitle>{rental.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={rental.images[0]} alt={rental.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-lg font-semibold mb-4">{rental.price}</p>
                <RentalDialog rental={rental} />
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AvailableRentals;
