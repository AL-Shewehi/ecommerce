import React from "react";
import "./header.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { name: "All Products", path: "/all" },
  { name: "Groceries" },
  { name: "Clothing" },
  { name: "Shoes" },
  { name: "Electronics" },
  { name: "Furniture" },
  { name: "Beauty" },
  { name: "Health" },
  { name: "Toys" },
  { name: "Jewellery" },
  { name: "More" },
];

function Header() {
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();
  const { totalQuantity } = useCart();

  return (
    <>
      {/* ================= Top Header ================= */}
      <div className="top_header bg-light">
        <div className="container py-1">
          <div className="row align-items-center" style={{ fontSize: "10px" }}>
            <div className="col-6 left-text">Welcome to Market!</div>

            <div className="col-md-6 col-sm-12 d-flex justify-content-end">
              <ul
                className="d-flex gap-3 p-0 m-0 list-unstyled align-items-center"
                style={{ listStyle: "none" }}
              >
                <li>
                  <a href="#">
                    <i className="fa-solid fa-location-dot me-1"></i>
                    Deliver to 423651
                  </a>
                </li>

                <li className="separator">|</li>

                <li>
                  <a href="#">
                    <i className="fa-solid fa-truck me-1"></i>
                    Track your order
                  </a>
                </li>

                <li className="separator">|</li>

                <li>
                  <a href="#">
                    <i className="fa-solid fa-percent me-1"></i>
                    All Offers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Main Header ================= */}
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
          <div className="container-fluid align-items-center">
            {/* Logo */}
            <Link to={"/"}>
              <p
                className="navbar-brand fw-bold fs-4 p-0 m-0"
                href="#"
                style={{ color: "var(--primary-color)" }}
              >
                Market
              </p>
            </Link>

            {/* Search */}
            <div className="search-container flex-grow-1 d-flex justify-content-center px-2">
              <form className="search-box w-100" role="search">
                <div className="input-group">
                  <button type="button" className="input-group-text">
                    <i className="fa-solid fa-magnifying-glass text-muted"></i>
                  </button>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search for products, brands and more..."
                    value={searchQuery}
                    onChange={(e) => {setSearchQuery(e.target.value); navigate("/Products/all")}}
                  />
                </div>
              </form>
            </div>

            {/* Actions */}
            <div className="d-flex align-items-center gap-3">
              <div className="dropdown">
                <button
                  className="btn d-flex align-items-center gap-1"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <i
                    className="fa-solid fa-user"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <span className="d-none d-md-inline">Sign In</span>
                </button>
                <ul className="dropdown-menu">
                  <Link to={"/login"}>
                    <li className="dropdown-item">Sign In</li>
                  </Link>
                  <Link to={"/register"}>
                    <li className="dropdown-item">Sign Up</li>
                  </Link>
                </ul>
              </div>

              <Link to={"/cart"}>
                <button className="btn position-relative d-flex align-items-center gap-1">
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  <span className="d-none d-md-inline">Cart</span>

                  {totalQuantity > 0 && (
                    <span className="cart-badge fw-bold">{totalQuantity}</span>
                  )}
                </button>
              </Link>
              <Link to={"/wishlist"}>
                <button className="btn">
                  <i
                    className="fa-regular fa-heart fs-4"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* ================= Categories ================= */}
      <div className="nav_links py-2 mb-3">
        <div className="container">
          <div className="d-flex justify-content-between gap-1">
            {navLinks.map((link, index) => (
              <Link to={"products" + link.path} key={index}>
                <button className="nav-link-btn">
                  {link.name}
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
