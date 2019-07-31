import React, { Component } from 'react';
import Header from '@/component/header';
import Footer from '@/component/footer';
import Title from '@/component/title';
import '@/static/css/home.scss';
import echarts from 'echarts/lib/echarts';
import { Tabs, WhiteSpace } from 'antd-mobile';
// import { Button } from 'antd-mobile';

class HomeBusiness extends Component { // 业务完成率
    constructor(props){
        super(props);
        this.state = {
        
        }
    }
    componentDidMount(){ //可做数据请求
        var getDpr = function getDpr(size) {
            var dpr = window.devicePixelRatio;
            if (dpr === 1) {
              return size;
            } else if (dpr === 2) {
              return size * 2;
            } else {
              return size * 3 - 8;
            }
          };
          let myChart = echarts.init(this.refs.efficiency);
              var option = {
                  tooltip : {
                      trigger: 'axis',
                      show:false,
                      axisPointer: {
                          type: 'cross',
                          label: {
                              backgroundColor: '#000'
                          }
                      },
                      textStyle:{
                          fontSize:14,
                      },
                      padding:[0,0,0,10]
                  },
                  grid: {
                      left: '0%',
                      top:'5%',
                      right: '2%',
                      bottom: '2%',
                      containLabel: true,
                  },
                  formatter: '{b}:{c}%',
                  xAxis : [
                      {
                          type : 'category',
                          boundaryGap : true,
                          data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                          axisLabel:{
                          color:'#616161',
                          fontSize:getDpr(10),
                          rich:{}
                          },
                          axisLine:{
                              lineStyle:{
                                  color:'#000',
                                  width:0.5,
                                  type:"dashed"
                              }
                           },
                         axisTick: {
                          show: true,
                          lineStyle:{
                              color:'#ccc'
                          }
                        },
                      }
                  ],
                  yAxis : [
                      {
                          type : 'value',
                          show:true,
                          splitLine: {
                              show: true,
                              lineStyle:{
                                width:1,
                                type: 'dashed'
                              }
                          },
                          axisLine:{
                            show:true,
                            lineStyle:{
                                  color:'#000',
                                  width:0.5,
                                  type: 'dashed'
                              }
                           },
                         axisTick: {
                          show: false
                        },
                          axisLabel:{
                              color:'#616161',
                              fontSize:getDpr(10),
                              interval: 0,
                              showMinLabel: true,
                              formatter: '{value}',
                              rich:{}
                          },
                          // min:0,
                          // max:100,
                          splitNumber: 2,
                      }
                  ],
                  series : [
                      {
                          name:'总客户数',
                          type:'line',
                          stack: '总量',
                          // symbol:'none', //这句就是去掉点的
                          smooth:true, //这句就是让曲线变平滑的
                          // data:[10, 20, 30, 40, 50, 55, 60, 65, 70, 72, 75, 80, 83],
                          // data:this.netMarginData,
                          // data:this.netMarginData,
                          data: [4.79, 13.51, 28.87, 34.05],
                          itemStyle:{
                            normal:{
                                  borderWidth:8, 
                                  color:'#64B5F6', //控制折线点颜色
                                  lineStyle:{
                                      color:'#1E88E5' //控制折线颜色
                                  },
                                  label: {
                                     show:true,
                                     position: 'top',
                                     textStyle: {
                                       color:'#306cff', // 控制折线点字体颜色,
                                       fontSize:getDpr(10)
                                     }
                                  }
                              }
                          }
                      },
                  ]
              };
              myChart.clear();
              myChart.setOption(option);
              window.addEventListener("resize", () => { myChart.resize();});
    }
    render(){
        return( 
            <div className="Business">
                <Title name="业务完成率" visible="true"/>
                <div className="Business-charts" ref="efficiency"></div>
            </div>
        )
    }
}

class HomeShares extends Component { // 长城证券股价
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div className="shares">
                <Title name="长城证券股价" visible="true"/>
            </div>
        )
    }
}


class HomeProfit extends Component { // 净利润
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div className="profit">
                <Title name="净利润" visible="true"/>
                <div className="profit_content">
                    <span>34846.23万</span>
                    <span>98.27%</span>
                </div>
            </div>
        )
    }
}
const tabs = [
    { title: 'First Tab'},
    { title: 'Second Tab' },
    { title: 'hird Tab' },
];
class HomeTabs extends Component { // 业务动态
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div className="tabs">
                <Title name="业务动态" visible="true"/>
                <div>
                    <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                    </Tabs>
                    <WhiteSpace />
                </div>
            </div>
        )
    }
}


export default class Home extends Component {  //最终export出去的总模块
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    btnFn = () => {  // 点击事件 写成箭头函数可以不用写.bind(this)
         this.props.history.push('/user')
    }
    childrens = (data) => { //子组件传递过来的数据
         console.log(data,'父元素')
    }
    render() {
        return(
            <div className="home container">
                <Header name="首页" text={this.childrens}/>
                <div className="content">
                    <HomeBusiness/>
                    <HomeShares/>
                    <HomeProfit/>
                    <HomeTabs/>
                    {/* <div className="banner" onClick={this.btnFn}>
                        
                    </div> */}
                    {/* <Button type="primary" size="small" >hello Word</Button> */}
                </div>
                <Footer/>
            </div>
        )
    }
}