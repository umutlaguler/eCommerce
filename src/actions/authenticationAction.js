import axios from "axios";
import { API_BASE } from "../components/config/env";
import { Actions } from "react-native-router-flux";


export const SIGN_UP_CLICK   = "sign_up_click";
export const SIGN_UP_SUCCESS = "sign_up_success";
export const SIGN_UP_FAILED  = "sign_up_failed";

export function setSex(male, female) {
    return (dispatch) => dispatch({type: 'SETSEX', male, female})
}

export function onChangeSex() {
    return (dispatch) => dispatch({type: 'CHANGESEX'})
}

export const signUp = (full_name, email, password,phone,date) => {
    let data = JSON.stringify({ full_name: full_name, email: email, phone: phone, password: password, date: date,  })
    return dispatch => {
        dispatch({
            type: SIGN_UP_CLICK
        })
        console.log("data", data)
        axios({
            method: "post",
            url: ` http://localhost:3001/api/v1/users/signup`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            if(result.data.data) {
                dispatch({
                    type: SIGN_UP_SUCCESS,
                    payload: result.data.data
                })
                Actions.signIn()
            }
        }).catch((err) => {
            dispatch({
                type: SIGN_UP_FAILED,
                payload: err.response.data.errors
            })
        })
    }
}