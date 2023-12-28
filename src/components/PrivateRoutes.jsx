import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { userInfo } = useContext(AuthContext);

  if (!userInfo) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoutes;
