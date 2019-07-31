import React, { Component } from 'react'
import Header from '@/component/header';
import Footer from '@/component/footer';
class User extends Component {
    constructor(props) {
        super();
        this.state = {

        };
    }
    render() {
        return(
            <div className="user container">
                <Header name="我的"/>
                <div className="content">

                </div>
                <Footer/>
            </div>
        )
    }
}
export default User;