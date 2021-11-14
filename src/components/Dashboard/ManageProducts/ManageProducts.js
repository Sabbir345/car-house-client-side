import React, { useEffect, useState } from 'react';
import Service from './../../Service/Service';

const ManageProducts = () => {

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
    }, []);

    return (
        <div className="container">
            <div>
                <h2>Manage Products </h2>

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
        </div>
    );
};

export default ManageProducts;