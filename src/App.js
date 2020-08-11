import React from 'react';
import Test from './test';
import './App.css';

class App extends React.Component{
  state = {ankush: ['bsjhhanu','asjsk']}
  render(){
    return (
  
    <div>
      <Test contacts={this.state.ankush}/>
      {/* hello */}
    </div>
  );
}
}

export default App;
