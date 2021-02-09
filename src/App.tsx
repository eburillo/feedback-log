import { useContext, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { getColor } from './theme'
import { Store } from './store'
import AddItemInput from './components/Input'
import List from './components/List'
import {
  showAddNewCustomerInput,
  hideAddNewCustomerInput,
  showAddNewFeedbackInput,
  hideAddNewFeedbackInput,
  saveNewItem,
  handleOnClickCustomer,
  fetchCustomers,
} from './actions'
import {
  INFO_NO_CUSTOMERS_FOUND,
  INFO_NO_FEEDBACKS,
  INFO_NO_CUSTOMER_SELECTED,
  CUSTOMERS_HEADLINE,
  FEEDBACK_HEADLINE,
  ITEM_CUSTOMER,
  ITEM_FEEDBACK,
  PAGE_TITLE,
  KEY_ENTER,
} from './constants'
import { ICustomer, IFeedback, IItem } from './interfaces'

function App() {
  const { state, dispatch } = useContext(Store)
  const [newCustomerName, setNewCustomerName] = useState<string>('')
  const [newFeedbackText, setNewFeedbackText] = useState<string>('')

  const hasCustomers = state.customers.length > 0
  const customerHasFeedbacks =
    state.selectedCustomer && state.selectedCustomer.feedback.length > 0

  useEffect(() => {
    fetchCustomers(dispatch)
  }, [dispatch])

  const renderNewCustomerInput = () => (
    <AddItemInput
      testId='add-new-customer-input'
      handleOnBlur={() => hideAddNewCustomerInput(dispatch)}
      handleOnChange={setNewCustomerName}
      handleOnPress={(key) => {
        if (key === KEY_ENTER) {
          saveNewItem(dispatch, newCustomerName, ITEM_CUSTOMER)
        }
      }}
    />
  )

  const renderNewFeedbackInput = () => (
    <AddItemInput
      testId='add-new-feedback-input'
      handleOnBlur={() => hideAddNewFeedbackInput(dispatch)}
      handleOnChange={setNewFeedbackText}
      handleOnPress={(key) => {
        if (key === KEY_ENTER) {
          saveNewItem(dispatch, newFeedbackText, ITEM_FEEDBACK)
        }
      }}
    />
  )

  const renderCustomers = () =>
    state.customers.map((customer: ICustomer) => {
      return (
        <Item
          key={customer.id}
          role='listitem'
          onClick={() => handleOnClickCustomer(dispatch, customer)}
          selected={
            !!(
              state.selectedCustomer &&
              customer.id === state.selectedCustomer.id
            )
          }
        >
          {customer.name}
        </Item>
      )
    })

  const renderFeedbacks = () =>
    state.selectedCustomer?.feedback.map((feedback: IFeedback) => {
      return (
        <Item key={feedback.id} role='listitem'>
          {feedback.text}
        </Item>
      )
    })

  return (
    <div>
      <PageHeader>
        <PageTitle data-testid='page-title'>{PAGE_TITLE}</PageTitle>
      </PageHeader>
      <Container>
        <List
          testId={'customers-list'}
          headlineText={CUSTOMERS_HEADLINE}
          buttonOnClick={useCallback(() => showAddNewCustomerInput(dispatch), [
            dispatch,
          ])}
          buttonTestId='add-new-customer-button'
        >
          <>
            {state.showNewCustomerInput && renderNewCustomerInput()}
            {hasCustomers && renderCustomers()}
            {!hasCustomers && !state.showNewCustomerInput && (
              <InfoText>{INFO_NO_CUSTOMERS_FOUND}</InfoText>
            )}
          </>
        </List>
        <List
          testId={'feedback-list'}
          headlineText={FEEDBACK_HEADLINE}
          buttonOnClick={useCallback(() => showAddNewFeedbackInput(dispatch), [
            dispatch,
          ])}
          isButtonVisible={!!state.selectedCustomer}
        >
          {state.showNewFeedbackInput && renderNewFeedbackInput()}
          {state.selectedCustomer && customerHasFeedbacks && renderFeedbacks()}
          {state.selectedCustomer && !customerHasFeedbacks && (
            <InfoText>{INFO_NO_FEEDBACKS}</InfoText>
          )}
          {!state.selectedCustomer && (
            <InfoText>{INFO_NO_CUSTOMER_SELECTED}</InfoText>
          )}
        </List>
      </Container>
    </div>
  )
}

export default App

const PageHeader = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  padding-left: 5vw;
`

const PageTitle = styled.h1`
  margin: 0;
  padding-left: 16px;
  min-header: 70px;
`

const Container = styled.div`
  height: 90vh;
  padding: 0 5vw;
  display: flex;
  background-color: ${getColor('gray')};
`

const InfoText = styled.p`
  display: flex;
  align-self: center;
  margin: auto 0;
`

const Item = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid ${getColor('gray')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: ${({ selected }: IItem) => selected && getColor('gray')};
`
