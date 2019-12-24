import React, { Component } from 'react';
class IntroContainer extends Component {
    render() {
        let name; 
        if (localStorage.getItem("email")){
            name = localStorage.getItem("email");
        }
        return (
            <div>
                
                {name? <h1>Xin chào {name}</h1> : <div></div>}
            </div>
        );
    }

}
export default IntroContainer;