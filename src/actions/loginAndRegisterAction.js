export function registerAction(payload){
    return(
        {
            type : "REGISTER_REQUEST",
            payload   
        }
    )
}
export function loginAction(payload){
    return(
        {
            type : "LOGIN_REQUEST",
            payload   
        }
    )
}