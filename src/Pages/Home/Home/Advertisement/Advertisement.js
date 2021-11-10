import React from 'react';
import "./Advertisement.css";
const Advertisement = () => {
    return (
        <div style={{ margin: "50px 0" }}>
            <div id="animated-banner">
                <div className="patterns">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="polka-dots" x="0" y="0" width="100" height="100"
                                patternUnits="userSpaceOnUse">
                                <circle style={{ fill: "#C4E538" }} cx="25" cy="25" r="3"></circle>
                            </pattern>


                        </defs>

                        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>



                        <text x="50%" y="60%" textAnchor="middle" className="animated-txt" >
                            Sedans
                        </text>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;