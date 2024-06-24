import {createActions, handleActions} from "redux-actions";

/* 초기값 */
const initialState = {};

/* 액션 타입 */
const SUCCESS = 'employee/SUCCESS';
const RESET = 'employee/RESET';
const GET_PROFILE = 'employee/GET_PROFILE';

/* 액션 함수 */
export const { employee : { success, reset, getProfile }} = createActions({
    [SUCCESS] : () => ({ success : true }),
    [RESET] : () => {},
    [GET_PROFILE] : (result) => ({ profileInfo : result.data })
});

/* 리듀서 함수 */
const employeeReducer = handleActions({
    [SUCCESS] : (state, { payload }) => payload,
    [RESET] : () => initialState,
    [GET_PROFILE] : (state, { payload }) => payload
}, initialState);

export default employeeReducer;






