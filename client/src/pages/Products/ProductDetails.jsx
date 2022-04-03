import { useContext, useEffect,useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import ProductContext from '../../context/product/ProductContext';
import AuthContext from '../../context/auth/AuthContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(0)
  const { product, getProduct } = useContext(ProductContext);
  const { addToCart, userInfo } = useContext(AuthContext);

  useEffect(() => {
    getProduct(Number(id));
  }, [id]);

  const handleAddToCart = () => {
    if(!userInfo) {
      return toast('Please login to add to cart');
    }
    addToCart({...product, qty: qty});
  }

  return (
    <main className='pt-20 pb-6 px-6'>
      <div className='grid grid-cols-1 md:grid-cols-4 place-items-center'>
        <div className='md:col-span-2 w-full'>
          <img src={`../${product.image}`} alt={product.productName} />
        </div>
        <div className='w-full p-4 space-y-4'>
          <h2>{product.productName}</h2>
          <p>Price: &#8358;{product.price}</p>
          <p className='whitespace-pre-line'>{product.Description}</p>
        </div>
        <div className='w-full p-4 flex flex-col items-center space-y-6 bg-slate-100'>
          <div className='flex justify-between w-full px-6'>
            <span>Price:</span>
            <span>&#8358;{product.price}</span>
          </div>
          <div className='flex justify-between w-full px-6'>
            <span>Status:</span>
            <span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
          </div>
          <div className='flex justify-between items-center w-full px-6'>
            <p>Quality:</p>
            <select
              className='bg-gray-200 p-2'
              disabled={product.countInStock === 0 ? true : false}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
          <button className='button w-full' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
