import { combineReducers } from "redux";
import authenticationReducer from '../reducers/authenticationReducer';
import productsReducer from '../reducers/productsReducer';

export default combineReducers({
    authenticationReducer,
    productsReducer,
   
})