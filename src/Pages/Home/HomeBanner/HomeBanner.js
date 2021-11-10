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
            <div id="animated-banner">
                <div class="patterns">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="polka-dots" x="0" y="0" width="100" height="100"
                                patternUnits="userSpaceOnUse">
                                <circle style={{ fill: "#C4E538" }} cx="25" cy="25" r="3"></circle>
                            </pattern>


                        </defs>

                        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>



                        <text x="50%" y="60%" text-anchor="middle" className="animated-txt" >
                            Sedans
                        </text>
                    </svg>
                </div>
            </div>
        </div>

    );
};

export default HomeBanner;