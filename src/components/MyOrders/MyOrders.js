import React, { useEffect, useState } from 'react';
import { Card,Button,Badge } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import Order from '../Order/Order';

const MyOrders = () => {

    const history = useHistory();
    const [orders, setOrders] = useState([]);
    const [displayOrders, setdisplayOrders] = useState([]);
    const { user } = useFirebase();

    useEffect(() => {

        const url = `https://hidden-beyond-97375.herokuapp.com/my-orders`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setdisplayOrders(data);
            });
    }, [orders]);

    const handleDelete = (order) => {

        const isConfirm = window.confirm("Are you sure you want to delete?");

        if(isConfirm){

            fetch(`https://hidden-beyond-97375.herokuapp.com/orders/${order._id}`, {
                method: 'delete',
                headers: {
                  'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Successfully deleted.')
                    history.push('/dashboard/orders');
                }
            })
        }
    }

    return (
        <div className="container pt-2 pb-5">
            <section>
                <div className="container pt-2 pb-5">
                  <div className="secvice">
                    <h3 className="text-center pb-3 our-services"><strong>My orders</strong></h3>
                  </div>
                  <div className="row">
                    {
                        displayOrders.map(order => <Order
                            key={order.key}
                            order={order}
                            handleDelete={handleDelete}
                        >
                        </Order>)
                    }
                  </div>
                </div>
            </section>
        </div>

    );
};

export default MyOrders;