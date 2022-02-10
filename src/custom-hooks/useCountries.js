// This hook is used to fetch all countries

import {
    useEffect,
    useState
} from "react"

export const useFetchCountries = (url = "https://restcountries.com/v3.1/all") => {
    const [listCountries, setListCountries] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await (await fetch(url)).json()
                console.log("Data of all countries", response)
                const listNameCountries = response.map(country => country.name.official)
                //setListCountries(response)
                setListCountries(listNameCountries)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return {
        listCountries,
        error,
        loading
    }
}