import { ReactNode } from 'react'

export interface ICustomer {
  id: string
  name: string
  feedback: Array<IFeedback>
}
export interface IFeedback {
  id: string
  text: string
}

export interface IState {
  customers: Array<ICustomer>
  selectedCustomer: ICustomer | null
  showNewCustomerInput: boolean
  showNewFeedbackInput: boolean
}

export interface IAction {
  type: string
  payload?: any
}

export interface IList {
  testId: string
  headlineText: string
  buttonOnClick: () => void
  buttonTestId?: string
  isButtonVisible?: boolean
  children: ReactNode
}

export interface IItem {
  selected?: boolean
}
