const DEFAULT_STATE = {
    forumElements: null,
    comments: null,
    chatbox: null,


}

export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case 'GET_FORUM_SUCCESS': {

            return {

                ...state,
                forumElements: action.payload.listForum,
                comments: action.payload.listComment

            }
        }
        case 'GET_FORUM_FAILURE':
            return {

                errorMessage: action.payload.errorMessage
            }
        case 'GET_CHATBOX_SUCCESS': {

            return {

                ...state,
                chatbox: action.payload
            }
        }
        case 'GET_CHATBOX_FAILURE':
            return {

                errorMessage: action.payload.errorMessage
            }
        

        default:
            return state;
    }

}
