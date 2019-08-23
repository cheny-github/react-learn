import React, { Component } from 'react'
import './comment.css'
export default class Comment extends Component {

    render() {
        const {comment:{content,id,username},deleteComment}=this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="##" onClick={()=>deleteComment(id)}>删除</a>
                </div>
                <p className="user"><span>{username}</span><span>说:</span></p>
                <p className="centence">{content}</p>
            </li>
        )
    }
}
