import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './router/routes';
import "lib-flexible";
import './static/css/main.scss';
import './static/css/reset.scss';
// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
// import { Provider } from 'react-redux'
// 引入创建好的store实例
// import store from '@/store/index.js'
// ReactDOM.render(<Provider store = {store}><Router /></Provider>, document.getElementById('root'));
ReactDOM.render(<Router />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
