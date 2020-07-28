import React, { Component } from 'react'
import withFetch from './HocFetch'
// 使用写法一：
/* const Banner = withFetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')(props => {
    
    return(
        <div>
           <p>{props.data.banner[0].title}</p>
        </div>
    )
})

export default Banner

*/


// 使用写法二：
 /*class Banner extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.data.banner[0].title}</p>
           </div>
        )
    }
}

export default withFetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')(Banner)

*/



// 使用写法三：
@withFetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
class Banner extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.data.banner[0].title}</p>
           </div>
        )
    }
}

export default Banner
 