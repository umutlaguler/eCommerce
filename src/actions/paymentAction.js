import axios from "axios";
import { API_BASE } from "../components/config/env";

export const PAYMENT_CLICK   = "payment_click";
export const PAYMENT_SUCCESS   = "payment_success";
export const PAYMENT_FAILED   = "payment_failed";
export const PAYMENT_PROCESS_MODAL_STATUS = "payment_process_modal_status";

export const payment = (cardOwnerName, cardNumberValue, selectedMonthValue, selectedYearValue, cardCVVValue) => {
    let data = JSON.stringify({ cardOwnerName: cardOwnerName, cardNumberValue: cardNumberValue, selectedMonthValue: selectedMonthValue, selectedYearValue: selectedYearValue, cardCVVValue: cardCVVValue})
    return dispatch => {
        dispatch({
            type: PAYMENT_CLICK
        })
        console.log("data", data)
        axios({
            method: "post",
            // url: `${API_BASE}/`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            // console.log("result", result.data)
            if(result.data.data) {
                dispatch({
                    type: PAYMENT_SUCCESS,
                    payload: result.data.data
                })
                Actions.index()
            }
        }).catch((err) => {
            dispatch({
                type: PAYMENT_FAILED,
                payload: err.response.data.errors
            })
        })
    }
}

export const paymentProcessModalStatus = (value) => {
    return {
        type: PAYMENT_PROCESS_MODAL_STATUS,
        payload: value
    }
}