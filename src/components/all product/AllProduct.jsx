import React, { useState, useMemo } from "react";
import "./allProduct.css";
import SidebarFilter from "../sidebarFilter/SidebarFilter";
import CardProducts from "../cardProducts/CardProducts";
import { UseProducts } from "../../context/ProductsContext";
import { useSearch } from "../../context/SearchContext";

/* ================== Filters Data ================== */

const categories = [
  { id: 0, name: "All", label: "All Products", quantity: 100 },
  { id: 1, name: "Smartphones", quantity: 10 },
  { id: 2, name: "Tablets", quantity: 5 },
  { id: 3, name: "Laptops", quantity: 8 },
  { id: 4, name: "Accessories", quantity: 12 },
  { id: 5, name: "Headphones", quantity: 6 },
];

const brands = [
  { id: 0, name: "All", label: "All Brands", quantity: 100 },
  { id: 1, name: "Apple", quantity: 25 },
  { id: 2, name: "Samsung", quantity: 30 },
  { id: 3, name: "Xiaomi", quantity: 20 },
  { id: 4, name: "Huawei", quantity: 10 },
  { id: 5, name: "Oppo", quantity: 15 },
];

const colors = [
  { id: 0, name: "All", label: "All Colors", quantity: 100 },
  { id: 1, name: "Black", colorCode: "#000000", quantity: 35 },
  { id: 2, name: "White", colorCode: "#ffffff", quantity: 20 },
  { id: 3, name: "Blue", colorCode: "#2563eb", quantity: 18 },
  { id: 4, name: "Red", colorCode: "#dc2626", quantity: 12 },
  { id: 5, name: "Green", colorCode: "#16a34a", quantity: 15 },
];

const ratings = [
  { id: 0, name: "All", label: "All Ratings", quantity: 100 },
  { id: 1, name: "5", label: "★★★★★", quantity: 40 },
  { id: 2, name: "4", label: "★★★★☆ & Up", quantity: 30 },
  { id: 3, name: "3", label: "★★★☆☆ & Up", quantity: 20 },
  { id: 4, name: "2", label: "★★☆☆☆ & Up", quantity: 10 },
];

/* ================== Component ================== */

function AllProduct() {
  const { allProducts } = UseProducts();
  const [layout, setLayout] = useState("grid");
  const { searchQuery } = useSearch();

  const [filters, setFilters] = useState({
    category: "All",
    brand: "All",
    color: "All",
    rating: "All",
    price: 1000,
  });

  /* ================== Filter Logic ================== */
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory =
        filters.category === "All" || product.category === filters.category;

      const matchBrand =
        filters.brand === "All" || product.brand === filters.brand;

      const matchColor =
        filters.color === "All" || product.color === filters.color;

      const matchRating =
        filters.rating === "All" || product.rating >= Number(filters.rating);

      const matchPrice = product.price <= filters.price;

      return (
        matchSearch &&
        matchCategory &&
        matchBrand &&
        matchColor &&
        matchRating &&
        matchPrice
      );
    });
  }, [allProducts, filters, searchQuery]);

  return (
    <div className="container my-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="side-bar">
            <SidebarFilter
              title="Category"
              items={categories}
              onChange={(value) =>
                setFilters((prev) => ({ ...prev, category: value }))
              }
            />

            <SidebarFilter
              title="Brands"
              items={brands}
              onChange={(value) =>
                setFilters((prev) => ({ ...prev, brand: value }))
              }
            />

            <SidebarFilter
              title="Colors"
              items={colors}
              onChange={(value) =>
                setFilters((prev) => ({ ...prev, color: value }))
              }
            />

            <SidebarFilter
              title="Ratings"
              items={ratings}
              onChange={(value) =>
                setFilters((prev) => ({ ...prev, rating: value }))
              }
            />

            <SidebarFilter
              title="Price"
              type="range"
              min={0}
              max={10000}
              step={10}
              value={filters.price}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  price: Number(e.target.value),
                }))
              }
            />
          </div>
        </div>

        {/* Products */}
        <div className="col-md-9">
          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
            <div className="d-flex gap-2">
              <button
                className={`btn btn-${
                  layout === "list" ? "primary" : "outline-primary"
                }`}
                onClick={() => setLayout("list")}
              >
                <i className="fa-solid fa-list me-2"></i>
              </button>
              <button
                className={`btn btn-${
                  layout === "grid" ? "primary" : "outline-primary"
                }`}
                onClick={() => setLayout("grid")}
              >
                <i class="fa-solid fa-grip"></i>
              </button>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <label htmlFor="" style={{ textWrap: "nowrap" }}>
                Sort By:
              </label>
              <select className="form-select" name="" id="">
                <option value="">Newest</option>
                <option value="">Oldest</option>
                <option value="">Price: Low to High</option>
                <option value="">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div
            className="products-grid"
            style={{
              gridTemplateColumns:
                layout === "grid"
                  ? "repeat(auto-fill, minmax(250px, 1fr))"
                  : "1fr",
            }}
          >
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <CardProducts key={product.id} item={product} />
              ))
            ) : (
              <p className="text-center mt-5">No products found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
