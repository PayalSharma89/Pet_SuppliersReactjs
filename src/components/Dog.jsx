import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const products = [
  {
    id: 16,
    title: "Brit junior-L Chicken for Dog",
    price: "$2,000",
    unit: "kg",
    outOfStock: false,
    image: "src/assets/images/Dog3.webp",
  },
  {
    id: 10,
    title: "Dount Pet Bed",
    price: "$1,000",
    unit: "kg",
    outOfStock: false,
    image: "src/assets/images/Dog4.webp",
  },
  {
    id: 15,
    title: "EAR Eyes Cleaner",
    price: "$200",
    unit: "pc",
    outOfStock: false,
    image: "src/assets/images/Dog5.webp",
  },
  {
    id: 17,
    title: "Collar",
    price: "$1,500",
    unit: "kg",
    outOfStock: false,
    image: "src/assets/images/Dog6.webp",
  },
  {
    id: 18,
    title: "Milk bottel nursin set",
    price: "$1,200",
    unit: "kg",
    outOfStock: true,
    image: "src/assets/images/Dog7.webp",
  },
  {
    id: 19,
    title: "Trixie Coconut Oil Shampoo",
    price: "$800",  
    unit: "can",
    outOfStock: false,
    image: "src/assets/images/Dog8.webp",
  },
  {
    id: 20,
    title: "Trixie Rice Chicken Balls",
    price: "$350",
    unit: "pack",
    outOfStock: false,
    image: "src/assets/images/Dog9.webp",
  },
  {
    id: 21,
    title: "Econature Plus Lamb & Rice For Puppy",
    price: "$650",
    unit: "box",
    outOfStock: false,
    image: "src/assets/images/Dog10.webp",
  },
  {
    id: 22,
    title: "Beaphar Ear cleaner",
    price: "$900",
    unit: "kg",
    outOfStock: true,
    image: "src/assets/images/Dog11.webp",
  },
  {
    id: 23,
    title: "Trixie Dental Hygiene Spray",
    price: "$1,800",
    unit: "kg",
    outOfStock: false,
    image: "src/assets/images/Dog12.webp",
  },
];

const Dog = () => {
  return (
    <section className="container pb-4" style={{ marginTop: "25px" }}>
      <div className="shadow p-4 rounded bg-white">
        {/* Title + View All Row */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2
            className="text-uppercase fw-bold m-0"
            style={{ fontSize: "20px" }}
          >
            Dog
          </h2>
          <a
            href="#"
            className="ms-auto"
            style={{ color: "#1b1a30", whiteSpace: "nowrap" ,textDecoration:"none" }}
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
              992: { slidesPerView: 6 },
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
                      style={{ textDecoration: 'none' }}
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

export default Dog;
