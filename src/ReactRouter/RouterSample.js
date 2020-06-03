import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import { connect,Provider } from 'react-redux'
import store from '../Reduxfloder/ReduxSaga'
// 登录方法
import { login} from '../Reduxfloder/ReduxSaga/user.redux'
function App(){
    return(
        <div>
            <ul>
                <li>
                    <Link to='/' >首页</Link>
                </li>
                <li>
                    <Link to='/mine' >我的</Link>
                </li>
                <li>
                    <Link to='/classes' >课程</Link>
                </li>
                <li>
                    <Link to='/notfound' >没有的组件</Link>
                </li>

            </ul>
            {/* 路由配置 */}
            <Switch>
                <Route exact path='/' component={Home}></Route>
                {/* <Route path='/mine' component={Mine}></Route> */}
                {/* 路由守卫，若登录显示Mine组件，若未登录,则跳转至登录组件 */}
                <RouterGuard path='/mine' component={Mine}></RouterGuard>
                <Route path='/login' component={Login}></Route>
                <Route path='/classes' component={Classes}></Route>
                {/* 配置组件404 组件*/}
                <Route  component={()=>(<div> Not Found </div>)}></Route>
            </Switch>
        </div>
    )
}

// 编写路由守卫组件，进行权限控制
@connect(state=>({isLogin:state.user.isLogin}))
class RouterGuard extends Component{
    render(){
        const { component:Component , ...otherProps} = this.props
        // console.log(this.props)
        return(
            <Route {...otherProps} 
                render={()=>(
                    this.props.isLogin ? 
                    <Component></Component>
                     : <Redirect to={
                         {pathname:'/login',state:{from:this.props.location.pathname}}
            } ></Redirect>)}>
            </Route>
        )
    }
        
}

// 登录组件
@connect(
    state=>({isLogin:state.user.isLogin}),
    {login}
    )
class Login extends Component{
    //  state = {
    //     isLogin : false
    // }
    // login = () => {
    //     prop.login(()=>{
    //         this.setState({
    //             isLogin:true
    //         })
    //     })
    // }
    render(){
        // 回调地址
        const from = (this.props.location.state && this.props.location.state.from ) || '/'
            if(this.props.isLogin){
                return <Redirect to={ from }></Redirect>
            }
        console.log(this.props)
        return(
            <div>
                <p>请先登录</p>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
   
}


// 模拟接口
// const auth = {
//     isLogin:false,
//     login(callback){
//         this.isLogin = true
//         setTimeout(callback,1000)
//     }
// }
// 首页组件
function Home({location}) {
    // console.log(location)
    return(
        <div>
            首页
            {location.state && location.state.foo ? <div>我是从课程详情组件返回的参数{location.state.foo}</div> : null}
        </div>
    )
    
}
// 我的组件
function Mine(){
    return(
        <div>
            <h2>个人中心----路由嵌套--重定向</h2>
            <ul>
                <li>
                    <Link to='/mine/userinfo'>个人信息</Link>
                </li>
                <li>
                    <Link to='/mine/order'>客户订单</Link>
                </li>
            </ul>
            {/* 路由配置 */}
            <Switch>
                <Route path='/mine/userinfo' component={()=>(<div>
                    个人信息
                </div>)}></Route>
                <Route path='/mine/order' component={()=>(<div>
                    客户订单
                </div>)}></Route>

                {/* 路由重定向,当进入个人中心页面的时候，没有命中我们的路由配置的时候就显示重定向路由的内容 */}
                <Redirect to='/mine/userinfo'></Redirect>
            </Switch>

        </div>
    )
}
// 课程组件
function Classes(){
    return(
        <div>
            <h2>课程组件</h2> 
            <ul>
                <li>
                    <Link to='/classes/react'>react</Link>
                </li>
                <li>
                    <Link to='/classes/vue'>vue</Link>
                </li>
            </ul>
               {/*组件带参  */}
               <Route path='/classes/:detail' component={Detail}></Route>
        </div>
    )
}

// 课程详情组件
function Detail({ history, match, location }){
    // console.log( history, match, location)
    return(
        <div>
            我是课程{match.params.detail}的详情
            <button onClick={()=>history.push({pathname:'/', state:{foo:'bar'}})} >返回首页</button>
        </div>
    )
}

export default function RouterSample() {
    return (
        <div>
            <h1>演示react-router</h1>
            <Router>
                <Provider store={store}>
                    <App></App>
                </Provider>
            </Router>
            
        </div>
    )
}
