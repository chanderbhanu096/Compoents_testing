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
class Clock extends Component{
    
        constructor(props){
            super(props);
            this.state = {date: new Date()};
        }

        //We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
        componentDidMount(){
            this.timerID = setInterval(()=>this.tick(),
            1000);
        }

        // We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.
        componentWillUnmount(){
            clearInterval(this.timerID);
        }

        tick() {
            this.setState({
              date: new Date()
            });
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