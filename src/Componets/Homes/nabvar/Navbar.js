import React from 'react';
import './Navbar.css';
import navIcon from '../../../images/Vector (1).png';

const Navbar = () => {
    return (
        <div className=' '>

            <div>
                <nav className="navbar navbar-expand-lg navbar-light  ">
                    <div className="container">
                        <img src={navIcon} className='m-4' alt="" />
                        <h1>Space</h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            </ul>
                            <div className="d-flex ms--5">
                                <ul className="navbar-nav ">
                                    <li className="nav-item">
                                        <a className="nav-link navItem m-2 active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link m-2 navItem" href="#">About us</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link m-2 navItem disabled">Story</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link m-2 navItem disabled">Blog</a>
                                    </li>
                                </ul>
                                <button className='btn navItem m-2 buttonBorder' >Contact us</button>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;