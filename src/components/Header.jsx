import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "../../public/assets/home.css";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <header className="box-shadow-sm rtl __inline-10">
      {/* ...existing topbar and logo content */}

      <div className="navbar-sticky bg-light mobile-head">
        <div className="navbar navbar-expand-md navbar-light">
          <div className="container">
            {/* Logo (Desktop) */}
            <Link
              className="navbar-brand d-none d-sm-block mr-3 flex-shrink-0 __min-w-7rem"
              to="/"
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#37b4cc",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                letterSpacing: "1px",
                textDecoration: "none",
                textShadow: "1px 1px 2px rgba(55, 180, 204, 0.3)",
                lineHeight: "1",
              }}
            >
              Firulais Online
            </Link>

            {/* Logo (Mobile) */}
            <Link className="navbar-brand d-sm-none" to="/">
              <img
                className="mobile-logo-img __inline-12"
                src="https://six.valley.new.zeroitsolutions.com/storage/app/public/company/2021-02-20-6030c88c91911.png"
                onError={(e) =>
                  (e.target.src =
                    "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
                }
                alt="Firulais"
              />
            </Link>

            {/* Toolbar */}
            <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
              {/* Wishlist */}
              <div className="navbar-tool dropdown d-none d-md-block ml-md-3">
                <Link
                  className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                  to="/wishlist"
                >
                  <span className="navbar-tool-label">
                    <span className="countWishlist">0</span>
                  </span>
                  <i className="navbar-tool-icon czi-heart"></i>
                </Link>
              </div>

              {/* Auth Dropdown */}
              <div className="dropdown">
                <a
                  className="navbar-tool ml-md-3"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="navbar-tool-icon-box bg-secondary">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.25 4.41675C4.25 6.48425 5.9325 8.16675 8 8.16675C10.0675 8.16675 11.75 6.48425 11.75 4.41675C11.75 2.34925 10.0675 0.666748 8 0.666748C5.9325 0.666748 4.25 2.34925 4.25 4.41675ZM14.6667 16.5001H15.5V15.6667C15.5 12.4509 12.8825 9.83341 9.66667 9.83341H6.33333C3.11667 9.83341 0.5 12.4509 0.5 15.6667V16.5001H14.6667Z"
                        fill="#1B7FED"
                      />
                    </svg>
                  </div>
                </a>
                <div
                  className="dropdown-menu __auth-dropdown dropdown-menu-right"
                  style={{ textAlign: "left" }}
                >
                  <Link className="dropdown-item" to="/sign-in">
                    <i className="fa fa-sign-in mr-2"></i> Sign in
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/sign-up">
                    <i className="fa fa-user-circle mr-2"></i>
                    Sign up
                  </Link>
                </div>
              </div>

              {/* Cart */}
              <div id="cart_items">
                <div
                  className="navbar-tool dropdown ml-md-3"
                  style={{ marginRight: "6px" }}
                >
                  <a
                    className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                    href="#"
                  >
                    <span className="navbar-tool-label">0</span>
                    <i className="navbar-tool-icon czi-cart"></i>
                  </a>
                  <Link className="navbar-tool-text ml-2" to="/my-cart">
                    <small>My cart</small> $0
                  </Link>
                  {/* ...Cart dropdown */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React, { useState } from "react";
// import "../../public/assets/home.css";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   return (
//     <header className="box-shadow-sm rtl __inline-10">
//       <div className="topbar">
//         <div className="container">
//         </div>
//       </div>

//       <div className="navbar-sticky bg-light mobile-head">
//         <div className="navbar navbar-expand-md navbar-light">
//           <div className="container">
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarCollapse"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             {/* Website name for large screens */}
//             <a
//               className="navbar-brand d-none d-sm-block mr-3 flex-shrink-0 __min-w-7rem"
//               href="/"
//               style={{
//                 fontSize: "32px",
//                 fontWeight: "bold",
//                 color: "#37b4cc",
//                 fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//                 letterSpacing: "1px",
//                 textDecoration: "none",
//                 textShadow: "1px 1px 2px rgba(55, 180, 204, 0.3)",
//                 lineHeight: "1",
//               }}
//             >
//               Firulais Online
//             </a>

//             {/* Logo for mobile */}
//             <a
//               className="navbar-brand d-sm-none"
//               href="https://six.valley.new.zeroitsolutions.com"
//             >
//               <img
//                 className="mobile-logo-img __inline-12"
//                 src="https://six.valley.new.zeroitsolutions.com/storage/app/public/company/2021-02-20-6030c88c91911.png"
//                 onError={(e) =>
//                   (e.target.src =
//                     "https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/image-place-holder.png")
//                 }
//                 alt="TestShop"
//               />
//             </a>

//             {/* Search Bar */}
//             <div
//               className="input-group-overlay mx-lg-4 search-form-mobile"
//               style={{ textAlign: "left" }}
//             >
//               <div className="d-lg-none" style={{ textAlign: "right" }}>
//                 <button className="btn close-search-form-mobile">
//                   <i className="tio-clear"></i>
//                 </button>
//               </div>
//               <form action="#" className="search_form">
//                 <input
//                   className="form-control appended-form-control search-bar-input"
//                   type="text"
//                   autoComplete="off"
//                   placeholder="Search here..."
//                   name="name"
//                 />
//                 <button
//                   className="input-group-append-overlay search_button"
//                   type="submit"
//                   style={{
//                     borderRadius: "0px 7px 7px 0px",
//                     left: "unset",
//                     right: "0",
//                     top: "0",
//                   }}
//                 >
//                   <span className="input-group-text __text-20px">
//                     <i className="czi-search text-white"></i>
//                   </span>
//                 </button>
//                 <input name="data_from" value="search" hidden />
//                 <input name="page" value="1" hidden />
//                 {/* <div className="card search-card __inline-13"> */}
//                 {/* <div className="card-body search-result-box __h-400px overflow-x-hidden overflow-y-auto"></div> */}
//                 {/* </div> */}
//               </form>
//             </div>

//             {/* Toolbar */}
//             <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
//               <a className="navbar-tool navbar-stuck-toggler" href="#">
//                 <span className="navbar-tool-tooltip">Expand Menu</span>
//                 <div className="navbar-tool-icon-box">
//                   <i className="navbar-tool-icon czi-menu open-icon"></i>
//                   <i className="navbar-tool-icon czi-close close-icon"></i>
//                 </div>
//               </a>

//               <div className="navbar-tool open-search-form-mobile d-lg-none ml-md-3">
//                 <a className="navbar-tool-icon-box bg-secondary" href="#0">
//                   <i className="tio-search"></i>
//                 </a>
//               </div>

//               {/* Wishlist */}
//               <div className="navbar-tool dropdown d-none d-md-block ml-md-3">
//                 <a
//                   className="navbar-tool-icon-box bg-secondary dropdown-toggle"
//                   href="/wishlist"
//                 >
//                   <span className="navbar-tool-label">
//                     <span className="countWishlist">0</span>
//                   </span>
//                   <i className="navbar-tool-icon czi-heart"></i>
//                 </a>
//               </div>

//               {/* Auth dropdown */}
//               <div className="dropdown">
//                 <a
//                   className="navbar-tool ml-md-3"
//                   type="button"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   <div className="navbar-tool-icon-box bg-secondary">
//                     {/* SVG icon */}
//                     <svg
//                       width="16"
//                       height="17"
//                       viewBox="0 0 16 17"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M4.25 4.41675C4.25 6.48425 5.9325 8.16675 8 8.16675C10.0675 8.16675 11.75 6.48425 11.75 4.41675C11.75 2.34925 10.0675 0.666748 8 0.666748C5.9325 0.666748 4.25 2.34925 4.25 4.41675ZM14.6667 16.5001H15.5V15.6667C15.5 12.4509 12.8825 9.83341 9.66667 9.83341H6.33333C3.11667 9.83341 0.5 12.4509 0.5 15.6667V16.5001H14.6667Z"
//                         fill="#1B7FED"
//                       />
//                     </svg>
//                   </div>
//                 </a>
//                 <div
//                   className="dropdown-menu __auth-dropdown dropdown-menu-right"
//                   style={{ textAlign: "left" }}
//                 >
//                   <a className="dropdown-item" href="/sign-in">
//                     <i className="fa fa-sign-in mr-2"></i> Sign in
//                   </a>
//                   <div className="dropdown-divider"></div>
//                   <a className="dropdown-item" href="/sign-up">
//                     <i className="fa fa-user-circle mr-2"></i>
//                     Sign up
//                   </a>
//                 </div>
//               </div>

//               {/* Cart dropdown */}
//               <div id="cart_items">
//                 <div
//                   className="navbar-tool dropdown ml-md-3"
//                   style={{ marginRight: "6px" }}
//                 >
//                   <a
//                     className="navbar-tool-icon-box bg-secondary dropdown-toggle"
//                     href="#"
//                   >
//                     <span className="navbar-tool-label">0</span>
//                     <i className="navbar-tool-icon czi-cart"></i>
//                   </a>
//                   <a className="navbar-tool-text ml-2" href="/my-cart">
//                     <small>My cart</small> $0
//                   </a>
//                   <div className="dropdown-menu dropdown-menu-right __w-20rem cart-dropdown py-0">
//                     <div className="widget widget-cart px-3 pt-2 pb-3">
//                       <div className="widget-cart-top rounded">
//                         <h6 className="m-0">
//                           <span className="text-capitalize">Shopping cart</span>
//                         </h6>
//                       </div>
//                       <div className="widget-cart-item">
//                         <div className="text-center text-capitalize">
//                           <img className="mb-3 mw-100" src="#" alt="" />
//                           <p className="text-capitalize">Your Cart is Empty!</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* End Toolbar */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
