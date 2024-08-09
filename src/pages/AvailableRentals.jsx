import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from '../components/Footer';

const rentals = [
  { id: 1, name: "Cozy Studio", price: "$100/night", image: "/placeholder.svg" },
  { id: 2, name: "Spacious 2BR Apartment", price: "$200/night", image: "/placeholder.svg" },
  { id: 3, name: "Luxury Penthouse", price: "$500/night", image: "/placeholder.svg" },
];

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
                <img src={rental.image} alt={rental.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-lg font-semibold mb-4">{rental.price}</p>
                <Button className="w-full">View Details</Button>
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
