import React from 'react';
import { useContext } from 'react';
import Product from '../../../components/Product';
import ProductContext from '../../../context/product/ProductContext';

const Featured = () => {
  const { isFeatured } = useContext(ProductContext);
  return (
    <section className='px-6'>
      <h1 className='mb-8 text-center'>Featured Products</h1>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
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
