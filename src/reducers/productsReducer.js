import {
    FETCH_CATEGORIES,
    FETCH_SUB_CATEGORIES,
    FETCH_PRODUCTS,
    ADD_TO_CART
} from '../actions/productsAction'
const INITIAL_STATE =  {
    categoriesValue: [],
    subCategoriesValue: [],
    productsValue: [],
    cat_id: "",
    products: [],
}
export default ( state = INITIAL_STATE, action) => {
    switch (action.type){
        case FETCH_CATEGORIES:
            return {
                ...state,
                categoriesValue: action.payload.data,
                cat_id: action.payload.cat_id,       
             }
        case FETCH_SUB_CATEGORIES:
            return {
                ...state,
                subCategoriesValue: action.payload,
            }
        case FETCH_PRODUCTS:
            return {
                ...state,
                productsValue: action.payload
            }
        case ADD_TO_CART:
            return { 
                ...state,
                products: state.products.concat(action.payload)
            }
        default:
            return state;
        }
    }