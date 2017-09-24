import { combineReducers } from 'redux';
import AuthReducer from "./AuthReducer";
import GroupsReducer from "./GroupsReducer";


export default combineReducers({
  auth: AuthReducer,
  groups: GroupsReducer
});
