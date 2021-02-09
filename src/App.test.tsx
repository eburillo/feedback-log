import React from 'react'
import { fireEvent, getAllByRole, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { StoreProvider } from './store'
import { theme } from './theme'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  render(
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreProvider>
  )
})

test('renders the app', () => {
  const titleElement = screen.getByTestId('page-title')
  expect(titleElement).toBeInTheDocument()
})

test('inputs to add new items are hidden', () => {
  const input = screen.queryByTestId('add-new-customer-input')
  expect(input).not.toBeInTheDocument()
})

test('displays input to add new customer', () => {
  const addNewCustomerButton = screen.getByTestId('add-new-customer-button')
  fireEvent.click(addNewCustomerButton)
  const input = screen.getByTestId('add-new-customer-input')
  expect(input).toBeInTheDocument()
})

test('hides input after clicking escape', () => {
  const addNewCustomerButton = screen.getByTestId('add-new-customer-button')
  fireEvent.click(addNewCustomerButton)
  const input = screen.getByTestId('add-new-customer-input')
  fireEvent.keyUp(input, { key: 'Escape' })
  expect(input).not.toBeInTheDocument()
})

test('after clicking enter - adds customer', async () => {
  const addNewCustomerButton = screen.getByTestId('add-new-customer-button')
  fireEvent.click(addNewCustomerButton)
  const input = screen.getByTestId('add-new-customer-input')
  await userEvent.type(input, 'New Customer{enter}')
  expect(screen.getAllByRole('listitem').length).toBe(3)
})

test('after clicking enter - input dissapears', async () => {
  const addNewCustomerButton = screen.getByTestId('add-new-customer-button')
  fireEvent.click(addNewCustomerButton)
  const input = screen.getByTestId('add-new-customer-input')
  await userEvent.type(input, 'New Customer{enter}')
  expect(input).not.toBeInTheDocument()
})

test('shows feedback of customer after clicking on its name', async () => {
  const customersList = screen.getByTestId('customers-list')
  const customerListItems = getAllByRole(customersList, 'listitem')
  await userEvent.click(customerListItems[0])
  const feedbackList = screen.getByTestId('feedback-list')
  const feedbackListItems = getAllByRole(feedbackList, 'listitem')
  expect(feedbackListItems.length).toBeGreaterThan(0)
})
