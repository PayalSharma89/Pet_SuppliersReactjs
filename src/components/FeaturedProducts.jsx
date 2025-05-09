import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Import Autoplay
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    id: 3,
    title: "dog play p1",
    price: "$5,000",
    unit: "pc",
    discount: null,
    outOfStock: false,
    img: "/assets/images/p1.webp",
  },
  {
    id: 14,
    title: "one",
    price: "$23",
    unit: "tets",
    discount: "2% Off",
    outOfStock: false,
    img: "/assets/images/p2.webp",
  },
  {
    id: 7,
    title: "dog play p2",
    price: "$6,000",
    unit: "kg",
    discount: null,
    outOfStock: true,
    img: "/assets/images/p3.webp",
  },
  {
    id: 2,
    title: "dog food p1",
    price: "$2,000",
    unit: "pc",
    discount: null,
    outOfStock: false,
    img: "/assets/images/p4.webp",
  },
  {
    id: 17,
    title: "dog play p2",
    price: "$6,000",
    unit: "kg",
    discount: null,
    outOfStock: true,
    img: "https://six.valley.new.zeroitsolutions.com/storage/app/public/product/thumbnail/2023-12-13-657930ca63dd5.webp",
  },
  {
    id: 22,
    title: "dog food p1",
    price: "$2,000",
    unit: "pc",
    discount: null,
    outOfStock: false,
    img: "https://six.valley.new.zeroitsolutions.com/storage/app/public/product/thumbnail/2023-12-10-65758f9a3b241.webp",
  },
];

const FeaturedProducts = () => {
    return (
        <div className="container py-4 rtl px-0 px-md-3">
            <div className="__inline-62 pt-3">
                <div
                    className="feature-product-title mt-0 text-center fw-bold"
                    style={{
                        color: "#37b4cc",
                        fontSize: "22px",
                        fontWeight: "800px",
                    }}
                >
                    Featured Products
                </div>
                <div className="text-end px-3 d-none d-md-block">
                    <a
                        className="text-capitalize view-all-text"
                        href="#"
                        style={{ color: "#37b4cc" , textDecoration:"none"}}
                    >
                        View all <i className="czi-arrow-right ml-1"></i>
                    </a>
                </div>

        <div className="feature-product">
          <div className="carousel-wrap p-1">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 1000, // 1 second delay
                disableOnInteraction: false, // keeps autoplay after user swipes
              }}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="product-single-hover shadow-none rtl">
                    <div className="overflow-hidden position-relative">
                      <div className="inline_product clickable">
                        {product.discount ? (
                          <span className="for-discoutn-value p-1 pl-2 pr-2">
                            {product.discount}
                          </span>
                        ) : (
                          <span className="for-discoutn-value-null"></span>
                        )}

                        <a href="#" style={{ textDecoration: 'none' }}>
                          <img
                            src={product.img}
                            alt={product.title}
                            onError={(e) => {
                              e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png";
                            }}
                          />
                        </a>

                        <div className="quick-view">
                          <a
                            className="btn-circle stopPropagation"
                            href="javascript:void(0)"
                            onClick={() => quickView(product.id)}
                            style={{ textDecoration: 'none' }}
                          >
                            <i className="czi-eye align-middle"></i>
                          </a>
                        </div>

                        {product.outOfStock && (
                          <span className="out_fo_stock">Out of stock</span>
                        )}
                      </div>

                      <div className="single-product-details">
                        <div>
                          <a href="#" className="text-capitalize fw-semibold" style={{ textDecoration: 'none' }}>
                            {product.title}
                          </a>
                        </div>

                        <div className="justify-content-between">
                          <div className="product-price">
                            <span className="text-accent text-dark">
                              {product.price}
                            </span>
                          </div>
                        </div>

                                                <div>
                                                    <span
                                                        className="text-capitalize fw-semibold"
                                                        style={{
                                                            fontSize: "9pt",
                                                            display:
                                                                "inline-block",
                                                            minWidth: "30px",
                                                            height: "30px",
                                                            borderRadius: "50%",
                                                            backgroundColor:
                                                                "#5C5B64",
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
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

const quickView = (id) => {
  alert(`Quick view product ID: ${id}`);
};

export default FeaturedProducts;
