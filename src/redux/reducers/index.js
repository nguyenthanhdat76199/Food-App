import cartList from './cartList'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    cartList: cartList,
});

export default rootReducer;