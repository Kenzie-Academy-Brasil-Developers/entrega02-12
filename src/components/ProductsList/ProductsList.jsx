import Product from "../Product/Product";
import { Ul, Main } from "./styledList";
import Cart from "../Cart/Cart";
import { useState } from "react";

const ShowProducts = ({ products, toast, sucess }) => {
  const [currentSale, setCurrentSale] = useState([]);

  const removeAll = () => {
    toast.info("Carrinho vazio!");
    setCurrentSale([]);
  };

  const remove = (event) => {
    const nameProduto =
      event.target.parentNode.children[1].children[0].textContent;
    toast.info(`${nameProduto} Removido!`);
    const filtrados = currentSale.filter((product) => product.name !== nameProduto);
    setCurrentSale(filtrados);
  };

  const add = (event) => {
    const id = parseInt(event);
    const product = products.find((product) => product.id === id);
    const nome = product.name;
    const find = currentSale.find((productCart) => nome === productCart.name);

    if (currentSale.length > 0) {
      if (find === undefined) {
        sucess(nome);
        setCurrentSale((old) => [...old, product]);
      } else {
        toast.error(`${nome} já foi inserido !`);
      }
    } else {
      sucess(nome);
      setCurrentSale((old) => [...old, product]);
    }
  };

  return (
    <Main>
      <section className="sectionList">
        <Ul>
          <Product products={products} add={add} />
        </Ul>
      </section>

      <Cart currentSale={currentSale} setCart remove={remove} removeAll={removeAll} />
    </Main>
  );
};

export default ShowProducts;
