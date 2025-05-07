import React from "react";

const LatestProduct = () => {
    const latestProducts = [
        {
            title: "Cat Food Premium",
            price: "$1,200",
            unit: "kg",
            image: "src/assets/images/2025-03-19-67da79bff1701.webp",
        },
        {
            title: "Buy One Free One",
            price: "$800",
            unit: "pc",
            image: "src/assets/images/2025-04-20-680559fb9bad4.webp",
        },
        {
            title: "Bird Seed Mix",
            price: "$600",
            unit: "kg",
            image: "src/assets/images/2025-04-20-680559fb9bad4.webp",
        },
        {
            title: "Puppy Chew Toy",
            price: "$450",
            unit: "pc",
            image: "src/assets/images/2025-04-20-680559fb9bad4.webp",
        },
        {
            title: "Fish Flakes",
            price: "$200",
            unit: "gm",
            image: "src/assets/images/2025-04-20-680559fb9bad4.webp",
        },
        {
            title: "Rabbit Pellets",
            price: "$950",
            unit: "kg",
            image: "src/assets/images/2025-04-18-680297ca4c44e.webp",
        },
        {
            title: "Pet Shampoo",
            price: "$1,100",
            unit: "ml",
            image: "src/assets/images/2025-04-20-680559fb9bad4.webp",
        },
        {
            title: "Pet Bed Small",
            price: "$2,500",
            unit: "pc",
            image: "src/assets/images/pet-shop-logo-vector.jpg",
        },
    ];

    return (
        <div className="container rtl">
            <div className="row g-4 pt-2 mt-0 pb-2 __deal-of align-items-start">
                {/* Recommended Product */}
                <div className="col-xl-3 col-md-4">
                    <div className="deal_of_the_day h-100 bg--light">
                        <div className="d-flex justify-content-center align-items-center py-4">
                            <h4
                                className="font-bold m-0 align-items-center text-uppercase text-center px-2"
                                style={{ color: "#37b4cc" }}
                            >
                                Recommended product
                            </h4>
                        </div>
                        <div className="recomanded-product-card mt-0">
                            <div className="d-flex justify-content-center align-items-center __pt-20 __m-20-r">
                                <div className="position-relative">
                                    <img
                                        src="src/assets/images/2024-12-15-675e8944b6d53.webp"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png";
                                        }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="__i-1 bg-transparent text-center mb-0">
                                <div className="__p-20px px-0 pb-0">
                                    <h6 className="font-semibold pt-2">
                                    Cat Treat Chicken
                                    </h6>
                                    <div className="mb-4 pt-1 d-flex flex-wrap justify-content-center align-items-center text-center gap-8">
                                        <span className="text-accent __text-22px text-dark">
                                            $2,000
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            className="text-capitalize fw-semibold"
                                            style={{
                                                fontSize: "9pt",
                                                display: "inline-block",
                                                minWidth: "30px",
                                                height: "30px",
                                                borderRadius: "50%",
                                                backgroundColor: "#D38B43",
                                                color: "#FFFFFF",
                                                textAlign: "center",
                                                lineHeight: "30px",
                                                padding: "0 10px",
                                            }}
                                        >
                                            15Pc
                                        </span>
                                    </div>
                                    <button
                                        className="btn btn--primary font-bold px-4 rounded-10 text-uppercase"
                                        onClick={() =>
                                            (window.location.href = "#")
                                        }
                                    >
                                        Buy now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Latest Products */}
                <div className="col-xl-9 col-md-8">
                    <div className="latest-product-margin">
                        <div className="d-flex justify-content-between mb-14px">
                            <div className="text-center">
                                <span className="for-feature-title __text-22px font-bold text-center">
                                    Latest Products
                                </span>
                            </div>
                            <div className="mr-1">
                                <a
                                    className="text-capitalize view-all-text"
                                    style={{ color: "#37b4cc" ,textDecoration:"none"}}
                                    href="#"
                                >
                                    View all{" "}
                                    <i className="czi-arrow-right ml-1 mr-n1"></i>
                                </a>
                            </div>
                        </div>

                        <div className="row mt-0 g-2">
                            {latestProducts.map((product, index) => (
                                <div
                                    key={index}
                                    className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6"
                                >
                                    <div className="product-single-hover style--card">
                                        <div className="overflow-hidden position-relative">
                                            <div className="inline_product clickable d-flex justify-content-center">
                                                <div className="d-flex justify-content-end for-dicount-div-null">
                                                    <span className="for-discoutn-value-null"></span>
                                                </div>
                                                <div className="p-10px pb-0">
                                                    <a
                                                        href="#"
                                                        className="w-100"
                                                        style={{ textDecoration: 'none' }}

                                                    >
                                                        <img
                                                            src={product.image}
                                                            onError={(e) => {
                                                                e.target.onerror =
                                                                    null;
                                                                e.target.src =
                                                                    "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png";
                                                            }}
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="quick-view">
                                                    <a
                                                        className="btn-circle stopPropagation"
                                                        href="javascript:void(0)"
                                                        onClick={() =>
                                                            console.log(
                                                                "Quick view",
                                                                index + 1
                                                            )
                                                        }
                                                        style={{ textDecoration: 'none' }}
                                                    >
                                                        <i className="czi-eye align-middle"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="single-product-details">
                                                <div className="text-center">
                                                    <a href="#" style={{ textDecoration: 'none' }}>
                                                        {product.title}
                                                    </a>
                                                </div>
                                                <div className="justify-content-between text-center">
                                                    <div className="product-price text-center d-flex flex-wrap justify-content-center align-items-center gap-8">
                                                        <span className="text-accent text-dark">
                                                            {product.price}
                                                        </span>
                                                    </div>
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProduct;
