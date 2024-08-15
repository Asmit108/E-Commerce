import { api } from "../../config/apiConfig";
import { CANCEL_ORDER_FAILURE, CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS, CONFIRM_ORDER_FAILURE, CONFIRM_ORDER_REQUEST, CONFIRM_ORDER_SUCCESS, CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVER_ORDER_FAILURE, DELIVER_ORDER_REQUEST, DELIVER_ORDER_SUCCESS, GET_ALL_ORDERS_FAILURE, GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_HISTORY_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

export const createOrder=(reqData)=>async(dispatch)=>{

    dispatch({type:CREATE_ORDER_REQUEST})
    try {
        const {data}=await api.post(`/api/orders`,reqData);
        console.log(data);
         dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
    } catch (error) {
         dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})
    }
}

export const getOrderById=(orderId)=>async(dispatch)=>{

    dispatch({type:GET_ORDER_BY_ID_REQUEST})
    try {
        const {data}=await api.get(`/api/orders/${orderId}`)
        console.log(data)
         dispatch({type:GET_ORDER_BY_ID_SUCCESS,payload:data})
    } catch (error) {
         dispatch({type:GET_ORDER_BY_ID_FAILURE,payload:error.message})
    }
}

export const getOrderHistory=()=>async(dispatch)=>{

    dispatch({type:GET_ORDER_HISTORY_REQUEST})
    try {
        const {data}=await api.get(`/api/orders/user`);
        console.log(data);
        dispatch({type:GET_ORDER_HISTORY_SUCCESS,payload:data})
    } catch (error) {
         dispatch({type:GET_ORDER_HISTORY_FAILURE,payload:error.message})
    }
}

export const getAllOrders=()=>async(dispatch)=>{

    dispatch({type:GET_ALL_ORDERS_REQUEST})
    try {
        const {data}=await api.get(`/api/admin/orders`);
        dispatch({type:GET_ALL_ORDERS_SUCCESS,payload:data})
    } catch (error) {
         dispatch({type:GET_ALL_ORDERS_FAILURE,payload:error.message})
    }
}

export const confirmOrder=(orderId)=>async(dispatch)=>{

    dispatch({type:CONFIRM_ORDER_REQUEST})
    try {
        const {data}=await api.put(`/api/admin/orders/${orderId}/confirm`);
        dispatch({type:CONFIRM_ORDER_SUCCESS,payload:data})
    } catch (error) {
         dispatch({type:CONFIRM_ORDER_FAILURE,payload:error.message})
    }
}

export const shipOrder=(orderId)=>async(dispatch)=>{

    dispatch({type:SHIP_ORDER_REQUEST})
    try {
        const {data}=await api.put(`/api/admin/orders/${orderId}/ship`);
        dispatch({type:SHIP_ORDER_SUCCESS,payload:data})
    } catch (error) {
         dispatch({type:SHIP_ORDER_FAILURE,payload:error.message})
    }
}

export const deliverOrder=(orderId)=>async(dispatch)=>{

    dispatch({type:DELIVER_ORDER_REQUEST})
    try {
        const {data}=await api.put(`/api/admin/orders/${orderId}/deliver`);
        dispatch({type:DELIVER_ORDER_SUCCESS,payload:data})
    } catch (error) {
         dispatch({type:DELIVER_ORDER_FAILURE,payload:error.message})
    }
}

export const cancelOrder=(orderId)=>async(dispatch)=>{

    dispatch({type:CANCEL_ORDER_REQUEST})
    try {
        const {data}=await api.put(`/api/admin/orders/${orderId}/cancel`);
        dispatch({type:CANCEL_ORDER_SUCCESS,payload:data})
    } catch (error) {
         dispatch({type:CANCEL_ORDER_FAILURE,payload:error.message})
    }
}

export const deleteOrder=(orderId)=>async(dispatch)=>{

    dispatch({type:DELETE_ORDER_REQUEST})
    try {
        const {data}=await api.put(`/api/admin/orders/${orderId}/delete`);
        dispatch({type:DELETE_ORDER_SUCCESS,payload:data})
    } catch (error) {
         dispatch({type:DELETE_ORDER_FAILURE,payload:error.message})
    }
}





