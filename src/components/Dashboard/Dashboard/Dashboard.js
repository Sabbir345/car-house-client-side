import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    BrowserRouter as Router,
} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useParams , useHistory} from 'react-router';
import { Button,Container,Navbar,Offcanvas,Form,Nav,FormControl} from 'react-bootstrap';
import MyOrders from '../../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import useAuth from '../../../hooks/useAuth';
import Review from '../Review/Review';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';

import './Dashboard.css';

const Dashboard = () => {
    const [offer, setOffer] = useState({});
    let { path, url } = useRouteMatch();
    const {admin} = useAuth();
    return (
        <div>
            <div className="pb-5">
              
                <Router>
                  <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                      <div class="container-fluid">
                      {admin}

                      { !admin && <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <Link className="nav-link" to={`${url}/pay`}>Pay</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to={`${url}/orders`}>My Orders</Link>
                          </li>
                            <li className="nav-item">
                            <Link className="nav-link" to={`${url}/review`}>Review</Link>
                          </li> 

                        </ul> }

                        { admin && <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         
                          <li className="nav-item">
                            <Link className="nav-link" to={`${url}/addproduct`}>Add A Product</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to={`${url}/makeadmin`}>Make Admin</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to={`${url}/manageproducts`}>Manage Products</Link>
                          </li>
                        </ul> }
                      </div>
                    </nav>

                    <hr />

                    <Switch>
                        <PrivateRoute path={`${path}/pay`}>
                            <Pay></Pay>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/orders`}>
                            <MyOrders></MyOrders>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/review`}>
                          <Review></Review>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/makeadmin`}>
                          <MakeAdmin></MakeAdmin>
                        </PrivateRoute>
                    </Switch>
                  </div>
                </Router>
            </div>
        </div>
    );
};

export default Dashboard;

