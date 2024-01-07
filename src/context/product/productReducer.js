export default (state, action) => {
  switch (action.type) {
    case 'PRODUCT_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PRODUCT_SUCCESS':
      return {
        ...state,
        product: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
