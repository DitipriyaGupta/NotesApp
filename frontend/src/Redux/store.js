

import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { userLoginReducer, userRegisterReducer} from "./Reducer/userReducer";
import { noteListReducer,noteCreateReducer,noteUpdateReducer, noteDeleteReducer} from "./Reducer/noteReducer";

const reducer = combineReducers({
  noteList: noteListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  noteCreate: noteCreateReducer,
  noteUpdate:noteUpdateReducer,
  noteDelete:noteDeleteReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
