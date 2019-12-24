import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAdminPost } from '../actions/adminActions';
import { getForum } from '../actions/forumActions';
class homePagee extends Component {
    componentDidMount() {
        this.props.getForum();
        this.props.getAdminPosts();
        document.getElementById("post").style.display = "block";
        document.getElementById("homeButton").style.background = "rgb(235, 220, 233)"
    }
    intro() {
        document.getElementById("intro").style.display = "block";
        document.getElementById("post").style.display = "none";
        document.getElementById("forum").style.display = "none";
        document.getElementById("introButton").style.background = "rgb(235, 220, 233)"
        document.getElementById("homeButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("forumButton").style.background = "rgb(243, 99, 124)"
    }
    post() {
        document.getElementById("intro").style.display = "none";
        document.getElementById("post").style.display = "block";
        document.getElementById("forum").style.display = "none";
        document.getElementById("homeButton").style.background = "rgb(235, 220, 233)"
        document.getElementById("introButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("forumButton").style.background = "rgb(243, 99, 124)"
    }
    forum() {
        document.getElementById("intro").style.display = "none";
        document.getElementById("post").style.display = "none";
        document.getElementById("forum").style.display = "block";
        document.getElementById("forumButton").style.background = "rgb(235, 220, 233)"
        document.getElementById("introButton").style.background = "rgb(243, 99, 124)"
        document.getElementById("homeButton").style.background = "rgb(243, 99, 124)"
    }
    login() {
        window.location.href = "/login"
    }
    register = () => {
        window.location.href = "/register"

    }
    render() {
        let forumPostss = this.props.userPostss;
        let forumPostssRender;
        if(forumPostss){
            forumPostssRender = forumPostss.map((item,a)=>{
                item = forumPostss[forumPostss.length - 1 - a];
                return (
                    <div key={a} style={{ "background": "pink", "width": "66%", "marginLeft": "18%", "marginTop": "50px" }}>
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
                                  



                                 

                                    <div className="modal-footer">
                                     

                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Close</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }



        let adminPostss = this.props.adminPostss;
        let adminPostssRender;
        if (adminPostss) {
            adminPostssRender = adminPostss.map((item, a) => {
                item = adminPostss[adminPostss.length - 1 - a];
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



                                    <div className="modal-footer">

                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={{ "marginTop": "10px" }}>Close</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                );
            })
        }

        return (




            <div>
                <div className="modal fade" id={"1a"} role="dialog">
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
                <div className="modal fade" id={"2a"} role="dialog">
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
                <div className="modal fade" id={"3a"} role="dialog">
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
                <div className="modal fade" id={"4a"} role="dialog">
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
                <div className="modal fade" id={"5a"} role="dialog">
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



                <div>
                    <img
                        src="/images/bgImage.png"
                        style={{ "width": "100%", "height": "260px" }}
                    />
                    {/* <table style={{ "width": "100%", "fontFamily": "arial", "marginTop": "-5px", "height": "40px" }}>
                    <tbody>
                        <tr >

                            <th className="centerText" style={{ "border": "1px solid black", "width": "25%" }}> <a href="intro" style={{ "textDecoration": "none", "color": "black" }}>Giới Thiệu</a></th>
                            <th className="centerText" style={{ "border": "1px solid black", "width": "25%" }}><a href="post" style={{ "textDecoration": "none", "color": "black" }}>Bài viết</a></th>
                            <th className="centerText" style={{ "border": "1px solid black", "width": "25%" }}><a href="login" style={{ "textDecoration": "none", "color": "black" }}>Đăng nhập</a></th>
                            <th className="centerText" style={{ "border": "1px solid black", "width": "25%" }}> <a href="register" style={{ "textDecoration": "none", "color": "black" }}>Đăng kí</a></th>


                        </tr>
                    </tbody>
                </table> */}

                </div>
                <div className="tab">
                    <button className="tablinks"
                        id="introButton"
                        style={{ "width": "19.4%", "height": "40px", "background": "rgb(243, 99, 124)" }}
                        onClick={() => this.intro()}
                    >Giới thiệu</button>
                    <button className="tablinks"
                        id="homeButton"
                        style={{ "width": "19.4%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}
                        onClick={() => this.post()}
                    >Trang chủ</button>
                    <button className="tablinks"
                        id="forumButton"
                        onClick={() => this.forum()}
                        style={{ "width": "19.4%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}

                    >Diễn đàn</button>
                    <button className="tablinks"
                        onClick={() => this.login()}
                        style={{ "width": "19.4%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}

                    >Đăng nhập</button>

                    <button className="tablinks"
                        onClick={() => this.register()}
                        style={{ "width": "19.4%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}

                    >Đăng ký</button>

                </div>
                <div id="forum" className="tabcontent">
                    {forumPostssRender}
                </div>
                <div id="intro" className="tabcontent">
                    <center> <h1 style={{ "font-size": "28px", "marginTop": "130px" }}>WEBSITE: Review nhà hàng , ẩm thực trên khắp các tỉnh thành</h1> </center>
                </div>

                <div id="post" className="tabcontent">

                    <div style={{ "display": "inline-flex", "marginLeft": "228px" }}>
                        <h1 style={{ "fontWeight": "500" }}> BÀI VIẾT MỚI </h1>
                        <div style={{ "display": "block" }}>
                            <h1 style={{ "paddingLeft": "393px", "fontWeight": "500" }}> TOP 5 BÀI VIẾT HOT </h1>
                            <div style={{ "width": "420px", "height": "438px", "textAlign": "left", "paddingTop": "20px", "background": "rgb(243, 99, 124)", "marginLeft": "399px" }}>
                                <h1 data-toggle="modal" data-target={"#1a"} style={{ "fontSize": "27px", "paddingTop": "20px", "color": "bisque", "textDecoration": "underline", "textDecorationColor": "lightpink" }}>#TOP 1: Bánh gà, 172 Hồng Mai </h1>
                                <h1 data-toggle="modal" data-target={"#2a"} style={{ "fontSize": "27px", "paddingTop": "20px", "color": "bisque", "textDecoration": "underline", "textDecorationColor": "lightpink" }}>#TOP 2: Chè cũ 1976, 72 Trần Hưng Đạo </h1>
                                <h1 data-toggle="modal" data-target={"#5a"} style={{ "fontSize": "27px", "paddingTop": "20px", "color": "bisque", "textDecoration": "underline", "textDecorationColor": "lightpink" }}>#TOP 3: Bánh mì Doner Đức Long, Số 6 Lương Ngọc Quyến </h1>
                                <h1 data-toggle="modal" data-target={"#3a"} style={{ "fontSize": "27px", "paddingTop": "20px", "color": "bisque", "textDecoration": "underline", "textDecorationColor": "lightpink" }}>#TOP 4: Phở thìn, 13 Lò Đúc </h1>
                                <h1 data-toggle="modal" data-target={"#4a"} style={{ "fontSize": "27px", "paddingTop": "20px", "color": "bisque", "textDecoration": "underline", "textDecorationColor": "lightpink" }}>#TOP 5: Café giảng, 39 Nguyễn Hữu Huân </h1>

                            </div>
                            <div style={{ "marginTop": "-465px", "marginLeft": "-30%", "width": "154px" }}>
                                {adminPostssRender}

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }

}
const mapStateToProps = (store) => {
    return {

        adminPostss: store.adminReducer.dataAdminPost,
        userPostss: store.accountForumReducer.forumElements,
    }
}
const mapDispatchToProps = (dispath) => {
    return {

        getAdminPosts: () => {
            dispath(getAdminPost())
        },
        getForum: () => {
            dispath(getForum())
        },

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(homePagee);

