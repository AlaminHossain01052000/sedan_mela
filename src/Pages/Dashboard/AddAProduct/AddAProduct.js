import React, { useState } from 'react';

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
        fetch("http://localhost:5000/sedans", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>

            < div class="form-signin bg-light" >
                <form onSubmit={handleProductAdding}>
                    <img class="mb-4" src="https://www.dropbox.com/s/zgbbayj1iqd9fjf/CF_Mark.jpg?raw=1" alt="" width="72" />
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating">
                        <input onChange={handleOnChange} type="text" class="form-control" placeholder="Product Name" name="name" />

                    </div>
                    <div class="form-floating">
                        <input onChange={handleOnChange} type="text" class="form-control" placeholder="Product Engine" name="engine" />

                    </div>
                    <div class="form-floating">
                        <input onChange={handleOnChange} type="number" class="form-control" placeholder="Product Gear" name="gear" />

                    </div>
                    <div class="form-floating">
                        <input onChange={handleOnChange} type="text" class="form-control" placeholder="Gear Type" name="gearType" />

                    </div>
                    <div class="form-floating">
                        <input onChange={handleOnChange} type="text" class="form-control" placeholder="Product Fuel Type" name="fuelType" />

                    </div>
                    <div class="form-floating">
                        <input onChange={handleOnChange} type="text" class="form-control" placeholder="Product Price (In Lakh)" name="price" />

                    </div>
                    <div class="form-floating">
                        <input onChange={handleOnChange} type="text" class="form-control" placeholder="Product Image (Live Url)" name="img" />

                    </div>


                    <button className="w-100 btn btn-lg btn-dark" type="submit" >Add Product</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </div >




        </div >
    );
};

export default AddAProduct;