import React from 'react'
import TableRows from './TableRows'

function TableBody({listItems}) {
  return (
    <>
      {listItems && listItems.map(item => <TableRows key={item.name} item={item}/>)} 
    </>
  )
}

export default TableBody