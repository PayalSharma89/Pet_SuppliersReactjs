import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages / Sections
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import CategorySlider from "./components/CategorySlider";
import LatestProduct from "./components/LatestProducts";
import SellingSection from "./components/Sellings";
import Brands from "./components/Brands";
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import Fish from "./components/Fish";
import SmallBirds from "./components/SmallBirds";
import NewArrivals from "./components/NewArrivals";
import ShippingPolicy from "./components/ShippingPolicy";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Mycart  from "./components/Mycart";
import Forgot from "./components/Forgot";
import Product from "./components/Products";

function App() {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    setShowAd(true);
  }, []);

  const closeModal = () => setShowAd(false);

  return (
    <Router>
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
              padding: "5px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "500px",
              textAlign: "center",
            }}
          >
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
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              X
            </button>
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

      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/fish" element={<Fish />} />
        <Route path="/birds" element={<SmallBirds />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/my-cart" element={<Mycart />} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/product-list" element={<Product/>} />


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
