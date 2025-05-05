import { React, useState } from "react";

const ProductPage = () => {
  const [sortValue, setSortValue] = useState("latest");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };
  const handleQuickView = (id) => {
    alert(`Quick view for product ${id}`);
  };
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div>
      <div className="container py-3" dir="ltr">
        <div className="search-page-header">
          <div>
            <h5 className="font-semibold mb-1">Products</h5>
            <div className="view-page-item-count">14 Items found</div>
          </div>
          <form
            id="search-form"
            className="d-none d-lg-block"
            action="https://six.valley.new.zeroitsolutions.com/products"
            method="GET"
          >
            <input hidden name="data_from" value="" />
            <div className="sorting-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M11.6667 7.80078L14.1667 5.30078L16.6667 7.80078"
                  stroke="#D9D9D9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.91675 4.46875H4.58341C4.3533 4.46875 4.16675 4.6553 4.16675 4.88542V8.21875C4.16675 8.44887 4.3533 8.63542 4.58341 8.63542H7.91675C8.14687 8.63542 8.33341 8.44887 8.33341 8.21875V4.88542C8.33341 4.6553 8.14687 4.46875 7.91675 4.46875Z"
                  stroke="#D9D9D9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.91675 11.9688H4.58341C4.3533 11.9688 4.16675 12.1553 4.16675 12.3854V15.7188C4.16675 15.9489 4.3533 16.1354 4.58341 16.1354H7.91675C8.14687 16.1354 8.33341 15.9489 8.33341 15.7188V12.3854C8.33341 12.1553 8.14687 11.9688 7.91675 11.9688Z"
                  stroke="#D9D9D9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.1667 5.30078V15.3008"
                  stroke="#D9D9D9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <label className="for-shoting" htmlFor="sorting">
                <span>Sort by</span>
              </label>
              <select value={sortValue} onChange={handleSortChange}>
                <option value="latest">Latest</option>
                <option value="low-high">Low to High Price</option>
                <option value="high-low">High to Low Price</option>
                <option value="a-z">A to Z Order</option>
                <option value="z-a">Z to A Order</option>
              </select>
            </div>
          </form>
          {/* Filter Button for Mobile */}
          <div className="d-lg-none">
            <div
              className="filter-show-btn btn btn--primary py-1 px-2 m-0"
              onClick={toggleFilter}
            >
              <i className="tio-filter"></i>
            </div>
          </div>
        </div>

        {/* Filter Dropdown for Mobile */}
        {isFilterVisible && (
          <div className="filter-dropdown">
            <div className="filter-item">
              <label htmlFor="best-selling">Best Selling</label>
              <select id="best-selling" name="best-selling">
                <option value="best-seller-1">Best Seller 1</option>
                <option value="best-seller-2">Best Seller 2</option>
                <option value="best-seller-3">Best Seller 3</option>
              </select>
            </div>
            <div className="filter-item">
              <label htmlFor="price-range">Price Range</label>
              <select id="price-range" name="price-range">
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
              </select>
            </div>
            <div className="filter-item">
              <label htmlFor="brand">Brand</label>
              <select id="brand" name="brand">
                <option value="brand-1">Brand 1</option>
                <option value="brand-2">Brand 2</option>
                <option value="brand-3">Brand 3</option>
              </select>
            </div>
            <button
              className="apply-filters-btn"
              onClick={() => setIsFilterVisible(false)}
            >
              Apply Filters
            </button>
          </div>
        )}
      </div>

      <div className="container rtl">
        <div className="row">
          <aside className="col-lg-3 mt-3">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Filter by
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#" style={{ textDecoration: 'none' }}>
                      New Arrival
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" style={{ textDecoration: 'none' }}>
                      Price (Low to High)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" style={{ textDecoration: 'none' }}>
                      Price (High to Low)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-header">
                <span className="h6 mb-0">Price</span>
              </div>
              <div className="card-body">
                <div className="d-flex">
                  <input
                    type="number"
                    className="form-control me-2"
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-header">
                <span className="h6 mb-0">Brands</span>
              </div>
              <div className="card-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Search brand"
                />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="brand1"
                  />
                  <label className="form-check-label" htmlFor="brand1">
                    Brand 1
                  </label>
                </div>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-header">
                <span className="h6 mb-0">Categories</span>
              </div>
              <div className="card-body">
                <a href="#" className="d-block mb-1" style={{ textDecoration: 'none' }}>
                  Cat Food
                </a>
                <a href="#" className="d-block mb-1" style={{ textDecoration: 'none' }}>
                  Dog Food
                </a>
              </div>
            </div>
          </aside>

          <section className="col-lg-9 mt-3">
            <div className="row" id="ajax-products">
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                <div className="product-single-hover style--card">
                  <div className="overflow-hidden position-relative">
                    <div className="inline_product clickable d-flex justify-content-center">
                      <div className="d-flex justify-content-end for-dicount-div-null">
                        <span className="for-discoutn-value-null"></span>
                      </div>
                      <div className="p-2 pb-0">
                        <a href="#" className="w-100" style={{ textDecoration: 'none' }}>
                          <img
                            src="#"
                            alt="product"
                            onError={(e) =>
                              (e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                            }
                          />
                        </a>
                      </div>
                      <div className="quick-view">
                        <button
                          className="btn-circle stopPropagation"
                          onClick={() => handleQuickView(16)}
                        >
                          <i className="czi-eye align-middle"></i>
                        </button>
                      </div>
                      <span className="out_fo_stock">Out of stock</span>
                    </div>

                    <div className="single-product-details">
                      <div className="rating-show justify-content-between text-center">
                        <span className="d-inline-block font-size-sm text-body">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className="tio-star-outlined text-warning"
                            ></i>
                          ))}
                          <label className="badge-style">(0)</label>
                        </span>
                      </div>

                      <div className="text-center">
                        <a href="#" style={{ textDecoration: 'none' }}>Cate Food Sub Sub</a>
                      </div>

                      <div className="text-center d-flex flex-wrap justify-content-center align-items-center gap-2">
                        <span className="text-accent text-dark">$2,000</span>
                        <span
                          className="text-capitalize fw-semibold"
                          style={{
                            fontSize: "9pt",
                            minWidth: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#37B4CC",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            padding: "0 10px",
                          }}
                        >
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                <div className="product-single-hover style--card">
                  <div className="overflow-hidden position-relative">
                    <div className="inline_product clickable d-flex justify-content-center">
                      <div className="d-flex justify-content-end for-dicount-div-null">
                        <span className="for-discoutn-value-null"></span>
                      </div>
                      <div className="p-2 pb-0">
                        <a href="#" className="w-100" style={{ textDecoration: 'none' }}>
                          <img
                            src="#"
                            alt="product"
                            onError={(e) =>
                              (e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                            }
                          />
                        </a>
                      </div>
                      <div className="quick-view">
                        <button
                          className="btn-circle stopPropagation"
                          onClick={() => handleQuickView(16)}
                        >
                          <i className="czi-eye align-middle"></i>
                        </button>
                      </div>
                      <span className="out_fo_stock">Out of stock</span>
                    </div>

                    <div className="single-product-details">
                      <div className="rating-show justify-content-between text-center">
                        <span className="d-inline-block font-size-sm text-body">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className="tio-star-outlined text-warning"
                            ></i>
                          ))}
                          <label className="badge-style">(0)</label>
                        </span>
                      </div>

                      <div className="text-center">
                        <a href="#" style={{ textDecoration: 'none' }}>Cate Food Sub Sub</a>
                      </div>

                      <div className="text-center d-flex flex-wrap justify-content-center align-items-center gap-2">
                        <span className="text-accent text-dark">$2,000</span>
                        <span
                          className="text-capitalize fw-semibold"
                          style={{
                            fontSize: "9pt",
                            minWidth: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#37B4CC",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            padding: "0 10px",
                          }}
                        >
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                <div className="product-single-hover style--card">
                  <div className="overflow-hidden position-relative">
                    <div className="inline_product clickable d-flex justify-content-center">
                      <div className="d-flex justify-content-end for-dicount-div-null">
                        <span className="for-discoutn-value-null"></span>
                      </div>
                      <div className="p-2 pb-0">
                        <a href="#" className="w-100" style={{ textDecoration: 'none' }}>
                          <img
                            src="#"
                            alt="product"
                            onError={(e) =>
                              (e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                            }
                          />
                        </a>
                      </div>
                      <div className="quick-view">
                        <button
                          className="btn-circle stopPropagation"
                          onClick={() => handleQuickView(16)}
                        >
                          <i className="czi-eye align-middle"></i>
                        </button>
                      </div>
                      <span className="out_fo_stock">Out of stock</span>
                    </div>

                    <div className="single-product-details">
                      <div className="rating-show justify-content-between text-center">
                        <span className="d-inline-block font-size-sm text-body">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className="tio-star-outlined text-warning"
                            ></i>
                          ))}
                          <label className="badge-style">(0)</label>
                        </span>
                      </div>

                      <div className="text-center">
                        <a href="#" style={{ textDecoration: 'none' }}>Cate Food Sub Sub</a>
                      </div>

                      <div className="text-center d-flex flex-wrap justify-content-center align-items-center gap-2">
                        <span className="text-accent text-dark">$2,000</span>
                        <span
                          className="text-capitalize fw-semibold"
                          style={{
                            fontSize: "9pt",
                            minWidth: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#37B4CC",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            padding: "0 10px",
                          }}
                        >
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                <div className="product-single-hover style--card">
                  <div className="overflow-hidden position-relative">
                    <div className="inline_product clickable d-flex justify-content-center">
                      <div className="d-flex justify-content-end for-dicount-div-null">
                        <span className="for-discoutn-value-null"></span>
                      </div>
                      <div className="p-2 pb-0">
                        <a href="#" className="w-100" style={{ textDecoration: 'none' }}>
                          <img
                            src="#"
                            alt="product"
                            onError={(e) =>
                              (e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                            }
                          />
                        </a>
                      </div>
                      <div className="quick-view">
                        <button
                          className="btn-circle stopPropagation"
                          onClick={() => handleQuickView(16)}
                        >
                          <i className="czi-eye align-middle"></i>
                        </button>
                      </div>
                      <span className="out_fo_stock">Out of stock</span>
                    </div>

                    <div className="single-product-details">
                      <div className="rating-show justify-content-between text-center">
                        <span className="d-inline-block font-size-sm text-body">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className="tio-star-outlined text-warning"
                            ></i>
                          ))}
                          <label className="badge-style">(0)</label>
                        </span>
                      </div>

                      <div className="text-center">
                        <a href="#" style={{ textDecoration: 'none' }}>Cate Food Sub Sub</a>
                      </div>

                      <div className="text-center d-flex flex-wrap justify-content-center align-items-center gap-2">
                        <span className="text-accent text-dark">$2,000</span>
                        <span
                          className="text-capitalize fw-semibold"
                          style={{
                            fontSize: "9pt",
                            minWidth: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#37B4CC",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            padding: "0 10px",
                          }}
                        >
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                <div className="product-single-hover style--card">
                  <div className="overflow-hidden position-relative">
                    <div className="inline_product clickable d-flex justify-content-center">
                      <div className="d-flex justify-content-end for-dicount-div-null">
                        <span className="for-discoutn-value-null"></span>
                      </div>
                      <div className="p-2 pb-0">
                        <a href="#" className="w-100" style={{ textDecoration: 'none' }}>
                          <img
                            src="#"
                            alt="product"
                            onError={(e) =>
                              (e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                            }
                          />
                        </a>
                      </div>
                      <div className="quick-view">
                        <button
                          className="btn-circle stopPropagation"
                          onClick={() => handleQuickView(16)}
                        >
                          <i className="czi-eye align-middle"></i>
                        </button>
                      </div>
                      <span className="out_fo_stock">Out of stock</span>
                    </div>

                    <div className="single-product-details">
                      <div className="rating-show justify-content-between text-center">
                        <span className="d-inline-block font-size-sm text-body">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className="tio-star-outlined text-warning"
                            ></i>
                          ))}
                          <label className="badge-style">(0)</label>
                        </span>
                      </div>

                      <div className="text-center">
                        <a href="#" style={{ textDecoration: 'none' }}>Cate Food Sub Sub</a>
                      </div>

                      <div className="text-center d-flex flex-wrap justify-content-center align-items-center gap-2">
                        <span className="text-accent text-dark">$2,000</span>
                        <span
                          className="text-capitalize fw-semibold"
                          style={{
                            fontSize: "9pt",
                            minWidth: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#37B4CC",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            padding: "0 10px",
                          }}
                        >
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                <div className="product-single-hover style--card">
                  <div className="overflow-hidden position-relative">
                    <div className="inline_product clickable d-flex justify-content-center">
                      <div className="d-flex justify-content-end for-dicount-div-null">
                        <span className="for-discoutn-value-null"></span>
                      </div>
                      <div className="p-2 pb-0">
                        <a href="#" className="w-100" style={{ textDecoration: 'none' }}>
                          <img
                            src="#"
                            alt="product"
                            onError={(e) =>
                              (e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                            }
                          />
                        </a>
                      </div>
                      <div className="quick-view">
                        <button
                          className="btn-circle stopPropagation"
                          onClick={() => handleQuickView(16)}
                        >
                          <i className="czi-eye align-middle"></i>
                        </button>
                      </div>
                      <span className="out_fo_stock">Out of stock</span>
                    </div>

                    <div className="single-product-details">
                      <div className="rating-show justify-content-between text-center">
                        <span className="d-inline-block font-size-sm text-body">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className="tio-star-outlined text-warning"
                            ></i>
                          ))}
                          <label className="badge-style">(0)</label>
                        </span>
                      </div>

                      <div className="text-center">
                        <a href="#" style={{ textDecoration: 'none' }}>Cate Food Sub Sub</a>
                      </div>

                      <div className="text-center d-flex flex-wrap justify-content-center align-items-center gap-2">
                        <span className="text-accent text-dark">$2,000</span>
                        <span
                          className="text-capitalize fw-semibold"
                          style={{
                            fontSize: "9pt",
                            minWidth: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#37B4CC",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            padding: "0 10px",
                          }}
                        >
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                <div className="product-single-hover style--card">
                  <div className="overflow-hidden position-relative">
                    <div className="inline_product clickable d-flex justify-content-center">
                      <div className="d-flex justify-content-end for-dicount-div-null">
                        <span className="for-discoutn-value-null"></span>
                      </div>
                      <div className="p-2 pb-0">
                        <a href="#" className="w-100" style={{ textDecoration: 'none' }}>
                          <img
                            src="#"
                            alt="product"
                            onError={(e) =>
                              (e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                            }
                          />
                        </a>
                      </div>
                      <div className="quick-view">
                        <button
                          className="btn-circle stopPropagation"
                          onClick={() => handleQuickView(16)}
                        >
                          <i className="czi-eye align-middle"></i>
                        </button>
                      </div>
                      <span className="out_fo_stock">Out of stock</span>
                    </div>

                    <div className="single-product-details">
                      <div className="rating-show justify-content-between text-center">
                        <span className="d-inline-block font-size-sm text-body">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className="tio-star-outlined text-warning"
                            ></i>
                          ))}
                          <label className="badge-style">(0)</label>
                        </span>
                      </div>

                      <div className="text-center">
                        <a href="#" style={{ textDecoration: 'none' }}>Cate Food Sub Sub</a>
                      </div>

                      <div className="text-center d-flex flex-wrap justify-content-center align-items-center gap-2">
                        <span className="text-accent text-dark">$2,000</span>
                        <span
                          className="text-capitalize fw-semibold"
                          style={{
                            fontSize: "9pt",
                            minWidth: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#37B4CC",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            padding: "0 10px",
                          }}
                        >
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                <div className="product-single-hover style--card">
                  <div className="overflow-hidden position-relative">
                    <div className="inline_product clickable d-flex justify-content-center">
                      <div className="d-flex justify-content-end for-dicount-div-null">
                        <span className="for-discoutn-value-null"></span>
                      </div>
                      <div className="p-2 pb-0">
                        <a href="#" className="w-100" style={{ textDecoration: 'none' }}>
                          <img
                            src="#"
                            alt="product"
                            onError={(e) =>
                              (e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                            }
                          />
                        </a>
                      </div>
                      <div className="quick-view">
                        <button
                          className="btn-circle stopPropagation"
                          onClick={() => handleQuickView(16)}
                        >
                          <i className="czi-eye align-middle"></i>
                        </button>
                      </div>
                      <span className="out_fo_stock">Out of stock</span>
                    </div>

                    <div className="single-product-details">
                      <div className="rating-show justify-content-between text-center">
                        <span className="d-inline-block font-size-sm text-body">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className="tio-star-outlined text-warning"
                            ></i>
                          ))}
                          <label className="badge-style">(0)</label>
                        </span>
                      </div>

                      <div className="text-center">
                        <a href="#" style={{ textDecoration: 'none' }}>Cate Food Sub Sub</a>
                      </div>

                      <div className="text-center d-flex flex-wrap justify-content-center align-items-center gap-2">
                        <span className="text-accent text-dark">$2,000</span>
                        <span
                          className="text-capitalize fw-semibold"
                          style={{
                            fontSize: "9pt",
                            minWidth: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#37B4CC",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            padding: "0 10px",
                          }}
                        >
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                <div className="product-single-hover style--card">
                  <div className="overflow-hidden position-relative">
                    <div className="inline_product clickable d-flex justify-content-center">
                      <div className="d-flex justify-content-end for-dicount-div-null">
                        <span className="for-discoutn-value-null"></span>
                      </div>
                      <div className="p-2 pb-0">
                        <a href="#" className="w-100" style={{ textDecoration: 'none' }}>
                          <img
                            src="#"
                            alt="product"
                            onError={(e) =>
                              (e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                            }
                          />
                        </a>
                      </div>
                      <div className="quick-view">
                        <button
                          className="btn-circle stopPropagation"
                          onClick={() => handleQuickView(16)}
                        >
                          <i className="czi-eye align-middle"></i>
                        </button>
                      </div>
                      <span className="out_fo_stock">Out of stock</span>
                    </div>

                    <div className="single-product-details">
                      <div className="rating-show justify-content-between text-center">
                        <span className="d-inline-block font-size-sm text-body">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className="tio-star-outlined text-warning"
                            ></i>
                          ))}
                          <label className="badge-style">(0)</label>
                        </span>
                      </div>

                      <div className="text-center">
                        <a href="#" style={{ textDecoration: 'none' }}>Cate Food Sub Sub</a>
                      </div>

                      <div className="text-center d-flex flex-wrap justify-content-center align-items-center gap-2">
                        <span className="text-accent text-dark">$2,000</span>
                        <span
                          className="text-capitalize fw-semibold"
                          style={{
                            fontSize: "9pt",
                            minWidth: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#37B4CC",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            padding: "0 10px",
                          }}
                        >
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                <div className="product-single-hover style--card">
                  <div className="overflow-hidden position-relative">
                    <div className="inline_product clickable d-flex justify-content-center">
                      <div className="d-flex justify-content-end for-dicount-div-null">
                        <span className="for-discoutn-value-null"></span>
                      </div>
                      <div className="p-2 pb-0">
                        <a href="#" className="w-100" style={{ textDecoration: 'none' }}>
                          <img
                            src="#"
                            alt="product"
                            onError={(e) =>
                              (e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                            }
                          />
                        </a>
                      </div>
                      <div className="quick-view">
                        <button
                          className="btn-circle stopPropagation"
                          onClick={() => handleQuickView(16)}
                        >
                          <i className="czi-eye align-middle"></i>
                        </button>
                      </div>
                      <span className="out_fo_stock">Out of stock</span>
                    </div>

                    <div className="single-product-details">
                      <div className="rating-show justify-content-between text-center">
                        <span className="d-inline-block font-size-sm text-body">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className="tio-star-outlined text-warning"
                            ></i>
                          ))}
                          <label className="badge-style">(0)</label>
                        </span>
                      </div>

                      <div className="text-center">
                        <a href="#" style={{ textDecoration: 'none' }}>Cate Food Sub Sub</a>
                      </div>

                      <div className="text-center d-flex flex-wrap justify-content-center align-items-center gap-2">
                        <span className="text-accent text-dark">$2,000</span>
                        <span
                          className="text-capitalize fw-semibold"
                          style={{
                            fontSize: "9pt",
                            minWidth: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#37B4CC",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            padding: "0 10px",
                          }}
                        >
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                <div className="product-single-hover style--card">
                  <div className="overflow-hidden position-relative">
                    <div className="inline_product clickable d-flex justify-content-center">
                      <div className="d-flex justify-content-end for-dicount-div-null">
                        <span className="for-discoutn-value-null"></span>
                      </div>
                      <div className="p-2 pb-0">
                        <a href="#" className="w-100" style={{ textDecoration: 'none' }}> 
                          <img
                            src="#"
                            alt="product"
                            onError={(e) =>
                              (e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                            }
                          />
                        </a>
                      </div>
                      <div className="quick-view">
                        <button
                          className="btn-circle stopPropagation"
                          onClick={() => handleQuickView(16)}
                        >
                          <i className="czi-eye align-middle"></i>
                        </button>
                      </div>
                      <span className="out_fo_stock">Out of stock</span>
                    </div>

                    <div className="single-product-details">
                      <div className="rating-show justify-content-between text-center">
                        <span className="d-inline-block font-size-sm text-body">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className="tio-star-outlined text-warning"
                            ></i>
                          ))}
                          <label className="badge-style">(0)</label>
                        </span>
                      </div>

                      <div className="text-center">
                        <a href="#" style={{ textDecoration: 'none' }}>Cate Food Sub Sub</a>
                      </div>

                      <div className="text-center d-flex flex-wrap justify-content-center align-items-center gap-2">
                        <span className="text-accent text-dark">$2,000</span>
                        <span
                          className="text-capitalize fw-semibold"
                          style={{
                            fontSize: "9pt",
                            minWidth: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#37B4CC",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            padding: "0 10px",
                          }}
                        >
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                <div className="product-single-hover style--card">
                  <div className="overflow-hidden position-relative">
                    <div className="inline_product clickable d-flex justify-content-center">
                      <div className="d-flex justify-content-end for-dicount-div-null">
                        <span className="for-discoutn-value-null"></span>
                      </div>
                      <div className="p-2 pb-0">
                        <a href="#" className="w-100" style={{ textDecoration: 'none' }}>
                          <img
                            src="#"
                            alt="product"
                            onError={(e) =>
                              (e.target.src =
                                "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                            }
                          />
                        </a>
                      </div>
                      <div className="quick-view">
                        <button
                          className="btn-circle stopPropagation"
                          onClick={() => handleQuickView(16)}
                        >
                          <i className="czi-eye align-middle"></i>
                        </button>
                      </div>
                      <span className="out_fo_stock">Out of stock</span>
                    </div>

                    <div className="single-product-details">
                      <div className="rating-show justify-content-between text-center">
                        <span className="d-inline-block font-size-sm text-body">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className="tio-star-outlined text-warning"
                            ></i>
                          ))}
                          <label className="badge-style">(0)</label>
                        </span>
                      </div>

                      <div className="text-center">
                        <a href="#" style={{ textDecoration: 'none' }}>Cate Food Sub Sub</a>
                      </div>

                      <div className="text-center d-flex flex-wrap justify-content-center align-items-center gap-2">
                        <span className="text-accent text-dark">$2,000</span>
                        <span
                          className="text-capitalize fw-semibold"
                          style={{
                            fontSize: "9pt",
                            minWidth: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#37B4CC",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            padding: "0 10px",
                          }}
                        >
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <nav
                  className="d-flex justify-content-between pt-2"
                  aria-label="Page navigation"
                  id="paginator-ajax"
                ></nav>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
