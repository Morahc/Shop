import { useReducer } from 'react';
import ProductContext from './ProductContext';
import productReducer from './productReducer';
import products from '../../data/products';

const ProductState = ({ children }) => {
  const initialState = {
    loading: false,
    error: null,
    products: products,
    isFeatured: products.filter(product => product.isFeatured),
    product: {},
  };
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProduct = id => {
    dispatch({
      type: 'PRODUCT_REQUEST',
    });
    const product = state.products.find(product => product.id === id);
    dispatch({
      type: 'PRODUCT_SUCCESS',
      payload: product,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        isFeatured: state.isFeatured,
        product: state.product,
        getProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
