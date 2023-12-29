export default (state, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      return {
        error: null,
        userInfo: action.payload,
      };
    case "USER_LOGIN_FAIL":
      return {
        userInfo: null,
        error: action.payload,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        error: null,
        userInfo: action.payload,
      };
    case "USER_REGISTER_FAIL":
      return {
        userInfo: null,
        error: action.payload,
      };
    case "USER_LOGOUT":
      return {
        error: null,
        userInfo: null,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          cart: [...state.userInfo.cart, action.payload],
        },
      };
    case "CLEAR_CART":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          cart: [],
        },
      };
    default:
      return state;
  }
};
