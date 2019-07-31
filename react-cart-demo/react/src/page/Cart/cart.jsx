import React, { Component } from 'react'
import Header from '@/component/header';
import Footer from '@/component/footer';
import '@/static/css/cart.scss';
import { Checkbox } from 'antd-mobile';
class Empty extends Component {
    constructor(props) {
        super()
        this.state = {
          
        }
    }
    render() {
        return <div style={{width:'100%',height:'100%',textAlign:'center',lineHeight:'500px'}}>购物车空空如也.......</div>
    }
}

class Close extends Component {
    constructor(props){
        super();
        this.state = {
            count:1,
            cartList:[],
            value: [],
            allChecked: false,
            checkArr:[],
            cases:0,
            total:0
        }
    }
    componentDidMount(){
        if(sessionStorage.getItem('cartList')){
            let arr = JSON.parse(sessionStorage.getItem('cartList'))
            arr.map(item => {
                return item['flag'] = false
            })
            // console.log(arr)
            this.setState({
                cartList:arr
            })
        }
    }
    computing(){ //计算方法
        let commandList = this.state.cartList;
        let cases = 0;
        let total = 0;
        commandList.map(item => {
            if(item.flag){
               cases += item.count
               total += item.count * item.jxPrice 
            }
        })
        this.setState({cases,total})
    }
    onChange(e,index){
        let commandList = this.state.cartList;
        commandList[index].flag = e.target.checked;
        let toogle = !commandList.some( item=> {return item.flag === false })
        this.setState({
            cartList:this.state.cartList,
            allChecked:toogle
        })
        this.computing()
    }
    whether(e) {
        let commandList = this.state.cartList;
        commandList.map( item => {return item.flag = e.target.checked;})
        this.setState({
            cartList:commandList,
            allChecked:e.target.checked
        })
        this.computing()
    }
    calculate(val,item,index){ // 计算
        if(val === 'add'){
            item.count++
        }else{
            if(item.count <= 1){
                item.count = 1
            }else{
                item.count--
            }
        }
        
        sessionStorage.setItem('cartList',JSON.stringify(this.state.cartList))
        this.setState({
            cartList:this.state.cartList
        })
        this.computing()
    }
    render () {
        return (
            <div className="cart_content">
                 <ul>
                     {
                         this.state.cartList.map( (item,index) => {
                            return (
                                <li key={index}>
                                    <Checkbox key={index} onChange={(e) => this.onChange(e,index)} checked={item.flag} >  
                                        {/* {i.label} */}
                                    </Checkbox>
                                    <img src={item.imgPath} alt=""/>
                                    <div className="price">
                                        <p className="using pname">{item.pname}</p>
                                        <p>￥{item.jxPrice}</p>
                                    </div>
                                    <div className="addprice">
                                        <span onClick={this.calculate.bind(this,'minus',item,index)}>-</span>
                                        <input type="number" disabled value={item.count}/>
                                        <span onClick={this.calculate.bind(this,'add',item,index)}>+</span>
                                    </div>
                                </li>
                            )
                         })
                     }
                 </ul>
                 <div className="calculate">
                      <Checkbox onChange={(e) => this.whether(e)} checked={this.state.allChecked}></Checkbox>
                      <span>{this.state.cases}件商品</span>
                      <span>总价：{this.state.total} 元</span>
                      <button>去结算</button>
                 </div>
            </div>
        )
    }
}

export default class Cart extends Component {
    constructor(props) {
        super();
        this.state = { 
        };
    }
    componentDidMount(){
        
    }
    render() {
        return(
            <div className="cart container">
                <Header name="商城"/>
                <div className="content">
                   {sessionStorage.getItem('cartList') ? <Close/> : <Empty/>}
                </div>
                <Footer/>
            </div>
        )
    }
}