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
        userInfo: null,
      };
    default:
      return state;
  }
};
