import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";
import HeroSection from "../src/components/HeroSection";
import FeaturedProducts from "../src/components/FeaturedProducts";
import CategorySlider from "../src/components/CategorySlider";
import Footer from "../src/components/Footer";
import LatestProduct from "./components/LatestProducts";
import SellingSection from "../src/components/Sellings";
import Brands from "../src/components/Brands";
import Cat from "../src/components/Cat";
import Dog from "../src/components/Dog";
import Fish from "../src/components/Fish";
import SmallBirds from "../src/components/SmallBirds";
import NewArrivals from "../src/components/NewArrivals";
import ShippingPolicy from "../src/components/ShippingPolicy";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <CategorySlider />
      <LatestProduct />
      <NewArrivals />
      <SellingSection />
      <Brands />
      <Cat />
      <Dog />
      <Fish />
      <SmallBirds/>
      <ShippingPolicy />
      <Footer />
    </>
  );
}

export default App;
