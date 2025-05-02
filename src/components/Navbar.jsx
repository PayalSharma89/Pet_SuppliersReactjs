import React, { useState, useEffect } from "react";
import "../../src/assets/navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const brands = ["Happy Cat", "Happy Dog", "Royal Canin", "Beapher", "Bonacibo","Sheba",
    "Winston","Bonnie","Croque","ProNature","duvo Plus","Jungle","Snacky","QueenCat",
    "Molly","Felicia","Carpathian","Versele-Laga Lara","Versele-Laga","Morando","Burgess",
    "KATTOVIT","Purina Gourmet","Webbox","GimDog","GimCat","Proline","Whiskas","Dr.Clauders",
    "Perfecto","Beak's","Felix","Brit","Trixie","Lechat","Reflex","Mio","Pro Line","Cat Zone",
    "AK","Pure Life","Wanpy","Mix Brand"];

const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [showAnnouncement, setShowAnnouncement] = useState(true);

    useEffect(() => {
        const categoryItems = document.querySelectorAll(
            ".category-menu .mega_menu"
        );
        categoryItems.forEach((el) => {
            const parentLi = el.closest("li");
            if (parentLi) {
                parentLi.classList.add("has-sub-item");
                const link = parentLi.querySelector("a");
                if (link && !link.querySelector("i")) {
                    const icon = document.createElement("i");
                    icon.className = "czi-arrow-right";
                    link.appendChild(icon);
                }
            }
        });

        const cartIcon = document.querySelector(".navbar-tool-icon-box");
        const megamenuWrap = document.querySelector(".megamenu-wrap");
        if (cartIcon && megamenuWrap) {
            cartIcon.addEventListener("click", () => {
                megamenuWrap.classList.remove("show");
            });
        }

        return () => {
            if (cartIcon) cartIcon.removeEventListener("click", () => {});
        };
    }, []);

    const toggleMegaMenu = () => {
        const megamenuWrap = document.querySelector(".megamenu-wrap");
        if (megamenuWrap) {
            megamenuWrap.classList.toggle("show");
        }
    };

    return (
        <>
            {showAnnouncement && (
                <div className="text-center position-relative" id="anouncement">
                    <span
                        className="__close-anouncement"
                        onClick={() => setShowAnnouncement(false)}
                        style={{ marginLeft: "10px", cursor: "pointer" }}
                    >
                        X
                    </span>
                </div>
            )}

            <div className="navbar navbar-expand-md navbar-stuck-menu">
                <div className="container px-2">
                    <div
                        className={`collapse navbar-collapse ${
                            isCollapsed ? "show" : ""
                        }`}
                        id="navbarCollapse"
                        style={{ textAlign: "left" }}
                    >
                        <div
                            className="w-100 d-md-none"
                            style={{ textAlign: "right" }}
                        >
                            <button
                                className="navbar-toggler p-0"
                                type="button"
                                onClick={() => setIsCollapsed(!isCollapsed)}
                            >
                                <i className="tio-clear __text-26px"></i>
                            </button>
                        </div>

                        <ul className="navbar-nav mega-nav pr-lg-2 pl-lg-2 mr-2 d-none d-md-block __mega-nav">
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="nav-link dropdown-toggle category-menu-toggle-btn pl-0 btn btn-link d-flex align-items-center gap-2"
                                    onClick={toggleMegaMenu}
                                    style={{ textDecoration: "none" }}
                                >
                                    {/* Category Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="#37b4cc"
                                        viewBox="0 0 22 22"
                                        style={{
                                            minWidth: "20px",
                                            minHeight: "20px",
                                        }}
                                    >
                                        <path d="M9.875 12.9195C9.875 12.422 9.6775 11.9452 9.32563 11.5939C8.97438 11.242 8.4975 11.0445 8 11.0445C6.75875 11.0445 4.86625 11.0445 3.625 11.0445C3.1275 11.0445 2.65062 11.242 2.29937 11.5939C1.9475 11.9452 1.75 12.422 1.75 12.9195V17.2945C1.75 17.792 1.9475 18.2689 2.29937 18.6202C2.65062 18.972 3.1275 19.1695 3.625 19.1695H8C8.4975 19.1695 8.97438 18.972 9.32563 18.6202C9.6775 18.2689 9.875 17.792 9.875 17.2945V12.9195ZM19.25 12.9195C19.25 12.422 19.0525 11.9452 18.7006 11.5939C18.3494 11.242 17.8725 11.0445 17.375 11.0445C16.1337 11.0445 14.2413 11.0445 13 11.0445C12.5025 11.0445 12.0256 11.242 11.6744 11.5939C11.3225 11.9452 11.125 12.422 11.125 12.9195V17.2945C11.125 17.792 11.3225 18.2689 11.6744 18.6202C12.0256 18.972 12.5025 19.1695 13 19.1695H17.375C17.8725 19.1695 18.3494 18.972 18.7006 18.6202C19.0525 18.2689 19.25 17.792 19.25 17.2945V12.9195ZM16.5131 9.66516L19.1206 7.05766C19.8525 6.32578 19.8525 5.13828 19.1206 4.4064L16.5131 1.79891C15.7813 1.06703 14.5937 1.06703 13.8619 1.79891L11.2544 4.4064C10.5225 5.13828 10.5225 6.32578 11.2544 7.05766L13.8619 9.66516C14.5937 10.397 15.7813 10.397 16.5131 9.66516ZM9.875 3.54453C9.875 3.04703 9.6775 2.57015 9.32563 2.2189C8.97438 1.86703 8.4975 1.66953 8 1.66953C6.75875 1.66953 4.86625 1.66953 3.625 1.66953C3.1275 1.66953 2.65062 1.86703 2.29937 2.2189C1.9475 2.57015 1.75 3.04703 1.75 3.54453V7.91953C1.75 8.41703 1.9475 8.89391 2.29937 9.24516C2.65062 9.59703 3.1275 9.79453 3.625 9.79453H8C8.4975 9.79453 8.97438 9.59703 9.32563 9.24516C9.6775 8.89391 9.875 8.41703 9.875 7.91953V3.54453Z" />
                                    </svg>

                                    {/* Categories Text */}
                                    <span className="category-menu-toggle-btn-text">
                                        Categories
                                    </span>
                                </button>
                            </li>
                        </ul>

                        <ul className="navbar-nav mega-nav1 pr-md-2 pl-md-2 d-block d-xl-none">
                            <li className="nav-item dropdown d-md-none">
                                <a
                                    className="nav-link dropdown-toggle pl-0"
                                    href="#"
                                >
                                    <span style={{ marginLeft: "20px" }}>
                                        Categories
                                    </span>
                                </a>
                                <ul
                                    className="dropdown-menu __dropdown-menu-2"
                                    style={{ textAlign: "left" }}
                                >
                                    <li className="dropdown">
                                        <a href="/products?id=1">Cat</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/products?id=42"
                                                >
                                                    sub sub cat
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                >
                                    Brand
                                </a>
                                <ul className="dropdown-menu scroll-bar">
                                {brands.map((brand, index) => (
                                        <li key={index}>
                                        <a className="dropdown-item" href="#" >
                                            {brand}
                                        </a>
                                        </li>
                                    ))}
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            style={{ color: "#37b4cc" }}
                                        >
                                            View more
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/discounts">
                                    Discounted products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sellers">
                                    All sellers
                                </a>
                            </li>
                            <li className="nav-item d-md-none">
                                <a className="dropdown-item" href="/login">
                                    <i className="fa fa-sign-in mr-2" /> Sign in
                                </a>
                            </li>
                            <li className="nav-item d-md-none">
                                <a className="dropdown-item" href="/signup">
                                    <i className="fa fa-user-circle mr-2" />{" "}
                                    Sign up
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="megamenu-wrap">
                <div className="container">
                    <div className="category-menu-wrap">
                        <ul className="category-menu">
                            {/* Cat */}
                            <li>
                                <a
                                    href="#"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img
                                        src="/src/assets/images/cat.png"
                                        alt="Cat Icon"
                                        width="40"
                                        height="30"
                                    />
                                    <span>Cat</span>
                                </a>

                                <div className="mega_menu z-2">
                                    <div className="mega_menu_inner">
                                        <h6>
                                            <a href="#">😻 Dry Food</a>
                                        </h6>
                                        <h6>
                                            <a href="#">😻 Wet Food</a>
                                        </h6>
                                        <h6>
                                            <a href="#">😻 Treats And Snacks</a>
                                        </h6>
                                        <h6>
                                            <a href="#">😻 Health & Vitamins</a>
                                        </h6>
                                        <h6>
                                            <a href="#">😻 Litter</a>
                                        </h6>
                                        <h6>
                                            <a href="#">😻 Litter Box</a>
                                        </h6>
                                    </div>
                                    <div className="mega_menu_inner">
                                        <h6>
                                            <a href="#">😻 NewBorn</a>
                                        </h6>
                                        <h6>
                                            <a href="#">😻 Sterilised Cats</a>
                                        </h6>
                                        <h6>
                                            <a href="#">😻 Toys & Activities</a>
                                        </h6>
                                        <h6>
                                            <a href="#">😻 Cleaning Tools</a>
                                        </h6>
                                        <h6>
                                            <a href="#">😻 Bed and House</a>
                                        </h6>
                                    </div>
                                    <div className="mega_menu_inner">
                                        <h6>
                                            <a href="#">😻 Leash & Collar</a>
                                        </h6>
                                        <h6>
                                            <a href="#">😻 Clothes</a>
                                        </h6>
                                        <h6>
                                            <a href="#">😻 Bowl & Feeder</a>
                                        </h6>
                                        <h6>
                                            <a href="#">😻 Accessories</a>
                                        </h6>
                                    </div>
                                </div>
                            </li>

                            {/* Dog */}
                            <li>
                                <a
                                    href="#"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img
                                        src="/src/assets/images/dog.png"
                                        alt="Dog Icon"
                                        width="40"
                                        height="30"
                                    />
                                    <span>Dog</span>
                                </a>

                                <div className="mega_menu z-2">
                                    <div className="mega_menu_inner">
                                        <h6>
                                            <a href="#">🐶 Dry Food</a>
                                        </h6>
                                        <h6>
                                            <a href="#">🐶 Wet Food</a>
                                        </h6>
                                        <h6>
                                            <a href="#">🐶 Treats And Snacks</a>
                                        </h6>
                                        <h6>
                                            <a href="#">🐶 Health & Vitamins</a>
                                        </h6>
                                        <h6>
                                            <a href="#">🐶 Cleaning Tools</a>
                                        </h6>
                                        <h6>
                                            <a href="#">🐶 Bed and House</a>
                                        </h6>
                                    </div>
                                    <div className="mega_menu_inner">
                                        <h6>
                                            <a href="#">🐶 NewBorn</a>
                                        </h6>
                                        <h6>
                                            <a href="#">🐶 Pad & Toilet</a>
                                        </h6>
                                        <h6>
                                            <a href="#">🐶 Toys & Activities</a>
                                        </h6>
                                        <h6>
                                            <a href="#">🐶 Bowl & Feeder</a>
                                        </h6>
                                        <h6>
                                            <a href="#">🐶 Clothes</a>
                                        </h6>
                                        <h6>
                                            <a href="#">🐶 Accessories</a>
                                        </h6>
                                    </div>
                                </div>
                            </li>

                            {/* Bird */}
                            <li>
                                <a
                                    href="#"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img
                                        src="/src/assets/images/1746000741166.png"
                                        alt="Bird Icon"
                                        width="40"
                                        height="30"
                                    />
                                    <span>Bird</span>
                                </a>

                                <div className="mega_menu z-2">
                                    <div className="mega_menu_inner">
                                        <h6>
                                            <a href="#">🐦 Bird Food</a>
                                        </h6>
                                        <h6>
                                            <a href="#">
                                                🐦 Toys & Supplements
                                            </a>
                                        </h6>
                                        <h6>
                                            <a href="#">🐦 Health & Vitamins</a>
                                        </h6>
                                    </div>
                                </div>
                            </li>

                            {/* Fish (New) */}
                            <li>
                                <a
                                    href="#"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img
                                        src="src/assets/images/1746000809084.png"
                                        alt="Fish Icon"
                                        width="40"
                                        height="30"
                                    />
                                    <span>Fish</span>
                                </a>

                                <div className="mega_menu z-2">
                                    <div className="mega_menu_inner">
                                        <h6>
                                            <a href="#">
                                                🐟 Food & Accessories
                                            </a>
                                        </h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
