import { api } from "../../config/apiConfig";
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCTS_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_REQUEST } from "./ActionType";

export const findProducts=(reqData)=>async(dispatch)=>{
    
    dispatch({type:FIND_PRODUCTS_REQUEST})
    const {colors,sizes,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize}=reqData;
    try {
        console.log(reqData);
        const {data}=await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}
         &minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}
         &pageSize=${pageSize}`)
         console.log(data);
         dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
         dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }
}

export const findProductById=(reqData)=>async(dispatch)=>{

    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const productId=reqData;
    try {
        console.log(productId);
        const {data}=await api.get(`/api/products/id/${productId}`)
         dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    } catch (error) {
         dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}

export const updateProduct = (reqData) => async(dispatch) => {
    dispatch({ type: 'UPDATE_PRODUCT_REQUEST' });
    try {
      const {data} = await api.put(`/api/admin/products/${reqData.productId}`,reqData.data)
      dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'UPDATE_PRODUCT_FAILURE', payload: error });
    }
}

export const deleteProduct = (reqData) => async(dispatch) => {
    dispatch({ type: 'DELETE_PRODUCT_REQUEST' });
    try {
      const {data} = await api.delete(`/api/admin/products/${reqData.productId}`)
      dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'DELETE_PRODUCT_FAILURE', payload: error });
    }
}

export const createProduct = (reqData) => async(dispatch) => {
    dispatch({ type: 'CREATE_PRODUCT_REQUEST' });
    try {
      const {data} = await api.post(`/api/admin/products`,reqData)
      dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'DELETE_PRODUCT_FAILURE', payload: error });
    }
}






