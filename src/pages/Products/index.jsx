import Product from "../../components/Product";
import { useContext } from "react";
import ProductContext from "../../context/product/ProductContext";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <section className="container mt-20">
      <div className="mb-12 lg:p-6">
        <div className="flex mb-6 md:mb-8 justify-start">
          <h1 className="text-2xl lg:text-4xl font-medium">Products</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
