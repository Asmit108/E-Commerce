import { API_BASE_URL, api } from "../../config/apiConfig";
import { CHANGE_ROLE_FAILURE, CHANGE_ROLE_REQUEST, CHANGE_ROLE_SUCCESS, GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS} from "./ActionType";

const getAllUsersRequest = () => ({ type: GET_ALL_USERS_REQUEST })
const getAllUsersSuccess = (users) => ({ type: GET_ALL_USERS_SUCCESS, payload: users })
const getAllUsersFailure = (error) => ({ type: GET_ALL_USERS_FAILURE, payload: error })

export const getAllUsers = () => async (dispatch) => {
    dispatch(getAllUsersRequest())
    try {
        const response = await api.get(`${API_BASE_URL}/api/users`)
        const users = response.data;
        dispatch(getAllUsersSuccess(users))
    } catch (error) {
        dispatch(getAllUsersFailure(error.message))
    }
}

const changeRoleRequest = () => ({ type: CHANGE_ROLE_REQUEST })
const changeRoleSuccess = (user) => ({ type: CHANGE_ROLE_SUCCESS, payload: user })
const changeRoleFailure = (error) => ({ type: CHANGE_ROLE_FAILURE, payload: error })

export const changeRole = (reqData) => async (dispatch) => {
    dispatch(changeRoleRequest())
    try {
        const response = await api.post(`${API_BASE_URL}/api/admin/users/role`, reqData)
        const user = response.data;
        dispatch(changeRoleSuccess(user))
    } catch (error) {
        dispatch(changeRoleFailure(error.message))
    }
}