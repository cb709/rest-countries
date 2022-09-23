import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [count, setCount] = useState(10);

  function increaseCount() {
    setCount(count + 10);
  }

  return (
    <div className="countries-container">
      <div className="countries">
        {countries.slice(0, count).map((country) => (
          <Country key={country.name.common} data={country}></Country>
        ))}
      </div>
      <div className="load-more-button">
        <button onClick={increaseCount}>Load More</button>
      </div>
    </div>
  );
};

export default Countries;
