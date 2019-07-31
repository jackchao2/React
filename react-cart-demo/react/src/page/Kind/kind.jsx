import React, { Component } from 'react'
import Header from '@/component/header';
import Footer from '@/component/footer';
import axios from 'axios';
import '@/static/css/kind.scss';
class KindList extends Component {
    constructor() {
        super()
        this.state = {
            List:[]
        }
    }
    componentDidMount(){
        // console.log('执行了')
        // console.log(this.props)
        axios.get('http://localhost:3000/getlist').then(res => {
            // console.log(res)
             this.setState({
                 List:res.data
             })
        })
     }
     godetails = (id) => {
        // console.log(id,this)    
        this.props.history.push('/details')
     }
     render() {
         return(
            <ul className="kindlist">
                 {
                    //  console.log(this.state.List)
                    this.state.List.map((item,index) => {
                        return (
                            <li key={index} onClick={ (e) => this.props.getFun(item.commonProductInfo.pid)}>
                                <img src={item.commonProductInfo.imgPath} alt=""/>
                                <p className="twotext">{item.commonProductInfo.pname}</p>
                                <span>￥{item.commonProductInfo.actPrice}</span>
                            </li>
                        )
                    //     return (
                    //         <li key={index}>{item}</li>
                    //     )
                    //     // console.log(item)
                    //     // return <li key={index}>{item}</li>
                    //     // return <li key={index}><div>
                    //     //             <img src={item.imgurl} alt=""/>
                    //     //             <h6>刘德华</h6>
                    //     //         </div>
                    //     //         <p>派遣</p>
                    //     //     </li>
                    })
                }
            </ul>
         )
     }
}

export default class Kind extends Component {
    constructor(props) {
        super(props);
        this.state = {
           List:[]
        };
    }
    componentDidMount(){
        // console.log('我是父组件')
        // console.log(this.props)
    }
    godetails = (id) => {
    //    console.log(id)
       this.props.history.push('/details/'+id)
    } 
    render() {
        return(
            <div className="kind container">
                <Header name="分类"/>
                <div className="content">
                    <KindList getFun={this.godetails}/>
                </div>
                <Footer/>
            </div>
        )
    }
}
// export default Kind;