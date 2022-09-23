import React from 'react';
import "./Country.css";

const Country = (props) => {
    console.log(props.data)
    const {
        name: {
            common : countryName
        },
        flags: {
            svg : image
        },
        capital : first,
        continents : continent,
    } = props.data;
    // console.log(props.data)


    return (
        <div className='country'>
            <h3 className='country-name'><small></small> {countryName}</h3>
            <img  src={image} alt="" />
            <h4><small>Capital:</small> {first} </h4>
            <h5><small>Continent:</small> {continent} </h5>
        </div>
    );
};

export default Country;