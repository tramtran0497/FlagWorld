import './App.css'
import {
  useEffect,
  useState
} from 'react'
import { useFetchCountries } from './custom-hooks/useCountries'
import { useFetchCountryName } from './custom-hooks/useCountry'

function App() {
  const {listCountries, error, loading}= useFetchCountries()
  const {country, loadingCountry, errorCountry} = useFetchCountryName("peru")

  if(loading) return <h1>Loading...</h1>
  if(error) return  console.log("Something went wrong", error)

  if(loadingCountry) return <h1>Loading........</h1>
  if(errorCountry) return  console.log("Something went wrong country", errorCountry)

  return(
    <div className = 'App'> Hello
    <h2>Name of Country: {country}</h2>
    {listCountries.map(name => <p key={name}>{name}</p>)}
    </div>
  ) 
}

export default App