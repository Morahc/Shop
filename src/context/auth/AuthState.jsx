import { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import users from "../../data/users";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const AuthState = ({ children }) => {
  const initialState = {
    error: null,
    userInfo: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loginUser = (formData) => {
    console.log(formData);
    const user = users.find((user) => {
      return user.email === formData.email && user.password === formData.password;
    });
    if (user) {
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    } else {
      dispatch({ type: "USER_LOGIN_FAIL", payload: "Invalid credentials" });
    }
  };

  const registerUser = (formData) => {
    const user = users.find((user) => {
      user.email === formData.email;
    });
    if (user) {
      dispatch({
        type: "USER_REGISTER_FAIL",
        payload: "Email already exists",
      });
    } else {
      const newUser = {
        id: users.length + 1,
        name: formData.name,
        email: formData.email,
        password: formData.password,
        cart: [],
      };
      users.push(newUser);
      dispatch({ type: "USER_REGISTER_SUCCESS", payload: newUser });
    }
  };

  const logoutUser = () => {
    dispatch({ type: "USER_LOGOUT" });
  };

  const addToCart = (product) => {
    const exists = state.userInfo.cart.find((item) => item.id === product.id);
    if (exists) {
      state.userInfo.cart.map((item) => {
        if (item.id === product.id) {
          item.qty += 1;
        }
        return item;
      });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }

    toast(
      <div className="text-black">
        <div className="font-medium flex gap-2 items-center">
          <FaCheckCircle className="text-green-500" />
          <h2>Success</h2>
        </div>
        <p className="text-xs">Item added to cart</p>
      </div>
    );
  };

  const removeFromCart = (product) => {
    state.userInfo.cart.map((item) => {
      if (item.id === product.id) {
        item.qty -= 1;
        if (item.qty === 0) {
          state.userInfo.cart.splice(state.userInfo.cart.indexOf(item), 1);
        }
      }
      return item;
    });
    toast(
      <div className="text-black">
        <div className="font-medium flex gap-2 items-center">
          <FaCheckCircle className="text-green-500" />
          <h2>Success</h2>
        </div>
        <p className="text-xs">Product removed from cart</p>
      </div>
    );
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo: state.userInfo,
        error: state.error,
        loading: state.loading,
        loginUser,
        registerUser,
        logoutUser,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
