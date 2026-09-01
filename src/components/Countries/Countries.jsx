import { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);

  return (
    <div>
      <h2>Countries Length: {countries.length}</h2>
      <div id="countries">
        {countries.map((country) => (
          <Country country={country} key={country.cca3.cca3}></Country>
        ))}
      </div>
    </div>
  );
}

export default Countries;
