import React, { Component } from 'react'



// 高阶组件一般以with命名开头(其实就是一个函数)，传递一个组件 返回一个新组件
// 1.高阶组件的第一种类型  属性添加
const withPro = (Com)=>{
    const nweCom = (props) => (
        // 将原组件的所有属性保留 ...props; 进行属性的添加name
        <Com {...props} name='我是高阶组件中返回的新组件属性name'></Com>
    )
        return nweCom  //返回新的组件 => 函数组件
}

// 2. 高阶组件的第二种类型  重写生命周期   用class 组件
const withLife = (Com) => {
    class newCompont extends Component{
        componentDidMount(){
            console.log('使用高阶组件复写生命周期')
        }
        render(){
            return <Com {...this.props}></Com>
        }
    }
    return newCompont
}

@withPro
@withLife

class HOC extends Component {
    render() {
        return (
            <div>
                <p>体验高阶组件的写法</p>
                姓名：{this.props.name}
            </div>
        )
    }
}
// 高阶组件的链式调用
// export default withLife(withPro(HOC))

export default HOC