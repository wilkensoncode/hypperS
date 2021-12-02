import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer,} from "./reducers/Cart";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrderReducer,
  ordersReducer,
  orderDeliverReducer,
} from "./reducers/Order";
import {
  userLoginReducers,
  userRegisterReducers,
  userDetailsReducers,
  userUpdateProfileReducers,
  userListReducers,
  userDeleteReducers,
  userUpdateReducer,
  
} from "./reducers/User";
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewReducer,
  productTopRatedReducer,
} from "./reducers/Product";

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
  userDetails: userDetailsReducers,
  userUpdateProfile: userUpdateProfileReducers,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  myOrder: myOrderReducer,
  userList: userListReducers,
  userDelete: userDeleteReducers,
  userUpdate: userUpdateReducer,
  deleteProduct: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  ordersList: ordersReducer,
  orderDeliver: orderDeliverReducer,
  productReview: productReviewReducer,
  productTopRated: productTopRatedReducer, 
});
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

 const Store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
 );

export default Store;


