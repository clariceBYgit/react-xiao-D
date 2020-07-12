 import React from 'react';
//  PureComponent的演示
import PureComponent from './Purememo/Purememo'
// Composition复合组件的使用
import Composition from './Composition/Composition'
// HOC高阶组件的使用
import HOC from './HOC/HOC'
// 、COntext的使用
import Context2 from './Context/Context2'
// HOOK的一系列使用
import UseStateHook from './HOOK/UseStateHook'
import UseEffectHook from './HOOK/UseEffectHook'
import UseContextHook from './HOOK/UseContextHook'
import UseReducerComp from './HOOK/UseReducerComp'
import UseMemoUseCallBack from './HOOK/UseMemoUseCallBack'
import CustomHooks from './HOOK/CustomHooks'
// redux的使用
import FirstRedux from './NewReduxFloder/FirstRedux'
// react-router
import NewReactRouter from './NewReactRouter'
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
      <h1>HOOKs的一系列使用</h1>
      <UseStateHook></UseStateHook>
      <UseEffectHook></UseEffectHook>
      <UseContextHook></UseContextHook>
      <UseReducerComp></UseReducerComp>
      <UseMemoUseCallBack></UseMemoUseCallBack>
      <CustomHooks></CustomHooks>
      <h1>redux</h1>
      <FirstRedux></FirstRedux>
      <h1>react-router+redux-sage编写路由守卫登录认证</h1>
      <NewReactRouter></NewReactRouter>
    </div>
  );
}

export default App;
