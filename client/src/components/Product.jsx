import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import AuthContext from '../context/auth/AuthContext';

const Product = ({ product }) => {
  const { addToCart, userInfo } = useContext(AuthContext);

  const handleAddToCart = () => {
    if(!userInfo) {
      return toast('Please login to add to cart');
    }
    addToCart({...product, qty: 1});
  };

  return (
    <div className='w-full border-2 p-4'>
      <div className='flex flex-col items-center h-full w-full text-center'>
        <div className='h-min-2/3'>
          <Link to={`/products/${product.id}`}>
            <img className='h-full w-full' src={product.image} alt={product.productName} />
          </Link>
        </div>
        <div className='flex flex-col items-center space-y-2 py-2 h-auto'>
          <p className='font-semibold line-clamp-2'>{product.productName}</p>
          <p>&#8358;{product.price}</p>
          <button className='button-sm' onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
