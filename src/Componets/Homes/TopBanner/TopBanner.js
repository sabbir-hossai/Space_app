import React from 'react';
import './TopBanner.css';
import mainImg from '../../../images/main bg .png';
import mainBg from '../../../images/galax.png';
import mainBg2 from '../../../images/Vector 98.png';
import box from '../../../images/3 1.png';
import ring from '../../../images/ring.png';
import ston from '../../../images/Asset 5@2x-8.png';

const TopBanner = () => {
    return (
        <div className=''>
            <div className='topBanner  '>
                <div className='mainImg  '>
                    <img className='' src={mainImg} alt="" />
                </div>
                <div className='mainBg'>
                    <img className='' src={mainBg} alt="" />
                </div>
                <div className='mainBg2'>
                    <img className='' src={mainBg2} alt="" />
                </div>
                <div className='box'>
                    <img className='' src={box} alt="" />
                </div>
                <div className='ring'>
                    <img className='' src={ring} alt="" />
                </div>
                <div className='ston'>
                    <img className='' src={ston} alt="" />
                </div>

                <img src="" alt="" />
            </div>

        </div>
    );
};

export default TopBanner;