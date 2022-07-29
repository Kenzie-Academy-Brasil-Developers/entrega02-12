import { Section, DivHeaderCart, UlCart, DivFooter, Li } from "./styledCart";

const Cart = ({ cart, totalCart, total}) => {


  return (
    <>
      <Section>
        <DivHeaderCart>
          <h3>Carrinho de compras</h3>
        </DivHeaderCart>

        <UlCart>
            {
                cart.length === 0 ? 
                <p>ADD ITEM</p>
                :
                cart.map((product,index) => (
                    <Li key={index}>
                        <img src={product.img} alt={product.name} />
                        <div>
                            <h4>
                                {product.name}
                            </h4>
                            <span>
                                {product.category}
                            </span>
                        </div>
                        <button>Remover</button>
                    </Li>
                ))
            }
            </UlCart>

        <DivFooter>
          <div>
            <span>Total</span>
            <p>R$ {totalCart}</p>
          </div>
          <button>Remover Todos</button>
        </DivFooter>
      </Section>
    </>
  );
};

export default Cart;
