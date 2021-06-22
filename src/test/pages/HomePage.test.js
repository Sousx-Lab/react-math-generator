import React from 'react';
import HomePage from '../../pages/HomePage';
import {render, fireEvent} from '@testing-library/react';
import { screen } from '@testing-library/dom';


test('display "Welcome" ', function(){
    render(<HomePage name={"UserTest"} />)
    expect(screen.getByText('Welcome')).toBeInTheDocument;
})

test('show default Username', function (){
  render(<HomePage name={""} />)
  const defaultName = screen.getByText('User')
  expect(defaultName).toBeInTheDocument()
});

test('click to display form', function(){
    render(<HomePage name={"User1"} />)
    const click = document.body.querySelector('#changeName')
    fireEvent.click(click)
    const form = document.body.querySelector('#form')
    expect(form).not.toBeNull();
})

test('input value', function(){
    render(<HomePage name={""} />)
    const click = document.body.querySelector('#changeName')
    fireEvent.click(click)
    const input = document.body.querySelector('input[name="username"]')
    let value = "User2"
    input.value = value
    expect(input.value).toBe(value)
})