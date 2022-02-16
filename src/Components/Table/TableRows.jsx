import { Add, Favorite, Remove } from '@mui/icons-material'
import React, {useState} from 'react'
import './TableStyle/TableRows.css'

function TableRows({item}) {
  const [quantity, setQuantity] = useState(0)

  const handleAdd = () => {
    setQuantity(quantity + 1)
  } 

  const handleRemove = () => {
    if(quantity > 0) setQuantity(quantity - 1)
    setQuantity(0)
  }
  return (
    <tr>
      <td><img src={item.flag} alt={item.name} /></td>
      <td>{item.name}</td>
      <td>{item.capital}</td>
      <td>{item.region}</td>
      <td>{item.population}</td>
      <td>{item.languages && item.languages.map(language => <p key={language}>{language}</p>)}</td>
      <td className='quantity'>
        <Remove onClick = {handleRemove}/>
        <p>{quantity}</p>
        <Add onClick = {handleAdd}/>
      </td>
      <td><Favorite/></td>
    </tr>
  )
}

export default TableRows