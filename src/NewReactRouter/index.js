import React,{ Component } from 'react'
import { BrowserRouter as Router, Link, Switch ,Route, Redirect } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import store from './store'
import {login} from './user.redux'
function App() {
    return(
     <>
        <ul>
            <li>
                <Link to='/'>首页</Link>
            </li>
            <li>
                <Link to='/classes'>课程</Link>
            </li>
            <li>
                <Link to='/me'>我的</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/classes' component={Classes}></Route>
            {/* <Route path='/me' component={Me}></Route> */}
            <Route path='/login' component={Login}></Route>
            <RouterGuard path='/me' component={Me}></RouterGuard>
            <Route path='/detail/:course' component={Detail}></Route>   
            <Route component={NotFount}></Route>
        </Switch>
       
     </>
    )
}

// 路由守卫
@connect( state=>({isLogin:state.isLogin}))
class RouterGuard extends Component{
    
    render(){
        const { component:Component, ...otherProps } = this.props
        return(
            <Route {...otherProps} render={(prop)=>(this.props.isLogin? <Component {...prop}></Component> : <Redirect to={{pathname:'/login',from:prop.location.pathname}} ></Redirect>)} ></Route>
        )
    }
}

@connect(
    state=>({isLogin:state.isLogin}),
    {login}
)

class Login extends Component{
    render(){
        // console.log(this.props.location.from)
        const from = this.props.location.from ? this.props.location.from : '/'
        if(this.props.isLogin){
            return <Redirect to={from}></Redirect>
        }
        return(
            <>
             <div> 请登录</div>
             <button onClick={this.props.login}>登录</button>
            </>

        )
    }
}



function Home({location}){
    // console.log(location)
    const result = location.state? <div>带回来的参数{location.state.fo}</div> : null
    return(
        <div>
            首页
            {result}
        </div>
    )
}

function Classes() {
   return(
        <div>
            <ul>
                <li>
                    <Link to='/detail/react'>react</Link>
                </li>
                <li>
                    <Link to='/detail/vue'>vue</Link>
                </li>
            </ul>
        </div>
   )    
}

function Detail({match,history}){
    console.log(match)
    return(
        <div>
            这是{match.params.course}
            <button onClick={()=>{history.push({pathname:'/',state:{fo:'our'}})}}>返回首页</button>
        </div>
    )
}

function Me(){
    return(
        <div>
            <h4>个人中心</h4>
            <ul>
                <li>
                    <Link to='/me/userinfo'>个人信息</Link>
                </li>
                <li>
                    <Link to='/me/order'>订单</Link>
                </li>
            </ul>
            <Switch>
                <Route path='/me/userinfo' component={()=>(<div>
                    信息详情
                </div>)}></Route>
                <Route path='/me/order' component={()=>(<div>
                    客户订单
                </div>)}></Route>
            </Switch>
            <Redirect to='/me/userinfo'></Redirect>
        </div>
    )
}

function NotFount() {
    return(
        <div>
            404
        </div>
    )
}

export default function RouterEx() {
    return (
        <Router>
            <Provider store={store}>
                <App>
                
                </App>
            </Provider>
           
        </Router>
        
    )
}
