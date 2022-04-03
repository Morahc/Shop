import { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import users from '../../data/users';

const AuthState = ({ children }) => {
  const initialState = {
    loading: false,
    error: null,
    userInfo: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loginUser = (formData) => {
    try {
      dispatch({ type: 'USER_LOGIN_REQUEST' });

      const user = users.find((user) => {
        return user.email === formData.email && user.password === formData.password;
      });
      if (user) {
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: user });
      } else {
        dispatch({ type: 'USER_LOGIN_FAIL', payload: 'Invalid credentials' });
      }
    } catch (error) {
      dispatch({
        type: 'USER_LOGIN_FAIL',
        payload: error,
      });
    }
  };

  const registerUser = (formData) => {
    try {
      dispatch({ type: 'USER_REGISTER_REQUEST' });

      const user = users.find((user) => {
        user.email === formData.email;
      });
      if (user) {
        dispatch({
          type: 'USER_REGISTER_FAIL',
          payload: 'Email already exists',
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
        dispatch({ type: 'USER_REGISTER_SUCCESS', payload: newUser });
      }
    } catch (error) {
      dispatch({
        type: 'USER_REGISTER_FAIL',
        payload: error,
      });
    }
  };

  const logoutUser = () => {
    dispatch({ type: 'USER_LOGOUT' });
  };

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
