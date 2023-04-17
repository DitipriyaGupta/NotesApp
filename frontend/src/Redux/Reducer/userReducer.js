

import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
  } from "../Constant/userConstant";

  // User login Reducer
  export const userLoginReducer = (state = {}, action) => {
      switch(action.type){
          case USER_LOGIN_REQUEST:
              return{
                serverError:null,
                 userInfo:null
              };

            case USER_LOGIN_SUCCESS: 
                return{
                  serverError:null,
                    userInfo: action.payload,
                };
            
            case USER_LOGIN_FAILED: 
                return{
                    serverError:action.payload
                };
            case USER_LOGOUT:
              return{
              };    
                
            default:
                return state;    
      }
  };



  //User Register Reducer
  export const userRegisterReducer = (
      state = {userInfo:null,serverError:null},
      action
  ) => {
      switch (action.type){
        case USER_REGISTER_REQUEST:
            return {
             userInfo:null,
             serverError:null,

            };
      
          case USER_REGISTER_SUCCESS:
            return {
              userInfo: action.payload,
              serverError:null,

            };
      
          case USER_REGISTER_FAILED:
            return {
              serverError:action.payload
             
            };
      
          default:
            return state;
        }
      };
      
