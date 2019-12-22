import React, { Component } from 'react'
import style from './App.css'
import countries from '../api/countries.json';
import CountriesFiltered from './CountriesFiltered'

class App extends Component {
    state = {
        inputValue: "",
        filteredCountries: [],
        showCountries: false,
        selectedCountry: null
    }

    handleChange = event => {
        this.state.selectedCountry && this.setState({selectedCountry: null})
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
        return (
            <div className={style.container}>
                <input 
                    type='text'
                    placeholder='Search...'
                    value={this.state.inputValue} 
                    onChange={this.handleChange}
                    className={this.state.selectedCountry ? style.inputSelected : style.input}
                />
                {this.state.inputValue && this.state.showCountries && (
                    <CountriesFiltered
                        inputValue={this.state.inputValue}
                        showCountries={this.state.showCountries}
                        filteredCountries={this.state.filteredCountries}
                        handleSelectCountry={this.handleSelectCountry}
                    />
                )}
            </div>
        )
    }
}

export default App
