import "../Country/Country.css";

function Country({ country }) {
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <p>Capital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
      <p>Region: {country.region.region}</p>
      <p>Area: {country.area.area} - {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
      <button>Not Visited</button>
    </div>
  );
}

export default Country;
