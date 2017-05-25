const { createStore, combineReducers } = require('redux')
const products = require('./reducers/products')

const reducer = combineReducers({
  products
})

const store = createStore(
  reducer
)

module.exports = store
