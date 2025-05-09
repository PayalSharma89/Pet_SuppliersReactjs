import React from "react";
import { Link } from "react-router-dom";
import "../assets/sidebar.css";

const Sidebar = () => {
  return (
    <div className="col-lg-3">
      <div className="left-sidebar p-3 rounded-2 bg-white border-aliceblue position-sticky top-0">
        <ul className="d-flex flex-column list-unstyled">
          {/* Profile Info */}
          <li className="p-2">
            <Link
              className="text-decoration-none d-flex align-items-center gap-2"
              to="/profile"  // Replace href with to for Link
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_776_10768)">
                  <path
                    d="M10 0.0005C4.478 0.0005 0 4.4773 0 10C0 15.5228 4.4773 20 10 20C15.5231 20 20 15.5228 20 10C20 4.4773 15.5231 0.0005 10 0.0005ZM10 2.9905C11.8273 2.9905 13.308 4.4716 13.308 6.298C13.308 8.1249 11.8273 9.6056 10 9.6056C8.1736 9.6056 6.6929 8.1249 6.6929 6.298C6.6929 4.4716 8.1736 2.9905 10 2.9905ZM10 17.3852C8.1754 17.3852 6.5062 16.7215 5.2188 15.6229C4.9051 15.3554 4.7242 14.9632 4.7242 14.5516C4.7242 12.6992 6.2233 11.2168 8.0761 11.2168H11.9248C13.778 11.2168 15.2715 12.6992 15.2715 14.5516C15.2715 14.9636 15.0914 15.355 14.7773 15.6225C13.4903 16.7215 11.8207 17.3852 10 17.3852Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_776_10768">
                    <rect width="20" height="20" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
              <span>My Profile</span>
            </Link>
          </li>

          {/* My Order */}
          <li className="p-2">
            <Link
              className="text-decoration-none d-flex align-items-center gap-2"
              to="/orders"  // Replace href with to for Link
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2917 2.49984V18.3332C17.2917 18.5648 17.1633 18.7773 16.9583 18.8857C16.7533 18.994 16.5058 18.9798 16.3142 18.849L14.235 17.4298L12.2692 18.8407C12.0333 19.0107 11.7117 18.9948 11.4933 18.8032L10 17.4973L8.50666 18.8032C8.28833 18.9948 7.96666 19.0107 7.73083 18.8407L5.765 17.4298L3.68583 18.849C3.49416 18.9798 3.24666 18.994 3.04166 18.8857C2.83666 18.7773 2.70833 18.5648 2.70833 18.3332V2.49984C2.70833 1.69484 3.36083 1.0415 4.16666 1.0415H15.8333C16.6392 1.0415 17.2917 1.69484 17.2917 2.49984ZM6.66666 8.95817H13.3333C13.6783 8.95817 13.9583 8.67817 13.9583 8.33317C13.9583 7.98817 13.6783 7.70817 13.3333 7.70817H6.66666C6.32166 7.70817 6.04166 7.98817 6.04166 8.33317C6.04166 8.67817 6.32166 8.95817 6.66666 8.95817ZM6.66666 5.62484H13.3333C13.6783 5.62484 13.9583 5.34484 13.9583 4.99984C13.9583 4.65484 13.6783 4.37484 13.3333 4.37484H6.66666C6.32166 4.37484 6.04166 4.65484 6.04166 4.99984C6.04166 5.34484 6.32166 5.62484 6.66666 5.62484ZM6.66666 12.2915H10C10.345 12.2915 10.625 12.0115 10.625 11.6665C10.625 11.3215 10.345 11.0415 10 11.0415H6.66666C6.32166 11.0415 6.04166 11.3215 6.04166 11.6665C6.04166 12.0115 6.32166 12.2915 6.66666 12.2915Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              <span>My Order</span>
            </Link>
          </li>

          {/* Wish List */}
          <li className="p-2">
            <Link
              className="text-decoration-none d-flex align-items-center gap-2"
              to="/wishlist"  // Replace href with to for Link
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_776_10778)">
                  <path
                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15.3906 8.88909C15.243 9.72854 14.9023 10.4907 14.4418 11.2C13.8281 12.1457 13.0445 12.9297 12.1676 13.6293C11.6519 14.037 11.1127 14.414 10.5527 14.7582C10.2012 14.975 9.83984 14.9965 9.48711 14.7817C8.50508 14.1836 7.58594 13.5024 6.7707 12.6871C6.16992 12.086 5.65 11.4227 5.24414 10.6739C4.79883 9.85354 4.52539 8.97932 4.53125 8.03909C4.5375 7.06643 4.93281 6.27112 5.70625 5.67542C6.2832 5.23128 6.94336 5.03518 7.66797 5.07229C8.28008 5.10354 8.81602 5.35081 9.30039 5.70862C9.53125 5.87932 9.9832 6.28675 9.99063 6.29456C10.1859 6.12776 10.3723 5.95745 10.5707 5.80315C11.0215 5.45159 11.5141 5.18557 12.0875 5.10276C12.8895 4.98557 13.6191 5.18089 14.268 5.65823C14.8547 6.08251 15.2601 6.71219 15.4035 7.4219C15.5078 7.91018 15.475 8.4012 15.3906 8.88909Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_776_10778">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>{" "}
              <span>Wish List</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


// import React from "react";
// import "../assets/sidebar.css";


// const Sidebar = () => {
//   return (
//     <div className="col-lg-3">
//       <div className="left-sidebar p-3 rounded-2 bg-white border-aliceblue position-sticky top-0">
//         <ul className="d-flex flex-column list-unstyled">
//           {/* Profile Info */}
//           <li className="p-2">
//             <a
//               className="text-decoration-none d-flex align-items-center gap-2"
//               href="/profile"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//               >
//                 <g clipPath="url(#clip0_776_10768)">
//                   <path
//                     d="M10 0.0005C4.478 0.0005 0 4.4773 0 10C0 15.5228 4.4773 20 10 20C15.5231 20 20 15.5228 20 10C20 4.4773 15.5231 0.0005 10 0.0005ZM10 2.9905C11.8273 2.9905 13.308 4.4716 13.308 6.298C13.308 8.1249 11.8273 9.6056 10 9.6056C8.1736 9.6056 6.6929 8.1249 6.6929 6.298C6.6929 4.4716 8.1736 2.9905 10 2.9905ZM10 17.3852C8.1754 17.3852 6.5062 16.7215 5.2188 15.6229C4.9051 15.3554 4.7242 14.9632 4.7242 14.5516C4.7242 12.6992 6.2233 11.2168 8.0761 11.2168H11.9248C13.778 11.2168 15.2715 12.6992 15.2715 14.5516C15.2715 14.9636 15.0914 15.355 14.7773 15.6225C13.4903 16.7215 11.8207 17.3852 10 17.3852Z"
//                     fill="currentColor"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_776_10768">
//                     <rect width="20" height="20" fill="currentColor" />
//                   </clipPath>
//                 </defs>
//               </svg>
//               <span>My Profile</span>
//             </a>
//           </li>

//           {/* My Order */}
//           <li className="p-2">
//             <a
//               className="text-decoration-none d-flex align-items-center gap-2"
//               href="/orders"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M17.2917 2.49984V18.3332C17.2917 18.5648 17.1633 18.7773 16.9583 18.8857C16.7533 18.994 16.5058 18.9798 16.3142 18.849L14.235 17.4298L12.2692 18.8407C12.0333 19.0107 11.7117 18.9948 11.4933 18.8032L10 17.4973L8.50666 18.8032C8.28833 18.9948 7.96666 19.0107 7.73083 18.8407L5.765 17.4298L3.68583 18.849C3.49416 18.9798 3.24666 18.994 3.04166 18.8857C2.83666 18.7773 2.70833 18.5648 2.70833 18.3332V2.49984C2.70833 1.69484 3.36083 1.0415 4.16666 1.0415H15.8333C16.6392 1.0415 17.2917 1.69484 17.2917 2.49984ZM6.66666 8.95817H13.3333C13.6783 8.95817 13.9583 8.67817 13.9583 8.33317C13.9583 7.98817 13.6783 7.70817 13.3333 7.70817H6.66666C6.32166 7.70817 6.04166 7.98817 6.04166 8.33317C6.04166 8.67817 6.32166 8.95817 6.66666 8.95817ZM6.66666 5.62484H13.3333C13.6783 5.62484 13.9583 5.34484 13.9583 4.99984C13.9583 4.65484 13.6783 4.37484 13.3333 4.37484H6.66666C6.32166 4.37484 6.04166 4.65484 6.04166 4.99984C6.04166 5.34484 6.32166 5.62484 6.66666 5.62484ZM6.66666 12.2915H10C10.345 12.2915 10.625 12.0115 10.625 11.6665C10.625 11.3215 10.345 11.0415 10 11.0415H6.66666C6.32166 11.0415 6.04166 11.3215 6.04166 11.6665C6.04166 12.0115 6.32166 12.2915 6.66666 12.2915Z"
//                   fill="currentColor"
//                 ></path>
//               </svg>{" "}
//               <span>My Order</span>
//             </a>
//           </li>

//           {/* Wish List */}
//           <li className="p-2">
//             <a
//               className="text-decoration-none d-flex align-items-center gap-2"
//               href="/wishlist"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//               >
//                 <g clip-path="url(#clip0_776_10778)">
//                   <path
//                     d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M15.3906 8.88909C15.243 9.72854 14.9023 10.4907 14.4418 11.2C13.8281 12.1457 13.0445 12.9297 12.1676 13.6293C11.6519 14.037 11.1127 14.414 10.5527 14.7582C10.2012 14.975 9.83984 14.9965 9.48711 14.7817C8.50508 14.1836 7.58594 13.5024 6.7707 12.6871C6.16992 12.086 5.65 11.4227 5.24414 10.6739C4.79883 9.85354 4.52539 8.97932 4.53125 8.03909C4.5375 7.06643 4.93281 6.27112 5.70625 5.67542C6.2832 5.23128 6.94336 5.03518 7.66797 5.07229C8.28008 5.10354 8.81602 5.35081 9.30039 5.70862C9.53125 5.87932 9.9832 6.28675 9.99063 6.29456C10.1859 6.12776 10.3723 5.95745 10.5707 5.80315C11.0215 5.45159 11.5141 5.18557 12.0875 5.10276C12.8895 4.98557 13.6191 5.18089 14.268 5.65823C14.8547 6.08251 15.2601 6.71219 15.4035 7.4219C15.5078 7.91018 15.475 8.4012 15.3906 8.88909Z"
//                     fill="white"
//                   ></path>
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_776_10778">
//                     <rect width="20" height="20" fill="white"></rect>
//                   </clipPath>
//                 </defs>
//               </svg>{" "}
//               <span>Wish List</span>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
