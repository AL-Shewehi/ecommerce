import { useContext, createContext, useMemo } from "react";
import productsJson from "../data/products.json"; 

import Phone1 from "../assets/phone1.png";
import Phone2 from "../assets/phone2.png";
import Phone3 from "../assets/phone3.png";
import Phone4 from "../assets/phone4.png";
import Phone5 from "../assets/phone5.png";
import Tablet1 from "../assets/tablet1.jpg";
import Banner1 from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";

const ProductsContext = createContext();

const categories = [
  { id: 1, name: "Smartphones", image: Phone1 },
  { id: 2, name: "Tablets", image: Phone2 },
  { id: 3, name: "Laptops", image: Tablet1 },
  { id: 4, name: "Headphones", image: Phone3 },
  { id: 5, name: "Accessories", image: Phone4 },
  { id: 6, name: "More", image: Phone5 },
];

const brands = [
  { id: 1, name: "Apple", image: Banner1 },
  { id: 2, name: "Samsung", image: Banner2 },
  { id: 3, name: "Xiaomi", image: Banner3 },
];

export function ProductsProvider({ children }) {
  const allProducts = useMemo(() => [...productsJson.phones, ...productsJson.tablets], []);

  const value = useMemo(() => ({
    allProducts,
    categories,
    brands,
  }), [allProducts]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function UseProducts() {
  return useContext(ProductsContext);
}
