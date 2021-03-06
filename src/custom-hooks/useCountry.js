// This hook is used to fetch one specific country

import { useEffect, useState } from "react";

export const useCountry = (inputText) => {
  const [country, setCountry] = useState(null);
  const [loadingCountry, setLoadingCountry] = useState(false);
  const [errorCountry, setErrorCountry] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoadingCountry(true);
        const response = await (
          await fetch(`https://restcountries.com/v3.1/name/${inputText}`)
        ).json();
        const country = response.map((country) => {
          return {
            name: country.name.common,
            capital: country.capital && country.capital[0],
            region: country.region,
            languages: country.languages && Object.values(country.languages),
            flag: country.flags.png,
          };
        })[0];
        setCountry(country);
        setLoadingCountry(false);
      } catch (error) {
        setErrorCountry(error);
        setLoadingCountry(false);
      }
    }
    fetchData();
  }, [inputText]);
  return { country, loadingCountry, errorCountry };
};
