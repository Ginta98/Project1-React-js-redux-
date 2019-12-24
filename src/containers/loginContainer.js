import React, { Component } from 'react';
import LoginComponent from '../components/loginComponent'
import { loginAction } from '../actions/loginAndRegisterAction'
import { connect } from 'react-redux'
class LoginContainer extends Component {
    render() {

        return (
            <LoginComponent {...this.props}/>
        );
    }

}
const mapStateToProps = (store) => {
    return {
        accountInfo: store.loginReducer.accountInfo,
        isLogin: store.loginReducer.isLogin
    }
}
const mapDispatchToProps = (dispath) => {
    return {
        login: (dataUser) => {
            dispath(loginAction(dataUser))
        },

      
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);