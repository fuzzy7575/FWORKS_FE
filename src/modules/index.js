import {combineReducers} from "redux";
import productReducer from "./ProductModules";
import employeeReducer from "./EmployeeModules";

const rootReducer = combineReducers({
    productReducer, employeeReducer 
});

export default rootReducer;