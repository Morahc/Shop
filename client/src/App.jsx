import { Route, Routes, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/Products/ProductDetails';
import Home from './pages/Home';
import Layout from './components/Layout';
import Cart from './pages/Cart';
import About from './pages/About';
import PrivateRoutes from './components/PrivateRoutes';
import AuthRoutes from './components/AuthRoutes';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='about' element={<About />} />
        <Route
          path='cart'
          element={
            <PrivateRoutes>
              <Cart />
            </PrivateRoutes>
          }
        />
      </Route>

      <Route
        path='/login'
        element={
          <AuthRoutes>
            <Login />
          </AuthRoutes>
        }
      />
      <Route
        path='/register'
        element={
          <AuthRoutes>
            <Register />
          </AuthRoutes>
        }
      />
    </Routes>
  );
};

export default App;
