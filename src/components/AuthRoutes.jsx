import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

const AuthRoutes = ({ children }) => {
  const location = useLocation();
  const { userInfo } = useContext(AuthContext);

  if (userInfo) {
    return <Navigate to='/home' state={{ from: location }} replace />;
  }
  return children;
};

export default AuthRoutes;
