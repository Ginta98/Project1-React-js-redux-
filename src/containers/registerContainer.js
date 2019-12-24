import React, { Component } from 'react';
import RegisterComponent from '../components/registerComponent'
import { registerAction } from '../actions/loginAndRegisterAction'
import { connect } from 'react-redux'
class RegisterContainer extends Component {
    render() {

        return (
            <RegisterComponent {...this.props} />
        );
    }

}
const mapStateToProps = (store) => {
    return {
        isRegister : store.registerReducer.isRegister
    }
}
const mapDispatchToProps = (dispath) => {
    return {
        register: (dataRegister) => {
            dispath(registerAction(dataRegister))
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)