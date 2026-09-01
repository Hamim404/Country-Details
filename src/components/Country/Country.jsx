function Country({ country }) {
  return (
    <div>
        <img src={country.flags.flags.png} alt="" srcset="" />
      <p>Name: {country.name.official}</p>
    </div>
  );
}

export default Country;
