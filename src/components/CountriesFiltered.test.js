import React from 'react';
import CountriesFiltered from './CountriesFiltered';
import { shallow } from 'enzyme';

test('CountriesFiltered with no countries', () => {
    const wrapper = shallow(<CountriesFiltered />)
    expect(wrapper.find('p').contains(<p>Country not found</p>)).toEqual(true)
});

test('CountriesFiltered with an array of countries', () => {
    const filteredCountries = [ "Mali", "Malta", "Malawi", "Maldives", "Malaysia" ];
    const listFilteredCountries = filteredCountries.map(country => {
        return `<li ${country} </li>`
    })
    const wrapper = shallow(<CountriesFiltered filteredCountries={filteredCountries}/>)
    expect(wrapper.find('p').contains(<p>Country not found</p>)).toEqual(false)
    expect(wrapper.find('ul').containsMatchingElement(listFilteredCountries)).toEqual(true)
});