import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/Products/ProductDetails';
import Home from './pages/Home';
import Layout from './components/Layout';
import Cart from './pages/Cart';
import About from './pages/About';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='about' element={<About />} />
        <Route path='cart' element={<Cart />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
};

export default App;
