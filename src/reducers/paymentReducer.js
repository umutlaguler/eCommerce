import { persistReducer } from 'redux-persist';
import {
    PAYMENT_CLICK,
    PAYMENT_SUCCESS,
    PAYMENT_FAILED,
    PAYMENT_PROCESS_MODAL_STATUS
} from '../actions/paymentAction';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {
    paymentProcessModalStatusValue: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case PAYMENT_PROCESS_MODAL_STATUS:
            return {
                ...state,
                paymentProcessModalStatusValue: action.payload
            }
            default:
                return state;
}}