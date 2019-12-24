const DEFAULT_STATE = {
    isRegister:false
    
}

export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case 'REGISTER_SUCCESS':
        return {
            ...state,
            isRegister:true
        }
    case 'REGISTER_FAILURE':
        return {

            errorMessage: action.payload.errorMessage
        }


        default:
            return state;
    }

}
