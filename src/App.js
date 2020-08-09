import React from 'react';
import Test from './test';
import './App.css';
const ankush = ['bholu','bhanu','ak'];
class App extends React.Component{
  render(){
    return (
  
    <div>
      <Test contacts={ankush}/>
      {/* hello */}
    </div>
  );
}
}

export default App;
