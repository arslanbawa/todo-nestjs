import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function DatasTable({ users, setFormData, formData, handleSubmit, handleEdit, handleDelete }) {

    return (
        <TableContainer component={Paper}>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <TextField required id="outlined-basic" label="First Name" variant="outlined" type='text' value={formData.firstName} onChange={event => { setFormData({ ...formData, firstName: event.target.value }) }} />
                <TextField required id="outlined-basic" label="Last Name" variant="outlined" type='text' value={formData.lastName} onChange={event => { setFormData({ ...formData, lastName: event.target.value }) }} />
                <TextField required id="outlined-basic" label="Email" variant="outlined" type='email' value={formData.email} onChange={event => { setFormData({ ...formData, email: event.target.value }) }} />
                <TextField required id="outlined-basic" label="Age" variant="outlined" type='number' value={formData.age} onChange={event => { setFormData({ ...formData, age: event.target.value }) }} />
                <input type="submit" value="Submit" />
            </form>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>User Name</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">Age</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                        <StyledTableCell align="right">Edit/Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users && users.map((item) => (
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="item">
                                {item.firstName + " " + item.lastName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{item.email}</StyledTableCell>
                            <StyledTableCell align="right">{item.age}</StyledTableCell>
                            <StyledTableCell align="right">{item.date_added}</StyledTableCell>
                            <StyledTableCell align="right">
                                <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item._id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}