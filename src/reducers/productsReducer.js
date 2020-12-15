import {
    FETCH_CATEGORIES,
    FETCH_SUB_CATEGORIES,
    FETCH_PRODUCTS,
} from '../actions/productsAction'

const INITIAL_STATE =  {
    categoriesValue: [],
    subCategoriesValue: [],
    productsValue: [],
    cat_id: "",
    cartList : []
}

export default function cartReducer(state=INITIAL_STATE, action){

    let updatedList = state.cartList;
    switch(action.type){
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
            console.log("selin icin ", action.payload)
            return {
                ...state,
                productsValue: action.payload
            }
        case 'Add':
            if (updatedList[action.payload.id]===undefined){
                updatedList[action.payload.id] = action.payload;
                updatedList[action.payload.id].count = 1;
            } else {
                updatedList[action.payload.id].count += 1;
            }
            return {
                ...state,
                cartList: updatedList
            };
            break;
        case 'Remove':
            delete(updatedList[action.payload]);
            return {
                ...state,
                cartList: updatedList
            };
            return state;
            break;
        default:
            return state;
            break;
    }
}