import {
    FETCH_CATEGORIES,
    FETCH_SUB_CATEGORIES,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_DETAIL,
    ADD_TO_CART,
    REMOVE_TO_CART,
    REMOVE_ALL_CART
} from '../actions/productsAction'
const INITIAL_STATE =  {
    categoriesValue: [],
    subCategoriesValue: [],
    productsValue: [],
    productsDetailValue: [],
    cat_id: "",
    productsId:"",
    products: [],
    productsLength:0,
    piecesOfProducts:0
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
        case FETCH_PRODUCTS_DETAIL:
            return{
                ...state,
                productsDetailValue : action.payload.data,
                productsId: action.payload.productsId,  
            }
        case ADD_TO_CART:
            console.log("sepetin uzunluğu ", state.products.length);
            return { 
                ...state,
                products: state.products.concat(action.payload), 
                piecesOfProducts:state.products.length+1
            }
        case REMOVE_TO_CART:
            return {
                ...state,
               products: state.products.filter(products => products.id !== action.payload.id)
            }
        case REMOVE_ALL_CART:
            console.log("tamamını silme",action.payload);
            return {
                ...state,
                products: state.products.splice(action.payload,0)
            }
        default:
            return state;
        }
    }