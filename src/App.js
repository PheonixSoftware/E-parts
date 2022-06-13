// import "./App.css";
// import { useEffect, useState } from "react";
// import Header from "./component/layout/Header/Header.js";
// import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
// import WebFont from "webfontloader";
// import React from "react";
// import Footer from "./component/layout/Footer/Footer.js";
// import Home from "./component/Home/Home";
// import Products from "./component/Product/Products";
// import ProductDetails from "./component/Product/ProductDetails";
// import { useSelector } from "react-redux";
// import Search from "./component/Product/Search";
// import LoginSignUp from "./component/User/LoginSignUp";
// import store from "./store"; //
// import { loadUser } from "./actions/userAction";
// import UserOptions from "./component/layout/Header/UserOptions";
// //import { useSelector } from "react-redux";
// import Profile from "./component/User/Profile";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
// import UpdateProfile from "./component/User/UpdateProfile";
// import UpdatePassword from "./component/User/UpdatePassword";
// import ForgotPassword from "./component/User/ForgotPassword";
// import ResetPassword from "./component/User/ResetPassword";
// import Cart from "./component/Cart/Cart";
// import Shipping from "./component/Cart/Shipping";
// import ConfirmOrder from "./component/Cart/ConfirmOrder";
// import axios from "axios";
// import Payment from "./component/Cart/Payment";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import OrderSuccess from "./component/Cart/OrderSuccess";
// import MyOrders from "./component/Order/MyOrders";
// import OrderDetails from "./component/Order/OrderDetails";
// import Dashboard from "./component/Admin/Dashboard.js";
// import ProductList from "./component/Admin/ProductList.js";
// import NewProduct from "./component/Admin/NewProduct";
// import UpdateProduct from "./component/Admin/UpdateProduct";
// import OrderList from "./component/Admin/OrderList";
// import ProcessOrder from "./component/Admin/ProcessOrder";
// import UsersList from "./component/Admin/UsersList";
// import UpdateUser from "./component/Admin/UpdateUser";
// import ProductReviews from "./component/Admin/ProductReviews";
// /*import Contact from "./component/layout/Contact/Contact";
// import About from "./component/layout/About/About";
// import NotFound from "./component/layout/Not Found/NotFound";
//  */
// function App() {
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const [stripeApiKey, setStripeApiKey] = useState("");

//   async function getStripeApiKey() {
//     const { data } = await axios.get("/api/v1/stripeapikey");

//     setStripeApiKey(data.stripeApiKey);
//   }
//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families: ["Roboto", "Droid Sans", "Chilanka"],
//       },
//     });
//     store.dispatch(loadUser());
//     getStripeApiKey();
//   }, []);

  
  

  

    

  
// /* 
//   window.addEventListener("contextmenu", (e) => e.preventDefault());

//   return (
//     <Router>
//       <Header />

//       {isAuthenticated && <UserOptions user={user} />}

     

//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/product/:id" component={ProductDetails} />
//         <Route exact path="/products" component={Products} />
//         <Route path="/products/:keyword" component={Products} />

//         <Route exact path="/search" component={Search} />

//         <Route exact path="/contact" component={Contact} />

//         <Route exact path="/about" component={About} />

       
        

//         <Route exact path="/password/forgot" component={ForgotPassword} />

//         <Route exact path="/password/reset/:token" component={ResetPassword} />

//         <Route exact path="/login" component={LoginSignUp} />

      

     

     
      

       
     

  

//         <Route
//           component={
//             window.location.pathname === "/process/payment" ? null : NotFound
//           }
//         />
//       </Switch>

//       <Footer />
// */
//   return (
//     <Router>
//       <Header />
//       {isAuthenticated && <UserOptions user={user} />}
//       {stripeApiKey && (
//         <Elements stripe={loadStripe(stripeApiKey)}>
//           <ProtectedRoute exact path="/process/payment" component={Payment} />
//         </Elements>
//       )}
//       <Route exact path="/" component={Home} />
//       <Route exact path="/product/:id" component={ProductDetails} />
//       <Route exact path="/products" component={Products} />
//       <Route path="/products/:keyword" component={Products} />

//       <Route exact path="/search" component={Search} />

//       <Route exact path="/login" component={LoginSignUp} />

//       <ProtectedRoute exact path="/account" component={Profile} />

//       <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
//       <ProtectedRoute
//         exact
//         path="/password/update"
//         component={UpdatePassword}
//       />

//       <Route exact path="/password/forgot" component={ForgotPassword} />
//       <Route exact path="/password/reset/:token" component={ResetPassword} />

//       <Route exact path="/cart" component={Cart} />

//       <ProtectedRoute exact path="/shipping" component={Shipping} />
     
     

//       <ProtectedRoute exact path="/success" component={OrderSuccess} />

 
//       <ProtectedRoute exact path="/orders" component={MyOrders} />
//       <Switch>
//       <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

//       <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

// </Switch>

// <ProtectedRoute
//           isAdmin={true}
//           exact
//           path="/admin/dashboard"
//           component={Dashboard}
//         />

// <ProtectedRoute
//           exact
//           path="/admin/products"
//           isAdmin={true}
//           component={ProductList}
//         />

// <ProtectedRoute
//           exact
//           path="/admin/product"
//           isAdmin={true}
//           component={NewProduct}
//         />
//    <ProtectedRoute
//           exact
//           path="/admin/product/:id"
//           isAdmin={true}
//           component={UpdateProduct}
//         />

// <ProtectedRoute
//           exact
//           path="/admin/orders"
//           isAdmin={true}
//           component={OrderList}
//         />
//          <ProtectedRoute
//           exact
//           path="/admin/order/:id"
//           isAdmin={true}
//           component={ProcessOrder}
//         />


// <ProtectedRoute
//           exact
//           path="/admin/users"
//           isAdmin={true}
//           component={UsersList}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/user/:id"
//           isAdmin={true}
//           component={UpdateUser}
//         />
//       <ProtectedRoute
//           exact
//           path="/admin/reviews"
//           isAdmin={true}
//           component={ProductReviews}
//         />


//       <Footer />
//     </Router>
//   );
// }

// export default App;












import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
//import { Route,Switch,Rout } from "react-router-dom";

import WebFont from "webfontloader";
import React, { useState,useEffect, Component } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
//import Loader from "./component/layout/Loader/Loader";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
 import Search from "./component/Product/Search.js";
 import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
 import { useSelector } from "react-redux";
 import Profile from "./component/User/Profile.js";
 import ProtectedRoute from "./component/Route/ProtectedRoute.js";
 import UpdateProfile from "./component/User/UpdateProfile.js";
 import UpdatePassword from "./component/User/UpdatePassword.js";
 import ForgotPassword from "./component/User/ForgotPassword.js";
 import ResetPassword from "./component/User/ResetPassword.js";
 import Cart from "./component/Cart/Cart.js";
 import Shipping from "./component/Cart/Shipping.js";
 import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
 
 //for payment
 import axios from "axios"; 
 import Payment from "./component/Cart/Payment.js";
import ScrollToTop from "./component/layout/ScrollToTop"
 import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
 import OrderSuccess from "./component/Cart/OrderSuccess.js";
 import MyOrders from "./component/Order/MyOrders.js";
 import OrderDetails from "./component/Order/OrderDetails.js";
 import Dashboard from "./component/Admin/Dashboard.js";
 import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
 import UpdateProduct from "./component/Admin/UpdateProduct.js";
 import OrderList from "./component/Admin/OrderList.js";
 import ProcessOrder from "./component/Admin/ProcessOrder.js";
 import UsersList from "./component/Admin/UsersList.js";
 import UpdateUser from "./component/Admin/UpdateUser.js";
 import ProductReviews from "./component/Admin/ProductReviews.js";
 import Contact from "./component/layout/Contact/Contact";
 import About from "./component/layout/About/About";
import { renderEditInputCell } from "@material-ui/data-grid";
// import NotFound from "./component/layout/Not Found/NotFound";
//import Test from "./component/test";

function App(){

  const { isAuthenticated, user } = useSelector((state) => state.user);
 // let HideHeader = window.location.pathname === '/admin/?' ? null : <Header/>
  //for payment
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);}

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());

    getStripeApiKey();}, []);
   
 
  return ( 
  
  <Router>  
<ScrollToTop/>
     <Header/>
      {isAuthenticated && <UserOptions user={user} />}
      <Route exact path="/"> <Home /></Route>
      <Route exact path="/product/:id"> <ProductDetails/></Route>
      <Route exact path="/products"> <Products/></Route>
      <Route path="/products/:keyword"> <Products/></Route>
      
      <Route exact path="/search"> <Search/></Route>
      <ProtectedRoute exact path="/account"> <Profile/></ProtectedRoute>
      <ProtectedRoute exact path="/me/update"> <UpdateProfile/></ProtectedRoute>
      <ProtectedRoute exact path="/password/update"> <UpdatePassword/></ProtectedRoute>
      <Route exact path="/password/forgot"> <ForgotPassword/></Route>
     
      <Route exact path="/password/reset/:token"> <ResetPassword/></Route>
      <Route exact path="/login" > <LoginSignUp /></Route>
      <Route exact path="/cart"> <Cart/></Route>
      
      <ProtectedRoute exact path="/shipping"> <Shipping/></ProtectedRoute>

      <Route exact path="/aboutus"> <About/></Route>
      <Route exact path="/contactus"> <Contact/></Route>
     
      
     {/* //for payment */}
   
     {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" ><Payment/></ProtectedRoute>
        </Elements>
      )}
     
      <ProtectedRoute exact path="/success"> <OrderSuccess/></ProtectedRoute>
     
      <ProtectedRoute exact path="/orders"> <MyOrders/></ProtectedRoute>
      
     <Switch>
      <ProtectedRoute exact path="/order/confirm"> <ConfirmOrder/></ProtectedRoute>
     
      <ProtectedRoute exact path="/order/:id"> <OrderDetails/></ProtectedRoute>
      </Switch>

      <ProtectedRoute isAdmin={true} exact path="/admin/dashboard"> <Dashboard></Dashboard></ProtectedRoute>
    
      <ProtectedRoute isAdmin={true} exact path="/admin/products"> <ProductList /></ProtectedRoute>
    
      <ProtectedRoute isAdmin={true} exact path="/admin/product"> <NewProduct/></ProtectedRoute>
    
      <ProtectedRoute isAdmin={true} exact path="/admin/product/:id"> <UpdateProduct/></ProtectedRoute>
    
      <ProtectedRoute isAdmin={true} exact path="/admin/orders"> <OrderList/></ProtectedRoute>
    
      <ProtectedRoute isAdmin={true} exact path="/admin/order/:id"> <ProcessOrder/></ProtectedRoute>
    

      <ProtectedRoute isAdmin={true} exact path="/admin/users"> <UsersList/></ProtectedRoute>
    
      <ProtectedRoute isAdmin={true} exact path="/admin/user/:id"> <UpdateUser/></ProtectedRoute>
    

      <ProtectedRoute isAdmin={true} exact path="/admin/reviews" ><ProductReviews></ProductReviews></ProtectedRoute>
        
    <Footer/>

    </Router>




  );
}

export default App;

