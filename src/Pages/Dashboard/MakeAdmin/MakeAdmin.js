import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState("")
    const handleOnChange = e => {
        setEmail(e.target.value);
    }
    const handleMakingAdmin = e => {
        e.preventDefault();

        fetch(`http://localhost:5000/users?email=${email}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h1 class="text-center mb-3">Make Admin</h1>
            <form onSubmit={handleMakingAdmin}>

                <div class="row mb-1">
                    <div class="col">
                        <label class="form-label">Email</label>
                        <input type="email" name="email" class="form-control" placeholder="Email"
                            aria-label="Email" required onChange={handleOnChange} />
                    </div>




                    <button type="submit" class="btn btn-primary mt-2">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;