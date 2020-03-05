// Code EyesOnMe Component Here
import React, { Component } from 'react';


export default class E extends Component{

    enteringPass = () => {

        console.log("Entering password...")
    }
    render() {
        return (
            <input type="password" onKeyUp={this.enteringPass}/>
        )
      }
}