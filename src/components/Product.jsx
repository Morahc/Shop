import { Link } from "react-router-dom";
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
            <MdError className='text-yellow-500' />
            <h2>Error</h2>
          </div>
          <p className="text-xs">Please login to add to cart</p>
        </div>
      );
    }
    addToCart({ ...product, qty: 1 });
  };

  return (
    <div className="w-full p-2 lg:p-4 rounded-md hover:outline outline-1 outline-primary">
      <div className="flex flex-col items-center gap-2 lg:gap-4 h-full w-full">
        <div className="lg:h-48">
          <Link to={`/products/${product.id}`}>
            <img className="max-h-full max-w-full" src={product.image} alt={product.productName} />
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-xs md:text-sm line-clamp-2">{product.productName}</p>
          <p className="text-xs md:text-sm font-light">&#8358;{product.price}</p>
          <button className="self-center button-sm lg:py-2 bg-primary" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
