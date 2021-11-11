import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const ManageAllOrders = () => {
    const [purchasedProducts, setPurchaseProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/purchasedSedan/All")
            .then(res => res.json())
            .then(data => {
                setPurchaseProducts(data);
                console.log(data);
            })
    }, [])
    const handleUpdateStatus = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/purchasedSedan/All/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const handleDeleteOrder = (id) => {
        fetch(`http://localhost:5000/purchasedSedan/All/${id}`, {
            method: "Delete"
        })
            .then(res => res.json())
            .then(data => console.log(data))
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
                            <TableCell align="right"><Button onClick={() => handleUpdateStatus(row._id)}>{row.status}</Button></TableCell>
                            <TableCell align="right"><Button onClick={() => handleDeleteOrder(row._id)}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageAllOrders;