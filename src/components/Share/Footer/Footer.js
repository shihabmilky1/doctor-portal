import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGoogle , faFacebook , faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
        <footer className="footer my-5 py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3"> 
                    <ul>
                        <li className="py-2" ><Link className="text-secondary" to="">Emergency Dental Care</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Check Up</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Treatment of Personal Diseases</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Tooth Extraction</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Check Up</Link></li>
                    </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-4" style={{color: '#1CC7C1'}}>Services</h5>
                    <ul>
                        <li className="py-2" ><Link className="text-secondary" to="">Emergency Dental Care</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Check Up</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Treatment of Personal Diseases</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Tooth Extraction</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Check Up</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Check Up</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Check Up</Link></li>
                    </ul>
                    </div>
                    <div className="col-md-3">
                    <h5 className="mb-4" style={{color: '#1CC7C1'}}>Our Health</h5>
                    <ul>
                        <li className="py-2" ><Link className="text-secondary" to="">Emergency Dental Care</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Check Up</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Treatment of Personal Diseases</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Tooth Extraction</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Check Up</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Check Up</Link></li>
                        <li className="py-2" ><Link className="text-secondary" to="">Check Up</Link></li>
                    </ul>
                    </div>
                    <div className="col-md-3 align-self-start">
                    <h5 className="mb-4" style={{color: '#1CC7C1'}}>Our Address</h5>
                    <div className="">
                        <p className="text-secondary">New York - 101010 Hudson <br/> Yards</p>
                    </div>
                    <div className="">
                        <ul className="d-flex justify-content-start">
                            <li><Link to=""><FontAwesomeIcon className="mt-5 social-link" style={{fontSize:'10px'}} icon={faGoogle} /></Link></li>
                            <li><Link to=""><FontAwesomeIcon className="mt-5 social-link" style={{}} icon={faFacebook} /></Link></li>
                            <li><Link to=""><FontAwesomeIcon className="mt-5 social-link" style={{}} icon={faTwitter} /></Link></li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <p className="text-secondary">Call Now</p>
                        <button className="btn my-btn">+2025550295</button>
                    </div>
                    </div>
                </div>
            </div>
            
        </footer>
        <p className="text-secondary text-center">Copyright {(new Date().getFullYear())} All Rights Reserved</p>
        </>
    );
};

export default Footer;