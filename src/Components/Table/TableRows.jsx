import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function TableRows({country, key}) {
    console.log("Rows",country)
  return (
    <TableRow key={key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <Link to={`/country/${country.name.toLowerCase()}`} >
          <TableCell component="th" scope="row" align='center'>{country.name}</TableCell>
        </Link>
        <TableCell align='center'>{country.capital}</TableCell>
        <TableCell align='center'>{country.region}</TableCell>
        <TableCell align='center'>{country.languages && country.languages.map(language => <p key={language}>{language}</p>)}</TableCell>
        <TableCell align='center'><img src={country.flag} alt="country flag"/></TableCell>
    </TableRow>
  )
}

export default TableRows