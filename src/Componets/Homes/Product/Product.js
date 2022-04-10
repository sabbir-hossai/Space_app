import React from 'react';
import './product.css';

const Product = (props) => {
    const { links, mission_name, rocket, launch_year, upcoming } = props.data;

    return (
        <div>
            <div className="col">
                <div className="cardColor text-center" style={{ width: '16rem' }}  >
                    <img src={links.mission_patch_small} className=" imgSize p-3" alt="..." />
                    <div className="card-body d-blog ">
                        <h4>{mission_name}</h4>
                        <p className=" ">rocket name: {rocket.rocket_name}</p>
                        <p className="card-text">launch year: {launch_year}</p>
                        <p className="card-text">upcoming: {upcoming}</p>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default Product;