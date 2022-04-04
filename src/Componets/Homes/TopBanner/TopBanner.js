import React from 'react';
import './TopBanner.css';
import backgroundImg from '../../../images/main bg .png';

const TopBanner = () => {
    return (
        <div className='topBanner'>
            <div className='container '>
                <img className='' src={backgroundImg} alt="" />
            </div>

        </div>
    );
};

export default TopBanner;