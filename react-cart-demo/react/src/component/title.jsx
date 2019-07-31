import React,{Component} from 'react'

export default class Title extends Component {
    constructor(props){
       super(props)
       this.state = {}
    }
    render(){
        return (
            <div className = "title">
                 <span className="title_border"></span>
                 <span className="title_text">{this.props.name}</span>
                 {
                    this.props.visible === 'false' ? null : <i className="iconfont icon-tishi hint"></i>
                 }
                 <span className="title_data">2018-09-08</span>
            </div>
        )
    }
}