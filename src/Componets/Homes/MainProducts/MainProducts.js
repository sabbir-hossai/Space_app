import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const MainProducts = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 8)))
    }, [])

    return (
        <div className='container mt-5 mb-5'>
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