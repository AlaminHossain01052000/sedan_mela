import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner style={{ marginTop: "100px" }}></HomeBanner>
        </div>
    );
};

export default Home;