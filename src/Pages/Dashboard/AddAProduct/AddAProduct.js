import React, { useState } from 'react';
import "./AddProduct.css";
const AddAProduct = () => {
    const [productInfo, setProductInfo] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...productInfo }
        newProduct[field] = value;

        setProductInfo(newProduct);
    }
    const handleProductAdding = (e) => {
        e.preventDefault();
        fetch("https://sedan-mela-server.vercel.app/sedans", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Product Added Successfully");
                }
            })
    }
    return (
        <div className="add-product-form">


            <form onSubmit={handleProductAdding} >

                <img src="https://i.ibb.co/WntcHkn/download-1-removebg-preview.png" alt="" width="172" className="add-product-sign" />
                <h1 style={{ fontFamily: "'Poppins', sans-serif" }}>Add A Product</h1>



                <input className="product-add-field" required onChange={handleOnChange} type="text" placeholder="Product Name" name="name" />

                <input className="product-add-field" required onChange={handleOnChange} type="text" placeholder="Product Engine" name="engine" />


                <input className="product-add-field" required onChange={handleOnChange} type="number" placeholder="Product Gear" name="gear" />


                <input className="product-add-field" required onChange={handleOnChange} type="text" placeholder="Gear Type" name="gearType" />


                <input className="product-add-field" required onChange={handleOnChange} type="text" placeholder="Product Fuel Type" name="fuelType" />



                <input className="product-add-field" required onChange={handleOnChange} type="text" placeholder="Product Price (In Lakh)" name="price" />



                <input className="product-add-field" required onChange={handleOnChange} type="text" placeholder="Product Image (Live Url)" name="img" />




                <button className="btn-add" type="submit" >Add Product</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>





        </div >
    );
};

export default AddAProduct;