import React from "react";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Details from './components/Details/Details';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MyOrders from './components/MyOrders/MyOrders';
// import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import Explore from './components/Explore/Explore';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
// import AddOffer from './components/AddOffers/AddOffers';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
            </Route>
            <Route path="/home">
              <Banner></Banner>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
