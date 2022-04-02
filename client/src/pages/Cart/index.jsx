import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const cart = false;
  return (
    <>
      {cart ? (
        <section className='flex flex-col items-center justify-center h-screen'>
          <div className='bg-slate-100 flex flex-col items-center justify-center md:w-1/3 h-80 space-y-2'>
            <FaShoppingCart className='text-2xl h-24 w-24' />
            <p className='font-bold'>Your cart is empty.</p>
            <p>You have not added any item to your cart.</p>
          </div>
        </section>
      ) : (
        <section className='h-screen mt-20 px-4'>
          <div className='flex justify-center flex-wrap space-y-12 md:space-y-0'>
            <div className='basis-full md:basis-4/6 w-full overflow-x-auto'>
              <h2 className='mb-8'>Shopping cart</h2>
              <table className='whitespace-nowrap text-sm'>
                <thead className='text-left'>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Item Price</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, itaque.</td>
                    <td>0</td>
                    <td>0</td>
                    <td>remove</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='basis-full md:basis-1/6'>
              <h3 className='mb-4'>Order Summary</h3>
              <div className='border'>
                <div className='w-full p-4 flex flex-col items-center space-y-6 bg-slate-100'>
                  <div className='flex justify-between w-full px-6'>
                    <span>Price:</span>
                    <span>0</span>
                  </div>
                  <div className='flex justify-between w-full px-6'>
                    <span>Status:</span>
                    <span>In stock</span>
                  </div>
                  <div className='flex justify-between items-center w-full px-6'>
                    <p>Quality:</p>
                    <select className='bg-gray-200 p-2'>
                      {[...Array(10).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
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
