import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from 'lucide-react';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Rental Property</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About Our Property</h2>
            <p className="text-gray-700 mb-4">
              Nestled in the heart of [Location], our rental property offers a perfect blend of comfort and luxury. 
              With stunning views and modern amenities, it's the ideal place for your next getaway.
            </p>
            <img src="/placeholder.svg" alt="Property exterior" className="w-full h-64 object-cover rounded-lg mb-4" />
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Brief History</h2>
            <p className="text-gray-700 mb-4">
              Built in [Year], our property has a rich history dating back [X] years. It has been lovingly restored 
              to preserve its original charm while offering all the modern conveniences you expect.
            </p>
            <img src="/placeholder.svg" alt="Historical photo" className="w-full h-64 object-cover rounded-lg mb-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <div className="flex items-center mb-4">
              <MapPin className="mr-2" />
              <span>[Full Address]</span>
            </div>
            <img src="/placeholder.svg" alt="Map" className="w-full h-64 object-cover rounded-lg" />
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
