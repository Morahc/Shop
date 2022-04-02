import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <div className='flex flex-col items-center border-2 h-80'>
        <div className='h-2/3'>
          <Link to='/products/1'>
            <img
              className='h-full'
              src='https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/M/193053_1644328997.jpg'
              alt='product'
            />
          </Link>
        </div>
        <div className='space-y-2 text-center'>
          <h2 className='font-semibold text-lg'>Product name</h2>
          <p>Price</p>
          <button className='button-sm'>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
