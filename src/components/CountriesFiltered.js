import React from 'react'
import style from './CountriesFiltered.css'

const CountriesFiltered = props => {
    let filteredCountries;

    if (props.filteredCountries && props.filteredCountries.length > 0) {
        filteredCountries = (
            <ul className={style.countriesList}>
                {props.filteredCountries.map( country => {
                    return <li key={country} onClick={props.handleSelectCountry}> {country} </li>
                })}
            </ul>
        );
    } else {
        filteredCountries = (
            <div className={style.countriesNotFound}>
                <p>Country not found</p>
            </div>
        );
    }
    console.log(props.filteredCountries)

    return (
        <React.Fragment>
            {filteredCountries}
        </React.Fragment>
    )
}

export default CountriesFiltered
