export function getInfoUser(payload){
    return(
        {
            type : "GET_INFO_USER_REQUEST",
            payload   
        }
    )
}
export function delUser(payload){
    return(
        {
            type : "DEL_USER_REQUEST",
            payload   
        }
    )
}
export function getRequestPosts(payload){
    return(
        {
            type : "GET_REQUESTPOSTS_REQUEST",
            payload   
        }
    )
}
export function deletePost(payload){
    return(
        {
            type : "DEL_POST_REQUEST",
            payload   
        }
    )
}
export function givePermission(payload){
    return(
        {
            type : "GIVE_PERMISSION_REQUEST",
            payload   
        }
    )
}
export function uploadByAdmin(payload){
    return(
        {
            type : "ADMIN_UPLOAD_REQUEST",
            payload   
        }
    )
}
export function getAdminPost(payload){
    return(
        {
            type : "GET_ADMIN_POST_REQUEST",
            payload   
        }
    )
}