import React from 'react';
import './App.css';

import commonStyles from './common/Container.module.css';

import{BrowserRouter, Route, Switch} from "react-router-dom";
import {MainPage} from "./pages/main-page";
import {CartPage} from "./pages/cart-page";
import { DeliveryInfo } from './components/DeliveryInfo/DeliveryInfo';
import { SiteMap } from './components/SiteMap/SiteMap';
import { AboutUs } from './components/aboutUs/aboutUs';

function App() {
    const {commonContainer} = commonStyles;

    return (
        <BrowserRouter>
            <div className={commonContainer}>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path={'/'} render={() => <MainPage/>}/>
                        <Route path='/cart'
                               render={() => <CartPage/>}/>
                        <Route path='/deliveryInfo'
                               render={() => <DeliveryInfo/>}/>
                        <Route path='/map'
                               render={() => <SiteMap/>}/>
                        <Route path='/about'
                               render={() => <AboutUs/>}/>       
                        <Route path='*'
                               render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
