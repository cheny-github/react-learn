import React, { Component } from 'react'
import './search.css'
import Pubsub from 'pubsub-js'
export default class Search extends Component {
    searchBoxRef=React.createRef()
    // 通过父组件进行兄弟组件之间通信
    // 点击搜索，把用户输入传递给父组件App ，再由父组件交给mian发送ajax请求处理
    // handleSearch=()=>{
    //     let {value} = this.searchBoxRef.current
    //     let {setUserName} = this.props
    //     setUserName(value)
    // }

    handleSearch=()=>{
      let {value} = this.searchBoxRef.current
      Pubsub.publish('search',value)
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
