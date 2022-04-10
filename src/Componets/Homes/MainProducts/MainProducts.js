import React, { useEffect, useState } from 'react';
import ProductFiltter from '../Pfiltter/ProductSearchBar';
import Product from '../Product/Product';
import { useProducts } from './useProducts';
import './MainProducts.css';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';

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

        </div>
    );
};

export default MainProducts;