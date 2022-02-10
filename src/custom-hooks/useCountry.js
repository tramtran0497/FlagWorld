// This hook is used to fetch one specific country

import { useEffect, useState } from "react"

export const useFetchCountryName = (inputText) => {
    const [country, setCountry] = useState(null)
    const [loadingCountry, setLoadingCountry] = useState(false)
    const [errorCountry, setErrorCountry] = useState(null)

    useEffect(() => {
        async function fetchData(){
            try{
                setLoadingCountry(true)
                const response = await (await fetch(`https://restcountries.com/v3.1/name/${inputText}`)).json()
                const nameOfCountry = response[0].name.official
                console.log("Name of FetchData", nameOfCountry)
                setCountry(nameOfCountry)
                setLoadingCountry(false)
            } catch(error) {
                setErrorCountry(error)
                setLoadingCountry(false)
            }
        }
        fetchData()
    }, [inputText])
    return {country, loadingCountry, errorCountry}
}
