import React from "react";
import "../assets/sidebar.css";
import Sidebar from "../components/sidebar";

const WishlistSection = () => {
  return (
    <section className="wishlist-section py-5">
      <div className="container">
        <div className="wishlist-inner">
          <div className="row">
            <Sidebar />

            <div className="col-lg-8">
              <h4 className="text-start w-100 mb-3 fw-bold d-flex align-items-center gap-2 text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="red"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 3.905C2.684 8.79 5.177 11.155 8 13.25c2.823-2.095 5.316-4.46 6.286-6.292.955-1.405.838-2.882.314-3.905C13.486.878 10.4.28 8.717 2.01L8 2.748z" />
                </svg>
                Wishlist
              </h4>

              <div className="row bg-white border-aliceblue py-3 px-2">
                <div className="col-lg-4">
                  <div className="inner-block rounded-3 overflow-hidden">
                    <div className="block-image overflow-hidden position-relative rounded-0 ">
                      <img
                        src="src/assets/images/4.jpg"
                        alt="an image"
                      />
                    </div>
                    <div className="content px-3 pb-2">
                      <div className="title mt-3">
                        Royal Canin Urinary Car...
                      </div>
                      <div className="my-2">
                        <span className="price fw-semibold">38,000 IQD</span>
                      </div>
                      <span className="quantity bg-sky text-white rounded-100 py-2 px-2 d-inline-block mt-1 mb-2 ">
                        2kg
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="inner-block rounded-3 overflow-hidden">
                    <div className="block-image overflow-hidden position-relative rounded-0">
                      <img
                        src="src/assets/images/3.webp"
                        alt="an image"
                      />
                    </div>
                    <div className="content px-3 pb-2">
                      <div className="title mt-3">
                        Royal Canin Urinary Car...
                      </div>
                      <div className="my-2">
                        <span className="price fw-semibold">38,000 IQD</span>
                      </div>
                      <span className="quantity bg-sky text-white rounded-100 py-2 px-2 d-inline-block mt-1 mb-2 ">
                        2kg
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="inner-block rounded-3 overflow-hidden">
                    <div className="block-image overflow-hidden position-relative rounded-0">
                      <img
                        src="src/assets/images/2025-04-13-67fc1b579b160.webp"
                        alt="an image"
                      />
                    </div>
                    <div className="content px-3 pb-2">
                      <div className="title mt-3">
                        Royal Canin Urinary Car...
                      </div>
                      <div className="my-2">
                        <span className="price fw-semibold">38,000 IQD</span>
                      </div>
                      <span className="quantity bg-sky text-white rounded-100 py-2 px-2 d-inline-block mt-1 mb-2 ">
                        2kg
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="inner-block rounded-3 overflow-hidden">
                    <div className="block-image overflow-hidden position-relative rounded-0">
                      <img
                        src="src/assets/images/Arrivals3.webp"
                        alt="an image"
                      />
                    </div>
                    <div className="content px-3 pb-2">
                      <div className="title mt-3">
                        Royal Canin Urinary Car...
                      </div>
                      <div className="my-2">
                        <span className="price fw-semibold">38,000 IQD</span>
                      </div>
                      <span className="quantity bg-sky text-white rounded-100 py-2 px-2 d-inline-block mt-1 mb-2 ">
                        2kg
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishlistSection;
