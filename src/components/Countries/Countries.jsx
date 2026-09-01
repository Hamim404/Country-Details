import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    console.log(newVisitedCountries);
  };
  return (
    <div>
      <h2>Countries Length: {countries.length}</h2>
      <h2>Total Country Visited: {visitedCountries.length}</h2>
      <ol>
        {visitedCountries.map((visitedCountry) => (
          <li>{visitedCountry.name.common}</li>
        ))}
      </ol>
      <div id="countries">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
}

export default Countries;
