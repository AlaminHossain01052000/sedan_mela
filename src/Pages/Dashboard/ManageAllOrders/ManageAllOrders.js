import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';



const ManageAllOrders = () => {
    const [purchasedProducts, setPurchaseProducts] = useState([]);

    useEffect(() => {
        fetch("https://sedan-mela-server.vercel.app/purchasedSedan/All")
            .then(res => res.json())
            .then(data => {
                setPurchaseProducts(data);

            })
    }, [purchasedProducts])
    const handleUpdateStatus = (id) => {

        fetch(`https://sedan-mela-server.vercel.app/purchasedSedan/All/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    alert("Order is being shipped");

                }
            })
    }
    const handleDeleteOrder = (id) => {
        const confirm = window.confirm("Are You Sure Want To Delete ? ");
        if (confirm) {
            fetch(`https://sedan-mela-server.vercel.app/purchasedSedan/All/${id}`, {
                method: "Delete"
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert("Data Deleted Succussfully");

                    }
                })
        }

    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order Id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Product Name</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {purchasedProducts.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row._id}
                            </TableCell>
                            <TableCell align="right">{row.displayName}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.address}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">{row.productName}</TableCell>
                            <TableCell align="right"><Button onClick={() => handleUpdateStatus(row._id)} variant="contained">{row.status}</Button></TableCell>
                            <TableCell align="right"><Button onClick={() => handleDeleteOrder(row._id)} sx={{ backgroundColor: "#eb4d4b" }} variant="contained">Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};

export default ManageAllOrders;