import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Brands = () => {
  const brandImages = [
    { src: "/assets/images/Brand1.webp", alt: "Brand 1" },
    { src: "/assets/images/Brand2.webp", alt: "Brand 2" },
    { src: "/assets/images/Brand3.webp", alt: "Brand 3" },
    { src: "/assets/images/Brand4.webp", alt: "Brand 4" },
    { src: "/assets/images/Brand5.webp", alt: "Brand 5" },
    { src: "/assets/images/Brand6.webp", alt: "Brand 6" },
    { src: "/assets/images/Brand7.webp", alt: "Brand 7" },
    { src: "/assets/images/Brand8.webp", alt: "Brand 8" },
    { src: "/assets/images/Brand9.webp", alt: "Brand 9" },
    { src: "/assets/images/Brand10.webp", alt: "Brand 10" },
    { src: "/assets/images/Brand11.webp", alt: "Brand 11" },
    { src: "/assets/images/Brand12.webp", alt: "Brand 12" },
    { src: "/assets/images/Brand13.webp", alt: "Brand 13" },
    { src: "/assets/images/Brand14.webp", alt: "Brand 14" },
    { src: "/assets/images/Brand15.webp", alt: "Brand 15" },
  ];

  const imageStyle = {
    borderRadius: "50%",
    width: "90px",
    height: "90px",
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
            <h2 className="text-black font-bold __text-22px">Brands</h2>
          </div>
          <div className="col-md-6 text-md-right">
            <a
              className="text-capitalize view-all-text"
              style={{ color: "#37b4cc" , textDecoration:"none" }}
              href="#"
            >
              View All <i className="czi-arrow-right ml-1 mr-n1"></i>
            </a>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={5}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 3 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 11 },
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
