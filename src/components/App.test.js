import React from 'react';
import App from './App.js';
import { shallow, mount } from 'enzyme';
import { isReferenced } from '@babel/types';
const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Check App\'s input when rendered', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('input').prop('value')).toEqual('')
  expect(wrapper.find('input').prop('className')).toEqual('input')
});

// test('Check App\'s input value', () => {
//   const wrapper = shallow(<App />)
//   // wrapper.setProps({value="Madagascar"});
//   // wrapper.setProps({value:'aaaaaaaaaaaa'})
//   const lol = wrapper.find('input')
//   lol.value = 'Madagascar'
//   wrapper.update();
//   console.log(lol.debug())
//   expect(wrapper.find('input').prop('value')).toEqual('Madagascar')

//   // wrapper.update();
//   // console.log(wrapper.find('input').debug())

// });

// test('should generate greeting message with name', () => {
//   const result = generateGreeting('Mike');
//   expect(result).toBe('Hello Mike!')
// });

// test('should generate greeting with no name', () => {
//   const result = (generateGreeting());
//   expect(result).toBe('Hello Anonymous!')
// });

// it('input fields should be filled correctly', () => {
//   const credentials = { username: 'leongaban', password: 'testpass' };
//   expect(loginComponent.find('#input-auth-username').length).toBe(1);

//   const usernameInput = loginComponent.find('#input-auth-username');
//   usernameInput.value = credentials.username;
//   expect(usernameInput.value).toBe('leongaban');

//   const passwordInput = loginComponent.find('#input-auth-password');
//   passwordInput.value = credentials.password;
//   expect(passwordInput.value).toBe('testpass');
// });