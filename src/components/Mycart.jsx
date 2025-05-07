import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/mycart.css";

const ShoppingCart = () => {
  return (
    <>
      <head>
        <title>Firulais Online</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>

      <section className="cart py-5">
        <div className="container">
          <h2 className="mb-3 fw-normal">Shopping cart</h2>
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-8">
              <div className="cart-header py-2 px-4 mb-3">
                <div className="row">
                  <div className="col">
                    <span className="fw-medium">Product</span>
                  </div>
                  <div className="col d-flex justify-content-between">
                    <span className="fw-medium">Unit price</span>
                    <span className="fw-medium">Qty</span>
                    <span className="fw-medium">Total</span>
                  </div>
                </div>
              </div>

              <div className="add-cart py-5 mb-4">
                <div className="inner_wrapper d-flex flex-column justify-content-center text-center py-3">
                  {/* SVG remains unchanged */}
                  {/* Insert SVG Code Here (unchanged) */}
                  <span className="d-inline-block mt-2">
                    Your Cart is Empty!
                  </span>
                </div>
              </div>

              <div className="note_wrapper">
                <label
                  className="w-100 mb-2 text-capitalize"
                  htmlFor="w3review"
                >
                  Order note (Optional)
                </label>
                <textarea
                  className="form-control w-100 border-aliceblue"
                  id="w3review"
                  name="w3review"
                ></textarea>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4">
              <div className="cart-total py-3 px-3 border-aliceblue bg-white">
                <div className="block-price mb-2 d-flex flex-wrap justify-content-between">
                  <span>Sub total</span>
                  <span className="fw-medium">0 IQD</span>
                </div>
                <div className="block-price mb-2 d-flex flex-wrap justify-content-between">
                  <span>Tax</span>
                  <span className="fw-medium">0 IQD</span>
                </div>
                <div className="block-price mb-2 d-flex flex-wrap justify-content-between">
                  <span>Shipping</span>
                  <span className="fw-medium">0 IQD</span>
                </div>
                <div className="block-price mb-2 d-flex flex-wrap justify-content-between">
                  <span>Discount on product</span>
                  <span className="fw-medium">-0 IQD</span>
                </div>
                <hr className="border-aliceblue rounded-0 mt-0 mb-2" />
                <div className="block-price mb-2 d-flex flex-wrap justify-content-between">
                  <span className="fw-medium color-aliceblue">Total</span>
                  <span className="fw-medium">-0 IQD</span>
                </div>

                <div
                  className="row d-flex justify-content-center bottom-sec"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="col text-center p-0">
                    <img
                      src="src/assets/images/images/img1.jpg
                    "
                      alt="an image"
                      style={{height:"26px",width:"40px"}}
                    />
                    <div className="text">
                      Fast Delivery all across the country
                    </div>
                  </div>
                  <div className="col text-center p-0" style={{marginLeft:"10px"}}>
                    <img
                      src="src/assets/images/images/img2.jpg"
                      alt="an image"
                      style={{height:"26px",width:"40px"}}
                    />
                    <div className="text" style={{width:"130px"}}>100% Authentic Products</div>
                  </div>
                  <div className="btn-pannel mt-4">
                    <a className="btn btn-primary w-100 d-block" href="#">
                      Proceed to Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Column */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
