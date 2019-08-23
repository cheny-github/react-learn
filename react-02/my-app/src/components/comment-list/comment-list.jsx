import React, { Component } from 'react'
import Comment from '../comment/comment'
export default class CommentList extends Component {
    state={
        display:'none'
    }
    render() {
        const {display}=this.state
        const {commentList,deleteComment} = this.props

        return (
                                     
            <div className="col-md-8">
              <h3 className="reply">评论回复：</h3>
              <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
              <ul className="list-group" >
                {
                  commentList.map(
                        comment=>
                                 <Comment comment={comment} key={comment.id} deleteComment={deleteComment}></Comment>
                  )
                }
              </ul>
            </div>
        )
    }
}
