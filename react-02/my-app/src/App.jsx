import React, { Component } from 'react'
import Add from './components/add/add'
import CommentList from './components/comment-list/comment-list'
export default class App extends Component {
  state={
    comments:[
      {id:1,username:'tom',content:'React不错!'},
      {id:2,username:'jack',content:'React真好玩!'}
  ]
  }

  addComment=(comment)=>{
    //更新state中的comments
    this.setState({
      comments:[comment,...this.state.comments]
    })
  }
  deleteComment=(commentId)=>{
    this.setState({
      comments:this.state.comments.filter(({id})=>commentId!==id)
    })
  }
  render() {
    return (
    <div>
      <header className="site-header jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <Add addComment={this.addComment}></Add>
        <CommentList deleteComment={this.deleteComment} commentList={this.state.comments}></CommentList>
      </div>

    </div>
    )
  }
}
