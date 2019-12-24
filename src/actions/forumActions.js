export function getForum(payload) {
    return (
        {
            type: "GET_FORUM_REQUEST",
            payload
        }
    )
}
export function uploadPostForum(payload) {
    return (
        {
            type: "UPLOAD_POST_FORUM_REQUEST",
            payload
        }
    )
}
export function editData(payload) {
    return (
        {
            type: "EDIT_ACCOUNT_DATA_REQUEST",
            payload
        }
    )
}
export function changePassword(payload) {
    return (
        {
            type: "CHANGE_PASSWORD_REQUEST",
            payload
        }
    )
}
export function editComment(payload) {
    return (
        {
            type: "EDIT_COMMENT_REQUEST",
            payload
        }
    )
}
export function getChatbox(payload) {
    return (
        {
            type: "GET_CHATBOX_REQUEST",
            payload
        }
    )
}
export function addChat(payload) {
    return (
        {
            type: "ADD_CHAT_REQUEST",
            payload
        }
    )
}
export function search(payload) {
    return (
        {
            type: "SEARCH_REQUEST",
            payload
        }
    )
}