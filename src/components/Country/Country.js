import React from 'react';
import "./Country.css";

const Country = (props) => {
    // console.log(props.data)
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



    return (
        <div className={'country animate__animated animate__fadeIn'}>
            <h4 className='country-name'><small></small> {countryName}</h4>
            <img  src={image} alt="" />
            <h5><small>Capital:</small> {first} </h5>
            <h6><small>Continent:</small> {continent} </h6>
        </div>
    );
};

export default Country;