import React, { Component } from 'react'
import './search.css'
export default class Search extends Component {
    searchBoxRef=React.createRef()
    // 点击搜索，把用户输入传递给父组件App ，再由父组件交给mian发送ajax请求处理
    handleSearch=()=>{
        let {value} = this.searchBoxRef.current
        let {setUserName} = this.props
        setUserName(value)
    }
    render() {
        return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input ref={this.searchBoxRef} type="text" placeholder="enter the name you search"/>
              <button onClick={this.handleSearch}>Search</button>
            </div>
          </section>
        )
    }
}
