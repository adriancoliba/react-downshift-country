import React, { Component } from 'react'
import style from './App.css'
import countries from '../api/countries.json';
import CountriesFiltered from './CountriesFiltered'

class App extends Component {
    state = {
        inputValue: "",
        filteredCountries: [],
        showCountries: false,
        selectedCountry: null,
        activeSuggestion: 0,
    }

    handleChange = event => {
        this.state.selectedCountry && this.setState({selectedCountry: null})
        const inputValue = event.currentTarget.value;
        const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(inputValue.toLowerCase()));
    
        this.setState({
            filteredCountries,
            showCountries: true,
            inputValue,
            activeSuggestion: 0,
        });
    };
    
    handleSelectCountry = event => {
        const selectedCountry = event.currentTarget.innerText

        this.setState({
            filteredCountries: [],
            showCountries: false,
            inputValue: selectedCountry,
            selectedCountry: selectedCountry,
            activeSuggestion: 0,
        });
    };

    handleKeyDown = e => {
        // enter key
        if (e.keyCode === 13) {
            this.setState({
              activeSuggestion: 0,
              showCountries: false,
              inputValue: this.state.filteredCountries[this.state.activeSuggestion],
              selectedCountry: this.state.filteredCountries[this.state.activeSuggestion],
            });
        }
        // up arrow
        else if (e.keyCode === 38) {
            if (this.state.activeSuggestion === 0) {
              return;
            }
            console.log(this.state.activeSuggestion)
            this.setState({ activeSuggestion: this.state.activeSuggestion - 1 });
          }
          // down arrow
          else if (e.keyCode === 40) {
            if (this.state.activeSuggestion - 1 === this.state.filteredCountries.length) {
              return;
            }
            this.setState({ activeSuggestion: this.state.activeSuggestion + 1 });
          }
    };

    render() {
        return (
            <div className={style.container}>
                <input 
                    type='text'
                    placeholder='Search...'
                    value={this.state.inputValue} 
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    className={this.state.selectedCountry ? style.inputSelected : style.input}
                />
                {this.state.inputValue && this.state.showCountries && (
                    <CountriesFiltered
                        inputValue={this.state.inputValue}
                        showCountries={this.state.showCountries}
                        filteredCountries={this.state.filteredCountries}
                        handleSelectCountry={this.handleSelectCountry}
                        activeSuggestion={this.state.activeSuggestion}
                    />
                )}
            </div>
        )
    }
}

export default App
