const initialState = {
  userInfo: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      const newUser = {
        user : action.payload.user,
        pass : action.payload.pass,
        name : action.payload.name,
        img : action.payload.img,
      }
      return{
        ...state,
        userInfo : newUser
      }
    }
    default:
      return state;
  }
};

export default userReducer;
