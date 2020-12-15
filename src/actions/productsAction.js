import axios from "axios";
import { API_BASE } from "../components/config/env";

export const FETCH_CATEGORIES       = "fetch_categories";
export const FETCH_SUB_CATEGORIES   = "fetch_sub_categories";
export const FETCH_PRODUCTS         = "fetch_products";
export const ADD_TO_CART            = "add_to_cart";

export const fetchCategories = (item) => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/products/Cat`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            console.log("kategoriler geldi canim", item)
            dispatch({
                type: FETCH_CATEGORIES,
                payload: {data: result.data.data, cat_id:item}
            })
        }).catch((err) => {
            console.log("kategori gelmedi canim");
            console.log(err.response)
        })
    }
}

export const fetchSubCategories = (cat_id) => {
    console.log("YETER: ",  cat_id)
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/products/SubCat/${cat_id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            console.log("alt kategoriler geldi", result.data.data)
            dispatch({
                type: FETCH_SUB_CATEGORIES,
                payload: result.data.data
            })
        }).catch((err) => {
            console.log("alt kategoriler gelmedi canim");
            console.log(err.response)
        })
    }
}

export const fetchProducts = (sub_cat_id) => {
    console.log("YETER: ",  sub_cat_id)
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/products/SubCatTab/${sub_cat_id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            console.log("alt kategoriler geldi", result.data.data)
            dispatch({
                type: FETCH_PRODUCTS,
                payload: result.data.data
            })
        }).catch((err) => {
            console.log("alt kategoriler gelmedi canim");
            console.log(err.response)
        })
    }
}

export const addToCart = (item) =>{
    console.log("ürün: ", item)
    return {
        type: ADD_TO_CART,
        payload: item
      };
}