import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './MainProducts.css';

const MainProducts = () => {
    const [products, setProducts] = useState([]);
    const [upcomingStates, setUpcomingStates] = useState(true);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 8)))
    }, [])

    console.log(upcomingStates)


    return (
        <div className='container mt-5 mb-5'>
            <dir className='d-flex barBg justify-content-between p-2'>
                <div className='m-1'>
                    <form>
                        Is Upcoming ?
                        <select className='custom-select' onChange={(e) => {
                            const upcomingStates = e.target.value;
                            setUpcomingStates(upcomingStates)
                        }}  >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </form>
                </div>
                <span><b>|</b></span>
                <div className='m-1'>
                    <form>
                        Lunching Year  ?
                        <select className='custom-select' onChange={(e) => {
                            const upcomingStates = e.target.value;
                            setUpcomingStates(upcomingStates)
                        }}  >
                            <option value="2001-2005">2001-2005</option>
                            <option value="2006-2010">2006-2010</option>
                        </select>
                    </form>
                </div>
                <div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </dir>
            <div className="row row-cols-1 row-cols-lg-4 g-4">
                {
                    products.map(data => <Product
                        key={data.flight_number}
                        data={data}
                    ></Product>)
                }

            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination d-flex justify-content-center mt-5">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default MainProducts;