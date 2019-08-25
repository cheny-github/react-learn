import React ,{Component} from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js'

import './main.css'

export default class Main extends Component{
    state={
        firstView:{show:true,data:'请输入关键字进行搜索'},
        loadingView:{show:false,data:'正在搜索.......'},
        usersView:{show:false,data:null},
        errorView:{show:false,data:null}
    }

    // 展示正在搜索界面
    showLoading=()=>{
        this.setState({
            firstView:{
                ...this.state.firstView,...{show:false}
            },
            loadingView:{
                ...this.state.loadingView,...{show:true}
            }
        })
    }
    // 展示结果界面
    showResult=(users)=>{
        this.setState({
            usersView:{
                show:true,
                data:users
            },
            loadingView:{
                ...this.state.loadingView,...{show:false}
            }
        })
    }

    // 展示错误界面
    showError(error){
        this.setState({ 
            errorView:{show:true,data:error},
            loadingView:{...this.state.loadingView,...{show:false}}
        })
    }

    componentWillMount(){
        Pubsub.subscribe("search",async (_,kw)=>{
            const url = `https://api.github.com/search/users?q=${kw}`
            try {
                this.showLoading()
                let {data:result}= await axios.get(url)  
                // 取出相关信息
                const users = result.items.map(
                    ({login:username,avatar_url,html_url:home})=>{
                        return {
                            username,avatar_url,home
                        }
                    }
                )
                
                if (users.length !==0) {
                    this.showResult(users)
                }else{
                    this.showError('搜索结果不存在')
                }

    
            } catch ({response:{status,statusText}}) {
                debugger
                this.showError(status+':'+statusText)
            }
        })
    }

    // 通过父组件实现兄弟间数据传递
    /*
    async componentWillReceiveProps(nextProp){
    const url = `https://api.github.com/search/users?q=${nextProp.usernameKW}`
        try {
            this.showLoading()
            let {data:result}= await axios.get(url)  
            // 取出相关信息
            const users = result.items.map(
                ({login:username,avatar_url,html_url:home})=>{
    
                    return {
                        username,avatar_url,home
                    }
                }
            )
            this.showResult(users)

        } catch ({response:{status,statusText}}) {
            debugger
            this.showError(status+':'+statusText)
        }

    }
     */



    getUsersViewJSX(){
        let users =this.state.usersView.data
        return (
            <div className="row" >
               {    users.map(
                        ({home,avatar_url,username})=>
                                <div className="card" key={username}>
                                <a href={home} >
                                    <img src={avatar_url} alt="图片" style={{width: 100}}/>
                                </a>
                                <p className="card-text">{username}</p>
                                </div> 
                    )
                }
            </div>
            );
    }
    getFirstViewJSX(){
        return <h3>{this.state.firstView.data}</h3>
    }
    getLoadingViewJSX(){
        return <h3>{this.state.loadingView.data}</h3>
    }
    getErrorViewJSX(){
        return <h3>{this.state.errorView.data}</h3>
    }
    render(){
        const {firstView,loadingView,usersView,errorView} = this.state
        switch (true) {
            case firstView.show:
                return this.getFirstViewJSX()
            case loadingView.show:
                return this.getLoadingViewJSX()
            case usersView.show:
                return this.getUsersViewJSX()
            case errorView.show:
                return this.getErrorViewJSX()
            default:
                    return <div>there is nothing to show</div>
        }
    }
}