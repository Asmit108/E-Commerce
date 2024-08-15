
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_REQUEST, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS } from "./ActionType"
const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return { ...state, loading: true, error: null }
        case UPDATE_PRODUCT_REQUEST:
            return { ...state, loading: true, error: null }
        case DELETE_PRODUCT_REQUEST:
            return { ...state, loading: true, error: null }
        case CREATE_PRODUCT_REQUEST:
            return { ...state, loading: true, error: null }

        case FIND_PRODUCTS_SUCCESS:
            return { ...state, loading: false, error: null, products: action.payload.content }
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload }
        case UPDATE_PRODUCT_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload }
        case DELETE_PRODUCT_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload }
        case CREATE_PRODUCT_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload }

        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case UPDATE_PRODUCT_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case DELETE_PRODUCT_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case CREATE_PRODUCT_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}
