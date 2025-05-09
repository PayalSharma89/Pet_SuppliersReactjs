import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="container py-4 text-left">
      <div className="login-card">
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <h2 className="text-center h4 mb-4 font-bold text-capitalize fs-18-mobile">
            Login
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Phone input */}
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

              {/* Password input */}
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label font-semibold">Password</label>
                  <div className="password-toggle rtl">
                    <input
                      className="form-control"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Minimum 8 characters"
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
            </div>

            {/* Forgot Password Link */}
            <div className="row my-3">
              <div className="col-sm-6">
                <Link
                  to="/forgot"
                  className="text-decoration-none text-primary font-size-sm"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div style={{ direction: "ltr" }}>
              <div className="mx-auto mt-4" style={{ maxWidth: 356 }}>
                <button className="w-100 btn btn--primary" type="submit">
                  Log In
                </button>
              </div>

              <div className="text-center m-3 text-black-50">
                <small>Or continue with</small>
              </div>

              <div className="d-flex justify-content-center my-3 gap-2">
                {/* Social login buttons */}
              </div>

              <div className="text-black-50 mt-3 text-center">
                <small>
                  Enjoy New experience?{" "}
                  <Link className="text-primary" to="/sign-up">
                    Sign up
                  </Link>
                </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     phone: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login submitted:", formData);
//   };

//   return (
//     <div className="container py-4 text-left">
//       <div className="login-card">
//         <div className="mx-auto" style={{ maxWidth: 760 }}>
//           <h2 className="text-center h4 mb-4 font-bold text-capitalize fs-18-mobile">
//             Login
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div className="row">
//               {/* Phone input */}
//               <div className="col-sm-6">
//                 <div className="form-group">
//                   <label className="form-label font-semibold">
//                     Phone number
//                     <small className="text-primary">
//                       {" "}
//                       ( * Country code is must like for IQ 964 )
//                     </small>
//                   </label>
//                   <div className="input-group">
//                     <div className="input-group-prepend">
//                       <div className="input-group-text">🇮🇶</div>
//                     </div>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="phone"
//                       placeholder="9647xx xxx xxxx"
//                       required
//                       value={formData.phone}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Password input */}
//               <div className="col-sm-6">
//                 <div className="form-group">
//                   <label className="form-label font-semibold">Password</label>
//                   <div className="password-toggle rtl">
//                     <input
//                       className="form-control"
//                       name="password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Minimum 8 characters"
//                       required
//                       value={formData.password}
//                       onChange={handleChange}
//                     />
//                     <label className="password-toggle-btn">
//                       <i
//                         className={`tio-hidden password-toggle-indicator ${
//                           showPassword ? "tio-visible" : ""
//                         }`}
//                         onClick={() => setShowPassword(!showPassword)}
//                       ></i>
//                       <span className="sr-only">Show password</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Forgot Password Link */}
//             <div className="row my-3">
//               <div className="col-sm-6">
//                 <a
//                   href="/forgot"
//                   className="text-decoration-none text-primary font-size-sm"
//                 >
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             <div style={{ direction: "ltr" }}>
//               <div className="mx-auto mt-4" style={{ maxWidth: 356 }}>
//                 <button className="w-100 btn btn--primary" type="submit">
//                   Log In
//                 </button>
//               </div>

//               <div className="text-center m-3 text-black-50">
//                 <small>Or continue with</small>
//               </div>

//               <div className="d-flex justify-content-center my-3 gap-2">
//                 {/* Social login buttons */}
//               </div>

//               <div className="text-black-50 mt-3 text-center">
//                 <small>
//                   Enjoy New experience?{" "}
//                   <a className="text-primary" href="/sign-up">
//                     Sign up
//                   </a>
//                 </small>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
