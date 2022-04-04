import React from 'react';
import DiscoverUniverse from '../DiscoverUniverse/DiscoverUniverse';
import Footer from '../Footer/Footer';
import MainProducts from '../MainProducts/MainProducts';
import Navbar from '../nabvar/Navbar';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <DiscoverUniverse></DiscoverUniverse>
            <MainProducts></MainProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;