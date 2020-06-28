 import React from 'react';
//  PureComponent的演示
import PureComponent from './Purememo/Purememo'
// Composition复合组件的使用
import Composition from './Composition/Composition'
// HOC高阶组件的使用
import HOC from './HOC/HOC'
// 、COntext的使用
import Context2 from './Context/Context2'
function App() {
  return (
    <div>
      <h1>purecomponent的使用</h1>
      <PureComponent></PureComponent>
      <h1>composition复合组件的使用</h1>
      <Composition></Composition>
      <h1>高阶组件HOC</h1>
      <HOC></HOC>
      <h1>COntext的使用</h1>
      <Context2></Context2>
    </div>
  );
}

export default App;
