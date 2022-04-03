import Product from '../../components/Product';
import { useContext } from 'react';
import ProductContext from '../../context/product/ProductContext';

const Shop = () => {
  const { products } = useContext(ProductContext);
  
  return (
    <section>
      <div className='my-12 p-6'>
        <div className='flex mb-6 md:mb-8 justify-start'>
         <h1>Products</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
