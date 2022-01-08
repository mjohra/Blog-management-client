import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container text-white mt-5'>
            <div className="container">
            <div className='row g-4 text-start mx-auto py-4'>
                <div className='col-sm-3 text-center'>
                    <h3 className='text-title'>About</h3>
                    <p className='footer-about'>Whoever replaces Speaker Nancy Pelosi will face the daunting task of presiding over the increasingly tense debate about whether Democrats will be the party of the activist.</p>
                    <div className='text-left'>
                        <div className='icon'>
                            <Link to="#"><i className="fab fa-facebook"></i></Link>
                            <Link to="#"><i className="fab fa-twitter"></i></Link>
                            <Link to="#"><i className="fab fa-instagram-square "></i></Link>
                            <Link to="#"><i className="fas fa-rss "></i></Link>
                        </div>
                    </div>

                </div>
                <div className='col-sm-3 '>
                    <h3 className='text-center text-title '>Information</h3>
                    <div className='info text-center foot-text'>
                        <p><Link to="#">About Us</Link></p>
                        <p><Link to="#">More Search</Link></p>
                        <p><Link to="#">Blogs</Link></p>
                        <p><Link to="#">Testimonial</Link></p>
                        <p><Link to="#">Events</Link></p>

                    </div>
                </div>
                <div className='col-sm-3 text-center'>
                    <h3 className='text-title'>Helpful Links</h3>
                    <div className='info foot-text'>
                    <p><Link to="#">Services</Link></p>
                    <p><Link to="#">Stories</Link></p>
                    <p><Link to="#">Tearms & Condition</Link></p>
                    <p><Link to="#">Privacy Policy</Link></p>
                    </div>

                </div>
                <div className='col-sm-3 text-center mb-5'>
                    <h3 className='pb-3 text-title'>Subscribe</h3>
                    <input className='input' placeholder='Enter Your Email'></input> <br /> <br />
                    <button className='bg-warning text-dark subscribe'>Subscribe</button>
                </div>
            </div>
            <p className='p-5 text-center'>&copy; 2022 All Right Reserved.</p>
            </div>
            
        </div>
    );
};

export default Footer;