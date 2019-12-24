import { combineReducers } from 'redux'
import RegisterReducer from './registerReducer'
import LoginAndLogoutReducer from './loginAndLogoutReducer'
import AccountForumReducer from './accountForumReducer'
import AdminReducer from './adminReducer'



export default combineReducers({
    registerReducer: RegisterReducer,
    loginReducer: LoginAndLogoutReducer,
    accountForumReducer : AccountForumReducer,
    adminReducer:AdminReducer
})