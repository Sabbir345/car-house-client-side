import React from 'react';
import './Order.css';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Order = (props) => {

    const { _id ,offerName,userName,email,offerImg,offerPrice,address,mobile } = props.order;
    const history = useHistory();
    
    return (
        <div className="col gy-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img className="img-size" variant="top" src={offerImg} />
              <Card.Body>
                <Card.Title>{offerName}</Card.Title>
                <Card.Title>Price: {offerPrice}</Card.Title>
                <Card.Text>
                  User Name: {userName}
                </Card.Text>
                <Card.Text>
                  User Email: {email}
                </Card.Text>
                <Card.Text>
                  User Address: {address}
                </Card.Text>
                <Card.Text>
                  User Mobile: {mobile}
                </Card.Text>
              </Card.Body>
              <Button onClick={() => props.handleDelete(props.order)} className="btn btn-danger">Cancel</Button>
            </Card>
        </div>
    );
};

export default Order;