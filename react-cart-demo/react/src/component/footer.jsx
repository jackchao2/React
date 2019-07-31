import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '@/static/css/footer.scss'
const FooterList = [
    {icon: 'iconfont icon-home', name: '首页',link: '/home'},
    {icon: 'iconfont icon-leimupinleifenleileibie', name: '分类',link: '/kind'},
    {icon: 'iconfont icon-gouwuche-01', name: '购物',link: '/cart'},
    {icon: 'iconfont icon-icon03', name: '我的',link: '/user'},
]

class Footer extends Component {
    constructor(props) {
        super();
        this.state = {
     
        };
    }
    render() {
        return(
            <div className="footer">
                <ul>
                    {
                        FooterList.map((item, index) => {
                            return (
                                <li key={index}>
                                     <NavLink to={item.link} id={index}>
                                          <span className={item.icon}></span>
                                          <p>{item.name}</p>
                                     </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Footer;