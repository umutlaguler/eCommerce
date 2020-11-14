import { persistReducer } from 'redux-persist';
import {
    FETCH_PERSON_DETAIL,
    SIGN_IN_CLICK,
    FETCH_PERSON_TARGET,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILED,
    SIGN_UP_CLICK,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS,
    SEND_PERSON_DETAIL_ClICK,
    SEND_PERSON_DETAIL_SUCCESS,
    SEND_PERSON_DETAIL_FAILED,
    LOG_OUT_CLICK, LOG_OUT_SUCCESS, SIGN_IN_SUCCESS_PERSON
} from '../actions/authenticationAction';

const INITIAL_STATE = {
    userToken: "",
    isAuthLogin: false,
    isMainLogin: false,
    personDetailValues: {},
    authButtonSpinner: false,
    personTargetValue: [],
    fullNameErrorValue: "",
    emailErrorValue: "",
    passwordErrorValue: "",
    genderErrorValue: "",
    ageErrorValue: "",
    sizeErrorValue: "",
    kgErrorValue: "",
    targetErrorValue: "",
    authSpinnerStatus: false,
    dietCount: 0
}

const AuthenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SIGN_UP_CLICK:
            return {
                ...state
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state

            }
        case SIGN_UP_FAILED:
            return {
                ...state,
                fullNameErrorValue: action.payload.full_name,
                emailErrorValue: action.payload.email,
                passwordErrorValue: action.payload.password,
            }
            default:
                return state;
    
          }
        }
        export default persistReducer(persistConfig, AuthenticationReducer);
