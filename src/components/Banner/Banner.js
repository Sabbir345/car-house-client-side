import React, { useEffect, useState } from 'react';
import banner from '../../Images/top_banner.jpeg';
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Service from '../Service/Service';
import Reviews from '../Reviews/Reviews';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import './Banner.css';

const Banner = () => {

    const [services, setServices] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [displayServices, setDisplayServices] = useState([]);
    const [displayReviews, setDisplayReviews] = useState([]);
    const [displayFavorites, setDisplayFavorites] = useState([]);

    useEffect(() => {
        const url = 'https://hidden-beyond-97375.herokuapp.com/all-products'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setDisplayServices(data);
            });
    }, []);

    // useEffect(() => {
    //     const url = 'https://hidden-beyond-97375.herokuapp.com/all-favorites'
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setFavorites(data);
    //             setDisplayFavorites(data);
    //         });
    // }, []);

    useEffect(() => {
        const url = 'https://hidden-beyond-97375.herokuapp.com/all-reviews'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setDisplayReviews(data);
            });
    }, []);


    return (
        <div>
            <section>
                <div className="pb-5">
                    <div className="col-md-12 top-banner" style={{ backgroundImage: `url(${banner})` }}>
                        <div className="container">
                            <h1 className="dasing-car-title"><strong>Dashing Car House</strong></h1>
                            <p className="dasing-car-motto">Better Care and Better Understanding.</p>
                            <Link to="/explore">
                                <button type="btn btn-dark">
                                      Explore
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>    
            </section>
            <section>
                <div className="container pt-2 pb-5">
                  <div className="secvice">
                    <h3 className="text-center pb-3 our-services"><strong>NEW ARRIVALS</strong></h3>
                  </div>
                  <div className="row">
                    {
                        displayServices.slice(0,6).map(service => <Service
                            key={service.key}
                            service={service}
                        >
                        </Service>)
                    }
                  </div>
                </div>
            </section>
            <section>
                <div className="container pt-2 pb-5">
                  <div className="secvice">
                    <h3 className="text-center pb-3 our-services"><strong>WHY CHOOSE US</strong></h3>
                  </div>
                  <div className="container">
                      <WhyChooseUs></WhyChooseUs>
                  </div>
                </div>
            </section>
            <section>
                <div className="container pt-2 pb-5">
                  <div className="secvice">
                    <h3 className="text-center pb-3 our-services"><strong>Recent Customer Reviews</strong></h3>
                  </div>
                  <div className="row">
                    {
                        displayReviews.map(review => <Reviews
                            key={review.key}
                            review={review}
                        >
                        </Reviews>)
                    }
                  </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;