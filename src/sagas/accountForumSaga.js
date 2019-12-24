import { put, takeEvery } from 'redux-saga/effects';
import getForumm from '../fetchAPIs/forumAPIs/getForumAPIs';
import getComments from '../fetchAPIs/forumAPIs/getCommentAPIs';
import uploadForum from '../fetchAPIs/forumAPIs/uploadForumAPIs';
import editDataAccount from '../fetchAPIs/forumAPIs/editDataAccount';
import editComment from '../fetchAPIs/forumAPIs/editComment';
import getChatbox from '../fetchAPIs/forumAPIs/getChatbox';
import addChat from '../fetchAPIs/forumAPIs/addChat';
import search from '../fetchAPIs/forumAPIs/search'


function* getForum(action) {

    try {


        const listForum = yield getForumm();
        const listComment = yield getComments();

        yield put({
            type: 'GET_FORUM_SUCCESS',
            payload: { listForum, listComment }
        })


    } catch (error) {
        yield put({
            type: 'GET_FORUM_FAILURE',
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* uploadForumm(action) {

    try {

        var data = {
            postBy: action.payload.postBy,
            title: action.payload.title,
            description: action.payload.description,
            image: action.payload.image,
            permission: action.payload.permission,
            uploadBy: action.payload.uploadBy

        }
        const dataRespond = yield uploadForum(data)
        yield put({
            type: 'UPLOAD_POST_FORUM_SUCCESS',
            payload: dataRespond
        })
        yield put({
            type: 'GET_FORUM_REQUEST',
        })

    } catch (error) {
        yield put({
            type: 'UPLOAD_POST_FORUM_FAILURE',
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* editData(action) {
    try {
        var dataEdit = {
            id: action.payload.id,
            email: action.payload.email,
            fullName: action.payload.fullName,
            DoB: action.payload.DoB,
            Sex: action.payload.sex,
            phoneNumber: action.payload.phoneNumber,
            address: action.payload.address

        }
        const dataComeBack = yield editDataAccount(dataEdit)
        yield put({
            type: "EDIT_ACCOUNT_DATA_SUCCESS",
            payload: dataComeBack
        })
        


    } catch (error) {
        yield put({
            type: "EDIT_ACCOUNT_DATA_ FAILURE",
            payload: {
                errorMessage: error.message
            }
        })
    }

}
function* changePasswordd(action) {
    try {
        var dataEdit = {
            id: action.payload.id,
            password: action.payload.password

        }
        const dataComeBack = yield editDataAccount(dataEdit)
        yield put({
            type: "CHANGE_PASSWORD_SUCCESS",
            payload: dataComeBack
        })


    } catch (error) {
        yield put({
            type: "CHANGE_PASSWORD_ FAILURE",
            payload: {
                errorMessage: error.message
            }
        })
    }

}
function* editCommentt(action) {
    try {
        var dataEdit = {
            id: action.payload.id,
            comment: action.payload.comment
        }
        const dataComeBack = yield editComment(dataEdit)
        yield put({
            type: "EDIT_COMMENT_SUCCESS",
            payload: dataComeBack
        })
        yield put({
            type: 'GET_FORUM_REQUEST',
        })
        yield put({
            type: 'GET_ADMIN_POST_REQUEST',
        })
    } catch (error) {
        yield put({
            type: "EDIT_COMMENT_ FAILURE",
            payload: {
                errorMessage: error.message
            }
        })
    }

}
function* getChatboxx(action) {

    try {


     const listChatbox = yield getChatbox();
        yield put({
            type: 'GET_CHATBOX_SUCCESS',
            payload: listChatbox
        })


    } catch (error) {
        yield put({
            type: 'GET_CHATBOX_FAILURE',
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* addChatt(action) {

    try {

        var dataChat = {
           accountName:action.payload.accountName,
           content:action.payload.content
        }
        const dataChatRespond = yield addChat(dataChat)
        yield put({
            type: 'ADD_CHAT_SUCCESS',
            payload: dataChatRespond
        })
        yield put({
            type: 'GET_CHATBOX_REQUEST',
        })

    } catch (error) {
        yield put({
            type: 'ADD_CHAT_FAILURE',
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* searchh(action) {

    try {


        var dataSearch = action.payload;
        const dataSearchRespond = yield search(dataSearch);

        yield put({
            type: 'SEARCH_SUCCESS',
            payload: dataSearchRespond
        })


    } catch (error) {
        yield put({
            type: 'SEARCH_FAILURE',
            payload: {
                errorMessage: error.message
            }
        })
    }
}
export const accountForumSaga = [
    takeEvery("GET_FORUM_REQUEST", getForum),
    takeEvery("UPLOAD_POST_FORUM_REQUEST", uploadForumm),
    takeEvery("EDIT_ACCOUNT_DATA_REQUEST", editData),
    takeEvery("CHANGE_PASSWORD_REQUEST", changePasswordd),
    takeEvery("EDIT_COMMENT_REQUEST", editCommentt),
    takeEvery("GET_CHATBOX_REQUEST",getChatboxx),
    takeEvery("ADD_CHAT_REQUEST",addChatt),
    takeEvery("SEARCH_REQUEST",searchh),


]
