import React, { Component } from 'react';
import './forumAccountStyle.css'
import { Item } from 'semantic-ui-react';


class forumAccountComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postBy: "",
            title: "",
            description: "",
            image: "",
            permission: "no",
            uploadBy: "user",
            id: "0",
            logout: false,
            fullName: "",
            email: "",
            sex: "",
            DoB: "",
            password: "",
            newPassword: "",
            confirmNewPassword: "",
            phoneNumber: "",
            address: "",
            commenting: "",
            chatting: "",
            search: "",
            commenttingAdmin:""


        }
    }
    componentDidMount() {
        document.getElementById("adminPosts").style.display = "block";
        this.props.getForum();
        document.getElementById("adminPostButton").style.background = "rgb(235, 220, 233)"
        this.props.getAdminPosts();
        this.props.getChatbox();


    }
    loggedOut = () => {
        window.location.href = '/login'
    }

    openAdminPosts() {
        document.getElementById("baiviet").style.display = "block";
        document.getElementById("baiviet").style.color = "black";
        document.getElementById("adminPosts").style.display = "block";
        this.props.getAdminPosts();
        document.getElementById("accountPosts").style.display = "none";
        document.getElementById("info").style.display = "none";
        document.getElementById("adminPostButton").style.background = "rgb(235, 220, 233)"
        document.getElementById("accountPostButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("infoButton").style.background = "rgb(243, 99, 124)"
    }
    openAccountPosts() {
        document.getElementById("accountPosts").style.display = "block";
        document.getElementById("adminPosts").style.display = "none";
        document.getElementById("info").style.display = "none";
        document.getElementById("adminPostButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("accountPostButton").style.background = "rgb(235, 220, 233)"
        document.getElementById("infoButton").style.background = "rgb(243, 99, 124)"
    }
    openInfo() {
        console.log("aaa" + this.props.forumElement)
        document.getElementById("info").style.display = "block";
        document.getElementById("accountPosts").style.display = "none";
        document.getElementById("adminPosts").style.display = "none";
        document.getElementById("adminPostButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("accountPostButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("infoButton").style.background = "rgb(235, 220, 233)"
    }
    // uploadComment(oldComments, id) {
    //     let newComment = oldComments;
    //     let accountComment = localStorage.getItem("name");
    //     newComment.append({accountName:accountComment,comment:this.state.commenting});
    //     let data = {
    //         id: id,
    //         comment:newComment
    //     }
    //     this.props.editComment(data)


    // }
    uploadImage() {
        var x = document.getElementById("uploadImage").files[0].name;
        let data = {
            postBy: localStorage.getItem("name"),
            title: this.state.title,
            description: this.state.description,
            image: x,
            permission: "no",
            uploadBy: "user",
        }
        this.props.uploadPostForum(data);
        alert("Đăng bài hoàn tất, vui lòng chờ admin phê duyệt")
        this.setState({
            postBy: "",
            title: "",
            description: "",
            image: ""
        });
    }
    changePassword() {
        if (this.state.password == localStorage.getItem("password")) {
            if (this.state.confirmNewPassword == this.state.newPassword) {
                if (this.state.newPassword === "") alert("Sai cú pháp")
                else {
                    let data = {
                        password: this.state.newPassword,
                        id: localStorage.getItem("id")
                    }
                    localStorage.setItem("password", this.state.newPassword);
                    this.props.changePassword(data)
                    this.setState({
                        password: "",
                        newPassword: "",
                        confirmNewPassword: ""
                    });
                    alert("Đổi mật khẩu thành công")
                }
            } else (
                alert("Mật khẩu mới không khớp")
            )
        } else (
            alert("Sai mật khẩu")
        )
    }
    editAccountData() {
        if (this.state.fullName === "" || this.state.email === "" || this.state.sex === "" || this.state.DoB === "" || this.state.phoneNumber === "" || this.state.address === "") {
            this.setState({
                fullName: "",
                email: "",
                sex: "",
                DoB: "",
                phoneNumber: "",
                address: ""
            });
            alert("Vui lòng điền đủ thông tin")
        }
        else {
            let data = {
                fullName: this.state.fullName,
                email: this.state.email,
                sex: this.state.sex,
                DoB: this.state.DoB,
                phoneNumber: this.state.phoneNumber,
                address: this.state.address,
                id: localStorage.getItem("id")

            }

            localStorage.setItem("name", this.state.fullName);
            localStorage.setItem("email", this.state.email);
            localStorage.setItem("DoB", this.state.DoB);
            localStorage.setItem("Sex", this.state.sex);
            localStorage.setItem("phoneNumber", this.state.phoneNumber);
            localStorage.setItem("address", this.state.address);


            this.props.editData(data);
            this.setState({
                fullName: "",
                email: "",
                sex: "",
                DoB: "",
                phoneNumber: "",
                address: ""
            });
            alert("Sửa thông tin thành công")
        }
    }
    handleKeyPressUser(e, oldComments, id) {
        // Dong nay de biet no co an nut enter hay ko
        if (e.keyCode === 13 && this.state.commenting) {
            if (!oldComments) {
                oldComments = [];
            }

            let newComment = oldComments;
            let accountComment = localStorage.getItem("name");
            newComment.push({ accountName: accountComment, comment: this.state.commenting });
            let data = {
                id: id,
                comment: newComment
            }

            this.props.editComment(data);
            e.target.value = "";
            this.setState({ commenting: "" });

        }
    }
    handleKeyPressAdmin(e, oldComments, id) {
        // Dong nay de biet no co an nut enter hay ko
        if (e.keyCode === 13 && this.state.commenttingAdmin) {
            if (!oldComments) {
                oldComments = [];
            }

            let newComment = oldComments;
            let accountComment = localStorage.getItem("name");
            newComment.push({ accountName: accountComment, comment: this.state.commenttingAdmin });
            let data = {
                id: id,
                comment: newComment
            }

            this.props.editComment(data);
            e.target.value = "";
            this.setState({ commenttingAdmin: "" });

        }
    }
    handleKeyPressChatbox(e) {
        if (e.keyCode === 13 && this.state.chatting) {

            let data = {
                accountName: localStorage.getItem("name"),
                content: this.state.chatting
            }

            this.props.addChat(data);
            e.target.value = "";
            this.setState({ chatting: "" });

        }

    }
    handleKeyPressSearch(e) {
        if (e.keyCode === 13 && this.state.search) {
            alert("Đang tìm kiếm...")
            document.getElementById("baiviet").style.color = "pink";
            let dataSearch = this.state.search;
            this.props.search(dataSearch);
            this.setState({ search: "" });

        }

    }
    render() {
        let chatboxx = this.props.chatbox
        let chatboxRender;
        if (chatboxx) {
            chatboxRender = chatboxx.map((item, a) => {

                return (
                    <div>
                        <div key={a} style={{ "display": "inline-flex", "background": "#e5e5da", "marginLeft": "5px" }}>
                            <p style={{ "fontWeight": "bolder", "color": "blue" }}>
                                {item.accountName + " :"}
                            </p>
                            <p>
                                {item.content}
                            </p>
                        </div>
                    </div>

                )
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
                            style={{ "width": "580px", "height": "438px", "marginLeft": "-84px", "marginTop": "-22px" }}
                        />
                        <h1 style={{ "marginTop": "8px", "background": "pink", "fontStyle": "italic", "fontWeight": "500", "width": "862px", "marginLeft": "-218px" }}>{item.title}</h1>
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
                                        <input
                                            onKeyDown={e => { this.handleKeyPressAdmin(e, item.comment, item.id) }}
                                            value={this.state.commenttingAdmin}
                                            onChange={(e) => this.setState({ commenttingAdmin: e.target.value })}
                                            className="w3-input" type="text" placeholder="Viết bình luận..."></input>
                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Close</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        let name = localStorage.getItem("name");
        let address = localStorage.getItem("address");
        let email = localStorage.getItem("email"); {/*storage saved*/ }
        let DoB = localStorage.getItem("DoB");
        let Sex = localStorage.getItem("Sex");
        let phoneNumber = localStorage.getItem("phoneNumber");
        let id = localStorage.getItem("id");

        let listForum = this.props.forumElement

        let listForumRender;
        let listCommentRender;
        let mostViewPost;

        if (listForum) {
            listForumRender = listForum.map((item, a) => {
                item = listForum[listForum.length - 1 - a];
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
                    <div key={a} style={{ "background": "pink", "width": "66%", "marginLeft": "5%", "marginTop": "50px" }}>
                        <img
                            data-toggle="modal" data-target={"#2" + a}
                            src={"/images/" + item.image}
                            style={{ "width": "862px", "height": "450px" }}
                        />
                        <h1 style={{ "marginTop": "8px", "background": "pink", "fontStyle": "italic", "fontWeight": "inherit", "width": "862px" }}>{item.title}</h1>
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
                                        <p style={{ "paddingLeft": "385px", "fontStyle": "oblique", "fontWeight": "700" }}>Nguồn: {item.postBy}</p>

                                    </div>
                                    <button
                                        onClick={() => alert("Not supported yet")}
                                        id="like" style={{ "marginLeft": "-512px", "marginBottom": "10px", "width": "60px" }}>Like</button>



                                    {listCommentRender}

                                    <div className="modal-footer">
                                        <input
                                            onKeyDown={e => { this.handleKeyPressUser(e, item.comment, item.id) }}
                                            value={this.state.commenting}
                                            onChange={(e) => this.setState({ commenting: e.target.value })}
                                            className="w3-input" type="text" placeholder="Viết bình luận..."></input>

                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Close</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }


        // if (listForum) {
        //     mostViewPost = listForum.map((item, a) => {
        //         return (
        //             <div key={a} style={{ "background": "pink", "width": "330px", "marginLeft": "20%", "marginTop": "8px" }}>
        //                 <img
        //                     src={"/images/" + item.image}
        //                     style={{ "width": "422px", "height": "450px" }}
        //                 />
        //                 <h1 style={{ "marginTop": "8px", "background": "pink", "fontStyle": "italic", "fontWeight": "inherit", "width": "330px", "marginLeft": "17%" }}>{item.title}</h1>
        //             </div>
        //         )
        //     })
        // }
        return (
            <div>

                <img
                    src="/images/bgImage.png"
                    style={{ "width": "100%", "height": "260px" }}
                />

                <div>
                    <div className="tab">
                        <button className="tablinks" id="adminPostButton"
                            style={{ "width": "24.4%", "height": "40px", "background": "rgb(243, 99, 124)" }}
                            onClick={() => this.openAdminPosts()}
                        >Trang chủ</button>
                        <button className="tablinks" id="accountPostButton"
                            style={{ "width": "24.4%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}
                            onClick={() => this.openAccountPosts()}
                        >Diễn đàn</button>
                        <button className="tablinks" id="infoButton"
                            style={{ "width": "24.4%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}
                            onClick={() => this.openInfo()}
                        >Xin chào {name}</button>
                        <button className="tablinks"
                            style={{ "width": "24.4%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}
                            onClick={() => this.loggedOut()}
                        >Đăng xuất</button>
                    </div>
                    <div id="adminPosts" className="tabcontent">

                        <div className="modal fade" id={"doner"} role="dialog">
                            <div className="modal-dialog">
                                {/* Modal content*/}
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                        <h1 className="modal-title">Bánh mì Doner Đức Long </h1>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            style={{ "width": "576px", "height": "346px" }}
                                            src={"/images/Doner.png"}
                                        />
                                        <p style={{ "textAlign": "justify", "textIndent": "30px", "fontStyle": "italic" }}>Bánh mì doner khá là quen thuộc với các bạn rồi. nhưng nếu bạn chỉ muốn ăn nhân mà k muốn ăn bánh mì thì phải làm sao nhỉ???
Mình có ngay 1 địa chỉ uy tín cho các bạn đây. Bánh mì Doner Đức Long nằm ngay trên con phố cổ nhộn nhịp đông đúc. Ở đây ngoài bánh mì doner truyền thống ra bạn còn có thể gọi riêng nhân bánh gồm có thịt nướng thơm nức kèm theo các loại rau và thêm cả khoai tây chiên nữa. Không những vậy ở đây còn có cả cơm dành cho các bạn dân văn phòng nữa đấy :3. Thịt ở đây đầy ú ụ nhiều khi mình còn k ăn hết nổi 1 suất nữa í T_T nhiều cực luôn.
Giá giao động từ 30k-50k mà thịt thì nhiều thôi rồiiiiiii :”3.
</p>
                                        <p style={{ "paddingLeft": "385px", "fontStyle": "oblique", "fontWeight": "700" }}>Nguồn: Phạm Tùng Lâm</p>

                                    </div>


                                    <div className="modal-footer">


                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Close</button>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id={"cafeGiang"} role="dialog">
                            <div className="modal-dialog">
                                {/* Modal content*/}
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                        <h1 className="modal-title">Café giảng – 39 nguyễn hữu huân</h1>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            style={{ "width": "576px", "height": "346px" }}
                                            src={"/images/cafeGiang.jpg"}
                                        />
                                        <p style={{ "textAlign": "justify", "textIndent": "30px", "fontStyle": "italic" }}>Con phố Nguyễn Hữu Huân bây giờ nổi tiếng là con phố café với những quán café. Có rất nhiều quán to rộng hiện đại thương hiệu nước ngoài. Ấy vậy mà tại số 39 có 1 con ngõ nhỏ nhưng lại luôn tấp nập người ra người vào, đi qua luôn bị cuốn hút bởi mùi thơm của café và mùi ngậy ngậy của trứng gà.
Đấy là địa chỉ của café Giảng. 1 quán café có từ rất lâu đời. Khi mà người dân ta còn khó khắn hiếm người có thể thưởng thức được ly café đắt đỏ theo cách pha chế của người phương tây là cốc Capuchino. Thì tại đây cụ Giảng đã tìm cách giảm giá thành mà vẫn giữ được hương vị thơm ngon như cách pha chế của Capuchino. Đó là kết hợp café với trứng đánh bông, cốc café đó được đặt trong 1 bát nước ấm để giữ nhiệt cho café.
Giữa cái giá rét của mùa đông, ngồi tại một góc của Hà Nội thưởng thức 1 ly café trứng thì bao cái giá lạnh cũng tan hết trong lòng.
Giá 25k/ cốc </p>
                                        <p style={{ "paddingLeft": "385px", "fontStyle": "oblique", "fontWeight": "700" }}>Nguồn: Vũ Minh Châu </p>

                                    </div>


                                    <div className="modal-footer">


                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Close</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id={"phoThin"} role="dialog">
                            <div className="modal-dialog">
                                {/* Modal content*/}
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                        <h1 className="modal-title">Phở thìn- 13 Lò Đúc</h1>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            style={{ "width": "576px", "height": "346px" }}
                                            src={"/images/phoThin.jpg"}
                                        />
                                        <p style={{ "textAlign": "justify", "textIndent": "30px", "fontStyle": "italic" }}>Danh tiếng của quán phở này thì khỏi phải bàn rồi các bạn nhỉ. Nhắc đến phở là người ta đã nghĩ ngay đến phở thìn lò đúc rồi. ad rất may vì mình được sinh ra trên con phở có quán phở nổi tiếng này  :”3. Ấy vậy mà nhà cách quán phở có vài bước chân nhưng chả mấy khi ăn vì lần nào đi qua quan cũng đông nghịt người. Nên cứ đi tận đâu đâu ăn í để rồi lại có bài review cho các bạn hihi :3. Nhân tiên hôm nay đẹp trời đi ăn lại ở đây nên viết review lunnn.
Phở ở đây chỉ có 1 món duy nhất là phở bò tái lăn nên nước sẽ hơi mỡ 1 chút và có mùi thơm thơm của thịt đã được xào qua. Ăn phở kèm theo 1 đĩa quẩy nóng giòn, với nước dùng ngọt đậm vị xương thì còn gì ngon bằng cho một bứa sáng nữa. À có điều đặc biệt nữa, chuyện này sẽ vui với những bạn thích ăn hành vì khi nhìn vào bát phở bạn sẽ thấy được phủ 1 lớp hành kín bát :)). Nhưng với các bạn sợ hành thì sẽ khá khó nhìn đó. Quán rất đông chưa lúc nào mình thấy ở đó vắng cả. Nên đôi khi quán đông quá họ sẽ khó lòng phục vụ bạn tận tình được. Nhưng vì vị phở ở đây quá đặc biệt và quán có cái vẻ thân quen mộc mạc của Hà Nội xưa nên không ai có thể không quay lại lần 2 được cả.
Dù quán đã rất lâu rồi nhưng hương vị thì mãi vẫn như ngày đâu tiên vậy. Đó là lý do tại sao khi ăn phở bò người ta lại nhắc ngay đến phở Thìn là thế
Giá 50k/bát
</p>
                                        <p style={{ "paddingLeft": "385px", "fontStyle": "oblique", "fontWeight": "700" }}>Nguồn: Admin</p>

                                    </div>


                                    <div className="modal-footer">


                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Close</button>


                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="modal fade" id={"che"} role="dialog">
                            <div className="modal-dialog">
                                {/* Modal content*/}
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                        <h1 className="modal-title">
                                            Chè cũ 1976 – 72 trần hưng đạo
</h1>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            style={{ "width": "576px", "height": "346px" }}
                                            src={"/images/che.jpg"}
                                        />
                                        <p style={{ "textAlign": "justify", "textIndent": "30px", "fontStyle": "italic" }}>Nhìn tên quán chắc các bạn cũng biết được sự lâu đời của quán như thế nào rồi đấy. Mẹ mình ăn từ hồi còn học sinh đến bây giờ thì đến lượt mình :3.
Chè ở đây có 1 cái chất rất riêng không một hàng chè nào giống cả. Các loại thạch, trân châu cũng vậy rất khác luôn ăn 1 lần là nhớ mãi.Chè ở đây nước cốt dừa thì phải chiếm đến 1/3 côc luôn ấy, thơm thơm ngậy ngậy mà lại rất dễ ăn. Quán đặc biết 1 chỗ nữa là họ luôn phục vụ kèm 1 cốc trà sen để sau khi ăn xong tráng miệng nữa.
Ngày trước quán bán chỉ chè và các loại nc ép thôi, bây giờ còn có cả bánh ngọt cũng rất ngon :”3
Quan này nổi tiếng thôi rồi cứ cái tầm tối mùa hè ra là đông nghịt người không có chỗ mà ngồi luôn. Mặc dù đã mở rộng ra thêm rồi mà đôi lúc vẫn phải đứng đợi T_T.
Chè ngon và đặc biết như vậy nên giá cũng hơi mắc hơn so với các hàng chè khác. Nhưng bạn là fan đồ ngọt thì thực sự là bạn phải thử ăn 1 lần sẽ nghiền luôn đấy quên hết các hàng chè khác luôn mất T_T.
Giá từ 45k.
</p>
                                        <p style={{ "paddingLeft": "385px", "fontStyle": "oblique", "fontWeight": "700" }}>Nguồn: Nguyễn Tuấn Anh </p>

                                    </div>


                                    <div className="modal-footer">


                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Close</button>


                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="modal fade" id={"banhGa"} role="dialog">
                            <div className="modal-dialog">
                                {/* Modal content*/}
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                        <h1 className="modal-title">
                                            Bánh gà - 172 hồng mai
                                        </h1>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            style={{ "width": "576px", "height": "346px" }}
                                            src={"/images/banhga.jpg"}
                                        />
                                        <p style={{ "textAlign": "justify", "textIndent": "30px", "fontStyle": "italic" }}>Đã nói đến bánh gà là phải ra Hồng Mai. Mình đi ăn bánh gà ở 1 vài nơi khác nhưng ở đây vẫn là đỉnh nhất. thịt gà không hề bị khô, gia vị tẩm ướp rất thơm và vừa miệng.  Vậy nên ở đây lúc nào cũng đông hết. Hàng ship đi cũng rất nhiều luôn, ngồi ăn mà thấy các a shipper nườm nườm kéo đến để lấy ship hàng cho khách í.
Ngoài bánh gà nổi tiếng ra thì ở đây còn có cả kimbap chiên, phomai que, nem chua rán nữa... Mà giá cả lại cực kì hợp lý cho các bạn học sinh, sinh viên nha.
Giá bánh gà 5k/cái, các món khác giá 25k ,30k /đĩa
</p>
                                        <p style={{ "paddingLeft": "385px", "fontStyle": "oblique", "fontWeight": "700" }}>Nguồn: Vũ Minh Châu</p>

                                    </div>


                                    <div className="modal-footer">


                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Close</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <input
                            style={{ "width": "200px", "marginLeft": "1092px", "height": "29px" }}
                            onKeyDown={e => { this.handleKeyPressSearch(e) }}
                            value={this.state.search}
                            onChange={(e) => this.setState({ search: e.target.value })}
                            className="w3-input" type="text" placeholder="Tìm kiếm..."></input>
                        <div style={{ "display": "inline-flex", "marginLeft": "228px" }}>

                            <h1 id="baiviet" style={{ "fontWeight": "500" }}> BÀI VIẾT MỚI </h1>
                            <div style={{ "display": "block" }}>
                                <h1 style={{ "paddingLeft": "393px", "fontWeight": "500" }}> TOP 5 BÀI VIẾT HOT </h1>
                                <div style={{ "width": "420px", "height": "438px", "textAlign": "left", "paddingTop": "20px", "background": "rgb(243, 99, 124)", "marginLeft": "399px" }}>
                                    <h1 data-toggle="modal" data-target={"#banhGa"} style={{ "fontSize": "27px", "paddingTop": "20px", "color": "bisque", "textDecoration": "underline", "textDecorationColor": "lightpink" }}>#TOP 1: Bánh gà, 172 Hồng Mai </h1>
                                    <h1 data-toggle="modal" data-target={"#che"} style={{ "fontSize": "27px", "paddingTop": "20px", "color": "bisque", "textDecoration": "underline", "textDecorationColor": "lightpink" }}>#TOP 2: Chè cũ 1976, 72 Trần Hưng Đạo </h1>
                                    <h1 data-toggle="modal" data-target={"#doner"} style={{ "fontSize": "27px", "paddingTop": "20px", "color": "bisque", "textDecoration": "underline", "textDecorationColor": "lightpink" }}>#TOP 3: Bánh mì Doner Đức Long, Số 6 Lương Ngọc Quyến </h1>
                                    <h1 data-toggle="modal" data-target={"#phoThin"} style={{ "fontSize": "27px", "paddingTop": "20px", "color": "bisque", "textDecoration": "underline", "textDecorationColor": "lightpink" }}>#TOP 4: Phở thìn, 13 Lò Đúc </h1>
                                    <h1 data-toggle="modal" data-target={"#cafeGiang"} style={{ "fontSize": "27px", "paddingTop": "20px", "color": "bisque", "textDecoration": "underline", "textDecorationColor": "lightpink" }}>#TOP 5: Café giảng, 39 Nguyễn Hữu Huân </h1>

                                </div>
                            </div>
                        </div>
                        <div style={{ "width": "862px", "marginLeft": "162px", "marginTop": "-467px" }}>
                            {adminPostRender}

                        </div>
                    </div>

                    <div id="accountPosts" className="tabcontent">
                        <div>
                            <div style={{ "width": "100%" }}>
                                <table style={{ "background": "white", "width": "65%", "marginLeft": "215px", "marginTop": "13px", "borderSpacing": "0px" }}>
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
                                {/* <div style={{ "width": "401px", "paddingTop": "67px", "paddingLeft": "48px", "color": "chocolate" }}>
                                    <h1>HOT</h1>
                                </div> */}
                                <p style={{ "fontSize": "xx-large", "marginTop": "30px" }}>CHATBOX</p>
                                <div style={{ "width": "859px", "height": "171px", "overflow": "auto", "marginLeft": "216px", "background": "#e5e5da", "textAlign": "left" }}>
                                    {chatboxRender}

                                </div>
                                <input
                                    style={{ "width": "859px", "marginLeft": "216px" }}
                                    onKeyDown={e => { this.handleKeyPressChatbox(e) }}
                                    value={this.state.chatting}
                                    onChange={(e) => this.setState({ chatting: e.target.value })}
                                    className="w3-input" type="text" placeholder="Viết gì đó..."></input>
                                <p style={{ "fontSize": "xx-large", "marginTop": "30px" }}>BÀI ĐĂNG</p>
                            </div>

                            <div style={{ "display": "inline-flex" }}>
                                <div style={{ "width": "862px", "marginLeft": "-112px" }}>
                                    {listForumRender}

                                </div>
                                <div >
                                    {mostViewPost}
                                </div>
                            </div>
                        </div>


                        {/* forum post here... */}


                    </div>
                    <div id="info" className="tabcontent" >
                        <h1> Thông tin cá nhân </h1>
                        <table style={{ "width": "50%", "marginLeft": "320px", border: "1px solid black" }}>
                            <tbody>
                                <tr style={{ border: "1px solid black" }}>
                                    <th className="centerText" style={{ border: "1px solid black" }}>Họ và tên: </th>
                                    <th className="centerText">{name}</th>
                                </tr>
                                <tr style={{ border: "1px solid black" }}>
                                    <th className="centerText" style={{ border: "1px solid black" }}>Email: </th>
                                    <th className="centerText">{email}</th>
                                </tr>
                                <tr style={{ border: "1px solid black" }}>
                                    <th className="centerText" style={{ border: "1px solid black" }}>Giới tính: </th>
                                    <th className="centerText">{Sex}</th>
                                </tr>
                                <tr style={{ border: "1px solid black" }}>
                                    <th className="centerText" style={{ border: "1px solid black" }}>Ngày sinh: </th>
                                    <th className="centerText">{DoB}</th>
                                </tr>
                                <tr style={{ border: "1px solid black" }}>
                                    <th className="centerText" style={{ border: "1px solid black" }}>Số điện thoại: </th>
                                    <th className="centerText" style={{ border: "1px solid black" }}>{phoneNumber}</th>
                                </tr>
                                <tr style={{ border: "1px solid black" }}>
                                    <th className="centerText" style={{ border: "1px solid black" }}>Địa chỉ:   </th>
                                    <th className="centerText">{address}</th>
                                </tr>
                            </tbody>
                        </table>

                        <button
                            data-toggle="modal" data-target="#changeAccount"
                            style={{ "background": "navajowhite", "marginTop": "20px" }}
                        >Sửa tài khoản</button>

                        <button
                            data-toggle="modal" data-target="#changePassword"
                            style={{ "background": "navajowhite", "marginTop": "20px", "marginLeft": "10px" }}
                        >Đổi mật khẩu</button>


                        <div className="modal fade" id="changeAccount" role="dialog" >
                            <div className="modal-dialog">
                                {/* Modal content*/}
                                <div className="modal-content" style={{ "background": "pink" }}>
                                    <div className="modal-header">
                                        <h4>Thông tin cá nhân</h4>
                                        {/* <button type="button" className="close" data-dismiss="modal">×</button> */}
                                    </div>
                                    <div className="modal-body" style={{ "display": "grid" }}>
                                        <input
                                            style={{ "background": "wheat" }}
                                            placeholder="Họ và tên"
                                            value={this.state.fullName}
                                            onChange={(e) => this.setState({ fullName: e.target.value })}
                                        />
                                        <input

                                            style={{ "marginTop": "10px", "background": "wheat" }}
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={(e) => this.setState({ email: e.target.value })}
                                        />
                                        <input
                                            style={{ "marginTop": "10px", "background": "wheat" }}
                                            placeholder="Giới tính"
                                            value={this.state.sex}
                                            onChange={(e) => this.setState({ sex: e.target.value })}
                                        />
                                        <input
                                            style={{ "marginTop": "10px", "background": "wheat" }}
                                            placeholder="Ngày sinh"
                                            value={this.state.DoB}
                                            onChange={(e) => this.setState({ DoB: e.target.value })}
                                        />
                                        <input
                                            style={{ "marginTop": "10px", "background": "wheat" }}
                                            placeholder="Số điện thoại"
                                            value={this.state.phoneNumber}
                                            onChange={(e) => this.setState({ phoneNumber: e.target.value })}
                                        />
                                        <input
                                            style={{ "marginTop": "10px", "background": "wheat" }}
                                            placeholder="Địa chỉ"
                                            value={this.state.address}
                                            onChange={(e) => this.setState({ address: e.target.value })}
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            onClick={() => this.editAccountData()}

                                            type="button" className="btn btn-default"
                                        >OK
                                        </button>
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Đóng</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="changePassword" role="dialog">
                            <div className="modal-dialog">
                                {/* Modal content*/}
                                <div className="modal-content" style={{ "width": "450px", "marginLeft": "120px", "background": "pink" }}>
                                    <div className="modal-header">
                                        <h4>Đổi mật khẩu</h4>
                                    </div>
                                    <div className="modal-body">
                                        <input
                                            value={this.state.password}
                                            onChange={(e) => this.setState({ password: e.target.value })}
                                            type="password" style={{ "width": "300px", "background": "wheat" }} placeholder="Nhập mật khẩu"></input>
                                        <input
                                            value={this.state.newPassword}
                                            onChange={(e) => this.setState({ newPassword: e.target.value })}
                                            type="password" style={{ "width": "300px", "marginTop": "7px", "background": "wheat" }} placeholder="Mật khẩu mới"></input>
                                        <input
                                            value={this.state.confirmNewPassword}
                                            onChange={(e) => this.setState({ confirmNewPassword: e.target.value })}
                                            type="password" style={{ "width": "300px", "marginTop": "7px", "background": "wheat" }} placeholder="Xác nhận mật khẩu"></input>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            onClick={() => this.changePassword()}
                                            className="btn btn-default" >OK</button>
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
export default forumAccountComponent;