import React from 'react';

import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import Footer from '../Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import OurSedans from '../OurSedans/OurSedans';
import Testimonials from '../Testimonials/Testimonials';
import Advertisement from './Advertisement/Advertisement';

const Home = () => {

    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner style={{ marginTop: "100px" }}></HomeBanner>
            <OurSedans>
            </OurSedans>
            <AboutUs></AboutUs>
            <DiscountBanner></DiscountBanner>
            <Testimonials></Testimonials>
            <Advertisement></Advertisement>

            <Footer></Footer>
        </div>
    );
};

export default Home;