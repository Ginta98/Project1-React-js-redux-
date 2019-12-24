import { all } from 'redux-saga/effects'
import { registerSaga } from '../sagas/registerSaga'
import { loginSaga } from '../sagas/loginSaga'
import {accountForumSaga} from '../sagas/accountForumSaga'
import {adminSaga} from '../sagas/adminSaga'
function* rootSaga() {
    yield all([
        ...registerSaga,loginSaga,accountForumSaga,adminSaga
    ]);
}
export default rootSaga;