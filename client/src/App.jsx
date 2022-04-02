import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/Products/ProductDetails';
import Home from './pages/Home';
import Layout from './components/Layout';
import Cart from './pages/Cart';
import AuthState from './context/auth/authState';

const App = () => {
  return (
    <AuthState>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='cart' element={<Cart />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </AuthState>
  );
};

export default App;
