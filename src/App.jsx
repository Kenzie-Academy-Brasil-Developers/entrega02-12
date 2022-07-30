import { GlobalStyle } from "./Global/Global";
import { useState, useEffect } from "react";
import ShowProducts from "./components/ProductsList/ProductsList";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";

const App = () => {
  const [products, setProducts] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        const filter = res.filter((product) =>
          product.name.toLowerCase().includes(pesquisa.toLowerCase())
        );
        pesquisa.trim() === "" ? setProducts(res) : setProducts(filter);
      });
  }, [pesquisa]);

  const sucess = (nome) => {
    toast.success(`${nome} adicionado!`);
  };

  return (
    <>
      <Header setPesquisa={setPesquisa} />
      <ShowProducts
        setProducts={setProducts}
        products={products}
        toast={toast}
        sucess={sucess}
      />
      <ToastContainer
        theme="colored"
        autoClose="1000"
        position="top-center"
        transition={Flip}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
