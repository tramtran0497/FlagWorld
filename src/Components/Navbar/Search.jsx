import React, { useState } from 'react'
import { useCountries } from '../../custom-hooks/useCountries'
import './NavbarStyle/Search.css'

function Search({searchNameCountries}) {
  const [inputText, setInputText] = useState("")
  const [suggestListName, setSuggestListName] = useState([])

  const {listCountries, loading, error} = useCountries()

  const suggestNames = (inputText) => {
    if(!inputText) {
      setSuggestListName([]) 
    } else{
      const text = inputText.toLowerCase()
      const suggestedList = listCountries.filter(country => country.name.toLowerCase().includes(text))
      setSuggestListName(suggestedList)
    }
  }

  const handleClick = (event) => {
    setInputText(event.target.textContent)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setInputText(event.target.value)
    suggestNames(event.target.value)
  }

  const handleEnter = (event) => {
    if(event.charCode === 13){
      handleSubmit(event)
      setSuggestListName([])
  }
  }

  const handleSubmit = (event) => {
    searchNameCountries(inputText)
    setInputText("")
    setSuggestListName([])
  }
  return (
    <div className='search-field'>
      <div>
        <input type="text" placeholder='What are you looking for?...' onChange={handleChange} value={inputText} onKeyPress={handleEnter}/>
        <button onClick={handleSubmit}>Serch</button>
      </div>
      <div>
      {suggestListName?.map(country => <p key={country.name} onClick={handleClick}>{country.name}</p>)}
      </div>
    </div>
  )
}

export default Search