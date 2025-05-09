import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

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
import Mycart from "./components/Mycart";
import Forgot from "./components/Forgot";
import Product from "./components/Products";
import Discount from "./components/Discount";
import ProductOne from "./components/ProductOne";
import TermsConditions from "./components/term&Conditions";
import NearestStores from "./components/Stores";
import Sidebar from "./components/sidebar";
import WishlistSection from "./components/WishList";
import TrackOrder from "./components/MyOrders";
import ProfileSection from "./components/MyProfile";
import AboutCompany from "./components/AboutCompany";
import ContactUs from "./components/ContactUs";
import FAQPage from "./components/FAQ";
function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowAd(true);
    } else {
      setShowAd(false);
    }
  }, [location]);

  const closeModal = () => setShowAd(false);

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
              src="src/assets/images/4.jpg"
              alt="Ad"
              style={{
                width: "100%",
                height: "400Px",
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
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/product-list" element={<Product />} />
        <Route path="/discounted-products" element={<Discount />} />
        <Route path="/productOne" element={<ProductOne />} />
        <Route path="/term&condition" element={<TermsConditions />} />
        <Route path="/stores" element={<NearestStores />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/wishlist" element={<WishlistSection />} />
        <Route path="/orders" element={<TrackOrder />} />
        <Route path="/profile" element={<ProfileSection />} />
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/FAQ" element={<FAQPage />} />




      </Routes>

      <Footer />
    </>
  );
}

export default App;
