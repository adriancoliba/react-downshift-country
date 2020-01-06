import React from 'react'
import style from './CountriesFiltered.css'

const CountriesFiltered = props => {
    let filteredCountries;

    if (props.filteredCountries && props.filteredCountries.length > 0) {
        filteredCountries = (
            <ul className={style.countriesList}>
                {props.filteredCountries.map( (country, index) => {
                    let className;
                    // Flag the active suggestion with a class
                    if (index === props.activeSuggestion) {
                        className = "suggestionActive";
                    }
                    return <li key={country} className={style[className]} onClick={props.handleSelectCountry}> {country} </li>
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

    return (
        <React.Fragment>
            {filteredCountries}
        </React.Fragment>
    )
}

export default CountriesFiltered
