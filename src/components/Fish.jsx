import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const products = [
  {
    id: 16,
    title: "Tetra Gold Fish",
    price: "$2,000",
    unit: "kg",
    outOfStock: false,
    image: "src/assets/images/fish1.webp",
  },
  {
    id: 10,
    title: "Tetra RedParrot Healthy staple food",
    price: "$1,000",
    unit: "kg",
    outOfStock: false,
    image: "src/assets/images/fish2.webp",
  },
  {
    id: 15,
    title: "DAJANA Guppy Gourmet Multivitamin",
    price: "$200",
    unit: "pc",
    outOfStock: false,
    image: "src/assets/images/fish3.webp",
  },
  {
    id: 17,
    title: "Tetra Cichlid Sticks",
    price: "$1,500",
    unit: "kg",
    outOfStock: false,
    image: "src/assets/images/fish4.webp",
  },
  {
    id: 18,
    title: "Dajana Basic Tropical Flakes",
    price: "$1,200",
    unit: "kg",
    outOfStock: true,
    image: "src/assets/images/fish5.webp",
  },
  {
    id: 19,
    title: "DAJANA Colour Fresh Pack",
    price: "$800",  
    unit: "can",
    outOfStock: false,
    image: "src/assets/images/fish6.webp",
  },
  {
    id: 20,
    title: "DAJANA Gold Flakes",
    price: "$350",
    unit: "pack",
    outOfStock: false,
    image: "src/assets/images/fish7.webp",
  },
  {
    id: 21,
    title: "Tetra Pro Energy Multi-Crisps",
    price: "$650",
    unit: "box",
    outOfStock: false,
    image: "src/assets/images/fish8.webp",
  },
  {
    id: 22,
    title: "TetraMin Flakes",
    price: "$900",
    unit: "kg",
    outOfStock: true,
    image: "src/assets/images/fish10.webp",
  },
  // {
  //   id: 23,
  //   title: "Premium Fish Kibble",
  //   price: "$1,800",
  //   unit: "kg",
  //   outOfStock: false,
  //   image: "src/assets/images/fish1.webp",
  // },
];

const Fish = () => {
  return (
    <section className="container pb-4" style={{ marginTop: "25px" }}>
      <div className="shadow p-4 rounded bg-white">
        {/* Title + View All Row */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2
            className="text-uppercase fw-bold m-0"
            style={{ fontSize: "20px" }}
          >
            🐠Fish
          </h2>
          <a
            href="#"
            className="ms-auto"
            style={{ color: "#1b1a30", whiteSpace: "nowrap" }}
          >
            View all <i className="czi-arrow-right ml-1"></i>
          </a>
        </div>

        {/* Swiper with top margin */}
        <div className="mt-3">
          <Swiper
            modules={[]}
            spaceBetween={15}
            slidesPerView={1.5}
            
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 6  },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  className="p-2 border rounded position-relative"
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="text-center mb-2 position-relative"
                    style={{ height: "150px" }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                    
                      className="img-fluid"
                      style={{
                        height: "100%",
                        objectFit: "contain",
                        width: "100%",
                      }}
                    />

                    {product.outOfStock && (
                      <div
                        className="position-absolute top-0 start-50 translate-middle-x bg-danger text-white px-2 py-1 rounded"
                        style={{
                          fontSize: "10px",
                          top: "5px",
                        }}
                      >
                        Out of stock
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <a
                      href="#"
                      className="fw-semibold text-capitalize d-block mb-1"
                    >
                      {product.title}
                    </a>
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ fontSize: "12px" }}
                    >
                      <span>{product.price}</span>
                      <span
                        style={{
                          backgroundColor: "#1b1a30",
                          color: "#fff",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "9pt",
                        }}
                      >
                        {product.unit}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Fish;
