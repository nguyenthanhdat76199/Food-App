import cartList from './cartList'
import user from './user'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    cartList: cartList,
    user: user,
});

export default rootReducer;