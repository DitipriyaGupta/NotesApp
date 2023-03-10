

import {
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../Constant/userConstant";

import axios from 'axios';

// user register action
export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      "Content-Type": "application/json",
    };
    const baseUrl="http://localhost:5000";
    const { data } = await axios.post(
         baseUrl+ "/api/users",
            { email, password, username },
      config
    );
    // console.log(data);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

   localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      payload: error.message,
    });
  }
};

//user Login action
export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      "Content-Type": "application/json",
    };
    const baseUrl="http://localhost:5000";
    const { data } = await axios.post(
    baseUrl+ "/api/users/SignIn",
            { email, password },
      config
    );
   

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload: error.message,
    });
  }
};

// logout action
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  
  dispatch({
    type: USER_LOGOUT,
  });
};
// module.exports= {login,register};