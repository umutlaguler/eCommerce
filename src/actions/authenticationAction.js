import axios from "axios";
import { API_BASE } from "../components/config/env";
import { Actions } from "react-native-router-flux";
import { LogBox } from "react-native";

export const SIGN_UP_CLICK   = "sign_up_click";
export const SIGN_UP_SUCCESS = "sign_up_success";
export const SIGN_UP_FAILED  = "sign_up_failed";

export const SIGN_IN_CLICK        = "sign_in_click";
export const SIGN_IN_SUCCESS      = "sign_in_success";
export const SIGN_IN_FAILED       = "sign_in_failed";

export const signUp = (fullname, phone, date, email, password, gender) => {
    let data = JSON.stringify({ fullname: fullname, phone: phone, date: date, email: email, password: password, gender: gender})
    return dispatch => {
        dispatch({
            type: SIGN_UP_CLICK
        })
        console.log("data", data)
        axios({
            method:"POST",
            url: `${API_BASE}/users/signup`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            console.log("başarılı mı ");
            console.log("result", result.data)
            if(result.data.data) {
                dispatch({
                    type: SIGN_UP_SUCCESS,
                    payload: result.data.data
                })
                Actions.login()
            }
        }).catch((err) => {
            console.log(err.response.data.errors);
            dispatch({
                type: SIGN_UP_FAILED,
                payload: err.response.data.errors
            })
        })
    }
}

export const signIn = (phone, password) => {
    let data = JSON.stringify({ phone: phone, password: password })
    return dispatch => {
        console.log("tıklandııı");
        dispatch({
            type: SIGN_IN_CLICK,
        })
        axios({
            method: "POST",
            url: `${API_BASE}/users/signin`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            console.log("result", result.data.data)
            if(result.data.status == "Success") {
                console.log("giriş başarılı",result.data.data);
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: result.data.data
                })
                Actions.index()
            } else {
                dispatch({
                    type: SIGN_IN_FAILED,
                    payload: result.data.message
                })
            }
        }).catch((err) => {
            console.log(err.response.data.errors);
            dispatch({
                type: SIGN_IN_FAILED,
                payload: err.response.data.errors ? err.response.data.errors:null
            })})
        }
}