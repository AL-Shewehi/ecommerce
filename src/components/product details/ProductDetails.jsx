import React from "react";
import "./productDetails.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseProducts } from "../../context/ProductsContext";
import { useCart } from "../../context/CartContext";

import Header from "../header/Header";
import Phone1 from "../../assets/phone1.png";
import Phone2 from "../../assets/phone2.png";
import Phone3 from "../../assets/phone3.png";
import Phone4 from "../../assets/phone4.png";

function ProductDetails() {
  const { addToCart, cartItems } = useCart();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const { allProducts } = UseProducts();


  const product = allProducts.find((item) => item.id === Number(id));

  const [activeImage, setActiveImage] = useState(product.images[0]);

  if (!product) {
    return <h2 className="text-center my-5">المنتج غير موجود</h2>;
  }

  return (
    <div>
      <div className="container py-5 " style={{ textAlign: "right" }}>
        <div className="row contentContainer">
          <div
            className="col-lg-6"
            style={{ direction: "rtl", textAlign: "right" }}
          >
            <h4>{product.name}</h4>
            <div className="d-flex align-items-center gap-3 pt-2">
              <p>
                {/* <span>المتبقي</span>
                <i
                  style={{ color: "var(--primary-color)" }}
                  className="fa-solid fa-box"
                ></i>
                <span style={{ color: "var(--primary-color)" }}>16</span>
                <span>وحدة</span> */}

                {product.inStock ? <span>متوفر</span> : <span>غير متوفر</span>}
              </p>
              <p>|</p>
              <p>
                <i
                  style={{ color: "var(--primary-color)" }}
                  className="fa-solid fa-fire"
                ></i>
                <span>تم شراءة</span>
                <span style={{ color: "var(--primary-color)" }}>250</span>
                <span>مرة</span>
              </p>
            </div>

            <div className="d-flex align-items-center gap-2 pt-2">
              <div>
                <i className="fa-solid fa-star star_solid"></i>
                <i className="fa-solid fa-star star_solid"></i>
                <i className="fa-solid fa-star star_solid"></i>
                <i className="fa-solid fa-star star_solid"></i>
                <i className="fa-regular fa-star star_regular"></i>
                <span>({product.rating})</span>
              </div>
              <div>|</div>
              <button className="btn">
                <i className="fa-regular fa-heart"></i>
                اضف للمفضلة
              </button>
              <div>|</div>

              <button className="btn">
                <i className="fa-solid fa-share-nodes"></i>
                مشاركة المنتج
              </button>
            </div>
            {/* السعر */}
            <div className="price_box my-3">
              <h3 style={{ color: "var(--primary-color)" }}>
                {product.price} ج.م
              </h3>
              <span className="text-decoration-line-through text-muted">
                {product.oldPrice} ج.م
              </span>
              <span className="discount ms-2">-10%</span>
            </div>

            {/* الكمية */}
            <div className="d-flex align-items-center gap-3 my-3">
              <span>الكمية:</span>
              <div className="quantity_box">
                <button
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* أزرار */}
            <div className="d-flex gap-3 my-4">
              <button
                className="btn btn-primary w-100"
                onClick={() => {
                  addToCart(product, quantity);
                }}
              >
                <i className="fa-solid fa-cart-shopping me-2"></i>
                أضف إلى السلة
              </button>
              <button className="btn btn-outline-primary w-100">
                شراء الآن
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-between Product_Images">
            <div>
              <img src={activeImage} alt="" />
            </div>
            <div
              style={{ width: "20%", border: "1px solid #d3d3d3" }}
              className="d-flex flex-column align-items-center gap-2 listImages"
            >
              {product.images.map((image, index) => (
                <img
                  key={index}
                  style={{ maxWidth: "100px", border: "1px solid #d3d3d3" }}
                  src={image}
                  alt=""
                  onClick={() => {
                    setActiveImage(image);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="container my-5" style={{ direction: "rtl" }}>
          <div
            className="container my-5"
            style={{ direction: "rtl", textAlign: "right" }}
          >
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#description"
                >
                  الوصف
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#specs"
                >
                  المواصفات
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#reviews"
                >
                  التقييمات
                </button>
              </li>
            </ul>

            <div className="tab-content border border-top-0 p-4">
              {/* الوصف */}
              <div
                className="tab-pane fade show active product-description"
                id="description"
              >
                <h5 className="section-title">وصف المنتج</h5>

                <p className="description-text">{product.shortDescription}</p>

                <p className="description-text">{product.description}</p>

                <div className="features-box">
                  <h6 className="features-title">أهم المميزات</h6>
                  <ul className="features-list">
                    {product.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* المواصفات */}
              <div className="tab-pane fade" id="specs">
                <h5>المواصفات الفنية</h5>

                <table className="table table-bordered mt-3">
                  <tbody>
                    <tr>
                      <th>الشاشة</th>
                      <td>{product.specs.screen}</td>
                    </tr>
                    <tr>
                      <th>المعالج</th>
                      <td>{product.specs.processor}</td>
                    </tr>
                    <tr>
                      <th>الحافظة</th>
                      <td>{product.specs.ram}</td>
                    </tr>
                    <tr>
                      <th>الذاكرة</th>
                      <td>{product.specs.storage}</td>
                    </tr>
                    <tr>
                      <th>الكاميرا الخلفية</th>
                      <td>{product.specs.mainCamera}</td>
                    </tr>
                    <tr>
                      <th>الكاميرا الأمامية</th>
                      <td>{product.specs.frontCamera}</td>
                    </tr>
                    <tr>
                      <th>البطارية</th>
                      <td>{product.specs.battery}</td>
                    </tr>
                    <tr>
                      <th>نظام التشغيل</th>
                      <td>{product.specs.os}</td>
                    </tr>
                    <tr>
                      <th>دعم الشبكات</th>
                      <td>{product.specs.connectivity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* التقييمات */}
              <div className="tab-pane fade" id="reviews">
                <div className="row">
                  <div className="col-lg-4">
                    <div
                      className="d-flex align-items-center flex-column p-4 mb-4"
                      style={{ background: "#F8F8F8" }}
                    >
                      <h4>{product.rating} من 5</h4>
                      <div>
                        <i className="fa-solid fa-star star_solid"></i>
                        <i className="fa-solid fa-star star_solid"></i>
                        <i className="fa-solid fa-star star_solid"></i>
                        <i className="fa-solid fa-star star_solid"></i>
                        <i className="fa-regular fa-star star_regular"></i>
                      </div>
                      <p>{product.reviewsCount} تقييم على المنتج</p>
                    </div>
                    <h5>أضف تعليقك</h5>
                    <input
                      type="text"
                      placeholder="برجاء اضافة تعليقك .."
                      className="form-control"
                      style={{ height: "100px" }}
                    />
                    <button className="btn btn-primary py-2 mt-3 w-100">
                      نشر تعليق
                    </button>
                  </div>
                  <div className="col-lg-8">
                    <div
                      className="d-flex align-items-center justify-content-between p-3 w-100"
                      style={{ background: "#f8f8f8" }}
                    >
                      <h5>تقييمات المستخدمين</h5>
                      <div className="d-flex gap-2 align-items-center">
                        <label>ترتيب حسب: </label>
                        <select name="" id="" className="form-control">
                          <option value="">الاحدث</option>
                          <option value="">الاقدم</option>
                        </select>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="d-flex gap-3 align-items-center">
                        <div
                          className="d-flex justify-content-center align-items-center "
                          style={{ width: "50px", height: "50px" }}
                        >
                          <img
                            src="https://placehold.co/80x80?text=No+Img"
                            alt=""
                            className="rounded-circle"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <h6>محمد احمد</h6>
                          <div className="d-flex gap-1">
                            <i className="fa-solid fa-star star_solid"></i>
                            <i className="fa-solid fa-star star_solid"></i>
                            <i className="fa-solid fa-star star_solid"></i>
                            <i className="fa-solid fa-star star_solid"></i>
                            <i className="fa-regular fa-star star_regular"></i>
                          </div>
                        </div>

                        <p
                          className="text-muted"
                          style={{ marginRight: "auto" }}
                        >
                          13/10 /2025
                        </p>
                      </div>
                      <p className="mt-3">
                        لوريم ايبسوم هو نص شكلي بالتقييم في المصحف والتحقيقات.
                        كان لوريم ايبسوم ولايزال المعيار في الصفحةت الكترونية.
                        يمكنك ان تستخدم لوريم ايبسوم دون مشكلة في التصميم او
                        المطابع. كان لوريم ايبسوم ولايزال المعيار في الصفحةت
                        الكترونية. يمكنك ان تستخدم لوريم ايبسوم دون مشكلة في
                        التصميم او المطابع.
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
