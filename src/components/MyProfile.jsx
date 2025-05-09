import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import "../assets/sidebar.css";

const ProfileSection = () => {
  const [image, setImage] = useState(
    "/assets/images/images/1738223142004 (2).png"
  );
  const [firstName, setFirstName] = useState("Payal");
  const [lastName, setLastName] = useState("Sharma");
  const [phone, setPhone] = useState("+9647504768530");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordToggle = () => setIsPasswordVisible(!isPasswordVisible);
  const handleConfirmPasswordToggle = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  const handleDeleteAccount = () => setIsDeleteVisible(!isDeleteVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <section className="profile-section py-5 overflow-hidden">
      <div className="container">
        <div className="profile-inner">
          <div className="row">
            <Sidebar />
            <div className="col-lg-9">
              <h4 className="text-start w-100 mb-3 text-capitalize fw-semibold">
                Profile Information
              </h4>

              <div className="inner-profile border-aliceblue bg-white p-3">
                <div className="text-end d-block">
                  <div
                    className="dropdow-main ms-auto me-0 position-relative cursor-pointer"
                    onClick={handleDeleteAccount}
                  >
                    <div className="dropdown h-100 w-100 rounded-2 position-relative d-flex align-items-center justify-content-center cursor-pointer">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        className="bi bi-three-dots-vertical"
                      >
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      </svg>
                    </div>
                    {isDeleteVisible && (
                      <div className="delete-account bg-white p-3 position-absolute text-start rounded-1">
                        Delete Account
                      </div>
                    )}
                  </div>
                </div>

                <div className="card-inner">
                  <form
                    className="mt-3 px-sm-2 pb-2"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                  >
                    <div className="profile--info mb-4">
                      <div className="position-relative profile-img mb-3">
                        <img
                          id="blah"
                          onError={() =>
                            setImage(
                              "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png"
                            )
                          }
                          src={image}
                          alt=""
                        />
                        <label className="change-profile-icon m-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M7.3125 9.75C7.3125 9.30245 7.49029 8.87323 7.80676 8.55676C8.12323 8.24029 8.55245 8.0625 9 8.0625C9.44755 8.0625 9.87678 8.24029 10.1932 8.55676C10.5097 8.87323 10.6875 9.30245 10.6875 9.75C10.6875 10.1976 10.5097 10.6268 10.1932 10.9432C9.87678 11.2597 9.44755 11.4375 9 11.4375C8.55245 11.4375 8.12323 11.2597 7.80676 10.9432C7.49029 10.6268 7.3125 10.1976 7.3125 9.75Z"
                              fill="white"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.6055 5.7315C5.6055 5.42204 5.66646 5.11561 5.78488 4.82971C5.90331 4.5438 6.07689 4.28402 6.29571 4.0652C6.73764 3.62327 7.33702 3.375 7.962 3.375H10.038C10.663 3.375 11.2624 3.62327 11.7043 4.0652C12.1462 4.50713 12.3945 5.10652 12.3945 5.7315C12.3946 5.73685 12.3967 5.74198 12.4002 5.74597C12.4038 5.74996 12.4087 5.75254 12.414 5.75325L14.0865 5.88825C14.8358 5.94975 15.4515 6.50325 15.5918 7.242C15.9483 9.12636 15.9747 11.0584 15.6698 12.9517L15.597 13.4047C15.5303 13.8198 15.3262 14.2005 15.0176 14.4859C14.7089 14.7713 14.3135 14.9449 13.8945 14.979L12.4373 15.0968C10.1495 15.2826 7.85049 15.2826 5.56275 15.0968L4.1055 14.979C3.6864 14.9449 3.29087 14.7711 2.98221 14.4856C2.67355 14.2 2.4696 13.8192 2.403 13.404L2.33025 12.9517C2.025 11.058 2.052 9.12675 2.40825 7.242C2.47637 6.88276 2.66054 6.55582 2.93247 6.31139C3.20441 6.06697 3.54906 5.91857 3.9135 5.889L5.586 5.75325C5.59144 5.75286 5.59652 5.75038 5.60015 5.74632C5.60379 5.74226 5.60571 5.73695 5.6055 5.7315ZM9 6.9375C8.25408 6.9375 7.53871 7.23382 7.01127 7.76126C6.48382 8.28871 6.1875 9.00408 6.1875 9.75C6.1875 10.4959 6.48382 11.2113 7.01127 11.7387C7.53871 12.2662 8.25408 12.5625 9 12.5625C9.74592 12.5625 10.4613 12.2662 10.9887 11.7387C11.5162 11.2113 11.8125 10.4959 11.8125 9.75C11.8125 9.00408 11.5162 8.28871 10.9887 7.76126C10.4613 7.23382 9.74592 6.9375 9 6.9375Z"
                              fill="white"
                            ></path>
                          </svg>
                          <input
                            id="files"
                            name="image"
                            hidden
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                      <h5 className="text-capitalize text-center">
                        Payal Sharma
                      </h5>
                    </div>
                    <div className="row g-3">
                      <div className="form-group col-md-6 mb-0">
                        <label
                          htmlFor="firstName"
                          className="mb-2 text-capitalize fw-medium"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="f_name"
                          name="f_name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 mb-0">
                        <label
                          htmlFor="lastName"
                          className="mb-2 text-capitalize fw-medium"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="l_name"
                          name="l_name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6 mb-0">
                        <label
                          htmlFor="phone"
                          className="mb-2 text-capitalize fw-medium"
                        >
                          Phone number
                          <small className="text-primary">
                            (* Country code is must like for IQ 964)
                          </small>
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={phone}
                          required
                          readOnly
                        />
                      </div>
                      <div className="form-group col-md-6 mb-0">
                        <label
                          htmlFor="si-password"
                          className="mb-2 text-capitalize fw-medium"
                        >
                          New password
                        </label>
                        <div className="password-toggle rtl position-relative">
                          <input
                            className="form-control"
                            name="password"
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Minimum 8 characters long"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="password-toggle-btn position-absolute top-0 bottom-0 m-auto d-flex align-items-center">
                            <input
                              className="custom-control-input"
                              type="checkbox"
                              style={{ display: "none" }}
                            />
                            <i
                              className="fas fa-eye-slash tio-hidden password-toggle-indicator password"
                              onClick={handlePasswordToggle}
                            ></i>
                            <span className="sr-only">Show password</span>
                          </label>
                        </div>
                      </div>

                      <div className="form-group col-md-6 mb-0">
                        <label
                          htmlFor="newPass"
                          className="mb-2 text-capitalize fw-medium"
                        >
                          Confirm password
                        </label>
                        <div className="password-toggle rtl position-relative">
                          <input
                            className="form-control"
                            name="confirm_password"
                            type={
                              isConfirmPasswordVisible ? "text" : "password"
                            }
                            placeholder="Minimum 8 characters long"
                            id="confirm_password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          <div>
                            <label className="password-toggle-btn position-absolute top-0 bottom-0 m-auto d-flex align-items-center">
                              <input
                                className="custom-control-input"
                                type="checkbox"
                                style={{ display: "none" }}
                              />
                              <i
                                className="fas fa-eye-slash tio-hidden password-toggle-indicator"
                                onClick={handleConfirmPasswordToggle}
                              ></i>
                              <span className="sr-only">Show password</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 text-end d-none d-md-block">
                        <button
                          type="submit"
                          className="btn bg-sky text-white px-5 py-2"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
