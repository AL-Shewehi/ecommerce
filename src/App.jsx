import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slider from "./components/slider/Slider";
import SliderProduct from "./components/sliderProduct/SliderProduct";
import CardCategory from "./components/cardCategories/CardCategories";
import CardProducts from "./components/cardProducts/CardProducts";
import CardBrand from "./components/cardBrand/CardBrand";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProductsProvider, UseProducts } from "./context/ProductsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/product details/ProductDetails";
import Layout from "./components/Layout";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/wishlist/Wishlist";
import { CartProvider } from "./context/CartContext";
import AllProduct from "./components/all product/AllProduct";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import { WishlistProvider } from "./context/WishlistContext";
import { SearchProvider } from "./context/SearchContext";

function AppContent() {
  const { allProducts, categories, brands } = UseProducts();
  const phones = allProducts.filter((p) => p.category === "Smartphones");
  const tablets = allProducts.filter((p) => p.category === "Tablets");

  const productBreakpoints = {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
  };

  const categoryBreakpoints = {
    0: { slidesPerView: 3 },
    576: { slidesPerView: 4 },
    768: { slidesPerView: 5 },
    992: { slidesPerView: 6 },
  };

  const brandBreakpoints = {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 3 },
  };

  return (
    <>
      <Slider />
      <SliderProduct
        title={
          <>
            Grab the best deal on{" "}
            <span style={{ color: "var(--primary-color)" }}>Smartphones</span>
          </>
        }
        data={phones}
        CardComponent={CardProducts}
        slidesPerView={4}
        pagination={false}
        breakpoints={productBreakpoints}
      />
      <SliderProduct
        title={
          <>
            Grab the best deal on{" "}
            <span style={{ color: "var(--primary-color)" }}>Tablets</span>
          </>
        }
        data={tablets}
        CardComponent={CardProducts}
        slidesPerView={4}
        pagination={false}
        breakpoints={productBreakpoints}
      />
      <SliderProduct
        title={
          <>
            Browse{" "}
            <span style={{ color: "var(--primary-color)" }}>Categories</span>
          </>
        }
        CardComponent={CardCategory}
        data={categories}
        slidesPerView={6}
        pagination={false}
        breakpoints={categoryBreakpoints}
      />
      <SliderProduct
        title={
          <>
            Top
            <span style={{ color: "var(--primary-color)" }}>
              {" "}
              Electronics Brands
            </span>
          </>
        }
        CardComponent={CardBrand}
        data={brands}
        slidesPerView={3}
        pagination={true}
        breakpoints={brandBreakpoints}
        navigation={false}
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <WishlistProvider>
            <SearchProvider>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<AppContent />} />
                  <Route
                    path="/productDetails/:id"
                    element={<ProductDetails />}
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/Products/all" element={<AllProduct />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="*" element={<h1>404</h1>} />
                </Route>
              </Routes>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                theme="colored"
              />
            </SearchProvider>
          </WishlistProvider>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
