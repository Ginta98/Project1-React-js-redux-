import React, { Component } from 'react';
import ForumAccountComponent from '../components/forumAccountComponent'
import { getForum, uploadPostForum, editData, changePassword, editComment, getChatbox, addChat, search } from '../actions/forumActions'
import { connect } from 'react-redux'
import { getAdminPost } from '../actions/adminActions'
class ForumAccountContainer extends Component {
    render() {

        return (
            <ForumAccountComponent {...this.props} />
        );
    }

}
const mapStateToProps = (state) => {
    return {
        forumElement: state.accountForumReducer.forumElements,
        comment: state.accountForumReducer.comments,
        adminPosts: state.adminReducer.dataAdminPost,
        chatbox: state.accountForumReducer.chatbox,
    }
}
const mapDispatchToProps = (dispath) => {
    return {
        getForum: () => {
            dispath(getForum())
        },
        uploadPostForum: (dataUploadByUser) => {
            dispath(uploadPostForum(dataUploadByUser))
        },
        editData: (dataEdit) => {
            dispath(editData(dataEdit))
        },
        changePassword: (data) => {
            dispath(changePassword(data))
        },
        getAdminPosts: () => {
            dispath(getAdminPost())
        },
        editComment: (dataComment) => {
            dispath(editComment(dataComment))
        },
        getChatbox: () => {
            dispath(getChatbox())
        },
        addChat: (dataChat) => {
            dispath(addChat(dataChat))
        },
        search: (dataSearch) => {
            dispath(search(dataSearch))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForumAccountContainer)