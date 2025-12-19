import React from "react";
import { useWishlist } from "../../context/WishlistContext";
import CardProducts from "../cardProducts/CardProducts";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div className="container my-5">
      <h2 className="mb-4">❤️ Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="text-center text-muted">
          <h5>Your wishlist is empty</h5>
          <p>Add some products you love 💙</p>
        </div>
      ) : (
        <div className="row g-4">
          {wishlist.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <CardProducts item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
