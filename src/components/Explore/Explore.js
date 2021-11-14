import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Service from '../Service/Service';
import './Explore.css';

function Explore () {

    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        const url = 'https://hidden-beyond-97375.herokuapp.com/all-products'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, [products]);

    return (
        <div>
            <section>
                <div className="container pt-2 pb-5">
                  <div className="secvice">
                    <h3 className="text-center pb-3 our-services"><strong>ALL PRODUCTS</strong></h3>
                  </div>
                  <div className="row">
                    {
                        displayProducts.map(service => <Service
                            key={service.key}
                            service={service}
                        >
                        </Service>)
                    }
                  </div>
                </div>
            </section>
        </div>
    );
};

export default Explore;