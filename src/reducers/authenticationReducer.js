import { persistReducer } from 'redux-persist';
import { 
    SIGN_UP_CLICK,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS,
    SIGN_IN_CLICK,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILED
} from '../actions/authenticationAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const INITIAL_STATE = {
    userToken : "",
    phoneErrorValue: "",
    passwordErrorValue: "",
    fullNameErrorValue: "",
}
const persistConfig = {
    key: "root",
    storage:AsyncStorage
};
const authenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SIGN_UP_CLICK:
            return {
                ...state
            }
        case SIGN_UP_SUCCESS:
            console.log("başarılı üye olma");
            return {
                ...state,
                fullNameErrorValue: "",
                phoneErrorValue: "",
                passwordErrorValue: "",
            }
        case SIGN_UP_FAILED:
            return {
                ...state,
                fullNameErrorValue:  action.payload.fullname,
                phoneErrorValue:  action.payload.phone,
                passwordErrorValue:action.payload.password
            }
        case SIGN_IN_CLICK:
            return {
                ...state,
            }
        case SIGN_IN_SUCCESS:
            console.log("başarılı giriş ");
            return {
                ...state,
                phoneErrorValue: "",
                passwordErrorValue: "",
            }
        case SIGN_IN_FAILED:
            console.log("hatalı giriş yapma");
            return {
                ...state,
                phoneErrorValue: action.payload != null ? action.payload.phone:null,
                passwordErrorValue: action.payload != null ? action.payload.password:"Lütfen telefon veya şifrenizi kontrol ediniz.",  
            }
            default:
                return state;
          }
        }
        export default persistReducer(persistConfig, authenticationReducer);
