import React, { Component } from 'react';

/* class Clock extends Component {
    render() {
        return (
            <div>
                <h1>hello</h1>
                <h2>time: {this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
*/

// class clock with  states for updating UI on  time intervals
// 1. first change props with the this.state.
/* class Clock extends Component {

    render() {
        return (
            <div>
                <h1>hello</h1>
                <h2>time: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
} */

// 2. Add a class constructor that assigns the initial this.state:*/
Class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
            <div>
                <h1>hello</h1>
                <h2>time: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
export default Clock;