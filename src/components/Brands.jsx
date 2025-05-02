import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Brands = () => {
  const brandImages = [
    { src: "src/assets/images/brand1.webp", alt: "Brand 1" },
    { src: "src/assets/images/brand2.webp", alt: "Brand 2" },
    { src: "src/assets/images/brand3.webp", alt: "Brand 3" },
    { src: "src/assets/images/brand4.webp", alt: "Brand 4" },
    { src: "src/assets/images/brand5.webp", alt: "Brand 5" },
    { src: "src/assets/images/brand6.webp", alt: "Brand 6" },
    { src: "src/assets/images/brand7.webp", alt: "Brand 7" },
    { src: "src/assets/images/brand8.webp", alt: "Brand 8" },
    { src: "src/assets/images/brand9.webp", alt: "Brand 9" },
    { src: "src/assets/images/brand10.webp", alt: "Brand 10" },
  ];

  const imageStyle = {
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    objectFit: "cover",
    border: "1px solid #eee",
    padding: "2px",
    display: "block",
    margin: "0 auto",
  };

  return (
    <div className="brands-section">
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6">
            <h2>Brands</h2>
          </div>
          <div className="col-md-6 text-md-right">
            <a
              className="text-capitalize view-all-text"
              style={{ color: "#37b4cc" }}
              href="#"
            >
              View All <i className="czi-arrow-right ml-1 mr-n1"></i>
            </a>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={4} // reduced spacing between images
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 3 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 7 },
              }}
            >
              {brandImages.map((brand, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="img-fluid"
                    style={imageStyle}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/70";
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
