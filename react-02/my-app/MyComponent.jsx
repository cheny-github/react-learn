import React, { Component } from 'react'

export default class MyComponent extends Component {
    state={
        users:[
            {id:1,name:'tom'},
            {id:2,name:'jack'},
            {id:3,name:'smith'},
        ],
    }
    add(event){
        const user ={
            id:Date.now(),
            name:event.target.value
        }

        this.setState({
            users:[user,...this.state.users]
        })
    }
    render() {
        const {users}=this.state
        return (
            <div>
                <ul>
                {
                    users.map(({name}) =><li>{name}<input type="text"/></li>)
                }
                </ul>
                <hr/>
                <h1>添加</h1>
                <input type="text" />
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}
