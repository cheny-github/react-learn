import React, { Component } from 'react'

export default class Add extends Component {
    state={
      username:'',
      content:''
    }
    handleInput =(event,fieldName)=>{
      this.setState({
        [fieldName]:event.target.value
      })
    }
    addComment=()=>{
      console.log('addComment')
      const {addComment}= this.props
      const {username,content}=this.state
      if (username.trim() && content.trim()) {
          addComment({
            id:Date.now(),
            username,
            content
          })
      }
      this.setState({
        username:'',
        content:''
      })

    }
    render() {
      const {username,content}=this.state
        return (
            <div className="col-md-4">
            <form className="form-horizontal">
              <div className="form-group">
                <label>用户名</label>
                <input onChange={ev=>this.handleInput(ev,'username')} 
                       value={username}
                       type="text"
                       className="form-control"  
                       placeholder="用户名" />
              </div>
              <div className="form-group">
                <label>评论内容</label>
                  <textarea 
                        value={content}
                        onChange={ev=>this.handleInput(ev,'content')}
                        className="form-control" 
                        rows="6" placeholder="评论内容">
                  </textarea>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
                </div>
              </div>
            </form>
          </div>
        )
    }
}
