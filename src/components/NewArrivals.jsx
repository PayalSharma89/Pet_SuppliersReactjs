import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    name: "cate food sub sub",
    price: "$2,000",
    unit: "kg",
    img: "src/assets/images/Arrivals1.webp",
  },
  {
    name: "one",
    price: "$23",
    unit: "tets",
    discount: "2%",
    img: "src/assets/images/Arrivals2.webp",
  },
  {
    name: "premium cat food",
    price: "$35",
    unit: "kg",
    img: "src/assets/images/Arrivals3.webp",
  },
  {
    name: "dog treats",
    price: "$12",
    unit: "pack",
    img: "src/assets/images/Arrivals4.webp",
  },
  {
    name: "fish flakes",
    price: "$8",
    unit: "jar",
    img: "src/assets/images/Arrivals5.webp",
  },
  {
    name: "pet vitamins",
    price: "$45",
    unit: "bottle",
    img: "src/assets/images/Arrivals6.webp",
  },
  {
    name: "rabbit hay",
    price: "$18",
    unit: "kg",
    img: "src/assets/images/Arrivals1.webp",
  },
  {
    name: "bird seed mix",
    price: "$22",
    unit: "bag",
    img: "src/assets/images/Arrivals2.webp",
  },
];

const NewArrivals = () => {
  return (
    <>
      <div className="container rtl mt-4">
        <div className="section-header">
          <div className="arrival-title d-block">
            <div className="text-capitalize">New arrivals</div>
          </div>
        </div>
      </div>

      <div className="container rtl mb-3 overflow-hidden">
        <div className="py-2">
          <div className="new_arrival_product">
            <div className="carousel-wrap">
              <Swiper
                modules={[Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 4 },
                }}
                dir="rtl"
                className="new-arrivals-product"
              >
                {products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="flash_deal_product rtl"
                      onClick={() => (window.location.href = "#")}
                    >
                      {product.discount && (
                        <span className="for-discoutn-value p-1 pl-2 pr-2">
                          {product.discount} Off
                        </span>
                      )}
                      <div className="d-flex">
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{ paddingLeft: "12px", paddingBlock: "12px" }}
                        >
                          <div className="flash-deals-background-image">
                            <img
                              className="__img-125px"
                              src={product.img}
                              onError={(e) => {
                                e.target.src =
                                  "#public/assets/front-end/img/image-place-holder.png";
                              }}
                              alt="product"
                            />
                          </div>
                        </div>
                        <div className="flash_deal_product_details pl-3 pr-3 pr-1 d-flex mt-3">
                          <div>
                            <div>
                              <a
                                href="#"
                                className="flash-product-title text-capitalize fw-semibold"
                style={{ textDecoration: 'none' }}

                              >
                                {product.name}
                              </a>
                            </div>
                            <div className="d-flex flex-wrap gap-8 align-items-center row-gap-0">
                              {product.discount && (
                                <strike
                                  style={{ fontSize: "12px", color: "#9B9B9B" }}
                                >
                                  {product.originalPrice}
                                </strike>
                              )}
                              <span className="flash-product-price text-dark fw-semibold">
                                {product.price}
                              </span>
                              <div>
                                <span
                                  className="text-capitalize fw-semibold"
                                  style={{
                                    fontSize: "9pt",
                                    display: "inline-block",
                                    minWidth: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    backgroundColor: "#37b4cc",
                                    color: "#FFFFFF",
                                    textAlign: "center",
                                    lineHeight: "30px",
                                    padding: "0 10px",
                                  }}
                                >
                                  {product.unit}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
