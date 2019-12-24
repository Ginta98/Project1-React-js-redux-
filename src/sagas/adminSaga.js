import { put, takeEvery } from 'redux-saga/effects'
import getInfoUserAPIs from '../fetchAPIs/adminAPIs/getInfoUserAPIs'
import delUser from '../fetchAPIs/adminAPIs/delUser'
import getRequestPosts from '../fetchAPIs/adminAPIs/getRequestPosts'
import delPost from '../fetchAPIs/adminAPIs/delPost'
import givePermission from '../fetchAPIs/adminAPIs/givePermission'
import adminUpload from '../fetchAPIs/adminAPIs/adminUpload'
import getAdminPost from '../fetchAPIs/adminAPIs/getAdminPost'



function* getInfoUserr(action) {

    try {

        const dataUsers = yield getInfoUserAPIs();

        yield put({
            type: 'GET_INFO_USER_SUCCESS',
            payload: dataUsers
        })


    } catch (error) {
        yield put({
            type: 'GET_INFO_USER_FAILURE',
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* getAdminPosts(action) {

    try {

        const dataAdminPost = yield getAdminPost();

        yield put({
            type: 'GET_ADMIN_POST_SUCCESS',
            payload: dataAdminPost
        })


    } catch (error) {
        yield put({
            type: 'GET_ADMIN_POST_FAILURE',
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* delUserr(action) {
    try {
        const dataComeBack = yield delUser(action.payload);
        yield put({
            type: "DEL_USER_SUCCESS",
            payload: dataComeBack
        })
        yield put({
            type: 'GET_INFO_USER_REQUEST',
        })

    } catch (error) {
        yield put({
            type: "DEL_USER_ FAILURE",
            payload: {
                errorMessage: error.message
            }
        })
    }


}
function* getRequestPost(action) {

    try {

        const dataComeBack = yield getRequestPosts();

        yield put({
            type: 'GET_REQUESTPOSTS_SUCCESS',
            payload: dataComeBack
        })


    } catch (error) {
        yield put({
            type: 'GET_REQUESTPOSTS_FAILURE',
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* delPostt(action) {
    try {
        const dataComeBack = yield delPost(action.payload);
        yield put({
            type: "DEL_POST_SUCCESS",
            payload: dataComeBack
        })
        yield put({
            type: 'GET_REQUESTPOSTS_REQUEST',
        })
        yield put({
            type: 'GET_ADMIN_POST_REQUEST',
        })
        yield put({
            type: 'GET_FORUM_REQUEST',
        })

    } catch (error) {
        yield put({
            type: "DEL_POST_ FAILURE",
            payload: {
                errorMessage: error.message
            }
        })
    }


}
function* givePermissionn(action) {
    try {
        var dataEdit = {
           id: action.payload.id,
           permission:action.payload.permission
        }
        const dataComeBack = yield givePermission(dataEdit)
        yield put({
            type: "GIVE_PERMISSION_SUCCESS",
            payload: dataComeBack
        })
        yield put({
            type: 'GET_REQUESTPOSTS_REQUEST',
        })
        yield put({
            type: 'GET_FORUM_REQUEST',
        })
        

    } catch (error) {
        yield put({
            type: "GIVE_PERMISSION_FAILURE",
            payload: {
                errorMessage: error.message
            }
        })
    }

}
function* adminUploadd (action) {

    try {

        var data = {
            postBy: action.payload.postBy,
            title: action.payload.title,
            description: action.payload.description,
            image: action.payload.image,
            permission: action.payload.permission,
            uploadBy: action.payload.uploadBy

        }
        const dataRespond = yield adminUpload(data)
        yield put({
            type: 'ADMIN_UPLOAD_SUCCESS',
            payload: dataRespond
        })
        yield put({
            type: 'GET_ADMIN_POST_REQUEST',
        })

    } catch (error) {
        yield put({
            type: 'ADMIN_UPLOAD_FAILURE',
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const adminSaga = [
    takeEvery('GET_INFO_USER_REQUEST', getInfoUserr),
    takeEvery('DEL_USER_REQUEST', delUserr),
    takeEvery('GET_REQUESTPOSTS_REQUEST', getRequestPost),
    takeEvery('DEL_POST_REQUEST', delPostt),
    takeEvery('GIVE_PERMISSION_REQUEST', givePermissionn),
    takeEvery('ADMIN_UPLOAD_REQUEST', adminUploadd),
    takeEvery('GET_ADMIN_POST_REQUEST', getAdminPosts),
];

