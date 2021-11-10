import React from 'react';
import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <div id="home-banner">
            <div id="banner-img">
                <h1>Hello</h1>
            </div>
            <div id="banner-content">
                <h1 className="txt-glowBlack">"Your <span className="txt-seablue">Luxuriousness</span></h1>
                <h1 className="txt-glowBlack">Our <span className="txt-smartRed">Passion"</span> </h1>
            </div>

        </div>

    );
};

export default HomeBanner;