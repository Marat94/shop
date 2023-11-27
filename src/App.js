import React  from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";



import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shares from "./pages/Shares";
import News from "./pages/News";
import Latest from "./pages/Latest";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import MyCart from "./pages/MyCart";
import NewsSing from "./pages/NewsSing";
import Product from "./pages/Product";
import Registration from "./pages/Registration";
import Wishlist from "./pages/Wishlist";
import Order_1 from "./pages/Order_1";
import Order_2 from "./pages/Order_2";
import Order_3 from "./pages/Order_3";
import Order_4 from "./pages/Order_4";
import CategoryMenu from "./helper/CategoryMenu";
import {func} from "prop-types";

function App() {
    return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/shares" component={Shares}/>
              <Route path="/news" component={News}/>
              <Route path="/latest" component={Latest}/>
              <Route path="/about-us" component={AboutUs}/>
              <Route path="/contacts" component={Contact}/>
              <Route path="/delivety" component={Delivery}/>
              <Route path="/Category" component={Category}/>
              <Route path="/my-cart" component={MyCart}/>
              <Route path="/news-sing" component={NewsSing}/>
              <Route path="/product" component={Product}/>
              <Route path="/registr" component={Registration}/>
              <Route path="/wishlist" component={Wishlist}/>
              <Route path="/zakaz-1" component={Order_1}/>
              <Route path="/zakaz-2" component={Order_2}/>
              <Route path="/zakaz-3" component={Order_3}/>
              <Route path="/zakaz-4" component={Order_4}/>
              <Route path="/categorys-menu" component={CategoryMenu}/>
              <Route path="/header" component={Header} />
              <Route path="/footer" component={Footer} />
          </Switch>
      </BrowserRouter>
    )
}

export default App;
