import React, { useEffect, useState, useRef } from 'react';
import { useParams , useHistory} from 'react-router';
import Image from 'react-bootstrap/Image';
import useFirebase from '../../hooks/useFirebase';
import './Details.css';

const Details = () => {
    const [offer, setOffer] = useState({});
    const { id } = useParams();
    const history = useHistory();
    const { user } = useFirebase();
    const addressRef = useRef();
    const mobileRef = useRef();

    useEffect(() => {
        const url = `https://hidden-beyond-97375.herokuapp.com/products/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setOffer(data));
    }, {});

    const handlePlaceOrder = (e) => {

        const address = addressRef.current.value;
        const mobile = mobileRef.current.value;
        const name = offer[0]?.name;
        const price = offer[0]?.price;
        const img = offer[0]?.img;

        const datas = {
            userName: user.displayName,
            email:user.email,
            offerId:id,
            offerName: name,
            offerPrice: price,
            offerImg: img,
            address:address,
            mobile:mobile
        };

        if (address.length == 0) {
           alert('Addres field is requird.')
        }
        else if (mobile.length == 0) {
           alert('Mobile field is requird.')
        }else{
            const url = `https://hidden-beyond-97375.herokuapp.com/place-order`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(datas)
            })
            .then(res => res.json())
            .then(data => {
                history.push('/dashboard/orders');
            })
        }
        e.preventDefault();
    }

    return (
        <div>
            <div className="container pb-5">
                <div className="pt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <Image className="details-img pt-3" src={offer[0]?.img} fluid />
                        </div>
                        <div className="col-md-6">
                            <h2 className="pt-2">Package Name: {offer[0]?.name}</h2>
                            <h4>Price : {offer[0]?.price}</h4>
                            <p className="pb-2">Description: {offer[0]?.description}</p>

                            <form onSubmit={handlePlaceOrder}>
                                <div className="form-group">
                                    <label>Address </label>
                                    <input type="text" ref={addressRef} className="form-control" placeholder="Enter Address" />
                                </div>
                                <div className="form-group">
                                    <label>Mobile</label>
                                    <input type="text" ref={mobileRef} className="form-control" placeholder="Mobile" />
                                </div>
                                <br/>
                                <input type="submit" value="Place Order" />
                            </form>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Details;