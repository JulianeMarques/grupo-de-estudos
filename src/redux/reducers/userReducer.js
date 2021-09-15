const initialState = {
  email: ''
};

const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'REGISTER_USER':
      return {...state, email: payload}
    default:
      return state;
  }
}

export default userReducer;
