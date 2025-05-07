import React from 'react';
import '../assets/sellings.css';
import { FaStar } from 'react-icons/fa';

function SellingSection() {
    // Best selling products data
    const bestSellingProducts = [
        {
            id: 1,
            name: "AK Cat Litter Scent with",
            price: "$10,000 IQD",
            unit: "10L",
            imageSrc: "src/assets/images/sellings1.webp"
        },
        {
            id: 2,
            name: "AK Cat Litter Scent with ",
            price: "$9",
            unit: "kg",
            imageSrc: "src/assets/images/sellings2.webp"
        },
        {
            id: 3,
            name: "Treat Mix-Tuna &",
            price: "$200",
            unit: "kg",
            imageSrc: "src/assets/images/sellings3.webp"
        },
        {
            id: 4,
            name: "Bonacibo Adult Chicken",
            price: "$5,000",
            unit: "kg",
            imageSrc: "src/assets/images/sellings4.webp"
        },
        {
            id: 5,
            name: "BonaCibo Cat Stick with",
            price: "$3,000",
            unit: "kg",
            imageSrc: "src/assets/images/sellings5.webp"
        },
        {
            id: 6,
            name: "Happy Cat Minkas",
            price: "$3,000",
            unit: "kg",
            imageSrc: "src/assets/images/sellings6.webp"
        }
    ];

    // Top rated products data
    const topRatedProducts = [
        {
            id: 1,
            name: "Chuck Kitten Chicken",
            price: "$3,000",
            unit: "kg",
            rating: 5,
            imageSrc: "src/assets/images/rate1.webp"
        },
        {
            id: 2,
            name: "Croque Chicken For",
            price: "$3,000",
            unit: "kg",
            rating: 5,
            imageSrc: "src/assets/images/rate2.webp"
        },
        {
            id: 3,
            name: "Treat Mix-Tuna &",
            price: "$3,000",
            unit: "kg",
            rating: 5,
            imageSrc: "src/assets/images/rate3.webp"
        },
        {
            id: 4,
            name: "Royal Canin Hairball",
            price: "$3,000",
            unit: "kg",
            rating: 5,
            imageSrc: "src/assets/images/rate4.webp"
        },
        {
            id: 5,
            name: "Royal Canin Mother &",
            price: "$3,000",
            unit: "kg",
            rating: 5,
            imageSrc: "src/assets/images/rate5.webp"
        },
        {
            id: 6,
            name: "Royal Canin Hair & Skin",
            price: "$3,000",
            unit: "kg",
            rating: 5,
            imageSrc: "src/assets/images/rate6.webp"
        }
    ];

    // Unit badge style - extracted as a reusable constant
    const unitBadgeStyle = {
        fontSize: '9pt',
        display: 'inline-block',
        minWidth: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: '#37b4cc',
        color: '#FFFFFF',
        textAlign: 'center',
        lineHeight: '30px',
        padding: '0 10px',
    };

    // Render product item
    const renderProductItem = (product, isTopRated = false) => (
        <div className="col-sm-6" key={product.id}>
            <a
                className="__best-selling"
                href="#product/dog-food-p2-6u1zvF"
                style={{ textDecoration: 'none' }}
            >
                <div className="d-flex flex-wrap">
                    <div className={isTopRated ? "top-rated-image" : "best-selleing-image"}>
                        <img
                            className="rounded"
                            onError={(e) => {
                                e.target.src =
                                    '#public/assets/front-end/img/image-place-holder.png';
                            }}
                            src={product.imageSrc}
                            alt="Product"
                        />
                    </div>
                    <div className={isTopRated ? "top-rated-details" : "best-selling-details"}>
                        <h6 className="widget-product-title">
                            <span className="ptr fw-semibold">{product.name}</span>
                        </h6>

                        {/* Rating Stars (only for top rated products) */}
                        {isTopRated && (
                            <div className="d-flex align-items-center mb-1">
                                {[...Array(product.rating)].map((_, i) => (
                                    <FaStar key={i} color="#FFC107" size={14} />
                                ))}
                            </div>
                        )}

                        {/* Price */}
                        <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0 mb-1">
                            <span></span>
                            <span className="text-accent text-dark">{product.price}</span>
                        </div>

                        {/* Unit Badge */}
                        <div>
                            <span
                                className="text-capitalize fw-semibold"
                                style={unitBadgeStyle}
                            >
                                {product.unit}
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );

    return (
        <div className="container rtl px-0 px-md-3">
            <div className="row g-3 mx-max-md-0">
                {/* Best Selling Product */}
                <div className="col-lg-6 px-max-md-0">
                    <div className="card card __shadow h-100">
                        <div className="card-body p-xl-35">
                            <div className="row d-flex justify-content-between mx-1 mb-3">
                                <div>
                                    <img
                                        className="size-30"
                                        src="#public/assets/front-end/png/best sellings.png"
                                        alt=""
                                    />
                                    <span className="font-bold pl-1">Best sellings</span>
                                </div>
                                <div>
                                    <a
                                        className="text-capitalize view-all-text"
                                        style={{ color: '#37b4cc' ,textDecoration:"none"}}
                                        href="#"
                                    >
                                        View all
                                        <i className="czi-arrow-right ml-1 mr-n1"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="row g-3">
                                {bestSellingProducts.map(product => renderProductItem(product))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Rated Product */}
                <div className="col-lg-6 px-max-md-0">
                    <div className="card card __shadow h-100">
                        <div className="card-body p-xl-35">
                            <div className="row d-flex justify-content-between mx-1 mb-3">
                                <div>
                                    <img
                                        className="size-30"
                                        src="#public/assets/front-end/png/top-rated.png"
                                        alt=""
                                    />
                                    <span className="font-bold pl-1">Top rated</span>
                                </div>
                                <div>
                                    <a
                                        className="text-capitalize view-all-text"
                                        style={{ color: '#37b4cc' ,textDecoration:"none"}}
                                        href="#products?data_from=top-rated&page=1"
                                    >
                                        View all
                                        <i className="czi-arrow-right ml-1 mr-n1"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="row g-3">
                                {topRatedProducts.map(product => renderProductItem(product, true))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellingSection;




// import React from 'react';
// import '../assets/sellings.css'
// import { FaStar } from 'react-icons/fa';

// function SellingSection() {
//     return (

//         <div className="container rtl px-0 px-md-3">
//             <div className="row g-3 mx-max-md-0">
//                 {/* Best Selling Product */}
//                 <div className="col-lg-6 px-max-md-0">
//                     <div className="card card __shadow h-100">
//                         <div className="card-body p-xl-35">
//                             <div className="row d-flex justify-content-between mx-1 mb-3">
//                                 <div>
//                                     <img
//                                         className="size-30"
//                                         src="#public/assets/front-end/png/best sellings.png"
//                                         alt=""
//                                     />
//                                     <span className="font-bold pl-1">Best sellings</span>
//                                 </div>
//                                 <div>
//                                     <a
//                                         className="text-capitalize view-all-text"
//                                         style={{ color: '#37b4cc' }}
//                                         href="#"
//                                     >
//                                         View all
//                                         <i className="czi-arrow-right ml-1 mr-n1"></i>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="row g-3">
//                                 <div className="col-sm-6">
//                                     <a
//                                         className="__best-selling"
//                                         href="#product/dog-food-p2-6u1zvF"
//                                     >
//                                         <div className="d-flex flex-wrap">
//                                             <div className="best-selleing-image">
//                                                 <img
//                                                     className="rounded"
//                                                     onError={(e) => {
//                                                         e.target.src =
//                                                             'src/assets/images/sellings1.webp';
//                                                     }}
//                                                     src="#storage/app/public/product/thumbnail/2023-12-13-65792d34a9dec.webp"
//                                                     alt="Product"
//                                                 />
//                                             </div>
//                                             <div className="best-selling-details">
//                                                 <h6 className="widget-product-title">
//                                                     <span className="ptr fw-semibold"> AK Cat Litter Scent</span>
//                                                 </h6>
//                                                 <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0">
//                                                     <span></span>
//                                                     <span className="text-accent text-dark">$10,000 IQD</span>
//                                                 </div>
//                                                 <div>
//                                                     <span
//                                                         className="text-capitalize fw-semibold"
//                                                         style={{
//                                                             fontSize: '9pt',
//                                                             display: 'inline-block',
//                                                             minWidth: '30px',
//                                                             height: '30px',
//                                                             borderRadius: '50%',
//                                                             backgroundColor: '#37b4cc',
//                                                             color: '#FFFFFF',
//                                                             textAlign: 'center',
//                                                             lineHeight: '30px',
//                                                             padding: '0 10px',
//                                                         }}
//                                                     >
//                                                         10L
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>
//                                 <div className="col-sm-6">
//                                     <a
//                                         className="__best-selling"
//                                         href="#product/dog-food-p2-6u1zvF"
//                                     >
//                                         <div className="d-flex flex-wrap">
//                                             <div className="best-selleing-image">
//                                                 <img
//                                                     className="rounded"
//                                                     onError={(e) => {
//                                                         e.target.src =
//                                                             '#public/assets/front-end/img/image-place-holder.png';
//                                                     }}
//                                                     src="src/assets/images/sellings2.webp"
//                                                     alt="Product"
//                                                 />
//                                             </div>
//                                             <div className="best-selling-details">
//                                                 <h6 className="widget-product-title">
//                                                     <span className="ptr fw-semibold">Rose</span>
//                                                 </h6>
//                                                 <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0">
//                                                     <span></span>
//                                                     <span className="text-accent text-dark">$9</span>
//                                                 </div>
//                                                 <div>
//                                                     <span
//                                                         className="text-capitalize fw-semibold"
//                                                         style={{
//                                                             fontSize: '9pt',
//                                                             display: 'inline-block',
//                                                             minWidth: '30px',
//                                                             height: '30px',
//                                                             borderRadius: '50%',
//                                                             backgroundColor: '#37b4cc',
//                                                             color: '#FFFFFF',
//                                                             textAlign: 'center',
//                                                             lineHeight: '30px',
//                                                             padding: '0 10px',
//                                                         }}
//                                                     >
//                                                         kg
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>
//                                 <div className="col-sm-6">
//                                     <a
//                                         className="__best-selling"
//                                         href="#product/dog-food-p2-6u1zvF"
//                                     >
//                                         <div className="d-flex flex-wrap">
//                                             <div className="best-selleing-image">
//                                                 <img
//                                                     className="rounded"
//                                                     onError={(e) => {
//                                                         e.target.src =
//                                                             '#public/assets/front-end/img/image-place-holder.png';
//                                                     }}
//                                                     src="src/assets/images/sellings3.webp"
//                                                     alt="Product"
//                                                 />
//                                             </div>
//                                             <div className="best-selling-details">
//                                                 <h6 className="widget-product-title">
//                                                     <span className="ptr fw-semibold">Rose Flower</span>
//                                                 </h6>
//                                                 <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0">
//                                                     <span></span>
//                                                     <span className="text-accent text-dark">$200</span>
//                                                 </div>
//                                                 <div>
//                                                     <span
//                                                         className="text-capitalize fw-semibold"
//                                                         style={{
//                                                             fontSize: '9pt',
//                                                             display: 'inline-block',
//                                                             minWidth: '30px',
//                                                             height: '30px',
//                                                             borderRadius: '50%',
//                                                             backgroundColor: '#37b4cc',
//                                                             color: '#FFFFFF',
//                                                             textAlign: 'center',
//                                                             lineHeight: '30px',
//                                                             padding: '0 10px',
//                                                         }}
//                                                     >
//                                                         kg
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>
//                                 <div className="col-sm-6">
//                                     <a
//                                         className="__best-selling"
//                                         href="#product/dog-food-p2-6u1zvF"
//                                     >
//                                         <div className="d-flex flex-wrap">
//                                             <div className="best-selleing-image">
//                                                 <img
//                                                     className="rounded"
//                                                     onError={(e) => {
//                                                         e.target.src =
//                                                             '#public/assets/front-end/img/image-place-holder.png';
//                                                     }}
//                                                     src="src/assets/images/sellings4.webp"
//                                                     alt="Product"
//                                                 />
//                                             </div>
//                                             <div className="best-selling-details">
//                                                 <h6 className="widget-product-title">
//                                                     <span className="ptr fw-semibold">dog food p1</span>
//                                                 </h6>
//                                                 <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0">
//                                                     <span></span>
//                                                     <span className="text-accent text-dark">$5,000</span>
//                                                 </div>
//                                                 <div>
//                                                     <span
//                                                         className="text-capitalize fw-semibold"
//                                                         style={{
//                                                             fontSize: '9pt',
//                                                             display: 'inline-block',
//                                                             minWidth: '30px',
//                                                             height: '30px',
//                                                             borderRadius: '50%',
//                                                             backgroundColor: '#37b4cc',
//                                                             color: '#FFFFFF',
//                                                             textAlign: 'center',
//                                                             lineHeight: '30px',
//                                                             padding: '0 10px',
//                                                         }}
//                                                     >
//                                                         kg
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>
//                                 <div className="col-sm-6">
//                                     <a
//                                         className="__best-selling"
//                                         href="#product/dog-food-p2-6u1zvF"
//                                     >
//                                         <div className="d-flex flex-wrap">
//                                             <div className="top-rated-image">
//                                                 <img
//                                                     className="rounded"
//                                                     onError={(e) => {
//                                                         e.target.src =
//                                                             '#public/assets/front-end/img/image-place-holder.png';
//                                                     }}
//                                                     src="src/assets/images/sellings5.webp"
//                                                     alt="Product"
//                                                 />
//                                             </div>
//                                             <div className="top-rated-details">
//                                                 <h6 className="widget-product-title">
//                                                     <span className="ptr">dog food p2</span>
//                                                 </h6>
//                                                 <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0">
//                                                     <span></span>
//                                                     <span className="text-accent text-dark">$3,000</span>
//                                                 </div>
//                                                 <div>
//                                                     <span
//                                                         className="text-capitalize fw-semibold"
//                                                         style={{
//                                                             fontSize: '9pt',
//                                                             display: 'inline-block',
//                                                             minWidth: '30px',
//                                                             height: '30px',
//                                                             borderRadius: '50%',
//                                                             backgroundColor: '#37b4cc',
//                                                             color: '#FFFFFF',
//                                                             textAlign: 'center',
//                                                             lineHeight: '30px',
//                                                             padding: '0 10px',
//                                                         }}
//                                                     >
//                                                         kg
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>
//                                 <div className="col-sm-6">
//                                     <a
//                                         className="__best-selling"
//                                         href="#product/dog-food-p2-6u1zvF"
//                                     >
//                                         <div className="d-flex flex-wrap">
//                                             <div className="top-rated-image">
//                                                 <img
//                                                     className="rounded"
//                                                     onError={(e) => {
//                                                         e.target.src =
//                                                             '#public/assets/front-end/img/image-place-holder.png';
//                                                     }}
//                                                     src="src/assets/images/sellings6.webp"
//                                                     alt="Product"
//                                                 />
//                                             </div>
//                                             <div className="top-rated-details">
//                                                 <h6 className="widget-product-title">
//                                                     <span className="ptr">dog food p2</span>
//                                                 </h6>
//                                                 <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0">
//                                                     <span></span>
//                                                     <span className="text-accent text-dark">$3,000</span>
//                                                 </div>
//                                                 <div>
//                                                     <span
//                                                         className="text-capitalize fw-semibold"
//                                                         style={{
//                                                             fontSize: '9pt',
//                                                             display: 'inline-block',
//                                                             minWidth: '30px',
//                                                             height: '30px',
//                                                             borderRadius: '50%',
//                                                             backgroundColor: '#37b4cc',
//                                                             color: '#FFFFFF',
//                                                             textAlign: 'center',
//                                                             lineHeight: '30px',
//                                                             padding: '0 10px',
//                                                         }}
//                                                     >
//                                                         kg
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Top Rated Product */}
//                 <div className="col-lg-6 px-max-md-0">
//                     <div className="card card __shadow h-100">
//                         <div className="card-body p-xl-35">
//                             <div className="row d-flex justify-content-between mx-1 mb-3">
//                                 <div>
//                                     <img
//                                         className="size-30"
//                                         src="#public/assets/front-end/png/top-rated.png"
//                                         alt=""
//                                     />
//                                     <span className="font-bold pl-1">Top rated</span>
//                                 </div>
//                                 <div>
//                                     <a
//                                         className="text-capitalize view-all-text"
//                                         style={{ color: '#37b4cc' }}
//                                         href="#products?data_from=top-rated&page=1"
//                                     >
//                                         View all
//                                         <i className="czi-arrow-right ml-1 mr-n1"></i>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="row g-3">


//                                 <div className="col-sm-6">
//                                     <a
//                                         className="__best-selling"
//                                         href="#product/dog-food-p2-6u1zvF"
//                                     >
//                                         <div className="d-flex flex-wrap">
//                                             <div className="top-rated-image">
//                                                 <img
//                                                     className="rounded"
//                                                     onError={(e) => {
//                                                         e.target.src =
//                                                             '#public/assets/front-end/img/image-place-holder.png';
//                                                     }}
//                                                     src="src/assets/images/rate1.webp"
//                                                     alt="Product"
//                                                 />
//                                             </div>
//                                             <div className="top-rated-details">
//                                                 <h6 className="widget-product-title">
//                                                     <span className="ptr">dog food p2</span>
//                                                 </h6>

//                                                 {/*  Rating Stars */}
//                                                 <div className="d-flex align-items-center mb-1">
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                 </div>

//                                                 {/*  Price below the stars */}
//                                                 <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0 mb-1">
//                                                     <span className="text-accent text-dark">$3,000</span>
//                                                 </div>

//                                                 {/* ⚖ Unit */}
//                                                 <div>
//                                                     <span
//                                                         className="text-capitalize fw-semibold"
//                                                         style={{
//                                                             fontSize: '9pt',
//                                                             display: 'inline-block',
//                                                             minWidth: '30px',
//                                                             height: '30px',
//                                                             borderRadius: '50%',
//                                                             backgroundColor: '#37b4cc',
//                                                             color: '#FFFFFF',
//                                                             textAlign: 'center',
//                                                             lineHeight: '30px',
//                                                             padding: '0 10px',
//                                                         }}
//                                                     >
//                                                         kg
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>
//                                 <div className="col-sm-6">
//                                     <a
//                                         className="__best-selling"
//                                         href="#product/dog-food-p2-6u1zvF"
//                                     >
//                                         <div className="d-flex flex-wrap">
//                                             <div className="top-rated-image">
//                                                 <img
//                                                     className="rounded"
//                                                     onError={(e) => {
//                                                         e.target.src =
//                                                             '#public/assets/front-end/img/image-place-holder.png';
//                                                     }}
//                                                     src="src/assets/images/rate2.webp"
//                                                     alt="Product"
//                                                 />
//                                             </div>
//                                             <div className="top-rated-details">
//                                                 <h6 className="widget-product-title">
//                                                     <span className="ptr">dog food p2</span>
//                                                 </h6>

//                                                 {/* ⭐ Rating Stars */}
//                                                 <div className="d-flex align-items-center mb-1">
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                 </div>

//                                                 {/* 💲 Price below the stars */}
//                                                 <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0 mb-1">
//                                                     <span className="text-accent text-dark">$3,000</span>
//                                                 </div>

//                                                 {/* ⚖ Unit */}
//                                                 <div>
//                                                     <span
//                                                         className="text-capitalize fw-semibold"
//                                                         style={{
//                                                             fontSize: '9pt',
//                                                             display: 'inline-block',
//                                                             minWidth: '30px',
//                                                             height: '30px',
//                                                             borderRadius: '50%',
//                                                             backgroundColor: '#37b4cc',
//                                                             color: '#FFFFFF',
//                                                             textAlign: 'center',
//                                                             lineHeight: '30px',
//                                                             padding: '0 10px',
//                                                         }}
//                                                     >
//                                                         kg
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>

//                                 <div className="col-sm-6">
//                                     <a
//                                         className="__best-selling"
//                                         href="#product/dog-food-p2-6u1zvF"
//                                     >
//                                         <div className="d-flex flex-wrap">
//                                             <div className="top-rated-image">
//                                                 <img
//                                                     className="rounded"
//                                                     onError={(e) => {
//                                                         e.target.src =
//                                                             '#public/assets/front-end/img/image-place-holder.png';
//                                                     }}
//                                                     src="src/assets/images/rate3.webp"
//                                                     alt="Product"
//                                                 />
//                                             </div>
//                                             <div className="top-rated-details">
//                                                 <h6 className="widget-product-title">
//                                                     <span className="ptr">dog food p2</span>
//                                                 </h6>

//                                                 {/* ⭐ Rating Stars */}
//                                                 <div className="d-flex align-items-center mb-1">
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                 </div>

//                                                 {/* 💲 Price below the stars */}
//                                                 <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0 mb-1">
//                                                     <span className="text-accent text-dark">$3,000</span>
//                                                 </div>

//                                                 {/* ⚖ Unit */}
//                                                 <div>
//                                                     <span
//                                                         className="text-capitalize fw-semibold"
//                                                         style={{
//                                                             fontSize: '9pt',
//                                                             display: 'inline-block',
//                                                             minWidth: '30px',
//                                                             height: '30px',
//                                                             borderRadius: '50%',
//                                                             backgroundColor: '#37b4cc',
//                                                             color: '#FFFFFF',
//                                                             textAlign: 'center',
//                                                             lineHeight: '30px',
//                                                             padding: '0 10px',
//                                                         }}
//                                                     >
//                                                         kg
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>

//                                 <div className="col-sm-6">
//                                     <a
//                                         className="__best-selling"
//                                         href="#product/dog-food-p2-6u1zvF"
//                                     >
//                                         <div className="d-flex flex-wrap">
//                                             <div className="top-rated-image">
//                                                 <img
//                                                     className="rounded"
//                                                     onError={(e) => {
//                                                         e.target.src =
//                                                             '#public/assets/front-end/img/image-place-holder.png';
//                                                     }}
//                                                     src="src/assets/images/rate4.webp"
//                                                     alt="Product"
//                                                 />
//                                             </div>
//                                             <div className="top-rated-details">
//                                                 <h6 className="widget-product-title">
//                                                     <span className="ptr">dog food p2</span>
//                                                 </h6>

//                                                 {/* ⭐ Rating Stars */}
//                                                 <div className="d-flex align-items-center mb-1">
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                 </div>

//                                                 {/* 💲 Price below the stars */}
//                                                 <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0 mb-1">
//                                                     <span className="text-accent text-dark">$3,000</span>
//                                                 </div>

//                                                 {/* ⚖ Unit */}
//                                                 <div>
//                                                     <span
//                                                         className="text-capitalize fw-semibold"
//                                                         style={{
//                                                             fontSize: '9pt',
//                                                             display: 'inline-block',
//                                                             minWidth: '30px',
//                                                             height: '30px',
//                                                             borderRadius: '50%',
//                                                             backgroundColor: '#37b4cc',
//                                                             color: '#FFFFFF',
//                                                             textAlign: 'center',
//                                                             lineHeight: '30px',
//                                                             padding: '0 10px',
//                                                         }}
//                                                     >
//                                                         kg
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>

//                                 <div className="col-sm-6">
//                                     <a
//                                         className="__best-selling"
//                                         href="#product/dog-food-p2-6u1zvF"
//                                     >
//                                         <div className="d-flex flex-wrap">
//                                             <div className="top-rated-image">
//                                                 <img
//                                                     className="rounded"
//                                                     onError={(e) => {
//                                                         e.target.src =
//                                                             '#public/assets/front-end/img/image-place-holder.png';
//                                                     }}
//                                                     src="src/assets/images/rate5.webp"
//                                                     alt="Product"
//                                                 />
//                                             </div>
//                                             <div className="top-rated-details">
//                                                 <h6 className="widget-product-title">
//                                                     <span className="ptr">dog food p2</span>
//                                                 </h6>

//                                                 {/* ⭐ Rating Stars */}
//                                                 <div className="d-flex align-items-center mb-1">
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                 </div>

//                                                 {/* 💲 Price below the stars */}
//                                                 <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0 mb-1">
//                                                     <span className="text-accent text-dark">$3,000</span>
//                                                 </div>

//                                                 {/* ⚖ Unit */}
//                                                 <div>
//                                                     <span
//                                                         className="text-capitalize fw-semibold"
//                                                         style={{
//                                                             fontSize: '9pt',
//                                                             display: 'inline-block',
//                                                             minWidth: '30px',
//                                                             height: '30px',
//                                                             borderRadius: '50%',
//                                                             backgroundColor: '#37b4cc',
//                                                             color: '#FFFFFF',
//                                                             textAlign: 'center',
//                                                             lineHeight: '30px',
//                                                             padding: '0 10px',
//                                                         }}
//                                                     >
//                                                         kg
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>

//                                 <div className="col-sm-6">
//                                     <a
//                                         className="__best-selling"
//                                         href="#product/dog-food-p2-6u1zvF"
//                                     >
//                                         <div className="d-flex flex-wrap">
//                                             <div className="top-rated-image">
//                                                 <img
//                                                     className="rounded"
//                                                     onError={(e) => {
//                                                         e.target.src =
//                                                             '#public/assets/front-end/img/image-place-holder.png';
//                                                     }}
//                                                     src="src/assets/images/rate6.webp"
//                                                     alt="Product"
//                                                 />
//                                             </div>
//                                             <div className="top-rated-details">
//                                                 <h6 className="widget-product-title">
//                                                     <span className="ptr">dog food p2</span>
//                                                 </h6>

//                                                 {/* ⭐ Rating Stars */}
//                                                 <div className="d-flex align-items-center mb-1">
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                     <FaStar color="#FFC107" size={14} />
//                                                 </div>

//                                                 {/* 💲 Price below the stars */}
//                                                 <div className="widget-product-meta d-flex flex-wrap gap-8 align-items-center row-gap-0 mb-1">
//                                                     <span className="text-accent text-dark">$3,000</span>
//                                                 </div>

//                                                 {/* ⚖ Unit */}
//                                                 <div>
//                                                     <span
//                                                         className="text-capitalize fw-semibold"
//                                                         style={{
//                                                             fontSize: '9pt',
//                                                             display: 'inline-block',
//                                                             minWidth: '30px',
//                                                             height: '30px',
//                                                             borderRadius: '50%',
//                                                             backgroundColor: '#37b4cc',
//                                                             color: '#FFFFFF',
//                                                             textAlign: 'center',
//                                                             lineHeight: '30px',
//                                                             padding: '0 10px',
//                                                         }}
//                                                     >
//                                                         kg
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// }

// export default SellingSection;







