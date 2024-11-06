import axios from "axios";
import { API_BASE_URL, api } from "../../config/apiConfig";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const token = localStorage.getItem("jwt");
const registerRequest = () => ({ type: REGISTER_REQUEST })
const registerSuccess = (jwt) => ({ type: REGISTER_SUCCESS, payload: jwt })
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error })

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest())

    try {
        const response = await api.post(`${API_BASE_URL}/api/auth/signup`, userData)
        console.log(response);
        const jwt = response.data.jwt;
        const role = response.data.role;
        if (jwt && role) {
            localStorage.setItem("jwt", jwt)
            localStorage.setItem("role", role)
        }

        dispatch(registerSuccess(jwt))
    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}


const loginRequest = () => ({ type: LOGIN_REQUEST })
const loginSuccess = (jwt) => ({ type: LOGIN_SUCCESS, payload: jwt })
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })

export const login = (userData) => async (dispatch) => {
    console.log("login");
    dispatch(loginRequest())
    try {
        const response = await api.post(`${API_BASE_URL}/api/auth/signin`, userData)
        const jwt = response.data.jwt;
        const role = response.data.role;
        if (jwt && role) {
            localStorage.setItem("jwt", jwt)
            localStorage.setItem("role", role)
        }
        console.log(jwt)
        dispatch(loginSuccess(jwt))
    } catch (error) {
        dispatch(loginFailure(error.message))
    }
}

const getUserRequest = () => ({ type: GET_USER_REQUEST })
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user })
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error })

export const getUser = () => async (dispatch) => {
    dispatch(getUserRequest())
    try {
        const response = await api.get(`${API_BASE_URL}/api/users/profile`)
        const user = response.data;
        console.log("user", user)
        dispatch(getUserSuccess(user))
    } catch (error) {
        dispatch(getUserFailure(error.message))
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT, payload: null });
    localStorage.clear();
}
