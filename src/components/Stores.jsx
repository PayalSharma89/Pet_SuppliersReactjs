import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const stores = [
  {
    id: 1,
    name: "Pet World - Downtown",
    owner: "Mrs. Ayesha Khan",
    location: "Liberty Market, Lahore",
    distance: "1.2 km",
    image: "src/assets/images/2024-08-01-66ab94358ca99.webp",
  },
  {
    id: 2,
    name: "Pet World - Gulberg",
    owner: "Mrs. Sana Rehman",
    location: "MM Alam Road, Lahore",
    distance: "2.8 km",
    image: "src/assets/images/2024-08-01-66ab94358ca99.webp",
  },
  {
    id: 3,
    name: "Pet World - Model Town",
    owner: "Mrs. Hina Tariq",
    location: "Model Town Block H, Lahore",
    distance: "4.5 km",
    image: "src/assets/images/2024-08-01-66ab94358ca99.webp",
  },
  {
    id: 4,
    name: "Pet World - DHA Phase 5",
    owner: "Mrs. Amna Sheikh",
    location: "Sector C, DHA Phase 5, Lahore",
    distance: "6.1 km",
    image: "src/assets/images/2024-08-01-66ab94358ca99.webp",
  },
  {
    id: 5,
    name: "Pet World - Johar Town",
    owner: "Mrs. Rabia Nazeer",
    location: "Johar Town Phase 2, Lahore",
    distance: "7.0 km",
    image: "src/assets/images/2024-08-01-66ab94358ca99.webp",
  },
  {
    id: 6,
    name: "Pet World - Wapda Town",
    owner: "Mrs. Fariha Zubair",
    location: "Wapda Town Roundabout, Lahore",
    distance: "8.3 km",
    image: "src/assets/images/2024-08-01-66ab94358ca99.webp",
  },
];

const NearestStores = () => {
  return (
    <section
      style={{
        width: "100vw",
        padding: "40px 0",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* 👇 Inject custom style for smaller Swiper arrows */}
      <style>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px;
          color:rgb(0, 38, 255);
        }
      `}</style>

      <div style={{ padding: "0 20px" }}>
        <h2
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "25px",
            fontSize:"medium",
          }}
        >
          📍 Nearest Pet World Franchises Near You
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={15}
          slidesPerView={1.2}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {stores.map((store) => (
            <SwiperSlide key={store.id}>
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src={store.image}
                  alt={store.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "16px" }}>
                  <h6 style={{ marginBottom: "6px", fontWeight: "600" }}>
                    {store.name}
                  </h6>
                  <small style={{ display: "block", color: "#6c757d" }}>
                    {store.owner}
                  </small>
                  <small style={{ display: "block", color: "#6c757d" }}>
                    {store.location}
                  </small>
                  <small
                    style={{
                      color: "#37b4cc",
                      fontWeight: "600",
                      display: "block",
                      marginTop: "4px",
                    }}
                  >
                    {store.distance} away
                  </small>
                  <button
                    style={{
                      marginTop: "10px",
                      width: "100%",
                      padding: "6px 12px",
                      fontSize: "13px",
                      color: "#37b4cc",
                      border: "1px solid #37b4cc",
                      borderRadius: "4px",
                      backgroundColor: "white",
                      cursor: "pointer",
                    }}
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NearestStores;
