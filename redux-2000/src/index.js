import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import thunk from 'redux-thunk'
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

// IMPORT REDUCERS
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'

// COMBINE REDUCERS
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

// CREATE STORE USING REDUCERS AND INITIAL STATE
const store = createStore(
  allReducers,
  { products: [{ name: 'iPhone' }], user: 'Michael' },
  allStoreEnhancers
)

// AN ACTION (JUST AN OBJECT)
const updateUserAction = {
  type: 'updateUser',
  payload: {
    user: 'John',
    sex: 'Male'
  }
}

// DISPATCH IT TO THE REDUCERS BEING USED BY STORE
store.dispatch(updateUserAction)

ReactDOM.render(
  <Provider store={store}>
    <App aRandomProps="whatever" />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
