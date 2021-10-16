const initialState = {
  list: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const newProduct = {
        id : action.payload.id,
        name : action.payload.name,
        price : action.payload.price,
        img : action.payload.img,
        About : action.payload.About,
        number : 1,
      }
      const newList = [...state.list];
      newList.push(newProduct)
      const total_price = newList.reduce((acc, item) => acc + (item.price * item.number), 0);
      return {
        ...state,
        totalPrice: total_price,
        list: newList,
      }
    }

    case 'REMOVE_PRODUCT': {
      
      const newList = [...state.list];
      for( var i = 0; i < newList.length; i++){ 
    
        if ( newList[i].id === action.payload) { 
            newList.splice(i, 1); 
        }
    
      }
      const total_price = newList.reduce((acc, item) => acc + (item.price * item.number), 0);
      return {
        ...state,
        totalPrice: total_price,
        list: newList,
      }
    }

    case 'INCREASE': {
      state.list.forEach(element => {
        if (element.id === action.payload) {
          element.number += 1;
        }
      });
      const total_price = state.list.reduce((acc, item) => acc + (item.price * item.number), 0);
      return {
        ...state,
        totalPrice: total_price,
      }
    }

    case 'DECREASE': {
      state.list.forEach(element => {
        if (element.id === action.payload) {
          element.number -= 1;
        }
      });
      const total_price = state.list.reduce((acc, item) => acc + (item.price * item.number), 0);
      return {
        ...state,
        totalPrice: total_price,
      }
    }

    default:
      return state;
  }
};

export default cartReducer;
