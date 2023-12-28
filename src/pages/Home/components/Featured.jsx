import React from 'react';
import { useContext } from 'react';
import Product from '../../../components/Product';
import ProductContext from '../../../context/product/ProductContext';

const Featured = () => {
  const { isFeatured } = useContext(ProductContext);

  return (
    <section className='container space-y-3 lg:space-y-6'>
      <h1 className='text-2xl lg:text-4xl font-medium'>Products on sale!</h1>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
        {
          isFeatured.map((product) => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </section>
  );
};

export default Featured;
