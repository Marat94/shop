import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";



import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shares from "./pages/Shares";
import News from "./pages/News";
import Latest from "./pages/Latest";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Delivety from "./pages/Delivety";
import Category from "./pages/Category";
import MyCart from "./pages/MyCart";
import NewsSing from "./pages/NewsSing";
import Product from "./pages/Product";
import Registr from "./pages/Registr";
import Wishlist from "./pages/Wishlist";
import Zakaz_1 from "./pages/Zakaz-1";
import Zakaz_2 from "./pages/Zakaz-2";
import Zakaz_3 from "./pages/Zakaz-3";
import Zakaz_4 from "./pages/Zakaz-4";
import CategorysMenu from "./helper/CategorysMenu";



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/shares" component={Shares}/>
                    <Route path="/news" component={News}/>
                    <Route path="/latest" component={Latest}/>
                    <Route path="/about-us" component={AboutUs}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/delivety" component={Delivety}/>
                    <Route path="/Category" component={Category}/>
                    <Route path="/my-cart" component={MyCart}/>
                    <Route path="/news-sing" component={NewsSing}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/registr" component={Registr}/>
                    <Route path="/wishlist" component={Wishlist}/>
                    <Route path="/zakaz-1" component={Zakaz_1}/>
                    <Route path="/zakaz-2" component={Zakaz_2}/>
                    <Route path="/zakaz-3" component={Zakaz_3}/>
                    <Route path="/zakaz-4" component={Zakaz_4}/>
                    <Route path="/categorys-menu" component={CategorysMenu}/>

                    <Route path="/header" component={Header} />
                    <Route path="/footer" component={Footer} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
