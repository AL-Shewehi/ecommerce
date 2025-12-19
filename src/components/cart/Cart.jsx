import "./cart.css";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeItem, totalPrice } =
    useCart();

  return (
    <div className="cart container my-5">
      <div className="row d-flex gap-3 contentContainer">
        {/* ===== ملخص الطلب ===== */}
        <div className="col-lg-3 py-3" style={{ border: "1px solid #ddd" }}>
          <h5 className="fw-bold mb-3"> Order Summary</h5>

          <div className="d-flex justify-content-between my-2">
            <p>Total Items</p>
            <p>{totalPrice} ج.م</p>
          </div>

          <label className="mb-1">Are you have a coupon code?</label>
          <div className="d-flex gap-2 mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Code"
            />
            <button className="btn btn-outline-primary">Apply</button>
          </div>

          <hr />

          <div className="d-flex justify-content-between fw-bold">
            <p>Total Price</p>
            <p>{totalPrice} ج.م</p>
          </div>

          <button className="btn btn-primary w-100 mt-3"> Checkout</button>
        </div>

        {/* ===== المنتجات ===== */}
        <div className="col-lg-8" style={{ direction: "rtl" }}>
          {cartItems.length === 0 ? (
            <div className="text-center p-5 border">
              <i
                className="fa-solid fa-cart-shopping mb-3"
                style={{ fontSize: "50px", color: "#ccc" }}
              ></i>

              <h4 className="fw-bold">cart is empty</h4>
              <p className="text-muted">Add some products to your cart</p>

              <a href="/Products/all" className="btn btn-primary mt-3">
                Continue Shopping
              </a>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="row align-items-center border p-3 mb-3"
              >
                <div className="col-md-6 d-flex gap-3 align-items-center">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      border: "1px solid #ddd",
                    }}
                  >
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  <div>
                    <h6 className="fw-bold">{item.title}</h6>
                    <p className="mb-0">{item.price} ج.م</p>
                  </div>
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-primary px-2"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>

                    <input
                      type="text"
                      className="form-control text-center"
                      value={item.quantity}
                      readOnly
                      style={{ width: "50px" }}
                    />

                    <button
                      className="btn btn-outline-primary px-2"
                      onClick={() => decreaseQty(item.id)}
                    >
                      −
                    </button>
                  </div>

                  <p className="fw-bold mb-0">
                    {item.price * item.quantity} ج.م
                  </p>

                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
