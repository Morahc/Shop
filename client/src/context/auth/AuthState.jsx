import { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';

const AuthState = ({children}) => {
  const initialState = {
    loading: false,
    error: null,
    userInfo: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loginUser = async ({ email, password }) => {
    try {
      dispatch({ type: 'USER_LOGIN_REQUEST' });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post('/user/login', { email, password }, config);

      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
    } catch (error) {
      dispatch({
        type: 'USER_LOGIN_FAIL',
        payload: error,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo: state.userInfo,
        error: state.error,
        loading: state.loading,
        loginUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
