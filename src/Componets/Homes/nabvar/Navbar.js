import React from 'react';
import './Navbar.css';
import navIcon from '../../../images/Vector (1).png';

const Navbar = () => {
    return (
        <div className=' '>

            <div>
                <nav class="navbar navbar-expand-lg navbar-light  ">
                    <div class="container">
                        <img src={navIcon} className='m-4' alt="" />
                        <h1>Space</h1>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            </ul>
                            <div class="d-flex ms--5">
                                <ul class="navbar-nav ">
                                    <li class="nav-item">
                                        <a class="nav-link navItem m-2 active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link m-2 navItem" href="#">About us</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link m-2 navItem disabled">Story</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link m-2 navItem disabled">Blog</a>
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