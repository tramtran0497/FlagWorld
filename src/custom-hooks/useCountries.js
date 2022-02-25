// This hook is used to fetch all countries

import { useEffect, useState } from "react";

export const useCountries = (url = "https://restcountries.com/v3.1/all") => {
  const [listCountries, setListCountries] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await (await fetch(url)).json();
        const listNameCountries = response.map((country) => {
          return {
            name: country.name.common,
            capital: country.capital && country.capital[0],
            region: country.region,
            languages: country.languages && Object.values(country.languages),
            flag: country.flags.png,
            population: country.population,
          };
        });
        setListCountries(listNameCountries);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return {
    listCountries,
    error,
    loading,
  };
};
