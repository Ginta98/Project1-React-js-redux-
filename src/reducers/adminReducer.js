const DEFAULT_STATE = {
    dataUsers: null,
    dataRequestPosts: null,
    dataAdminPost: null,
}

export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case 'GET_INFO_USER_SUCCESS':
            return {
                ...state,
                dataUsers: action.payload
            }
        case 'GET_INFO_USER_FAILURE':
            return {

                errorMessage: action.payload.errorMessage
            }
        case 'GET_REQUESTPOSTS_SUCCESS':
            return {
                ...state,
                dataRequestPosts: action.payload
            }
        case 'GET_REQUESTPOSTS_FAILURE':
            return {

                errorMessage: action.payload.errorMessage
            }
        case 'GET_ADMIN_POST_SUCCESS':
            return {
                ...state,
                dataAdminPost: action.payload
            }
        case 'GET_ADMIN_POST_FAILURE':
            return {

                errorMessage: action.payload.errorMessage
            }
        case 'SEARCH_SUCCESS': {

            return {

                ...state,
                dataAdminPost: action.payload
            }
        }
        case 'SEARCH_FAILURE':
            return {

                errorMessage: action.payload.errorMessage
            }




        default:
            return state;
    }

}
