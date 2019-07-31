import React from 'react';
import Loadable from 'react-loadable';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Loading from '@/component/loading';
import 'echarts';
const Home = Loadable( {loader: () => import("@/page/Home/home"),loading: Loading});
const Kind = Loadable( {loader: () => import("@/page/Kind/kind"),loading: Loading});
const Cart = Loadable( {loader: () => import("@/page/Cart/cart"),loading: Loading});
const User = Loadable( {loader: () => import("@/page/User/user"),loading: Loading});
const Details = Loadable( {loader: () => import("@/component/details"),loading: Loading});
class Routes extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div className="routes">
                     <Switch>
                         <Route path="/home" component={Home}/>
                         <Route path="/kind" component={Kind}/>
                         <Route path="/cart" component={Cart}/>
                         <Route path="/user" component={User}/>
                         <Route path="/details" component={Details}/>
                         <Redirect to="/home"/>
                     </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default Routes