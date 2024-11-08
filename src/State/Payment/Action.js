import { api } from "../../config/apiConfig";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType";


export const createPayment = (orderId) => async(dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST });
    try {
      console.log(1)
      const {data} = await api.post(`/api/payments/${orderId}`)
      dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data });
      console.log(2)
      console.log(data)
      localStorage.setItem("paymentLinkId",data.paymentLinkId)
      if(data.payment_link_url){
        window.location.href=data.payment_link_url
      }
    } catch (error) {
      dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
    }
}
export const updatePaymentInformation = (reqData) => async(dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });
    try {
      const {data} = await api.post(`/api/payments?paymentId=${reqData.paymentId}&orderId=${reqData.orderId}`)
      dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
    }
}
