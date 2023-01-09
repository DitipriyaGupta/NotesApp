

import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { userLoginReducer, userRegisterReducer} from "./Reducer/userReducer";
import { noteListReducer,noteCreateReducer,noteUpdateReducer, getNoteIdReducer, noteDeleteReducer} from "./Reducer/noteReducer";


// import  Notes  from "./reducers/NotesReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  noteList: noteListReducer,
  noteCreate: noteCreateReducer,
  // getNoteId:getNoteIdReducer,
  noteUpdate:noteUpdateReducer,
  noteDelete:noteDeleteReducer
  // userNotes: Notes,
});


//GET user info from localstorage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
