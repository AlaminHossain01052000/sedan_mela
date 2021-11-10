import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const [companyName, setCompanyName] = useState("");
    const [companyPost, setCompanyPost] = useState("");
    const [description, setDescription] = useState("");
    const [review, setReview] = useState("");
    // email, name, rating, description, company{ name, post }
    const getCompanyName = e => {
        setCompanyName(e.target.value);
    }
    const getCompanyPost = e => {
        setCompanyPost(e.target.value);
    }
    const getDescription = e => {
        setDescription(e.target.value);
    }
    const handleGetReview = e => {
        const selectedReview = document.getElementById("review").value;
        setReview(selectedReview);
    }
    const handleAddingReview = (e) => {
        e.preventDefault();
        const testimonial = { email: user.email, name: user.displayName, rating: review, description: description, company: { post: companyPost, name: companyName } };
        fetch("http://localhost:5000/testimonials", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(testimonial)
        })
            .then()
    }
    return (
        <div>
            <form onSubmit={handleAddingReview}>
                <input type="text" defaultValue={user.displayName} />
                <input type="text" defaultValue={user.email} />
                <textarea type="text" placeholder="description" onChange={getDescription} name="description" />
                <input type="text" onChange={getCompanyName} placeholder="Your Company's Name"></input>
                <input type="text" onChange={getCompanyPost} name="post" placeholder="Your Post in that company"></input>
                <select name="review" id="review" onChange={handleGetReview}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" value="submit" />
            </form>
        </div >
    );
};

export default AddReview;