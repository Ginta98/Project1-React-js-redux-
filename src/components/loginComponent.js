import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class loginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: "",
            password: "",
            email: "",
            fullName: "",
            DoB: "",
            Sex: "",
            phoneNumber: "",
            address: ""
        }
    }
    componentDidMount(){
        document.getElementById("login").style.display = "block";
      
    }
    onClickLogin() {

        this.props.login(this.state)
        this.setState({
            account: "",
            password: "",
            email: "",
            fullName: "",
            DoB: "",
            Sex: "",
            phoneNumber: "",
            address: ""
        });
    }
    loginAsAdmin = () => {
        if (this.state.account === "admin" && this.state.password === "admin") {
            window.location.href = "/adminHome"
        }
        else (alert("Bạn có phải Admin không ?"))
    }
    login() {
        document.getElementById("login").style.display = "block";
    }
    register() {
        window.location.href = "/register"
    }
    home(){
        window.location.href = "/"
    }

    render() {
        if (this.props.isLogin) {
            // Set user information to local storage
            localStorage.setItem("name", this.props.accountInfo.fullName);
            localStorage.setItem("email", this.props.accountInfo.email);
            localStorage.setItem("DoB", this.props.accountInfo.DoB);
            localStorage.setItem("Sex", this.props.accountInfo.Sex);
            localStorage.setItem("phoneNumber", this.props.accountInfo.phoneNumber);
            localStorage.setItem("address", this.props.accountInfo.address);
            localStorage.setItem("id", this.props.accountInfo.id);
            localStorage.setItem("password", this.props.accountInfo.password);
            // Redirect to forum page
            return <Redirect to='/forumAccount'></Redirect>
        }

        return (<div>
            <div>

                <img
                    src="/images/bgImage.png"
                    style={{ "width": "100%", "height": "260px", "marginBottom": "-91px" }}
                />
                <div className="tab" style={{ "marginTop": "95px" }}>
                    <button className="tablinks"
                      onClick={() => this.home()}
                        style={{ "width": "33%", "height": "40px", "background": "rgb(243, 99, 124)" }}

                    >Trang chủ</button>
                   
                    <button className="tablinks" id = "loginButton"
                        onClick={() => this.login()}
                        style={{ "width": "33%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}

                    >Đăng nhập</button>
                    <button className="tablinks"
                        onClick={() => this.register()}
                        style={{ "width": "33%", "height": "40px", "background": "rgb(243, 99, 124)", "marginLeft": "5px" }}

                    >Đăng ký</button>
                </div>
                <div id="adminPosts" className="tabcontent">
                    <div style={{ "width": "862px", "marginLeft": "162px" }}>


                    </div>
                </div>
            </div>
            <div id="login" className="tabcontent">
                <table border={1} style={{ "marginLeft": "40%", "marginTop": "12%" }}>
                    <tbody><tr>
                        <td height={45} colSpan={2} bgcolor="#FF8080"><center> Đăng Nhập </center></td>
                    </tr>
                        <tr>
                            <td height={35}><center> ID: </center> </td>
                            <td><label>
                                <input name="txtuser" type="text" size={25}
                                    value={this.state.account}
                                    onChange={(e) => this.setState({ account: e.target.value })}
                                />
                            </label></td>
                        </tr>
                        <tr>
                            <td height={35}><center> Password: </center></td>
                            <td><label>
                                <input name="txtpass" type="password" size={25}
                                    value={this.state.password}
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                />
                            </label></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button style={{ "float": "left" }}
                                    onClick={() => this.onClickLogin()}
                                >Đăng nhập
                        </button>
                                <a href="register" style={{ "color": "black" }}>Tạo tài khoản mới</a>
                            </td>


                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button
                                    onClick={() => this.loginAsAdmin()}
                                    style={{ "background": "darkorange" }}
                                >Login as Administrator</button>
                            </td>
                        </tr>
                    </tbody></table>
            </div>
        </div>
        )
    }
}
export default loginComponent