import React from 'react';
import './Country.css';
const Country = (props) => {
    const{population,region,name,area,flags} = props.country 
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
           <h1>Country name: {name.common}</h1>
           <p>Population: {population}</p> 
           <p><small>Region: {region}</small></p>
           <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;