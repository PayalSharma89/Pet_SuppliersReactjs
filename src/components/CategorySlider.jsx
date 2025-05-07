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
            <div className="d-flex justify-content-between">
              <div className="categories-title m-0">
                <span className="font-semibold">Categories</span>
              </div>
              <div>
                <a
                  className="text-capitalize view-all-text"
                  style={{ color: "#37b4cc" ,textDecoration:"none" }}
                  href="#"
                >
                  View all <i className="czi-arrow-right ml-1 mr-n1"></i>
                </a>
              </div>
            </div>

            {/* Desktop View */}
            <div className="d-none d-md-block">
              <div className="row mt-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="col-6 col-sm-4 col-md-2 text-center mb-4"
                  >
                    <a href={category.link} style={{ textDecoration: 'none' }}>
                      <div className="category-img mx-auto">
                        <img
                          src={category.imgSrc}
                          alt={category.name}
                          onError={(e) =>
                            (e.target.src =
                              "#public/assets/front-end/img/image-place-holder.png")
                          }
                          className="img-fluid"
                        />
                      </div>
                      <p className="text-center small mt-2">{category.name}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile View */}
            <div className="d-md-none mt-3 d-flex overflow-auto">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="text-center mr-3 flex-shrink-0"
                  style={{ width: "100px" }}
                >
                  <a href={category.link} className="text-decoration-none" style={{ textDecoration: 'none' }}>
                    <div className="category-img mx-auto">
                      <img
                        src={category.imgSrc}
                        alt={category.name}
                        onError={(e) =>
                          (e.target.src =
                            "#public/assets/front-end/img/image-place-holder.png")
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

      {/* Component Scoped CSS */}
      <style jsx>{`
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

        .category-box:hover .category-img {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .mr-3 {
          margin-right: 1rem;
        }

        .flex-shrink-0 {
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};

export default CategorySlider;
