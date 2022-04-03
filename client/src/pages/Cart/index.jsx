import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import AuthContext from '../../context/auth/AuthContext';

const Cart = () => {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [userInfo, navigate]);

  const total = userInfo.cart.reduce((acc, curr) =>{
    return acc + curr.price * curr.qty;
  }, 0);
  return (
    <>
      {userInfo.cart.length == 0 ? (
        <section className='flex flex-col items-center justify-center h-screen'>
          <div className='bg-slate-100 flex flex-col items-center justify-center md:w-1/3 h-80 space-y-2'>
            <FaShoppingCart className='text-2xl h-24 w-24' />
            <p className='font-bold'>Your cart is empty.</p>
            <p>You have not added any item to your cart.</p>
          </div>
        </section>
      ) : (
        <section className='h-screen mt-20 px-4'>
          <div className='flex justify-center flex-wrap space-y-12 md:space-y-0 space-x-4'>
            <div className='basis-full md:basis-4/6 w-full overflow-x-auto'>
            <h2 className='mb-8'>Shopping cart</h2>
              <table className='text-sm text-center'>
                <thead>
                  <tr>
                    <th className='text-left'>Item Name</th>
                    <th>Quantity</th>
                    <th>Item Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userInfo.cart.map((item) => (
                    <tr key={item.id}>
                      <td className='text-left'>{item.productName}</td>
                      <td>{item.qty}</td>
                      <td>&#8358;{item.price}</td>
                      <td>
                        <div className='grid place-items-center'>
                          <FaTrashAlt />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='basis-full md:basis-1/6'>
              <h3 className='mb-8'>Order Summary</h3>
              <div className='border'>
                <div className='w-full p-4 flex flex-col items-center space-y-6 bg-slate-100'>
                  <div className='flex justify-between w-full px-6'>
                    <span>Total Price:</span>
                    <span>&#8358;{total}</span>
                  </div>
                  <div className='flex justify-between w-full px-6'>
                    <span>Subprice:</span>
                    <span>&#8358;{total}</span>
                  </div>
                  <button className='button w-full'>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
