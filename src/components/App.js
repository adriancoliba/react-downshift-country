import React, { Component } from 'react'
import style from './App.css'
import countriesData from '../Api/countries.json';
// https://codesandbox.io/s/laughing-hill-hzuj5

class App extends Component {
    state = {
        countries: [],
        inputValue: "",
        filteredCountries: [],
        showCountries: false,
        selectedCountry: null
    }

    
    componentDidMount(){
        this.setState({countries: countriesData})
    }

    handleChange = event => {
        const { countries, selectedCountry } = this.state;
        selectedCountry && this.setState({selectedCountry: null})
        const inputValue = event.currentTarget.value;
        const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(inputValue.toLowerCase())
        );
    
        this.setState({
            filteredCountries,
            showCountries: true,
            inputValue
        });
    };
    
    handleSelectCountry = event => {
        const selectedCountry = event.currentTarget.innerText

        this.setState({
            filteredCountries: [],
            showCountries: false,
            inputValue: selectedCountry,
            selectedCountry: selectedCountry
        });
    };

    render() {
        let CountriesList;

        if (this.state.inputValue && this.state.showCountries) {
            if (this.state.filteredCountries.length > 0) {
                CountriesList = (
                    <ul className={style.countriesList}>
                        {this.state.filteredCountries.map( country => {
                            return <li key={country} onClick={this.handleSelectCountry}> {country} </li>
                        })}
                    </ul>
                );
            } else {
                CountriesList = (
                    <div className={style.notFound}>
                        <p>Country not found</p>
                    </div>
                );
            }
        }

        return (
            <div className={style.container}>
                <input 
                    type='text'
                    placeholder='Search...'
                    value={this.state.inputValue} 
                    onChange={this.handleChange}
                    className={this.state.selectedCountry ? style.inputSelected : style.input}
                />
                {CountriesList}
            </div>
        )
    }
}

export default App
