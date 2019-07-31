import React, { Component } from 'react';
// import Header from '@/component/header';
import { Badge, Toast } from 'antd-mobile';
import '@/static/css/details.scss';
import axios from 'axios'
class Details extends Component {
    constructor(props){
       super(props)
       this.state = {
         detailsObj:{},
         id:0,
         count:1,
         numbers:0
       }
    }
    componentDidMount(){
        let str = this.props.history.location.pathname;
        let id = str.split('/')[2];
        axios.get("http://localhost:3000/details?id="+ id ).then(res => {
                console.log(res)
                this.setState({
                    detailsObj:res.data
                })
        })
        this.computed()
    }
    goCart(e){
        e.stopPropagation();
        this.props.history.push('/cart')
    }
    goout(){
        this.props.history.goBack();
    }
    calculate(val){
        // console.log(val)
        let num = this.state.count;
        val === 'add' ? num++ : num--;
        if (num < 1) num = 1
        this.setState({ count:num })
    }
    addCart(e){
        // e.stopPropagation();
        let obj = this.state.detailsObj;
        let List = [];
        if(!sessionStorage.getItem('cartList')){
           obj['count'] = this.state.count;
           List.push(obj)
           sessionStorage.setItem('cartList',JSON.stringify(List))
        }else{
           List = JSON.parse(sessionStorage.getItem('cartList'));
           let index = List.findIndex( item => item.pid === obj.pid )
           if(index === -1){
            //   console.log('不存在')
              obj['count'] = this.state.count;
              List.push(obj)
           }else{
              List[index].count += this.state.count
            //    console.log('存在')
           }
           sessionStorage.setItem('cartList',JSON.stringify(List))
           Toast.success('加入成功 !', 1);
           
           
        //    console.log(index)
        //    if(index){
        //      backobj.count += this.state.count;
        //    }
        //    let flag = true;
        //    List.map((item) =>{
        //        if(item.pid === obj.pid){
        //            item.count += this.state.count;
        //            flag = false;
        //        }
        //    })
        //    if(flag){
        //     obj['count'] = this.state.count;
        //     List.push(obj)
        //    }
        //    localStorage.setItem('cartList',JSON.stringify(List))
        //    Toast.success('加入成功 !', 1);
        }
        this.computed()
    }
    computed(){ //动态计算count值
        // if(sessionStorage.getItem)
        console.log('值了')
        if(sessionStorage.getItem('cartList')){
            let List = JSON.parse(sessionStorage.getItem('cartList'));
            let count = List.reduce((sum,p) => {
                return sum + p.count
            },0)
            console.log(count)
            this.setState({
                numbers:count
            })
            // return count
        }
        
    }
    render () {
        return(
            <div className="details">
                <div className="details_header" >
                    <i className="iconfont icon-jiantou-copy" style={{fontSize:'22px'}} onClick={this.goout.bind(this)}></i><span>详情</span>
                </div>
                <img src={this.state.detailsObj.imgPath} alt=""/>
                <p>{this.state.detailsObj.pname}</p>
                <span className="price">￥{this.state.detailsObj.jxPrice}</span>
                <div className="price_count">
                     <span onClick={this.calculate.bind(this,'minus')}>-</span>
                     <input type="number" disabled value={this.state.count}/>
                     <span onClick={this.calculate.bind(this,'add')}>+</span>
                </div>
                <div className="datails_bottom" onClick={ (e) => this.addCart(e)}>
                   <div className="addCart">
                       <span>点击加入购物车</span>
                       <Badge text={this.state.numbers} onClick={ (e) => this.goCart(e)}></Badge>
                       <span>{this.coun}</span>
                   </div>
                </div>
            </div>
        )
    }
}

export default Details