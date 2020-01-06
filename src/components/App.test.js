import React from 'react';
import App from './App.js';
import { shallow, mount } from 'enzyme';
import { isReferenced } from '@babel/types';
import CountriesFiltered from './CountriesFiltered'
import countries from '../api/countries.json';

test('Check App\'s input when rendered', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('input').prop('value')).toEqual('')
  expect(wrapper.find('input').prop('className')).toEqual('input')
});

test('Check App\'s setState input Country', () => {
  const wrapper = mount(<App />)
  const inputCountry = 'Madagascar'
  wrapper.setState({inputValue: {inputCountry}, filteredCountries: ['Madagascar'], showCountries: true,})
  expect(wrapper.find(CountriesFiltered)).toHaveLength(1)
  expect(wrapper.find('ul').children()).toHaveLength(1)
  expect(wrapper.find('li').text()).toEqual(` ${inputCountry} `)
});

test('Check App\'s setState input Country', () => {
  const wrapper = mount(<App />)
  const inputCountry = 'Mal';
  const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(inputCountry.toLowerCase()));
  wrapper.setState({inputValue: {inputCountry}, filteredCountries: {filteredCountries}, showCountries: true,});
});
