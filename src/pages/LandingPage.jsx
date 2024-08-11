import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from 'lucide-react';
import Footer from '../components/Footer';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const LandingPage = () => {
  return (
    <ParallaxProvider>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Parallax speed={-10}>
          <div className="h-screen bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")'}}>
            <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
              <h1 className="text-6xl font-bold text-white">Welcome to Our Rental Property</h1>
            </div>
          </div>
        </Parallax>

        <main className="container mx-auto px-4 py-8">
          <Parallax speed={5}>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About Our Property</h2>
                <p className="text-gray-700 mb-4">
                  Nestled in the heart of Mountain View, our rental property offers a perfect blend of comfort and luxury. 
                  With stunning views and modern amenities, it's the ideal place for your next getaway.
                </p>
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Property exterior" className="w-full h-64 object-cover rounded-lg mb-4" />
              </CardContent>
            </Card>
          </Parallax>

          <Parallax speed={10}>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Brief History</h2>
                <p className="text-gray-700 mb-4">
                  Our property has been a landmark in Mountain View for decades. It has been lovingly restored 
                  to preserve its original charm while offering all the modern conveniences you expect.
                </p>
                <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Historical photo" className="w-full h-64 object-cover rounded-lg mb-4" />
              </CardContent>
            </Card>
          </Parallax>

          <Parallax speed={15}>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Location</h2>
                <div className="flex items-center mb-4">
                  <MapPin className="mr-2" />
                  <span>600 Amphitheatre Parkway, Mountain View, California</span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6392523041614!2d-122.08624708469213!3d37.42199997982448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1653308041117!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{border:0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </CardContent>
            </Card>
          </Parallax>
        </main>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default LandingPage;
