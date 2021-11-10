import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Testimonial from '../Testimonial/Testimonial';
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        fetch("http://localhost:5000/testimonials")
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div style={{ width: "80%", margin: "0 auto" }}>
            <h2> Testimonial </h2>
            <Slider {...settings}>
                {
                    testimonials.map(testimonial => <Testimonial
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </Slider>
        </div>
    );
};

export default Testimonials;