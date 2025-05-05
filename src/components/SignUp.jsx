import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    phone: "",
    password: "",
    con_password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and API submission logic here
    console.log(formData);
  };

  return (
    <div className="container py-4 text-left">
      <div className="login-card">
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <h2 className="text-center h4 mb-4 font-bold text-capitalize fs-18-mobile">
            Sign up
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label font-semibold">First name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="f_name"
                    placeholder="Ex: Jhone"
                    required
                    value={formData.f_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label font-semibold">Last name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="l_name"
                    placeholder="Ex: Doe"
                    required
                    value={formData.l_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label font-semibold">
                    Phone number
                    <small className="text-primary">
                      {" "}
                      ( * Country code is must like for IQ 964 )
                    </small>
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">🇮🇶</div>
                    </div>
                    <input
                      className="form-control"
                      type="text"
                      name="phone"
                      placeholder="9647xx xxx xxxx"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label font-semibold">Password</label>
                  <div className="password-toggle rtl">
                    <input
                      className="form-control"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Minimum 8 characters long"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <label className="password-toggle-btn">
                      <i
                        className={`tio-hidden password-toggle-indicator ${
                          showPassword ? "tio-visible" : ""
                        }`}
                        onClick={() => setShowPassword(!showPassword)}
                      ></i>
                      <span className="sr-only">Show password</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label font-semibold">
                    Confirm password
                  </label>
                  <div className="password-toggle rtl">
                    <input
                      className="form-control"
                      name="con_password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Minimum 8 characters long"
                      required
                      value={formData.con_password}
                      onChange={handleChange}
                    />
                    <label className="password-toggle-btn">
                      <i
                        className={`tio-hidden password-toggle-indicator ${
                          showConfirmPassword ? "tio-visible" : ""
                        }`}
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      ></i>
                      <span className="sr-only">Show password</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-3 my-3">
              <div className="col-sm-6">
                <label className="custom-control custom-checkbox m-0 d-flex">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />
                  <span className="custom-control-label">
                    I agree to Your{" "}
                    <a
                      className="font-size-sm"
                      target="_blank"
                      href="https://www.pettime-iq.com/terms"
                      rel="noreferrer"
                    >
                      Terms and conditions
                    </a>
                  </span>
                </label>
              </div>

              <div className="col-sm-6">
                <div
                  id="recaptcha_element"
                  className="w-100"
                  data-type="image"
                ></div>
              </div>
            </div>

            <div style={{ direction: "ltr" }}>
              <div className="mx-auto mt-4" style={{ maxWidth: 356 }}>
                <button className="w-100 btn btn--primary" type="submit">
                  Sign up
                </button>
              </div>

              <div className="text-center m-3 text-black-50">
                <small>Or continue with</small>
              </div>

              <div className="d-flex justify-content-center my-3 gap-2">
                {/* social logins */}
              </div>

              <div className="text-black-50 mt-3 text-center">
                <small>
                  Already have an account?{" "}
                  <a
                    className="text-primary"
                    href="/sign-in"
                  >
                    Sign in
                  </a>
                </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
