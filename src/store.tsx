import { createContext, Dispatch, useReducer } from 'react'
import { IAction, IState } from './interfaces'
import reducer from './reducer'

const initialState: IState = {
  customers: [],
  showNewCustomerInput: false,
  showNewFeedbackInput: false,
  selectedCustomer: null,
}
export const Store = createContext<{
  state: IState
  dispatch: Dispatch<IAction>
}>({ state: initialState, dispatch: () => null })

export function StoreProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  )
}
