import { Li, DivImage, DivInfo } from "./StyledProduct";

const Product = ({ products, add}) => {


  return (
    <>
      {products.map((product) => (
        <Li key={product.id}>

          <DivImage>
            <img src={product.img} alt={product.name} />
          </DivImage>

          <DivInfo>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <span>R$ {product.price}</span>
            <button id={product.id} onClick={add}>Adicionar</button>
          </DivInfo>
          
        </Li>
      ))}
    </>
  );
};

export default Product;
