import Product from "../Product/Product";
import { Ul, Main } from "./styledList";
import Cart from "../Cart/Cart";
import { useState } from "react";

const ShowProducts = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0)

  const add = (event) => {
    const id = parseInt(event.target.id);
    const product = products.find((product) => product.id === id);
    setCart((old) => [...old, product]);
    total()
  };

  const total = () => {
    const result = cart.reduce((a, b) => b.price + a, 0)
    setTotalCart(result.toFixed())
  }
  return (
    <Main>
      <section className="sectionList">
        <Ul>
          <Product products={products} add={add} />
        </Ul>
      </section>

      <Cart cart={cart} totalCart={totalCart}/>
    </Main>
  );
};

export default ShowProducts;
