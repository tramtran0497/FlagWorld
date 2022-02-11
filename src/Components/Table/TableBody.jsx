import { TableBody } from '@mui/material'
import React from 'react'
import { useFetchCountries } from '../../custom-hooks/useCountries'
import TableRows from './TableRows'

function TableShowsBody() {
  const {listCountries, loading, error} = useFetchCountries()
  //console.log("Body", listCountries)

  if(loading) return <h1>Loading...</h1>
  if(error) console.log("Something went wrong...", error)

  return (
    <TableBody>
      {listCountries && listCountries.map(country => <TableRows key={country.name} country={country}/>)}
    </TableBody>
  )
}

export default TableShowsBody