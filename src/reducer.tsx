import { v4 as uuidv4 } from 'uuid'
import { IState, IAction } from './interfaces'
import {
  ACTION_SHOW_NEW_CUSTOMER_INPUT,
  ACTION_HIDE_NEW_CUSTOMER_INPUT,
  ACTION_SHOW_NEW_FEEDBACK_INPUT,
  ACTION_HIDE_NEW_FEEDBACK_INPUT,
  ACTION_SET_SELECTED_CUSTOMER,
  ACTION_ADD_NEW_CUSTOMER,
  ACTION_ADD_NEW_FEEDBACK,
  ACTION_FETCH_CUSTOMERS,
} from './constants'

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case ACTION_FETCH_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      }
    case ACTION_ADD_NEW_CUSTOMER:
      const customer = {
        id: uuidv4(),
        name: action.payload,
        feedback: [],
      }
      return {
        ...state,
        customers: [customer, ...state.customers],
        showNewCustomerInput: false,
      }
    case ACTION_ADD_NEW_FEEDBACK:
      const newFeedback = {
        id: uuidv4(),
        text: action.payload,
      }

      const elementIndex = state.customers.findIndex(
        (el) => el.id === state.selectedCustomer?.id
      )
      const newCustomers = [...state.customers]
      newCustomers[elementIndex].feedback = [
        newFeedback,
        ...newCustomers[elementIndex].feedback,
      ]

      return {
        ...state,
        customers: newCustomers,
        showNewFeedbackInput: false,
      }
    case ACTION_SHOW_NEW_CUSTOMER_INPUT:
      return {
        ...state,
        showNewCustomerInput: true,
      }
    case ACTION_HIDE_NEW_CUSTOMER_INPUT:
      return {
        ...state,
        showNewCustomerInput: false,
      }
    case ACTION_SHOW_NEW_FEEDBACK_INPUT:
      return {
        ...state,
        showNewFeedbackInput: true,
      }
    case ACTION_HIDE_NEW_FEEDBACK_INPUT:
      return {
        ...state,
        showNewFeedbackInput: false,
      }
    case ACTION_SET_SELECTED_CUSTOMER:
      return {
        ...state,
        selectedCustomer: action.payload,
      }
    default:
      return state
  }
}

export default reducer
