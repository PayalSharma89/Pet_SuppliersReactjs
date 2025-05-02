import { useState, useEffect } from "react";
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
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    setShowAd(true);
  }, []);

  const closeModal = () => {
    setShowAd(false);
  };

  return (
    <>
      {showAd && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
             padding: '5px',
              borderRadius: "10px",
              width: "90%", 
              maxWidth: "500px", 
              textAlign: "center",
            }}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                backgroundColor: "#ccc",
                border: "none",
                color: "white",
                borderRadius: "50%",
                height: "30px",
                width: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              X
            </button>

            {/* Ad image */}
            <img
              src="src/assets/images/Ads.webp"
              alt="Ad"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      )}
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
      <SmallBirds />
      <ShippingPolicy />
      <Footer />
    </>
  );
}

export default App;
