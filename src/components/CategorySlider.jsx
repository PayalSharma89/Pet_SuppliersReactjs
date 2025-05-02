import React from "react";

const CategorySlider = () => {
    const categories = [
        { name: "🐱 Cat", imgSrc: "src/assets/images/1746077999614.png", link: "#" },
        { name: "🐶 Dog", imgSrc: "src/assets/images/1746078035785.png", link: "#" },
        { name: "🐦 Bird", imgSrc: "src/assets/images/1746077977826.png", link: "#" },
        { name: "🐟 Fish", imgSrc: "src/assets/images/1746078060738.png", link: "#" },
        { name: "🐰 Small Birds", imgSrc: "src/assets/images/1746078022300.png", link: "#" },
    ];

    return (
        <section className="pb-4 rtl">
            <div className="container">
                <div className="card __shadow h-100 max-md-shadow-0">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="m-0 fw-bold">Categories</h5>
                            <a href="#" className="text-decoration-none text-primary small">
                                View all <i className="czi-arrow-right ml-1"></i>
                            </a>
                        </div>

                        {/* Desktop View */}
                        <div className="d-none d-md-block mt-3">
                            <div className="row">
                                {categories.map((category, index) => (
                                    <div key={index} className="col text-center mb-3">
                                        <a
                                            href={category.link}
                                            className="d-block text-decoration-none category-box"
                                        >
                                            <div className="category-img mx-auto">
                                                <img
                                                    src={category.imgSrc}
                                                    alt={category.name}
                                                    onError={(e) =>
                                                        (e.target.src =
                                                            "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                                                    }
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <p className="mt-2 small fw-semibold text-dark">{category.name}</p>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile View */}
                        <div className="d-md-none mt-3 d-flex overflow-auto">
                            {categories.map((category, index) => (
                                <div key={index} className="text-center mr-3 flex-shrink-0">
                                    <a href={category.link} className="text-decoration-none category-box">
                                        <div className="category-img mx-auto">
                                            <img
                                                src={category.imgSrc}
                                                alt={category.name}
                                                onError={(e) =>
                                                    (e.target.src =
                                                        "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                                                }
                                                className="img-fluid"
                                            />
                                        </div>
                                        <p className="mt-2 small fw-semibold text-dark">{category.name}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Enhancements */}
            <style jsx>{`
                .category-box:hover .category-img {
                    transform: scale(1.05);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }
                .category-img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    overflow: hidden;
                    transition: 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #f9f9f9;
                }
                .category-img img {
                    max-width: 100%;
                    max-height: 100%;
                }
                .flex-shrink-0 {
                    flex-shrink: 0;
                }
                .mr-3 {
                    margin-right: 1rem;
                }
            `}</style>
        </section>
    );
};

export default CategorySlider;
