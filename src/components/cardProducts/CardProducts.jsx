import React from "react";
import { useWishlist } from "../../context/WishlistContext";

import "./cardProducts.css";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

function CardProducts({ item }) {
  const { addToCart, cartItems } = useCart();
  const isInCart = cartItems.some((p) => p.id === item.id);

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  return (
    <div
      className="card product-card h-100 d-flex flex-column"
      style={{
        borderRadius: "20px",
      }}
    >
      {/* Image + title clickable */}
      <Link
        to={`/productDetails/${item.id}`}
        className="text-decoration-none text-dark"
      >
        <div className="d-flex justify-content-center mt-3">
          <img
            src={item.image || item.images?.[0]}
            alt={item.name}
            style={{
              height: "150px",
              width: "150px",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </Link>

      <div className="card-body d-flex flex-column">
        {/* Stock */}
        <span className={item.inStock ? "text-success" : "text-danger"}>
          {item.inStock ? "In Stock" : "Out of Stock"}
        </span>

        {/* Name */}
        <Link
          to={`/productDetails/${item.id}`}
          className="text-decoration-none text-dark"
        >
          <h5 className="card-title mt-2 product_name">{item.name}</h5>
        </Link>

        {/* Description */}
        <p className="card-text text-muted small product_description">
          {item.shortDescription || item.description}
        </p>

        {/* Price */}
        <div className="d-flex gap-2 align-items-center mt-auto">
          <span
            className="fw-bold fs-5"
            style={{ color: "var(--primary-color)" }}
          >
            ${item.price}
          </span>

          {item.oldPrice && (
            <>
              <span className="text-decoration-line-through text-muted">
                ${item.oldPrice}
              </span>
              <span className="text-danger ms-2">
                -
                {Math.round(
                  ((item.oldPrice - item.price) / item.oldPrice) * 100
                )}
                %
              </span>
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="d-flex gap-2 mt-3">
          <button
            className={`btn ${isInCart ? "btn-success" : "btn-primary"} w-100`}
            onClick={() => {
              addToCart(item);
            }}
          >
            {isInCart ? "تم الاضافة" : "اضافة للسلة"}
          </button>
          <button
            className={`btn ${
              isInWishlist(item.id) ? "btn-danger" : "btn-outline-primary"
            }`}
            onClick={() =>
              isInWishlist(item.id)
                ? removeFromWishlist(item.id)
                : addToWishlist(item)
            }
          >
            <i
              className={
                isInWishlist(item.id)
                  ? "fa-solid fa-heart"
                  : "fa-regular fa-heart"
              }
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProducts;
