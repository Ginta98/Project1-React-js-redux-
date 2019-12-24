import { put, takeEvery } from 'redux-saga/effects'
import LoginData from '../fetchAPIs/loginData'
function* login(action) {
    try {

        var dataLogin = {
            password: action.payload.password,
            account: action.payload.account

        }
        const data = yield LoginData(dataLogin);
        let isSuccess = !!(data.length);
        let accountInfo = data;
        if (isSuccess){
            accountInfo = data[0];
        }
        
        yield put({
            type: 'LOGIN_SUCCESS',
            payload: {accountInfo: accountInfo, isSuccess}
        })
    } catch (error) {
        yield put({
            type: 'LOGIN_FAILURE',
            payload: {
                errorMessage: error.message
            }
        })
    }
}


export const loginSaga = [
    takeEvery('LOGIN_REQUEST', login)
];

