import React, { Component } from 'react';
import Routes from "./routes";
import Home from './pages/homePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Routes />
        <div style={{ "background": "pink", "height": "20%", "width": "100%","paddingTop":"160px"}}>
          <center>
            <p>Mọi thắc mắc xin liên hệ: hotro.yeuamthuc@gmail.com</p>
            <p>Liên hệ công việc: yeuamthuc@gmail.com</p>
            <p>Hotline: 0123abcxyz</p>
          </center>
        </div>
      </div>
    );
  }
}

export default App;
