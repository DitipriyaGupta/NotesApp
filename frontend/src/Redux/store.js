

import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { userLoginReducer, userRegisterReducer} from "./Reducer/userReducer";
// import  Notes  from "./reducers/NotesReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer
  // userNotes: Notes,
});


//GET user info from localstorage
// const userInfoFromLocalstorage = JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  userLogin: b 
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
