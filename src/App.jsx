import { GlobalStyle } from "./Global/Global";
import { useState, useEffect } from "react";
import ShowProducts from "./components/ProductsList/ProductsList";
import Header from "./components/Header/Header";


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  });

  return (
    <>
    <Header/>
      <ShowProducts products={products} />
      <GlobalStyle />
    </>
  );
};

export default App;
