import React, { Component } from 'react';
import './App.css';
import car from './Car/Car'

class App extends Component {
    render() {
        const divStyle = {
            textAlign: 'center'
        }
        return (
                <div style={divStyle}>
                    <h1>Hello, World!</h1>
                    <car/>
                </div>
        );
    }
}
export default App;
