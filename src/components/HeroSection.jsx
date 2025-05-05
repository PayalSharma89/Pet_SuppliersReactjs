import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/HeroSection.css";

const HeroSection = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const sliderImages = [
        "src/assets/images/2024-08-01-66ab94358ca99.webp",
        "src/assets/images/2024-08-01-66ab94bc786c1.webp",
        "src/assets/images/2024-08-01-66aba63ad8f7f.webp",
    ];

    const handleMouseEnter = (category) => {
        setActiveCategory(category);
    };

    const handleMouseLeave = () => {
        setActiveCategory(null);
    };

    return (
        <section className="bg-transparent py-3">
            <div className="container position-relative">
                <div className="row no-gutters position-relative rtl">
                    <div className="col-xl-3 position-static d-none d-xl-block __top-slider-cate">
                        <div className="category-menu-wrap position-static">
                            <ul className="category-menu mt-0">
                                <li>
                                    <a
                                        href="#"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            textDecoration:"none"
                                        }}
                                    >
                                        <img
                                            src="/src/assets/images/cat.png"
                                            alt="Cat Icon"
                                            width="40"
                                            height="30"
                                        />
                                        <span
                                            style={{
                                                textAlign: "left",
                                                width: "100%",
                                            }}
                                        >
                                            Cat
                                        </span>
                                    </a>

                                    <div className="mega_menu z-2">
                                        <div className="mega_menu_inner">
                                            <h6>
                                                <a href="#">😻 Dry Food</a>
                                            </h6>
                                            <h6>
                                                <a href="#">😻 Wet Food</a>
                                            </h6>
                                            <h6>
                                                <a href="#">
                                                    😻 Treats And Snacks
                                                </a>
                                            </h6>
                                            <h6>
                                                <a href="#">
                                                    😻 Health & Vitamins
                                                </a>
                                            </h6>
                                            <h6>
                                                <a href="#">😻 Litter</a>
                                            </h6>
                                            <h6>
                                                <a href="#">😻 Litter Box</a>
                                            </h6>
                                        </div>
                                        <div className="mega_menu_inner">
                                            <h6>
                                                <a href="#">😻 NewBorn</a>
                                            </h6>
                                            <h6>
                                                <a href="#">
                                                    😻 Sterilised Cats
                                                </a>
                                            </h6>
                                            <h6>
                                                <a href="#">
                                                    😻 Toys & Activities
                                                </a>
                                            </h6>
                                            <h6>
                                                <a href="#">
                                                    😻 Cleaning Tools
                                                </a>
                                            </h6>
                                            <h6>
                                                <a href="#">😻 Bed and House</a>
                                            </h6>
                                        </div>
                                        <div className="mega_menu_inner">
                                            <h6>
                                                <a href="#">
                                                    😻 Leash & Collar
                                                </a>
                                            </h6>
                                            <h6>
                                                <a href="#">😻 Clothes</a>
                                            </h6>
                                            <h6>
                                                <a href="#">😻 Bowl & Feeder</a>
                                            </h6>
                                            <h6>
                                                <a href="#">😻 Accessories</a>
                                            </h6>
                                        </div>
                                    </div>
                                </li>

                                {/* Dog */}
                                <li>
                                    <a
                                        href="#"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                    >
                                        <img
                                            src="/src/assets/images/dog.png"
                                            alt="Dog Icon"
                                            width="40"
                                            height="30"
                                        />
                                        <span
                                            style={{
                                                textAlign: "left",
                                                width: "100%",
                                            }}
                                        >
                                            Dog
                                        </span>
                                    </a>

                                    <div className="mega_menu z-2">
                                        <div className="mega_menu_inner">
                                            <h6>
                                                <a href="#">🐶 Dry Food</a>
                                            </h6>
                                            <h6>
                                                <a href="#">🐶 Wet Food</a>
                                            </h6>
                                            <h6>
                                                <a href="#">
                                                    🐶 Treats And Snacks
                                                </a>
                                            </h6>
                                            <h6>
                                                <a href="#">
                                                    🐶 Health & Vitamins
                                                </a>
                                            </h6>
                                            <h6>
                                                <a href="#">
                                                    🐶 Cleaning Tools
                                                </a>
                                            </h6>
                                            <h6>
                                                <a href="#">🐶 Bed and House</a>
                                            </h6>
                                        </div>
                                        <div className="mega_menu_inner">
                                            <h6>
                                                <a href="#">🐶 NewBorn</a>
                                            </h6>
                                            <h6>
                                                <a href="#">🐶 Pad & Toilet</a>
                                            </h6>
                                            <h6>
                                                <a href="#">
                                                    🐶 Toys & Activities
                                                </a>
                                            </h6>
                                            <h6>
                                                <a href="#">🐶 Bowl & Feeder</a>
                                            </h6>
                                            <h6>
                                                <a href="#">🐶 Clothes</a>
                                            </h6>
                                            <h6>
                                                <a href="#">🐶 Accessories</a>
                                            </h6>
                                        </div>
                                    </div>
                                </li>

                                {/* Bird */}
                                <li>
                                    <a
                                        href="#"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                    >
                                        <img
                                            src="/src/assets/images/1746000741166.png"
                                            alt="Bird Icon"
                                            width="40"
                                            height="30"
                                        />
                                        <span
                                            style={{
                                                textAlign: "left",
                                                width: "100%",
                                            }}
                                        >
                                            Bird
                                        </span>
                                    </a>

                                    <div className="mega_menu z-2">
                                        <div className="mega_menu_inner">
                                            <h6>
                                                <a href="#">🐦 Bird Food</a>
                                            </h6>
                                            <h6>
                                                <a href="#">
                                                    🐦 Toys & Supplements
                                                </a>
                                            </h6>
                                            <h6>
                                                <a href="#">
                                                    🐦 Health & Vitamins
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                </li>

                                {/* Fish */}
                                <li>
                                    <a
                                        href="#"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                    >
                                        <img
                                            src="src/assets/images/1746000809084.png"
                                            alt="Fish Icon"
                                            width="40"
                                            height="30"
                                        />
                                        <span
                                            style={{
                                                textAlign: "left",
                                                width: "100%",
                                            }}
                                        >
                                            Fish
                                        </span>
                                    </a>

                                    <div className="mega_menu z-2">
                                        <div className="mega_menu_inner">
                                            <h6>
                                                <a href="#">
                                                    🐟 Food & Accessories
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Swiper Slider */}
                    <div className="col-12 col-xl-9 __top-slider-images">
                        <div className="pl-xl-2">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                loop={true}
                            >
                                {sliderImages.map((src, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img
                                            src={src}
                                            alt={`Slide ${idx + 1}`}
                                            className="w-100"
                                            onError={(e) =>
                                                (e.target.src =
                                                    "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                                            }
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
