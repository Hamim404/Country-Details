import { use } from "react";
import Country from "../Country/Country";

function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
console.log(countries);

  return (
    <div>
      <h2>Countries Length: {countries.length}</h2>
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
}

export default Countries;
