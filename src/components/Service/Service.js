import React from 'react';
import './Service.css';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Service = (props) => {

    const { _id ,name, img, price,description } = props.service;
    const history = useHistory();
    const {admin} = useAuth();

    const handleDelete = (id) => {

        const isConfirm = window.confirm("Are you sure you want to delete?");

        if(isConfirm){

            fetch(`https://hidden-beyond-97375.herokuapp.com/products-delete/${id}`, {
                method: 'delete',
                headers: {
                  'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Successfully deleted.')
                    history.push('/explore');
                }
            })
        }
    }

    return (
        <div className="col-md-4 gy-3">
            <Card>
              <Card.Img className="img-size" variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>Price: {price}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                { !admin && <Link to={'details/' + _id}>
                    <button className="btn-regular">Purchase</button>
                </Link> }
                { admin && 
                    <button onClick={() => handleDelete(_id)} className="btn-regular">Delete</button>
                 }
              </Card.Body>
            </Card>
        </div>
    );
};

export default Service;