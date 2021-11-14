import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">Dashing Car House based in bangladeshi.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Our Services</h6>
                        <ul className="footer-links">
                          <li><a href="#"></a></li>
                          <li><a href="#"></a></li>
                          <li><a href="#"></a></li>
                          <li><a href="#"></a></li>
                          <li><a href="#"></a></li>
                          <li><a href="#"></a></li>
                          <li><a href="#"></a></li>
                          <li><a href="#"></a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
                            <a href="#"> Dashing Car House</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                          <li><a className="facebook" href="#">F</a></li>
                          <li><a className="twitter" href="#">T</a></li>
                          <li><a className="dribbble" href="#">Y</a></li>
                          <li><a className="linkedin" href="#">L</a></li>   
                        </ul>
                    </div>
                </div>
              </div>
        </footer>
    );
};

export default Footer;