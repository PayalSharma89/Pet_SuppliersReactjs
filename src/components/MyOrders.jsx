import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const TrackOrder = () => {
  const [showModal, setShowModal] = useState(false);
  const [orderData] = useState({
    store: "Pet Paradise",
    status: "Dispatched",
    estimatedTime: "20 mins",
    currentLocation: "Near Sector 21, Noida",
    progress: ["Order Confirmed", "Packed", "Dispatched", "On the way", "Delivered"],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const currentIndex = orderData.progress.indexOf(orderData.status);

  return (
    <>
      <section className="track-order py-5">
        <div className="container">
          <div className="track-inner border-aliceblue rounded-3 bg-white py-5 px-2 text-center">
            <h3 className="w-100 mb-5 text-capitalize fw-normal">Track Order</h3>
            <form onSubmit={handleSubmit}>
              <div className="row mb-5">
                <div className="col-lg-4">
                  <input
                    type="text"
                    className="form-control border-aliceblue py-2 rounded-2"
                    placeholder="Order ID"
                    required
                  />
                </div>
                <div className="col-lg-4">
                  <input
                    type="tel"
                    className="form-control border-aliceblue py-2 rounded-2"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div className="col-lg-4">
                  <button
                    type="submit"
                    className="btn bg-sky text-white py-2 w-100 rounded-2"
                  >
                    Track Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="modal show fade d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order Tracking Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <h6><strong>Store:</strong> {orderData.store}</h6>
                <p><strong>Status:</strong> {orderData.status}</p>
                <p><strong>Estimated Delivery:</strong> {orderData.estimatedTime}</p>
                <p><strong>Current Location:</strong> {orderData.currentLocation}</p>

                {/* Horizontal Progress Tracker */}
                <div className="mt-4">
                  <div className="d-flex justify-content-between align-items-center position-relative" style={{ marginTop: "30px" }}>
                    {orderData.progress.map((stage, index) => {
                      const isCurrent = index === currentIndex;
                      const isComplete = index < currentIndex;

                      return (
                        <div key={index} className="text-center flex-fill position-relative">
                          <div
                            className={`rounded-circle mx-auto mb-2 ${isCurrent ? 'bg-primary' : isComplete ? 'bg-success' : 'bg-secondary'}`}
                            style={{
                              width: "30px",
                              height: "30px",
                              lineHeight: "30px",
                              color: "white",
                              fontWeight: "bold",
                              zIndex: 2,
                            }}
                          >
                            {isComplete ? "✔" : index + 1}
                          </div>
                          <div className="small">{stage}</div>

                          {index < orderData.progress.length - 1 && (
                            <div
                              className={`position-absolute top-50 start-100 translate-middle-y w-100 border-top ${isComplete ? 'border-success' : 'border-secondary'}`}
                              style={{ zIndex: 1 }}
                            ></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrackOrder;
