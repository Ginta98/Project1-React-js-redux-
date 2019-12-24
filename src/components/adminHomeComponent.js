import React, { Component } from 'react';
import './buttonStyle.css'


class adminHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postBy: "",
            title: "",
            description: "",
            image: "",
            permission: "no",
            uploadBy: "user",

        }
    }
    componentDidMount() {
        this.props.getForum();
        this.props.getAdminPosts();
        this.props.getRequestPosts();
        this.props.getInfoUser();
        document.getElementById("adminPosts").style.display = "block";
        document.getElementById("adminPostButton").style.background = "rgb(235, 220, 233)"

    }
    userMangager() {
        document.getElementById("forum").style.display = "none";
        document.getElementById("accountManagement").style.display = "block";
        document.getElementById("adminPosts").style.display = "none";
        document.getElementById("requestPosts").style.display = "none";
        document.getElementById("requestPostButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("adminPostButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("userManagerButton").style.background = "rgb(235, 220, 233)"
        document.getElementById("forumButton").style.background = "rgb(243, 99, 124)"
    }
    adminPosts() {
        document.getElementById("forum").style.display = "none";
        document.getElementById("adminPosts").style.display = "block";
        document.getElementById("requestPosts").style.display = "none";
        document.getElementById("accountManagement").style.display = "none";
        document.getElementById("requestPostButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("userManagerButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("adminPostButton").style.background = "rgb(235, 220, 233)"
        document.getElementById("forumButton").style.background = "rgb(243, 99, 124)"
    }
    forum() {
        document.getElementById("forum").style.display = "block";
        document.getElementById("requestPosts").style.display = "none";
        document.getElementById("accountManagement").style.display = "none";
        document.getElementById("adminPosts").style.display = "none";
        document.getElementById("requestPostButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("userManagerButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("adminPostButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("forumButton").style.background = "rgb(235, 220, 233)"
    }
    requestPosts() {
        document.getElementById("forum").style.display = "none";
        document.getElementById("requestPosts").style.display = "block";
        document.getElementById("accountManagement").style.display = "none";
        document.getElementById("adminPosts").style.display = "none";
        document.getElementById("requestPostButton").style.background = "rgb(235, 220, 233)"
        document.getElementById("userManagerButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("adminPostButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("forumButton").style.background = "rgb(243, 99, 124)"
    }
    deletePost(id) {
        this.props.deletePost(id)
        alert("Xóa bài viết ?")
    }
    givePermission(idData) {

        let data = {
            id: idData,
            permission: "yes"
        }
        this.props.givePermission(data)
        alert("Bài đăng đã được phê duyệt")
    }

    uploadImage() {
        var x = document.getElementById("uploadImage").files[0].name;
        let data = {
            postBy: "admin",
            title: this.state.title,
            description: this.state.description,
            image: x,
            permission: "yes",
            uploadBy: "admin",
        }
        this.props.uploadByAdmin(data);
        alert("Đăng bài thành công")
        this.setState({
            postBy: "",
            title: "",
            description: "",
            image: ""
        });
    }

    logOut = () => {
        window.location.href = "/login"

    }
    delUser(id) {
        this.props.delUser(id)
    }
    render() {
        let forumPostss = this.props.forumPostss;
        let forumPostssRender;
        if (forumPostss) {
            forumPostssRender = forumPostss.map((item, a) => {
                item = forumPostss[forumPostss.length - 1 - a];
                let listComment = item.comment;
                let listCommentRender;
                if (listComment) {
                    listCommentRender = listComment.map((cmt, idx) => {
                        return (
                            <div>

                                <div key={idx} style={{ "background": "#e5e5da" }} >
                                    <div style={{ "display": "inline-flex", "background": "#e5e5da" }}>
                                        <p style={{ "fontWeight": "bolder", "marginLeft": "-268px" }}>
                                            {cmt.accountName + " :"}
                                        </p>
                                        <p>
                                            {cmt.comment}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    });
                }
                return (
                    <div key={a} style={{ "background": "pink", "width": "66%", "marginLeft": "18%", "marginTop": "50px" }}>
                        <img
                            data-toggle="modal" data-target={"#e" + a}
                            src={"/images/" + item.image}
                            style={{ "width": "862px", "height": "450px" }}
                        />
                        <h1 style={{ "marginTop": "8px", "background": "pink", "fontStyle": "italic", "fontWeight": "inherit", "width": "862px" }}>{item.title}</h1>
                        <div className="modal fade" id={"e" + a} role="dialog">
                            <div className="modal-dialog">
                                {/* Modal content*/}
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                        <h1 className="modal-title">{item.title}</h1>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            style={{ "width": "576px", "height": "346px" }}
                                            src={"/images/" + item.image}
                                        />
                                        <p style={{ "textAlign": "justify", "textIndent": "30px", "fontStyle": "italic" }}>{item.description}</p>
                                        <p style={{ "paddingLeft": "385px", "fontStyle": "oblique", "fontWeight": "700" }}>Nguồn: {item.postBy}</p>

                                    </div>


                                    {listCommentRender}
                                    <div className="modal-footer">
                                        <button
                                            onClick={() => this.deletePost(item.id)}
                                            type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Xóa</button>
                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Đóng</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        }



        let adminPost = this.props.adminPosts
        let adminPostRender;

        if (adminPost) {
            adminPostRender = adminPost.map((item, a) => {
                item = adminPost[adminPost.length - 1 - a];
                let listComment = item.comment;
                let listCommentRenderAdmin;
                if (listComment) {
                    listCommentRenderAdmin = listComment.map((cmt, idx) => {
                        return (
                            <div>

                                <div key={idx} style={{ "background": "#e5e5da" }} >
                                    <div style={{ "display": "inline-flex", "background": "#e5e5da" }}>
                                        <p style={{ "fontWeight": "bolder", "marginLeft": "-268px" }}>
                                            {cmt.accountName + " :"}
                                        </p>
                                        <p>
                                            {cmt.comment}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    });
                }
                return (
                    <div key={a} style={{ "background": "pink", "width": "66%", "marginLeft": "5%", "marginTop": "50px" }}>
                        <img
                            data-toggle="modal" data-target={"#" + a}
                            src={"/images/" + item.image}
                            style={{ "width": "862px", "height": "450px" }}
                        />
                        <h1 style={{ "marginTop": "8px", "background": "pink", "fontStyle": "italic", "fontWeight": "inherit", "width": "862px" }}>{item.title}</h1>
                        <div className="modal fade" id={a} role="dialog">
                            <div className="modal-dialog">
                                {/* Modal content*/}
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                        <h1 className="modal-title">{item.title}</h1>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            style={{ "width": "576px", "height": "346px" }}
                                            src={"/images/" + item.image}
                                        />
                                        <p style={{ "textAlign": "justify", "textIndent": "30px", "fontStyle": "italic" }}>{item.description}</p>
                                        <p style={{ "paddingLeft": "385px", "fontStyle": "oblique", "fontWeight": "700" }}>Nguồn: {item.postBy}</p>

                                    </div>

                                    {listCommentRenderAdmin}

                                    <div className="modal-footer">
                                        <button
                                            onClick={() => this.deletePost(item.id)}
                                            type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Xóa</button>
                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Đóng</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            )
        }

        let dataRequestPost = this.props.requestPosts;
        let dataRequestPostRender;
        if (dataRequestPost) {
            dataRequestPostRender = dataRequestPost.map((item, a) => {
                return (
                    <tr key={a} style={{ "textAlign": "left", "fontStyle": "oblique", "border": "1px solid black", "height": "50px" }}>
                        <td style={{ "color": "black", "fontSize": "large" }}>{item.postBy} đã gửi một yêu cầu phê duyệt</td>
                        <button

                            data-toggle="modal" data-target={"#2" + a} class="button button1" style={{ "marginTop": "10px" }}>
                            Xem</button>
                        <button
                            onClick={() => this.givePermission(item.id)}
                            class="button button1" style={{ "marginTop": "10px", "marginLeft": "4px" }}>Duyệt</button>
                        <button
                            onClick={() => this.deletePost(item.id)}
                            class="button button3" style={{ "marginTop": "10px", "marginLeft": "4px" }}>Xóa</button>
                        <div className="modal fade" id={"2" + a} role="dialog">
                            <div className="modal-dialog">
                                {/* Modal content*/}
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                        <h1 className="modal-title">{item.title}</h1>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            style={{ "width": "576px", "height": "346px" }}
                                            src={"/images/" + item.image}
                                        />
                                        <p style={{ "textAlign": "justify", "textIndent": "30px", "fontStyle": "italic" }}>{item.description}</p>


                                    </div>


                                    <div className="modal-footer">

                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Đóng</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </tr>



                )
            }
            )
        }






        let dataUsers = this.props.dataUsers;
        let dataUserRender;
        if (dataUsers) {
            dataUserRender = dataUsers.map((item, a) => {
                return (

                    <tr key={a} style={{ "textAlign": "left", "fontStyle": "oblique", "border": "1px solid black", "height": "50px" }}>
                        <td style={{ "color": "teal", "fontSize": "large" }}>{item.account}</td>
                        <td style={{ "fontSize": "large" }}>{item.email}</td>
                        <td style={{ "fontSize": "large" }}>{item.phoneNumber}</td>
                        <button class="button button1" style={{ "marginTop": "10px" }}>Email</button>
                        <button
                            onClick={() => this.delUser(item.id)}
                            class="button button3" style={{ "marginLeft": "5px", "marginTop": "10px" }}>Xóa</button>
                    </tr>
                )
            }
            )
        }


        return (
            <div
                style={{ "width": "100%" }}
            >
                <a href="/">
                    <img
                        src="/images/bgImage.png"
                        style={{ "width": "100%", "height": "373px", "marginTop": "-35px" }}
                    />
                </a>
                <div>
                    <div className="tab">
                        <button className="tablinks" id="adminPostButton"
                            style={{ "width": "16%", "height": "40px", "background": "rgb(243, 99, 124)" }}
                            onClick={() => this.adminPosts()}
                        >Bài viết</button>
                        <button className="tablinks" id="forumButton"
                            style={{ "width": "16%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}
                            onClick={() => this.forum()}
                        >Quản lý diễn đàn</button>
                        <button className="tablinks" id="requestPostButton"
                            style={{ "width": "16%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}
                            onClick={() => this.requestPosts()}
                        >Chờ phê duyệt</button>
                        <button className="tablinks" id="userManagerButton"
                            onClick={() => this.userMangager()}
                            style={{ "width": "16%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}

                        >Quản lý thành viên</button>
                        <button className="tablinks"

                            style={{ "width": "16%", "height": "40px", "background": "rgb(208, 159, 56)", "marginLeft": "5px" }}

                        >Xin chào Admin</button>
                        <button className="tablinks"
                            onClick={() => this.logOut()}
                            style={{ "width": "16%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}

                        >Đăng xuất</button>
                    </div>
                    <div id="forum" className="tabcontent">
                        {forumPostssRender}
                    </div>
                    <div id="adminPosts" className="tabcontent">
                        <table style={{ "background": "white", "width": "65%", "marginLeft": "205px", "marginTop": "13px", "borderSpacing": "0px" }}>
                            <tbody>
                                <tr >
                                    <th style={{ "background": "#F5F6F7", "textAlign": "left", "fontStyle": "unset", "fontWeight": "100", "paddingLeft": "10px" }}>Tạo bài viết</th>
                                </tr>
                                <tr >
                                    <th>
                                        <input
                                            value={this.state.title}
                                            onChange={(e) => this.setState({ title: e.target.value })}
                                            placeholder="Tên bài viết :"
                                            style={{ "border": "none", "width": "90%", "paddingLeft": "10px", "fontStyle": "italic" }}

                                        ></input>
                                    </th>
                                </tr>
                                <tr >
                                    <th> <textarea row="5"
                                        value={this.state.description}
                                        onChange={(e) => this.setState({ description: e.target.value })}
                                        placeholder="Nội dung :"
                                        style={{ "height": "50px", "width": "90%", "paddingLeft": "10px", "fontStyle": "italic" }}

                                    ></textarea></th>
                                </tr>
                                <tr >
                                    <th style={{ "paddingBottom": "7px" }}>
                                        <form action="/action_page.php" style={{ "display": "inline-flex", "width": "600px" }}>
                                            <input type="file" id="uploadImage" accept="image/*" />
                                            <button
                                                type="button"
                                                onClick={() => this.uploadImage()}
                                                style={{ "marginLeft": "432px", "width": "70px", "height": "25px", "background": "pink" }}
                                            >Đăng</button>


                                        </form>
                                    </th>
                                </tr>

                            </tbody>

                        </table>
                        <div style={{ "width": "862px", "marginLeft": "162px" }}>
                            {adminPostRender}

                        </div>
                    </div>

                    <div id="requestPosts" className="tabcontent">

                        <table style={{ "width": "50%", "marginLeft": "320px", "border": "1px solid black", "marginTop": "10px" }}>
                            <tbody >

                                {dataRequestPostRender}

                            </tbody>
                        </table>


                    </div>
                    <div id="accountManagement" className="tabcontent" >
                        <table style={{ "width": "50%", "marginLeft": "320px", "border": "1px solid black", "marginTop": "10px" }}>
                            <tbody >
                                <tr style={{ "fontSize": "large" }}>
                                    <th >Tài khoản</th>
                                    <th>Email</th>
                                    <th >Số điện thoại</th>
                                    <th style={{ "paddingLeft": "19px" }}>Thao tác</th>
                                </tr>
                                {dataUserRender}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
export default adminHomeComponent;