import React, { Component } from 'react'
import '@/static/css/header.scss'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    toparent = () => {
        // console.log('去父级元素')
        if(this.props.text){
            this.props.text('我是子元素传递过来的')
        } 
        
    } 
    render() {
        let { name } = this.props;
        return(
            <div className="header" onClick={this.toparent}>{ name }</div>
        )
    }
}
export default Header;