import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card p-4 shadow-lg border-0"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <h4 className="text-center mb-4 fw-bold">Login</h4>

        <form onSubmit={handleSubmit}>
          {/* Phone */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-semibold">
              Phone Number
            </label>
            <div className="input-group">
              <span className="input-group-text">🇮🇶</span>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="9647xx xxx xxxx"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="form-control"
                placeholder="Minimum 8 characters"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <div className="form-text text-muted">
              Password must be 8+ characters
            </div>
          </div>

          {/* Forgot password */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <a
              href="/forgot"
              className="text-decoration-none text-primary"
            >
              Forgot password?
            </a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="btn w-100 fw-semibold"
            style={{ backgroundColor: "#262d34", borderColor: "#262d34" , color:"white" }}
          >
            Log In
          </button>

          {/* Or continue with */}
          <div className="text-center my-3 text-muted">
            <small>Or continue with</small>
          </div>

          {/* Social login placeholder */}
          <div className="d-flex justify-content-center gap-2 mb-3">
            {/* Example: <button className="btn btn-outline-dark btn-sm">Google</button> */}
          </div>

          {/* Sign up link */}
          <div className="text-center text-muted">
            <small>
              Enjoy New experience?{" "}
              <a
                href="/sign-up"
                className="text-primary"
              >
                Sign up
              </a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
