import { Dispatch } from 'react'
import { IAction, ICustomer } from './interfaces'
import { customers } from './data/index'

import {
  ACTION_SHOW_NEW_CUSTOMER_INPUT,
  ACTION_HIDE_NEW_CUSTOMER_INPUT,
  ACTION_SHOW_NEW_FEEDBACK_INPUT,
  ACTION_HIDE_NEW_FEEDBACK_INPUT,
  ACTION_SET_SELECTED_CUSTOMER,
  ACTION_ADD_NEW_CUSTOMER,
  ACTION_ADD_NEW_FEEDBACK,
  ITEM_CUSTOMER,
  ACTION_FETCH_CUSTOMERS,
} from './constants'

export const fetchCustomers = (dispatch: Dispatch<IAction>) => {
  dispatch({
    type: ACTION_FETCH_CUSTOMERS,
    payload: customers,
  })
}

export const handleOnClickCustomer = (
  dispatch: Dispatch<IAction>,
  customer: ICustomer
): void => {
  dispatch({
    type: ACTION_SET_SELECTED_CUSTOMER,
    payload: customer,
  })
}

export const saveNewItem = (
  dispatch: Dispatch<IAction>,
  value: string,
  type: string
) => {
  dispatch({
    type:
      type === ITEM_CUSTOMER
        ? ACTION_ADD_NEW_CUSTOMER
        : ACTION_ADD_NEW_FEEDBACK,
    payload: value,
  })
}

export const showAddNewCustomerInput = (dispatch: Dispatch<IAction>): void => {
  dispatch({
    type: ACTION_SHOW_NEW_CUSTOMER_INPUT,
  })
}

export const hideAddNewCustomerInput = (dispatch: Dispatch<IAction>): void => {
  dispatch({
    type: ACTION_HIDE_NEW_CUSTOMER_INPUT,
  })
}

export const showAddNewFeedbackInput = (dispatch: Dispatch<IAction>): void => {
  dispatch({
    type: ACTION_SHOW_NEW_FEEDBACK_INPUT,
  })
}

export const hideAddNewFeedbackInput = (dispatch: Dispatch<IAction>): void => {
  dispatch({
    type: ACTION_HIDE_NEW_FEEDBACK_INPUT,
  })
}
