import React, { useEffect, useState } from 'react';
import { Card,Button,Badge } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import Order from '../Order/Order';

const ManageAllOrders = () => {

    const history = useHistory();
    const [orders, setOrders] = useState([]);
    const [displayOrders, setdisplayOrders] = useState([]);
    const { user } = useFirebase();

    useEffect(() => {

        const url = `https://nameless-sands-07392.herokuapp.com/my-orders`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setdisplayOrders(data);
            });
    }, []);

    return (
        <div className="container pt-2 pb-5">
            <section>
                <div className="container pt-2 pb-5">
                  <div className="secvice">
                    <h3 className="text-center pb-3 our-services"><strong>Manage orders</strong></h3>
                  </div>
                  <div className="row">
                    {
                        displayOrders.map(order => <Order
                            key={order.key}
                            order={order}
                        >
                        </Order>)
                    }
                  </div>
                </div>
            </section>
        </div>

    );
};

export default ManageAllOrders;