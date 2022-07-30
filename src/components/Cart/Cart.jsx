import { Section, DivHeaderCart, UlCart, DivFooter, Li } from "./styledCart";
import { BsFillCartPlusFill } from "react-icons/bs";

const Cart = ({ currentSale, remove, removeAll }) => {
  const result = currentSale.reduce((a, b) => b.price + a, 0);

  return (
    <>
      <Section>
        <DivHeaderCart>
          <h3>Carrinho de compras</h3>
        </DivHeaderCart>

        <UlCart>
          {currentSale.length > 0 ? (
            currentSale.map((product, index) => (
              <Li key={index}>
                <img src={product.img} alt={product.name} />
                <div>
                  <h4>{product.name}</h4>
                  <span>{product.category}</span>
                </div>
                <button onClick={remove}>Remover</button>
              </Li>
            ))
          ) : (
            <BsFillCartPlusFill
              style={{
                display: "flex",
                width: "200px",
                height: "150px",
                margin: "3rem auto",
                opacity: 0.3,
              }}
            />
          )}
        </UlCart>

        <DivFooter>
          <div>
            <span>Total</span>
            <p>R$ {result.toFixed(2)}</p>
          </div>
          <button onClick={() => removeAll()}>Remover Todos</button>
        </DivFooter>
      </Section>
    </>
  );
};

export default Cart;
