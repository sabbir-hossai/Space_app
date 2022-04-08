import React from 'react';
import roket1 from '../../../images/discover/t@2x.png';
import roket2 from '../../../images/discover/j@2x.png';
import roket3 from '../../../images/discover/se@2x.png';
import './Discover.css';

const DiscoverUniverse = () => {
    return (
        <div className='discoverBody pt-5 pb-5'>
            <h1 className='text-center '>Discover universe</h1>
            <div className='container mt-5 mb-5'>
                <div className="row row-cols-1 row-cols-lg-3 g-4 ">
                    <div className="col">
                        <div className="DiscoverCardColor text-center p-3" style={{ width: '22rem' }}  >
                            <img src={roket1} className=" imgSize p-3" alt="..." />
                            <div className="card-body d-blog ">
                                <h3>Mission mongo</h3>
                                <p className=" ">At PIAP Space ,We believe that we can make Space and Earth cleaner, Engineering, and delivering top-quality robotics solutions. </p>
                            </div>
                        </div>

                    </div >
                    <div className="col">
                        <div className="DiscoverDBCardColor text-center p-2 m-1 " style={{ width: '22rem' }}  >
                            <img src={roket2} className=" imgSize p-3" alt="..." />
                            <div className="card-body d-blog ">
                                <h3>Mission BD</h3>
                                <p className=" ">At PIAP Space ,We believe that we can make Space and Earth cleaner, Engineering, and delivering top-quality robotics solutions. </p>
                            </div>
                        </div>

                    </div >
                    <div className="col">
                        <div className="DiscoverCardColor text-center p-3" style={{ width: '22rem' }}  >
                            <img src={roket3} className=" imgSize p-3" alt="..." />
                            <div className="card-body d-blog ">
                                <h3>Mission 11</h3>
                                <p className=" ">At PIAP Space ,We believe that we can make Space and Earth cleaner, Engineering, and delivering top-quality robotics solutions. </p>
                            </div>
                        </div>

                    </div >
                </div>
            </div>

        </div>
    );
};

export default DiscoverUniverse;