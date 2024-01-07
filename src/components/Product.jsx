import { toast } from "react-toastify";
import { useContext } from "react";
import { MdError } from "react-icons/md";
import AuthContext from "../context/auth/AuthContext";

const Product = ({ product }) => {
  const { addToCart, userInfo } = useContext(AuthContext);

  const handleAddToCart = () => {
    if (!userInfo) {
      return toast(
        <div className="text-black">
          <div className="font-medium flex gap-2 items-center">
            <MdError className="text-yellow-500" />
            <h2>Error</h2>
          </div>
          <p className="text-xs">Please login to add to cart</p>
        </div>
      );
    }
    addToCart({ ...product, qty: 1 });
  };

  return (
    <div className="w-full p-2 lg:p-4 border relative">
      {/* <div className="absolute -rotate-45 -right-4 -top-4 lg:-right-4 lg:-top-4 bg-yellow-400 text-white w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center">
        <span className='text-xs lg:text-sm font-extrabold'>Sale</span>
      </div> */}
      <div className="flex flex-col items-center gap-2 lg:gap-4 h-full w-full">
        <div className="lg:h-48">
          <img className="max-h-full max-w-full" src={product.image} alt={product.productName} />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-xs md:text-sm line-clamp-2">{product.productName}</p>
          <p className="text-xs md:text-sm font-light">&#8358;{product.price}</p>
          <button
            className="self-center font-bold button-sm lg:py-2 bg-secondary"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
