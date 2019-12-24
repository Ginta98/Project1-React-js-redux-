import React, { Component } from 'react';
import AdminHomeComponent from '../components/adminHomeComponent'
import { getForum } from '../actions/forumActions'
import { connect } from 'react-redux'
import { getInfoUser, delUser, getRequestPosts, deletePost, givePermission, uploadByAdmin, getAdminPost } from '../actions/adminActions'
class adminHomeComponent extends Component {
    render() {

        return (
            <AdminHomeComponent {...this.props} />

        );
    }

}
const mapStateToProps = (store) => {
    return {
        forumPostss: store.accountForumReducer.forumElements,
        dataUsers: store.adminReducer.dataUsers,
        requestPosts: store.adminReducer.dataRequestPosts,
        adminPosts: store.adminReducer.dataAdminPost,
    }
}
const mapDispatchToProps = (dispath) => {
    return {
        getInfoUser: () => {
            dispath(getInfoUser())
        },
        delUser: (id) => {
            dispath(delUser(id))
        },
        getRequestPosts: () => {
            dispath(getRequestPosts())
        },
        deletePost: (id) => {
            dispath(deletePost(id))
        },
        givePermission: (data) => {
            dispath(givePermission(data))
        },
        uploadByAdmin: (dataAdmin) => {
            dispath(uploadByAdmin(dataAdmin))
        },
        getAdminPosts: () => {
            dispath(getAdminPost())
        },
        getForum: () => {
            dispath(getForum())
        },

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(adminHomeComponent)