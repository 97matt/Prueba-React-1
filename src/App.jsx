import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MiApi from "./components/MiApi";

const App = () => {
  const [products, setProducts] = useState([]); // hold all products
  // hold all products as reference or store for searching
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // do api call and get all products
    getProducts();
  }, []);

  const getProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    // sort by price high to low
    const sorted = data.sort((a, b) => a.price - b.price);
    // set products
    setProducts(sorted);
    setAllProducts(sorted);
  };

  const searchProducts = (s) => {
    const text = s.toLowerCase().trim();
    // filter(search) products
    const searchProds = allProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(text) ||
        p.description.toLowerCase().includes(text)
    );

    // if searched products has no item for the search, then reset
    // else give set the products to the searched products
    if (searchProds.length === 0) {
      setProducts(products);
    } else {
      setProducts(searchProds);
    }
  };

  return (
    <div>
      <Header searchProducts={searchProducts} />
      <MiApi products={products} />
    </div>
  );
};

export default App;
