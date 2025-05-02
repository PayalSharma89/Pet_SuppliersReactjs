import React from "react";

const CategorySlider = () => {
    const categories = [
        {
            name: "🐱 Cat",
            imgSrc: "src/assets/images/1746077999614.png",
            link: "#",
        },
        {
            name: "🐶 Dog",
            imgSrc: "src/assets/images/1746078035785.png",
            link: "#",
        },
        {
            name: "🐦 Bird",
            imgSrc: "src/assets/images/1746077977826.png",
            link: "#",
        },
        {
            name: "🐟 Fish",
            imgSrc: "src/assets/images/1746078060738.png",
            link: "#",
        },
        {
            name: "🐰 Small Birds",
            imgSrc: "src/assets/images/1746078022300.png",
            link: "#",
        },
    ];

    return (
        <section className="pb-4 rtl">
            <div className="container">
                <div>
                    <div className="card __shadow h-100 max-md-shadow-0">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className="categories-title m-0">
                                    <span className="font-semibold">
                                        Categories
                                    </span>
                                </div>
                                <div>
                                    <a
                                        className="text-capitalize view-all-text"
                                        style={{ color: "#1f3dc2!important" }}
                                        href="#"
                                    >
                                        View all
                                        <i className="czi-arrow-right ml-1 mr-n1"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="d-none d-md-block">
                                <div className="row mt-3">
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            className="text-center __m-5px __cate-item"
                                        >
                                            <a href={category.link}>
                                                <div className="__img">
                                                    <img
                                                        onError={(e) =>
                                                            (e.target.src =
                                                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                                                        }
                                                        src={category.imgSrc}
                                                        alt={category.name}
                                                    />
                                                </div>
                                                <p className="text-center small mt-2">
                                                    {category.name}
                                                </p>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="d-md-none">
                                {categories.map((category, index) => (
                                    <div
                                        key={index}
                                        className="text-center __m-5px __cate-item"
                                    >
                                        <a href={category.link}>
                                            <div className="__img">
                                                <img
                                                    onError={(e) =>
                                                        (e.target.src =
                                                            "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                                                    }
                                                    src={category.imgSrc}
                                                    alt={category.name}
                                                />
                                            </div>
                                            <p className="text-center small mt-2">
                                                {category.name}
                                            </p>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategorySlider;
