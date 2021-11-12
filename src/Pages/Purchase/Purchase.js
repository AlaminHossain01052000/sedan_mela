import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import useAuth from '../hooks/useAuth';
import "./Purchase.css";

const Purchase = () => {
    const { id } = useParams();
    const [choosedProduct, setChoosedProduct] = useState({});
    const { user } = useAuth();
    const [data, setData] = useState({});
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (user && choosedProduct) {

            const purchasingInfo = {
                displayName: user.displayName, email: user.email, ...data, status: "pending", productName: choosedProduct.name, productId: choosedProduct._id, productInfo: { ...choosedProduct }
            };

            fetch(`https://frozen-springs-46400.herokuapp.com/purchasedSedan`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(purchasingInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert("Product is purchased succesfully");
                        history.push("/");
                    }
                })
        }


    };

    useEffect(() => {
        fetch(`https://frozen-springs-46400.herokuapp.com/sedan/${id}`)
            .then(res => res.json())
            .then(data => setChoosedProduct(data))
    }, [id, user])
    return (
        <div className="purchase-form-container backgroud-img">

            <form onSubmit={handleSubmit} style={{ width: "75%", margin: "0  auto" }}>
                <input className="purchase-info-field-default" defaultValue={user.displayName} disabled />
                <input defaultValue={user.email} disabled className="purchase-info-field-default" />
                <input type="text" className="purchase-info-field" placeholder="Your Address Please" onChange={handleOnChange} name="address" />

                <input type="text" className="purchase-info-field" onChange={handleOnChange} placeholder="Your Phone Number" name="phone" />
                <input type="submit" className="btn-purchase" />
            </form>

        </div>
    );
};

export default Purchase;