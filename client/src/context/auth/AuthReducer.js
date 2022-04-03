export default (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        userInfo: action.payload,
      };
    case 'USER_LOGIN_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'USER_REGISTER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_REGISTER_SUCCESS':
      return {
        ...state,
        userInfo: action.payload,
      };
    case 'USER_REGISTER_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        userInfo: null,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          cart: [...state.userInfo.cart, action.payload],
        },
      };
    default:
      return state;
  }
};
