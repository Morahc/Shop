import { Link } from 'react-router-dom';

const Product = ({ product }) => {

  return (
    <div className='w-full'>
      <div className='flex flex-col items-center border-2 p-4'>
        <div className='h-2/3'>
          <Link to={`/products/${product.id}`}>
            <img
              className='h-full'
              src={product.image}
              alt={product.productName}
            />
          </Link>
        </div>
        <div className='flex flex-col items-center space-y-2 px-2'>
          <p className='font-semibold line-clamp-1'>{product.productName}</p>
          <p>&#8358;{product.price}</p>
          <button className='button-sm' >Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
