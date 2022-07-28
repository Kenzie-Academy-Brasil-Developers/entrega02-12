import Product from '../Product/Product'

const ShowProducts = ({ products }) => {
  return (
    <main>
      <section>
        <ul>
            <Product products={products} />
        </ul>
      </section>
    </main>
  );
};

export default ShowProducts;
