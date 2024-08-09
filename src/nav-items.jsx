import { Home, Building, Camera } from "lucide-react";
import LandingPage from "./pages/LandingPage.jsx";
import AvailableRentals from "./pages/AvailableRentals.jsx";
import PhotoGallery from "./pages/PhotoGallery.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <LandingPage />,
  },
  {
    title: "Available Rentals",
    to: "/rentals",
    icon: <Building className="h-4 w-4" />,
    page: <AvailableRentals />,
  },
  {
    title: "Photo Gallery",
    to: "/gallery",
    icon: <Camera className="h-4 w-4" />,
    page: <PhotoGallery />,
  },
];
