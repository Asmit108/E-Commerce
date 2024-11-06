import { CHANGE_ROLE_FAILURE, CHANGE_ROLE_REQUEST, CHANGE_ROLE_SUCCESS, GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS} from "./ActionType"


const initialState={
    users:[],
    user:null, 
    isLoading:false,
    error:null
}
export const userReducer=(state=initialState,action)=>{
     switch(action.type){
        case GET_ALL_USERS_REQUEST:
            return {...state,isLoading:true,error:null}  
        case CHANGE_ROLE_REQUEST:
            return {...state,isLoading:true,error:null}      
        
      
        case GET_ALL_USERS_SUCCESS:
                return {...state,isLoading:false,error:null,users:action.payload}
        case CHANGE_ROLE_SUCCESS:
            return {...state,isLoading:false,error:null,user:action.payload}       
            
       
        case GET_ALL_USERS_FAILURE:
                return {...state,isLoading:false,error:action.payload} 
        case CHANGE_ROLE_FAILURE:
                return {...state,isLoading:false,error:action.payload}               
        
        default:
           return state; 
     }

}