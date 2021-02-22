import { combineReducers } from "redux";
import authenticationReducer from '../reducers/authenticationReducer';
import productsReducer from '../reducers/productsReducer';
import paymentReducer from '../reducers/paymentReducer';

export default combineReducers({
    authenticationReducer,
    productsReducer,
    paymentReducer
})