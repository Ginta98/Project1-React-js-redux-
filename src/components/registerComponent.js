import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


class registerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            account: "",
            password: "",
            email: "",
            fullName: "",
            DoB: "",
            Sex: "",
            phoneNumber: "",
            address: "",

        }
    }
    componentDidMount(){
        document.getElementById("register").style.display = "block";
    }
    onClickRegister() {
        let data = {
            dob: this.state.DoB.toString(),
            id: this.state.id,
            account: this.state.account,
            password: this.state.password,
            email: this.state.email,
            fullName: this.state.fullName,
            DoB: this.state.DoB,
            sex: this.state.Sex,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
        }

        this.props.register(data);


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
    login() {
        window.location.href = "/login"
    }
    register() {

        document.getElementById("register").style.display = "block";
    }
    home() {
        window.location.href = "/"
    }
    render() {
        if (this.props.isRegister) {
            return <Redirect to='/login'></Redirect>
        }


        return (
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

                    <button className="tablinks"
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
                <div id="register" className="tabcontent">
                    <table border={1} style={{ "marginTop": "10%", "marginLeft": "31%" }}>
                        <tbody>
                            <tr>
                                <td height={45} colSpan={2} bgcolor="#FF8080"><center> Đăng Ký Thành Viên </center></td>
                            </tr>
                            <tr>
                                <td width={119} height={35}><center>ID:</center> </td>
                                <td width={228}><label>
                                    <input name="txtuser" type="text" size={50}
                                        value={this.state.account}
                                        onChange={(e) => this.setState({ account: e.target.value })}
                                    />
                                </label></td>
                            </tr>
                            <tr>
                                <td height={35}><center>Password: </center></td>
                                <td><label>
                                    <input name="txtuser" type="password" size={50}
                                        value={this.state.password}
                                        onChange={(e) => this.setState({ password: e.target.value })} />
                                </label></td>
                            </tr>

                            <tr>
                                <td height={35}><center>Email: </center></td>
                                <td><label>
                                    <input name="txtuser" type="text" size={50}
                                        value={this.state.email}
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                    />
                                </label></td>
                            </tr>

                            <tr>
                                <td height={35}><center>Họ Tên:</center> </td>
                                <td><label>
                                    <input name="txtuser" type="text" size={50}
                                        value={this.state.fullName}
                                        onChange={(e) => this.setState({ fullName: e.target.value })} />
                                </label></td>
                            </tr>
                            <tr>
                                <td height={35}><center>Năm sinh: </center></td>
                                <td><label>
                                    <input name="txtuser" type="date" size={50}
                                        value={this.state.DoB}
                                        onChange={(e) => this.setState({ DoB: e.target.value })} />
                                </label></td>
                            </tr>
                            <tr>
                                <td height={35}><center>Giới Tính: </center></td>
                                <td> <label><input name="txtuser" type="text" size={50}
                                    value={this.state.Sex}
                                    onChange={(e) => this.setState({ Sex: e.target.value })} />
                                </label>
                                </td>
                            </tr>
                            <tr>
                                <td height={35}><center>Số Điện Thoại: </center></td>
                                <td><label>
                                    <input name="txtuser" type="tel" size={50}
                                        value={this.state.phoneNumber}
                                        onChange={(e) => this.setState({ phoneNumber: e.target.value })} />
                                </label></td>
                            </tr>
                            <tr>
                                <td height={35}><center>Địa chỉ: </center></td>
                                <td><label>
                                    <input name="txtuser" type="text" size={50}
                                        value={this.state.address}
                                        onChange={(e) => this.setState({ address: e.target.value })} />
                                </label></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button
                                        onClick={() => this.onClickRegister()}
                                    > Đăng Ký </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default registerComponent;