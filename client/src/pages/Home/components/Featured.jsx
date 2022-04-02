import React from 'react';
import Product from '../../../components/Product';

const Featured = () => {
  return (
    <section className='px-6'>
      <h1 className='mb-8 text-center'>Featured Products</h1>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Featured;
