import { put, takeEvery } from 'redux-saga/effects'
import RegisterData from '../fetchAPIs/registData'
function* register(action) {
    try {

        var dataRegister = {
            password: action.payload.password,
            email: action.payload.email,
            fullName: action.payload.fullName,
            DoB: action.payload.dob,
            Sex: action.payload.sex,
            phoneNumber: action.payload.phoneNumber,
            address: action.payload.address,
            account: action.payload.account

        }
        const data = yield RegisterData(dataRegister);



        yield put({
            type: 'REGISTER_SUCCESS',
            payload: data
        })
    } catch (error) {
        yield put({
            type: 'REGISTER_FAILURE',
            payload: {
                errorMessage: error.message
            }
        })
    }
}


export const registerSaga = [
    takeEvery('REGISTER_REQUEST', register)
];

