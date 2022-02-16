import React, { useEffect, useState } from 'react'
import NavBar from '../Components/Navbar/NavBar'
import TableShowsCountries from '../Components/Table/TableShowCountries'
import { useCountries } from '../custom-hooks/useCountries'

function ViewCountries() {
  const {listCountries, loading, error} = useCountries()
  const [displayList, setDisplayList] = useState(listCountries)

  useEffect(() => {
    setDisplayList(listCountries)
  }, [listCountries])

  const searchNameCountries = (inputText) => {
    if(!inputText) {
      setDisplayList(listCountries) 
    } else{
      const text = inputText.toLowerCase()
      const searchedList = listCountries.filter(country => country.name.toLowerCase().includes(text))
      setDisplayList(searchedList)
    }
  }

  return (
    <div>
        <NavBar searchNameCountries={searchNameCountries}/>
        <TableShowsCountries listItems={displayList} loading={loading} error={error}/>
    </div>
  )
}

export default ViewCountries