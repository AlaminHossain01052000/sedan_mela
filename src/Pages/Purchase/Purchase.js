import { setLogLevel } from '@firebase/app';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const Purchase = () => {
    const { id } = useParams();
    const [choosedProduct, setChoosedProduct] = useState({});
    const { user } = useAuth();
    const [data, setData] = useState({});

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
                .then(data => console.log(data))
        }


    };

    useEffect(() => {
        fetch(`https://frozen-springs-46400.herokuapp.com/sedan/${id}`)
            .then(res => res.json())
            .then(data => setChoosedProduct(data))
    }, [id, user])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={user.displayName} disabled />
                <input defaultValue={user.email} disabled />
                <input type="text" placeholder="Your Address Please" onChange={handleOnChange} name="address" />

                <input type="text" onChange={handleOnChange} placeholder="Your Phone Number" name="phone" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default Purchase;