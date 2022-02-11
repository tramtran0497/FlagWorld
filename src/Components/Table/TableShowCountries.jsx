import React from 'react'
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHeader from './TableHeader';
import TableShowsBody from './TableBody';


function TableShowsCountries() {
  return (
    <TableContainer component="paper">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeader/>
            <TableShowsBody/>
        </Table>
    </TableContainer>
  )
}

export default TableShowsCountries