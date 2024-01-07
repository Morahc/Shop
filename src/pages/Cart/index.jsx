import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import AuthContext from "../../context/auth/AuthContext";

const Cart = () => {
  const navigate = useNavigate();
  const { userInfo, removeFromCart, clearCart } = useContext(AuthContext);

  const onCheckOut = () => {
    clearCart();
  };

  const total = userInfo.cart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  return (
    <div className="container">
      {userInfo.cart.length == 0 ? (
        <section className="flex flex-col justify-center h-screen">
          <div className="text-center bg-slate-100 flex flex-col items-center justify-center md:w-1/3 h-80 space-y-2">
            <FaShoppingCart className="text-2xl h-24 w-24" />
            <p className="font-bold">Your cart is empty.</p>
            <p>You have not added any item to your cart.</p>
          </div>
        </section>
      ) : (
        <section className="lg:h-[calc(100vh-2rem)] mt-16 lg:mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-8">
            <div className="col-span-4 w-full overflow-x-auto space-y-2 lg:space-y-6">
              <h2 className="text-2xl lg:text-4xl font-medium">Shopping cart</h2>
              <table className="text-sm text-center w-full">
                <thead>
                  <tr>
                    <th className="text-left p-4">Item Name</th>
                    <th>Quantity</th>
                    <th>Item Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {userInfo.cart.map((item) => (
                    <tr key={item.id}>
                      <td className="text-left p-4 whitespace-nowrap">{item.productName}</td>
                      <td className="p-4">{item.qty}</td>
                      <td className="p-4">&#8358;{item.price}</td>
                      <td className="p-4">
                        <div
                          className="grid place-items-center"
                          onClick={() => {
                            removeFromCart(item);
                            navigate("/cart");
                          }}
                        >
                          <FaTrashAlt className="text-red-500" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="lg:col-span-2 space-y-2 lg:space-y-4">
              <h3 className="text-xl lg:text-3xl font-medium">Order Summary</h3>

              <div className="w-full p-4 flex flex-col items-center space-y-6 bg-slate-100">
                <div className="flex justify-between w-full px-6">
                  <span>Total Price:</span>
                  <span>&#8358;{total}</span>
                </div>
                <div className="flex justify-between w-full px-6">
                  <span>Subprice:</span>
                  <span>&#8358;{total}</span>
                </div>
                <button onClick={onCheckOut} className="button bg-primary w-full">Checkout</button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
