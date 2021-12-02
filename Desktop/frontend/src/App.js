import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeScreen from "./screen/Home";
import ProductScreen from "./screen/Product";
import CartScreen from "./screen/Cart";
import loginScreen from "./screen/Login";
import registerScreen from "./screen/Register";
import profileScreen from "./screen/Profile";
import myOrderScreen from "./screen/MyOrders";
import shippingScreen from "./screen/Shipping";
import paymentScreen from "./screen/Payment";
import placeOrderScreen from "./screen/PlaceOrder";
import orderScreen from "./screen/Order";
import userListScreen from "./screen/UserList";
import userEditScreen from "./screen/UserEdit";
import productListScreen from "./screen/ProductList";
import productEditScreen from "./screen/ProductEdit";
import orderListScreen from "./screen/OrderList";
import ConfirmScreen from './screen/Confirm'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/search/:keyword" component={HomeScreen} />
          <Route path="/page/:pageNumber" component={HomeScreen} />
          <Route
            path="/search/:keyword/page/pageNumber"
            component={HomeScreen}
          />
          <Route path="/login" component={loginScreen} />
          <Route path="/register" component={registerScreen} />
          <Route exact path="/myorders" component={myOrderScreen} />
          <Route path="/profile" component={profileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/shipping" component={shippingScreen} />
          <Route path="/payment" component={paymentScreen} />
          <Route path="/placeorder" component={placeOrderScreen} />
          <Route path="/order/:id" component={orderScreen} />
          <Route path="/admin/users" component={userListScreen} />
          <Route path="/admin/orders" component={orderListScreen} />
          <Route path="/user/:id/edit" component={userEditScreen} />
          <Route exact path="/admin/products" component={productListScreen} />
          <Route
            exact
            path="/admin/products/:pageNumber"
            component={productListScreen}
          />
          <Route path="/admin/product/:id/edit" component={productEditScreen} />
          <Route path="/confirm" component={ConfirmScreen} />
        </Container>
      </main>      
      <Footer />
    </Router>
  );
};

export default App;
