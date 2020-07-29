 import React from 'react';
//  PureComponent的演示
import PureComponent from './Purememo/Purememo'
// Composition复合组件的使用
import Composition from './Composition/Composition'
// HOC高阶组件的使用
import HOC from './HOC/HOC'
import Banner from './HOC/Banner'
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
// Error错误边界处理,将有可能出错的放在错误边界组件中
import ErrorParent from './Error/ErrorParent'
function App() {
  return (
    <div>
      <h1>purecomponent的使用</h1>
      <PureComponent></PureComponent>
      <h1>composition复合组件的使用</h1>
      <Composition></Composition>
      <h1>高阶组件HOC</h1>
      <HOC></HOC>
      <h2>使用高阶组件方式封装fetch请求并在Chengpin.jsx中使用</h2>
      <Banner></Banner>
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
      <h1>Error错误边界处理,将有可能出错的放在错误边界组件中</h1>
      <ErrorParent></ErrorParent>
    </div>
  );
}

export default App;
