import { CANCEL_ORDER_FAILURE, CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS, CONFIRM_ORDER_FAILURE, CONFIRM_ORDER_REQUEST, CONFIRM_ORDER_SUCCESS, CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVER_ORDER_FAILURE, DELIVER_ORDER_REQUEST, DELIVER_ORDER_SUCCESS, GET_ALL_ORDERS_FAILURE, GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_HISTORY_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

const initialState = {
    orders: [],
    order: null,
    loading: false,
    error: null,
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
        case GET_ORDER_BY_ID_REQUEST:
        case GET_ORDER_HISTORY_REQUEST:
            return { ...state, loading: true, error: null }
        case GET_ALL_ORDERS_REQUEST:
            return { ...state, loading: true, error: null }
        case CONFIRM_ORDER_REQUEST:
            return { ...state, loading: true, error: null }
        case SHIP_ORDER_REQUEST:
            return { ...state, loading: true, error: null }
        case DELIVER_ORDER_REQUEST:
            return { ...state, loading: true, error: null }
        case DELETE_ORDER_REQUEST:
            return { ...state, loading: true, error: null }
        case CANCEL_ORDER_REQUEST:
            return { ...state, loading: true, error: null }


        case CREATE_ORDER_SUCCESS:
            return { ...state, loading: false, error: null, order: action.payload }
        case GET_ORDER_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, order: action.payload }
        case GET_ORDER_HISTORY_SUCCESS:
            return { ...state, loading: false, error: null, orders: action.payload }
        case GET_ALL_ORDERS_SUCCESS:
            return { ...state, loading: false, error: null, orders: action.payload }
        case CONFIRM_ORDER_SUCCESS:
            return { ...state, loading: false, error: null, order: action.payload }
        case SHIP_ORDER_SUCCESS:
            return { ...state, loading: false, error: null, order: action.payload }
        case DELIVER_ORDER_SUCCESS:
            return { ...state, loading: false, error: null, order: action.payload }
        case DELETE_ORDER_SUCCESS:
            return { ...state, loading: false, error: null, order: action.payload }
        case CANCEL_ORDER_SUCCESS:
            return { ...state, loading: false, error: null, order: action.payload }


        case CREATE_ORDER_FAILURE:
        case GET_ORDER_BY_ID_FAILURE:
        case GET_ORDER_HISTORY_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case GET_ALL_ORDERS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case CONFIRM_ORDER_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case SHIP_ORDER_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case DELIVER_ORDER_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case DELETE_ORDER_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case CANCEL_ORDER_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }

}