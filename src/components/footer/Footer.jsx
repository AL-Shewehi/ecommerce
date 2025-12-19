import React from "react";
import "./footer.css";

import GooglePlay from "../../assets/GooglePlay.png";
import AppStore from "../../assets/AppStore.png";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--primary-color)",
        color: "#fff",
        paddingTop: "40px",
        paddingBottom: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row ">
          {/* القسم الأول */}
          <div className="col-lg-5 mb-4">
            <h2 className="logo">Market</h2>
            <h5 className="fw-bold mt-3">Contact Us</h5>
            <p>
              <i className="fa-brands fa-whatsapp me-2"></i>
              Whatsapp: <br />
              <span className="ps-4">123-456-7890</span>
            </p>
            <p>
              <i className="fa-solid fa-phone me-2"></i>
              Call Us: <br />
              <span className="ps-4">123-456-7890</span>
            </p>

            <h5 className="mt-3">Download App</h5>
            <div className="d-flex gap-2 mt-2">
              <img
                style={{ width: "100px" }}
                src={GooglePlay}
                alt="Google Play"
              />
              <img style={{ width: "100px" }} src={AppStore} alt="App Store" />
            </div>
          </div>

          {/* القسم الثاني */}
          <div className="col-lg-7 d-flex flex-wrap gap-5 mb-4">
            <div>
              <h5
                className="pb-2 mb-3"
                style={{ borderBottom: "3px solid #fff" }}
              >
                Most Popular Categories
              </h5>
              <ul className="">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Staples
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Beverages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Personal Care
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Home Care
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Cleaning Supplies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Vegetables & Fruits
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5
                className="pb-2 mb-3"
                style={{ borderBottom: "3px solid #fff" }}
              >
                Customer Services
              </h5>
              <ul className="">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* الخط والفوتر */}
          <div className="col-12">
            <hr style={{ borderColor: "#fff" }} />
            <div className="text-center pt-2">
              <p className="mb-0">© 2025 Market. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
