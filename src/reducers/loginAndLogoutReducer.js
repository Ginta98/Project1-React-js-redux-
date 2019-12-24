const DEFAULT_STATE = {
    accountInfo:null,
    isLogin:false
    
}

export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case 'LOGIN_SUCCESS':
        return {
            ...state,
            accountInfo: action.payload.accountInfo,
            isLogin: action.payload.isSuccess
        }
    case 'LOGIN_FAILURE':
        return {

            errorMessage: action.payload.errorMessage
        }


        default:
            return state;
    }

}
