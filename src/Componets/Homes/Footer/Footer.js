import React from 'react';
import './footer.css';
import footerIcon from '../../../images/Vector (1).png';
import fb from '../../../icons/Vector (1).png';
import tw from '../../../icons/Vector (2).png';
import ins from '../../../icons/Vector (3).png';

const Footer = () => {
    return (
        <div className='  footerBody pt-4'>
            <div className='container  '>
                <h1 className='text-center m-5'>Newsletter</h1>
                <div class="input-group subscribe d-flex justify-content-center pb-5">
                    <input type="text" class="form-control " placeholder="Email address" />
                    <button class="btn btn-outline-secondary" type="button " id="button-addon2">Subscribe</button>
                </div>
                <div className='d-flex justify-content-around text-center mt-5'>
                    <div className='d-flex m-3'>
                        <img src={footerIcon} className=' footerImg me-4' alt="" />
                        <h3 className='footerSpace'>Space</h3>
                    </div>
                    <div className='d-flex m-3'>
                        <p className='m-2'>Space 2020 all right reserved.</p>
                    </div>
                    <div className='d-flex m-3'>
                        <a href="#" className='m-2'><img src={fb} alt="" /></a>
                        <a href="#" className='m-2'><img src={tw} alt="" /></a>
                        <a href="#" className='m-2'><img src={ins} alt="" /></a>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;