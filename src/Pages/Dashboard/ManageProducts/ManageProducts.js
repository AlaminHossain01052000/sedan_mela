import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
const ManageProducts = () => {
    const [sedans, setSedans] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/sedans")
            .then(res => res.json())
            .then(data => setSedans(data))
    }, [])
    console.log(sedans);
    const handleDeleting = (id) => {
        fetch(`http://localhost:5000/sedans/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <h1>Delete a product</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">price</TableCell>
                            <TableCell align="right">Fuel Type</TableCell>
                            <TableCell align="right">Gear</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sedans.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right"><img width="100px" src={row.img} alt=""></img></TableCell>
                                <TableCell align="right">{row.price} Lakh</TableCell>
                                <TableCell align="right">{row.fuelType}</TableCell>
                                <TableCell align="right">{row.gear}</TableCell>
                                <TableCell align="right"> <Button onClick={() => handleDeleting(row._id)}>Delete</Button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;