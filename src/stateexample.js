import React, { Component } from 'react';
import Test from './test';

class Statesample extends Component{
    state = {ankush: ['anku','bsjanu','ak']}
    render(){
      return (
    
      <div>
        <Test contacts={this.state.ankush}/>
        {/* hello */}
      </div>
    );
  }
  }
  
  export default Statesample;
  