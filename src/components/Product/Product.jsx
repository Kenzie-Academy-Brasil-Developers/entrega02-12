import { Li, DivImage, DivInfo } from "./StyledProduct";

const Product = ({ products, add, toast }) => {
  return (
    <>
      {products.length > 0 ? (
        products.map((product) => (
          <Li key={product.id}>
            <DivImage>
              <img src={product.img} alt={product.name} />
            </DivImage>

            <DivInfo>
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <span>R$ {product.price.toFixed(2)}</span>
              <button id={product.id} onClick={(event) => add(event.target.id)}>
                Adicionar
              </button>
            </DivInfo>
          </Li>
        ))
      ) : (
        <h1 style={{ margin: "0 auto", fontSize: "20px" }}>
          Nenhum item foi encontrado.
        </h1>
      )}
    </>
  );
};

export default Product;
