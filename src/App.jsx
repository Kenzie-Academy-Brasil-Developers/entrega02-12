import { GlobalStyle } from "./Global/Global";
import { useState, useEffect } from "react";
import ShowProducts from "./components/ProductsList/ProductsList";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  });

  return (
    <>
      <ShowProducts products={products} />
      <GlobalStyle />
    </>
  );
};

export default App;
